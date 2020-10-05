//выезжание бургер меню
var burgerIcon = document.querySelector('.burgerIcon');
var burgerMenu = document.querySelector('.burgerMenu');
if (burgerIcon != null) { 
  burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('responsive');
  });
}

//изменение значка бургер меню
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
  // followFinger: false,
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
  // followFinger: false,
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
    followFinger: false,
  },
  // followFinger: false,
  touchMoveStopPropagation: true,
}); 

resize sliders fix
window.addEventListener(`resize`, event => {
  swiperBackground.update(true);
  swiperLeft.update(true);
  swiperRight.update(true);
}, false);

window.onresize = function( event ) {
  console.log("updated");
};


// if (window.DeviceOrientationEvent) {
//   // window.addEventListener('orientationchange', function() { location.reload(); }, false);
//   window.addEventListener('orientationchange', function() { 
//     location.reload(); 
//     // swiperBackground.resizeFix();
//     // swiperLeft.resizeFix();
//     // swiperRight.resizeFix();
//   }, false);
// }

//popups:
//popupCall
var popupCall = document.querySelector(".popupCall");
var openPopupCall1 = document.querySelector('.openPopupCall1');
var openPopupCall2 = document.querySelector('.openPopupCall2');
var openPopupCall3 = document.querySelector('.openPopupCall3');
if (openPopupCall1 != null) {
  openPopupCall1.onclick = function(event) {
    event.preventDefault();
    popupCall.style.visibility="visible";
  }
}
if (openPopupCall2 != null) {
  openPopupCall2.onclick = function(event) {
    event.preventDefault();
    popupCall.style.visibility="visible";
    // popupConfirm.visibility="visible";  
  }
}
if (openPopupCall3!=null){
  openPopupCall3.onclick = function(event) {
    event.preventDefault();
    popupCall.style.visibility="visible";
  }
} 
var closePopupCall = document.querySelector(".closePopupCall");
if (closePopupCall!=null) {
  closePopupCall.onclick = function(event) {
    event.preventDefault();
    popupCall.style.visibility="hidden";
  }
}
var sendPopupCall = document.querySelector(".sendPopupCall");
//popupConfirm
var popupConfirm = document.querySelector(".popupConfirm");
if (sendPopupCall !=null) {
  sendPopupCall.onsubmit = function(event) {
    event.preventDefault();
    popupCall.style.visibility="hidden";
    popupConfirm.style.visibility="visible";    
  }
}
var closePopupConfirm1 = document.querySelector(".closePopupConfirm1");
if (closePopupConfirm1 != null) {
  closePopupConfirm1.onclick = function(event) {
    event.preventDefault();
    popupConfirm.style.visibility="hidden";
  }
}
var closePopupConfirm2 = document.querySelector(".closePopupConfirm2");
if (closePopupConfirm2 != null) {
  closePopupConfirm2.onclick = function(event) {
    event.preventDefault();
    popupConfirm.style.visibility="hidden";
  }
}
//popupBrif
var popupBrif = document.querySelector(".popupBrif");
var openPopupBrif1 = document.querySelector(".openPopupBrif1");
if (openPopupBrif1 != null) {
  openPopupBrif1.onclick = function(event) {
    event.preventDefault();
    popupBrif.style.visibility="visible";
  }
}
var openPopupBrif2 = document.querySelector(".openPopupBrif2");
if (openPopupBrif2 != null) {
  openPopupBrif2.onclick = function(event) {
    event.preventDefault();
    popupBrif.style.visibility="visible";
  }
}
var closePopupBrif1 = document.querySelector(".closePopupBrif1");
if (closePopupBrif1 != null) {
  closePopupBrif1.onclick = function(event) {
    event.preventDefault();
    popupBrif.style.visibility="hidden";
  }
}
var closePopupBrif2 = document.querySelector(".closePopupBrif2");
if (closePopupBrif2 != null) {
  closePopupBrif2.onclick = function(event) {
    event.preventDefault();
    popupBrif.style.visibility="hidden";
  }
}


//for all popups
addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    popupCall.style.visibility="hidden";
    popupConfirm.style.visibility="hidden";
    popupBrif.style.visibility="hidden";
  }
})





