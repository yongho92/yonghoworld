$(document).ready(function(){


	//����� �޴�
	$('.m_menu .more').click(function(){
		$('.head .m_menu .m_gnb').animate({right:0},500);
	});

	$('.g_top button').click(function(){
		$('.head .m_menu .m_gnb').animate({right:'-100%'},500);
	});

	
	//����� ��Ӵٿ� �޴�
	$('.m_menubox ul li ul').hide();
	$('.g_bot > ul > li > a').click(function(){
		$(this).addClass('on');
		$(this).siblings('ul').slideToggle(300);
		$('.g_bot ul li a').not(this).siblings('ul').slideUp(300);
		$('.g_bot ul li a').not(this).removeClass('on');
		
	});

	//�ٱ���������
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


	//Ǫ�� �йи�����Ʈ
	$('.family button').mouseenter(function(){
		$(this).siblings('ul').show();
	});
	$('.family').mouseleave(function(){
		$(this).children('ul').hide();
	});

	$('.onload').click(function() {
		location.reload();
	});


});