// JavaScript Document

//Initialize Swiper
$(document).ready(function () {
var swiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
      },
  	slidesPerView: 1,
  	spaceBetween: 10,
  	// init: false,
  breakpoints: {
	640: {
	  slidesPerView: 2,
	  spaceBetween: 20,
	},
	768: {
	  slidesPerView: 2,
	  spaceBetween: 30,
	},
	1024: {
	  slidesPerView: 3,
	  spaceBetween: 30,
	},
  }
});
});