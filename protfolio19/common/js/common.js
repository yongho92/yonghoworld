$(function(){

	$('.header > .menu > ul').mouseenter(function(){
		$('header').animate({height:'360px'},200).addClass('on');
	});

	$('header').mouseleave(function(){
		$(this).animate({height:'110px'},200);
		$('.header > .menu > ul > li > a').removeClass('on');
		setTimeout(function(){
			$('header').removeClass('on');
		},228);
	});

	$('.header > .menu > ul > li > a').hover(function(){
		$('.header > .menu > ul > li > a').removeClass('on');
		$(this).addClass('on');
	});

	$('.header .lang ul').hover(function(){
		$(this).css('height','60px');
	},function(){
		$(this).css('height','25px');
	});
	
	//모바일 메뉴
	$('.m_menu > ul > li').click(function(){
		$(this).find('span').toggleClass('on');
		$(this).children('ul').slideToggle(300);
		$('.m_menu > ul > li').not(this).children('ul').slideUp(300);
		$('.m_menu > ul > li').not(this).find('span').removeClass('on');
	});
	
	$('.a_menu .web').click(function(){
		$('header').animate({height:'360px'},200).addClass('on');
	});
	$('.a_menu .close').hide();
	$('.a_menu .menub').click(function(){
		$('header').addClass('on2');
		$('.m_menu').animate({right:'0'},500);
		$('.bg').show();
		$(this).hide();
		$('.a_menu .close').show();
		$('html, body').css('overflow-y','hidden');
	});
	$('.a_menu .close').click(function(){
		$('header').removeClass('on2');
		$('.a_menu .menub').show();
		$(this).hide();
		$('.bg').hide();
		$('.m_menu').animate({right:'-100%'},500);
		$('html, body').css('overflow-y','visible');
	});
});