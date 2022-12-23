import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolt, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolt({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(
    form.elements.delay.value,
    form.elements.step.value,
    form.elements.amount.value
  );
  let delayEl = Number(form.elements.delay.value);
  let stepEl = Number(form.elements.step.value);
  let amountEl = Number(form.elements.amount.value);

  for (let i = 1; i <= amountEl; i += 1) {
    createPromise(i, delayEl)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayEl += stepEl;
  }
});
