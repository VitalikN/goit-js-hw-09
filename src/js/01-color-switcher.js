const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

stopBtn.setAttribute('disabled', 'true');

startBtn.addEventListener('click', () => {
  changeСolor.onStartBtn();
});
stopBtn.addEventListener('click', () => {
  changeСolor.onStopBtn();
});

const changeСolor = {
  intervald: null,

  onStartBtn() {
    startBtn.setAttribute('disabled', 'true');
    stopBtn.removeAttribute('disabled');

    this.intervald = setInterval(() => {
      getRandomHexColor();
      const newColor = getRandomHexColor();

      body.style.backgroundColor = newColor;
    }, 1000);
    console.log(`start`);
  },

  onStopBtn() {
    clearInterval(this.intervald);
    stopBtn.setAttribute('disabled', 'true');
    startBtn.removeAttribute('disabled');
    console.log(`stop`);
  },
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
