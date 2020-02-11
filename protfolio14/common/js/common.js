$(function(){

	/*헤더*/
	if($(window).width() > 1024){
		$('.gnb > ul > li').hover(function(){
			$(this).children('a').addClass('on');
		},function(){
			$(this).children('a').removeClass('on');
		});

		$('.gnb').mouseenter(function(){
			$(this).parent('header').addClass('on');
			$(this).parent('header').animate({height:'250px'},300);
			$(this).children('ul > li').addClass('on');
		});
		$('header').mouseleave(function(){
			$(this).animate({height:'80px'},300);
			$(this).removeClass('on');
		});

		$('.gnb.on > ul > li').hover(function(){
			$('.depth2:first',this).slideDown(300);
			$(this).children('a').removeClass('on');
		},function(){
			$('.depth2:first',this).slideDown(300);
			$(this).children('a').removeClass('on');
		});	
	}
	
	$('.menu_s').click(function(){
		if($(window).width() > 1025){
			$(this).addClass('close');
			$(this).removeClass('menu_s');
			$('header').toggleClass('on');
			$('.gnb').toggleClass('on');
			$('.gnb > ul > li > .depth2').toggleClass('on');
			$('header').find("img").attr('src', function(index, attr){
				if(attr.match('_on')){
					return attr.replace("_on.png", ".png");
				}else{
					return attr.replace(".png", "_on.png");
				}
			});
		}else if($(window).width() < 1024){
			$('.close2').delay(600).fadeIn();
			$('header .m_menu').animate({right:'0'},300);
			$(this).removeClass('menu_s');
			$('.all_menu').find("img").attr('src', function(index, attr){
				if(attr.match('_on')){
					return attr.replace("_on.png", ".png");
				}else{
					return attr.replace(".png", "_on.png");
				}
			});
		}
		$('html, body').css('overflow-y','hidden');
	});

	$('.close2').click(function(){
		$('.close2').delay(100).fadeOut();
		$('header .m_menu').animate({right:'-100%'},300);
		$('.all_menu').find("img").attr('src', function(index, attr){
			if(attr.match('_on')){
				return attr.replace("_on.png", ".png");
			}else{
				return attr.replace(".png", "_on.png");
			}
		});
		$('html, body').css('overflow-y','visible');
	});

	//모바일 메뉴
	$('.m_2d').hide();
	$('header .m_menu .m_1d li').click(function(){
		$(this).find('span').toggleClass('on');
		$(this).children('ul').slideToggle(300);
		$('header .m_menu .m_1d li').not(this).children('ul').slideUp(300);
		$('header .m_menu .m_1d li').not(this).find('span').removeClass('on');
	});

	//푸터 팝업
	$('.popup a').click(function(){
		$('.popup, .bg').hide();
	});

});

function popup(pop){
	$('.popup1, .bg').show();
}

function popup2(pop){
	$('.popup2, .bg').show();
}

function popup3(pop){
	$('.popup3, .bg').show();
}