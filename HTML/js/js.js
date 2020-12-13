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
  	// init: false,
  breakpoints: {
	480: {
	  slidesPerView: 1,
	  spaceBetween: 20,
	},
	640: {
	  slidesPerView: 3,
	  spaceBetween: 20,
	},
	768: {
	  slidesPerView: 2,
	  slidesPerColumn: 2,
	  spaceBetween: 20,
	},
	800: {
	  slidesPerView: 3,
	  slidesPerColumn: 1,
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
var swiper = new Swiper('.modaldsp.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
      },
	navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	slidesPerView: 1,
	slidesPerColumn: 1,
  	// init: false,
  breakpoints: {
	640: {
	  slidesPerView: 2,
	  slidesPerColumn: 1,
	  spaceBetween: 20,
	}, 
  }
});
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})