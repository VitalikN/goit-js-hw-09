// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
//

const datetimePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

btnStart.setAttribute('disabled', 'true');
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);

    if (selectedDates[0] - new Date() > 1000) {
      btnStart.removeAttribute('disabled');
      btnStart.addEventListener(
        'click',
        () => {
          onBtnStart(selectedDates[0]);
        },
        { once: true }
      );
    } else {
      Notify.warning('Please choose a date in the future');
    }
  },
};

flatpickr(datetimePicker, options);

function onBtnStart(selectedDates) {
  timerId = setInterval(() => {
    const currentTimeEnd = selectedDates - new Date();
    const time = convertMs(currentTimeEnd);
    dataDays.textContent = addLeadingZero(time.days);
    dataHours.textContent = addLeadingZero(time.hours);
    dataMinutes.textContent = addLeadingZero(time.minutes);
    dataSeconds.textContent = addLeadingZero(time.seconds);
    btnStart.setAttribute('disabled', 'true');
    if (currentTimeEnd < 1000) {
      clearInterval(timerId);
    }
  }, 1000);
}
function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
