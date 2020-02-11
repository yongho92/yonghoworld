$(function(){

	//메인
	var mySwiper = new Swiper('.swiper-container',{
	  slidesPerView: 1,
	  loop:true,
	  /*autoplay: {
		delay: 8000,
		disableOnInteraction: false,
	  },*/
	  speed:1300,
	  allowTouchMove:false,
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	  pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
			  return '<strong>0'+'<span class="' + currentClass + '"></span>'+'</strong>' +
					'<span> /</span>'+
					'<span class="total">0'+'<em class="' + totalClass + '"></em>'+'</span>';
			},
	  },
	  on: {
		init: function () {
		  $(".pro_line").stop().animate({width:'100%'},8000);
		},
	  },
	});

	mySwiper.on('transitionEnd', function () {
	 $(".pro_line").stop().animate({width:'100%'},8000);
	});

	mySwiper.on('transitionStart', function () {
	 $(".pro_line").stop().animate({width:'0'},0);
	});

	$('.v_btn').click(function(){
		mySwiper.autoplay.stop();
		 $(".pro_line").stop().animate({width:'0'},500);
		$(this).hide();
		$('.v_btn2').css('display','inline-block');

		return false;
	});
	$('.v_btn2').click(function(){
		mySwiper.autoplay.start();
		 $(".pro_line").stop().animate({width:'100%'},8000);
		$(this).hide();
		$('.v_btn').css('display','inline-block');

		return false;
	});

	$('.v_page .swiper-button-prev, .v_page .swiper-button-next').click(function(){
		$('.v_btn').show();
		$('.v_btn2').hide();
	});
	
	/*$('.visual .vbox, .main_c').css('height',$(window).height()-80);

	$(window).resize(function(){
		$('.visual .vbox, .main_c').css('height',$(window).height()-80);
	});*/


	var wdH = $(window).height();
	if(wdH < 799){
		$('body').css('overflow-y','scroll');
		$('.m_contents div').removeClass('contH');
		$('.m_contents div').removeClass('contH2');
	}

	/*var slideH = $('.visual .v_txt ul').height();
	if(wdH <1024){
		$('.visual .v_page').css('bottom',slideH+182);
	}*/
});