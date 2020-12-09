//Initialize Swiper
$(document).ready(function () {
var swiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
      },
	navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  	slidesPerView: 1,
  	spaceBetween: 10,
  	// init: false,
  breakpoints: {
	480: {
	  slidesPerView: 2,
	  spaceBetween: 20,
	},
	640: {
	  slidesPerView: 3,
	  spaceBetween: 20,
	},
	768: {
	  slidesPerView: 3,
	  slidesPerColumn: 2,
	  spaceBetween: 20,
	},
	812: {
	  slidesPerView: 3,
	  spaceBetween: 20,
	},
	1024: {
	  slidesPerView: 4,
	  slidesPerColumn: 2,
	  spaceBetween: 20,
	},
	1366: {
	  slidesPerView: 4,
	  spaceBetween: 30,
	},
	1440: {
	  slidesPerView: 4,
	  slidesPerColumn: 2,
	  spaceBetween: 30,
	},
	1504: {
	  slidesPerView: 3,
 	  slidesPerColumn: 3,
	  spaceBetween: 30,
	},
	2256: {
	  slidesPerView: 4,
 	  slidesPerColumn: 2,
	  spaceBetween: 30,
	},
	  
  }
});
});