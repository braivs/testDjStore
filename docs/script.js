let popup1 = document.querySelector("#open1");
let popup2 = document.querySelector("#open2");
let popup3 = document.querySelector('#open3');
let close = document.querySelector('#close');
let popupWindow = document.querySelector('.popup');
let send = document.querySelector('#send');
let popupWindow2 = document.querySelector('.popup2');
let close2 = document.querySelector('#close2');
let close22 = document.querySelector('#close22');

popup1.onclick = function() {
  popupWindow.classList.remove('hidden');
  };
popup2.onclick = function() {
  popupWindow.classList.remove('hidden');
  };
popup3.onclick = function() {
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
send.onclick = function() {
  popupWindow.classList.add('hidden');
  popupWindow2.classList.remove('hidden');
}
close2.onclick = function() {
  popupWindow2.classList.add('hidden');
}
close22.onclick = function() {
  popupWindow2.classList.add('hidden');
}