let openClick11 = document.querySelector("#openClick11"); //popup1 
let openClick12 = document.querySelector("#openClick12"); //popup1
let openClick13 = document.querySelector('#openClick13'); //popup1
let openClick31 = document.querySelector("#openClick31"); //popup2
let openClick32 = document.querySelector("#openClick32"); //popup2

let close = document.querySelector('#close'); //закрытие обратный вызов
let popupWindow1 = document.querySelector('#popupWindow1'); //Обратный звонок попап
let send = document.querySelector('#send');
let popupWindow2 = document.querySelector('#popupWindow2'); //Заявка успешно отправлена попап
let close2 = document.querySelector('#close2'); //закрытие заявка успешно отправлена крестик
let close22 = document.querySelector('#close22'); //закрытие заявка успешно отправлена Ок
let close3 = document.querySelector("#close3"); //закрытие попапа колонки
let popupWindow3 = document.querySelector("#popupWindow3"); //попап на колонке

openClick11.onclick = function(event) {
  event.preventDefault();
  popupWindow1.classList.remove('hidden');
  } //popup1
openClick12.onclick = function(event) {
  event.preventDefault();
  popupWindow1.classList.remove('hidden');
  } //popup1
openClick13.onclick = function(event) {
  event.preventDefault();
  popupWindow1.classList.remove('hidden');
  } //popup1
openClick31.onclick = function(event) {
  event.preventDefault();
  popupWindow3.style.visibility="visible";
} //popup3
openClick32.onclick = function(event) {
  event.preventDefault();
  popupWindow3.style.visibility="visible";
} //popup3


close.onclick = function(event) {
  event.preventDefault();
  popupWindow1.classList.add('hidden');
}
addEventListener("keydown", function(event) {
  if (event.keyCode === 27)
    popupWindow1.classList.add('hidden');
    popupWindow2.classList.add('hidden');
    popupWindow3.style.visibility="hidden";
  })
send.onsubmit = function(event) {
  event.preventDefault();
  popupWindow1.classList.add('hidden');
  popupWindow2.classList.remove('hidden');
}
close2.onclick = function(event) {
  event.preventDefault();
  popupWindow2.classList.add('hidden');
} //закрытие обратный вызов
close22.onclick = function(event) {
  event.preventDefault();
  popupWindow2.classList.add('hidden');
}
close3.onclick = function(event) {
  event.preventDefault();
  popupWindow3.style.visibility="hidden";
}

var mySwiper = new Swiper ('.swiper-container', {
  slidesPerView: 'auto',
  direction: 'horizontal',
  loop: true,
  // centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})