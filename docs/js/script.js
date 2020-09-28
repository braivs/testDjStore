//выезжание бургер меню
var burgerIcon = document.querySelector('.burgerIcon');
var burgerMenu = document.querySelector('.burgerMenu');
burgerIcon.addEventListener('click', () => {
  burgerMenu.classList.toggle('responsive');
});

//измение значка бургер меню
var burgerIconSymbol = document.querySelector('.burgerIconSymbol');
function changeIcon() {
  if (burgerIconSymbol.innerHTML === '☰') {
    burgerIconSymbol.innerHTML = "✕";
  } else {
    burgerIconSymbol.innerHTML = "☰";
  }
}

//sliders:
var nx = document.getElementsByClassName("swiper-next")[0];
var pr = document.getElementsByClassName("swiper-prev")[0];
var swiperBackground = new Swiper('.sliderBackground', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  allowTouchMove: false,
  navigation: {
    nextEl: nx,
    prevEl: pr,
  },
  loop: true,
  breakpoints: {
    279: {
      loopAdditionalSlides: false,
    },
    768: {
      loopAdditionalSlides: true,
    }
  },
});
var swiperLeft = new Swiper('.sliderLeft', {
  navigation: {
    nextEl: nx,
    prevEl: pr,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  allowTouchMove: false,
  controller: {
    control: swiperBackground,
  },
  breakpoints: {
    279: {
      loopAdditionalSlides: false,
    },
    768: {
      loopAdditionalSlides: true,
    }
  },
});
var swiperRight = new Swiper('.sliderRight', {
  navigation: {
    nextEl: nx,
    prevEl: pr,
  },
  loop: true,
  breakpoints: {
    279: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  },
  controller: {
    control: swiperLeft,
  },
});


//всплывающие окна
var openClick11 = document.querySelector("#openClick11"); //popup1 
var openClick12 = document.querySelector("#openClick12"); //popup1
var openClick13 = document.querySelector('#openClick13'); //popup1
var openClick31 = document.querySelector("#openClick31"); //popup2
var openClick32 = document.querySelector("#openClick32"); //popup2

var close = document.querySelector('#close'); //закрытие обратный вызов
var popupWindow1 = document.querySelector('#popupWindow1'); //Обратный звонок попап
var send = document.querySelector('#send');
var popupWindow2 = document.querySelector('#popupWindow2'); //Заявка успешно отправлена попап
var close2 = document.querySelector('#close2'); //закрытие заявка успешно отправлена крестик
var close22 = document.querySelector('#close22'); //закрытие заявка успешно отправлена Ок
var close3 = document.querySelector("#close3"); //закрытие попапа колонки
var popupWindow3 = document.querySelector("#popupWindow3"); //попап на колонке

openClick11.onclick = function(event) {
  event.preventDefault();
  popupWindow1.classList.remove('hidden');
  } //popup1
openClick12.onclick = function(event) {
  event.preventDefault();
  popupWindow1.classList.remove('hidden');
  } //popup1
// openClick13.onclick = function(event) {
//   event.preventDefault();
//   popupWindow1.classList.remove('hidden');
//   } //popup1
// openClick31.onclick = function(event) {
//   event.preventDefault();
//   popupWindow3.style.visibility="visible";
// } //popup3
// openClick32.onclick = function(event) {
//   event.preventDefault();
//   popupWindow3.style.visibility="visible";
// } //popup3


// close.onclick = function(event) {
//   event.preventDefault();
//   popupWindow1.classList.add('hidden');
// }
addEventListener("keydown", function(event) {
  if (event.keyCode === 27)
    popupWindow1.classList.add('hidden');
    popupWindow2.classList.add('hidden');
    popupWindow3.style.visibility="hidden";
  })
// send.onsubmit = function(event) {
//   event.preventDefault();
//   popupWindow1.classList.add('hidden');
//   popupWindow2.classList.remove('hidden');
// }
// close2.onclick = function(event) {
//   event.preventDefault();
//   popupWindow2.classList.add('hidden');
// } //закрытие обратный вызов
// close22.onclick = function(event) {
//   event.preventDefault();
//   popupWindow2.classList.add('hidden');
// }
// close3.onclick = function(event) {
//   event.preventDefault();
//   popupWindow3.style.visibility="hidden";
// }


