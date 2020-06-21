let openClick11 = document.querySelector("#openClick11");
let openClick12 = document.querySelector("#openClick12");
let openClick13 = document.querySelector('#openClick13');
let close = document.querySelector('#close');
let popupWindow = document.querySelector('.popup');
let send = document.querySelector('#send');
let popupWindow2 = document.querySelector('.popup2');
let close2 = document.querySelector('#close2');
let close22 = document.querySelector('#close22');

openClick11.onclick = function() {
  popupWindow.classList.remove('hidden');
  };
openClick12.onclick = function() {
  popupWindow.classList.remove('hidden');
  };
openClick13.onclick = function() {
   popupWindow.classList.remove('hidden');
  };
close.onclick = function() {
  popupWindow.classList.add('hidden');
}
addEventListener("keydown", function(event) {
  if (event.keyCode === 27)
    popupWindow.classList.add('hidden');
    popupWindow2.classList.add('hidden');
  });
send.onsubmit = function() {
  popupWindow.classList.add('hidden');
  popupWindow2.classList.remove('hidden');
}
close2.onclick = function() {
  popupWindow2.classList.add('hidden');
}
close22.onclick = function() {
  popupWindow2.classList.add('hidden');
}