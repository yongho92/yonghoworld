$(document).ready(function(){

	//다국어페이지
	$('.head .lang ul').mouseenter(function(){
		$('.head .lang ul li').eq(1).children('a').css('display','block');
	});
	$('.head .lang ul').mouseleave(function(){
		$('.head .lang ul li').eq(1).children('a').css('display','none');
	});

	$('.scroll button').click(function(){
		$('body, html').animate({scrollTop:$(window).height()});
	});


	//LNB
	$('.menu ul li').mouseenter(function(){
		if($(window).width() > 1024){
			$(this).parent('ul').parent('.menu').parent('.head').parent('#header').animate({height:'284px'},300);
		}
	});
	$('#header').mouseleave(function(){
		if($(window).width() > 1024){
			$(this).animate({height:'90px'},300);
		}
	});

	//location
	$('.dep').mouseenter(function(){
		$(this).children('a').addClass('on');
		$(this).children('ul').slideDown(200);
	});
	$('.dep').mouseleave(function(){
		$(this).children('a').removeClass('on');
		$(this).children('ul').slideUp(200);
	});
	$('.dep').click(function(){
		$(this).children('a').toggleClass('on');
		$(this).children('ul').slideToggle(200);
	});


	//푸터 패밀리사이트
	$('.family button').mouseenter(function(){
		$(this).siblings('ul').show();
	});
	$('.family').mouseleave(function(){
		$(this).children('ul').hide();
	});


	 var swiper = new Swiper('.sol_slide', {
	  slidesPerView: 5,
	  speed:300,
	  //effect:'fade',
	  centeredSlides: true,
	  loop:true,
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
      simulateTouch:false,
	  allowTouchMove:false,
	   breakpoints: {
		1024: {
		  slidesPerView: 5,
	      spaceBetween: 20,
		}
	  },

	});

	  var swiper = new Swiper('.pc_slide', {
	  spaceBetween: 40,
	  slidesPerView: 4,
	  freeMode: true,
	  loop:true,
	  watchSlidesVisibility: true,
	  watchSlidesProgress: true,
	  centeredSlides:true,
	  navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	  },
	  allowTouchMove:false,
	   breakpoints: {
		1024: {
		  slidesPerView: 3,
		}
	  },
	});

	$('.pc_slide .swiper-slide-active img:last').clone().appendTo($('.sol_page1'));
	$('.pc_slide .swiper-slide-active p').clone().appendTo($('.ch_txt'));
	$('.h_btn1').click(function(){
		$('.pc_slide .swiper-slide-active img:last').clone().appendTo($('.sol_page1'));
		$(this).siblings('img:first').remove();
		$('.pc_slide .swiper-slide-active p').clone().appendTo($('.ch_txt'));
		$('.ch_txt p:first').remove();
	});

	$('.sol_slide .swiper-slide-active img:last').clone().appendTo($('.sol_page2'));

	$('.moblie .swiper-slide-active p').clone().appendTo($('.ch_txt2'));
	$('.h_btn').click(function(){
		$('.sol_slide .swiper-slide-active img:last').clone().appendTo($('.sol_page2'));
		$(this).siblings('img:first').remove();
		$('.moblie .swiper-slide-active p').clone().appendTo($('.ch_txt2'));
		$('.ch_txt2 p:first').remove();
	});

	$('.pc_tab li a').click(function(){
		$('.pc_tab li a').removeClass('on');
		$(this).addClass('on');
	});

	$('.moblie').fadeOut();
	$('.pc_c').click(function(){
		$('.pc').fadeIn().show();
		$('.moblie').fadeOut().hide();

		return false
	});
	$('.mob_c').click(function(){
		$('.pc').fadeOut().hide();
		$('.moblie').fadeIn().show();

		return false
	});

});