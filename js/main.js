var showBigImage = document.querySelector('.displayimage');
var screenshotFull = document.querySelector('.screenshot-full');
var closeButton = document.querySelector('.closebtn');
showBigImage.addEventListener("click", function() {
  screenshotFull.classList.remove('hidden');
}, false);

closeButton.addEventListener("click", function() {
  screenshotFull.classList.add('hidden');
}, false);