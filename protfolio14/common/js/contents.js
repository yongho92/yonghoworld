$(function(){

	//location
	if($(window).width() > 1024){
		$('.s_menu > div > ul > li').mouseenter(function(){
			$(this).addClass('on');
			$(this).children('ul').slideDown(200);
			$(this).children('a.on').addClass('on2');
		});
		$('.s_menu > div > ul > li').mouseleave(function(){
			$(this).removeClass('on');
			$(this).children('ul').slideUp(200);
			$(this).children('a.on').removeClass('on2');
		});
	}else if($(window).width() < 1024){
		$('.s_menu > div > ul > li').click(function(){
			$(this).toggleClass('on');
			$(this).children('ul').slideToggle(200);
			$(this).children('a.on').toggleClass('on2');
		});
	}


	//펀드상품 일자 검색
	$('.f_view .view_box3 p button').click(function(){
		$('.fund_popup').show();
	});

	$('.fund_popup .f_popbox .close').click(function(){
		$('.fund_popup').hide();
	});
});
