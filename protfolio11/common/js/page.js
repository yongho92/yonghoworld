$(document).ready(function(){
	//퀵메뉴 슬라이드
	var swiper = new Swiper('.swiper-container3', {
	   effect: 'fade',
	   loop:true,
	  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	  autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	  },
	});

});