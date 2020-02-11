$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
      centeredSlides: true,
	  speed: 900,
	  loop:true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.visual-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.visual-button-next',
        prevEl: '.visual-button-prev',
      },
    });


    var swiper = new Swiper('.swiper-container2', {
      centeredSlides: true,
	   loop:true,
       navigation: {
        nextEl: '.f-button-next',
        prevEl: '.f-button-prev',
       },
	  allowTouchMove:false,
	  slidesPerView: 7,
			 spaceBetween: 20,
    });

    var swiper2 = new Swiper('.swiper-container3', {
      centeredSlides: true,
	  speed: 900,
	  loop:true,
      pagination: {
        el: '.best-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.best-button-next',
        prevEl: '.best-button-prev',
      },
	  allowTouchMove:false,
    });

	$(".best-button-next").on("click", function(){
      var $target = $(".bestl ul li");
      var onIdx =$(".bestl ul li.on").index();
      onIdx++;
      
      if(onIdx >= $target.length) onIdx = 0;

      $target.removeClass("on").eq(onIdx).addClass("on");
    });

	$(".best-button-prev").on("click", function(){
      var $target = $(".bestl ul li");
      var onIdx =$(".bestl ul li.on").index();
      onIdx--;
      if(onIdx < 0) onIdx = $target.length-1;

      $target.removeClass("on").eq(onIdx).addClass("on");
    });

	$('.swiper-container2 .swiper-slide').removeClass('on');	
	$('.swiper-container2 .swiper-slide').removeClass('on2');	
	$('.swiper-container2 .swiper-slide-active').prev().prev().addClass('on');
	$('.swiper-container2 .swiper-slide-active').prev().prev().prev().addClass('on2');
	$('.swiper-container2 .swiper-slide-active').next().next().addClass('on');
	$('.swiper-container2 .swiper-slide-active').next().next().next().addClass('on2');
	
	$('.f-button-next').click(function(){
	$('.swiper-container2 .swiper-slide-active').prev().prev().addClass('on');
		$('.swiper-container2 .swiper-slide-active').prev().prev().prev().addClass('on2');
		$('.swiper-container2 .swiper-slide-active').next().next().addClass('on');
		$('.swiper-container2 .swiper-slide-active').next().next().next().addClass('on2');		
	});
});