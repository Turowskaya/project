// var eye = document.querySelector('.work__img:hover');
//
// eye.addEventListener('click', function ( eye.background = "../img/work/look.png";) {
//    // eye.background = "../img/work/look.png";
// });

var parentEl = document.querySelector('.work__img:hover'),

img = document.createElement("img");

img.src = "../img/work/look.png";

parentEl.appendChild(img);
