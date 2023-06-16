//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
const audio = new Audio();

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    const sound = this.dataset.sound;
    audio.src = `sounds/${sound}`;
    audio.play();
  });
});

stopButton.addEventListener('click', function () {
  audio.pause();
  audio.currentTime = 0;
});
