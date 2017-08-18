let showBigImage = document.querySelector('.displayimage');
let screenshotFull = document.querySelector('.screenshot-full');
let closeButton = document.querySelector('.closebtn');

showBigImage.addEventListener("click", function() {
  if (screenshotFull.classList.contains('hidden')) {
    screenshotFull.classList.remove('hidden');
  } else {
    screenshotFull.classList.add('hidden');
  }
}, false);

closeButton.addEventListener("click", function() {
  screenshotFull.classList.add('hidden');
}, false);