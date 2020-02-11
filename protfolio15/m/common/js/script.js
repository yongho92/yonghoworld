$(function(){
	
	$('.dia ul li').click(function(){
		$(this).toggleClass('on');
	});

	var wh = $(window).height();
	$('.menu_on, .mBg').css('height',wh);

	//메뉴
	$('header .menu').click(function(){
		$('.menu_on').animate({left:'0'},400);
		$('.mBg').show();
	});

	$('.menu_on .menuT > ul > li').mouseenter(function(){
		$(this).children('ul').stop().slideDown(500);
		$(this).addClass('on');
	});
	$('.menu_on .menuT > ul > li').mouseleave(function(){
		$(this).children('ul').stop().slideUp(500);
		$(this).removeClass('on');
	});
	$('.menu_on .menuT button').click(function(){
		$('.menu_on').animate({left:'-100%'},600);
		$('.mBg').hide();
	});


	//자가진단 결과 팝업
	$('.back').click(function(){
		$('.dia .dia_pop').hide();
//		$('.dia ul li').removeClass('on');
	});

	//메인 비디오 탭
	$('.viewlist ul li').click(function(){
		var tab_id = $(this).attr('data-tab');
		
		$('.viewlist ul li').removeClass('vdoOn');
		$('.t_vdoOn').removeClass('vdoOn');

		$(this).addClass('vdoOn');
		$('#' + tab_id).addClass('vdoOn');
	});

	$('.fchBox3 ul li').click(function(){
		$(this).addClass('on');
		$(this).children('.f_popup').show();
		$('.mBg2').show();
	});

	$('.fchBox3 ul li .f_popup a').click(function(){
		$(this).parent('div').hide();
		$('.mBg2').css('display','none');
		console.log(1);
	});


	//qna
	$('.trueBox2 ul li').click(function() {
		var qna = $(this);
		if(qna.hasClass('on')) {
			qna.removeClass('on');
		} else {
			qna.addClass('on').siblings().each(function(){$(this).removeClass('on');});
		}
		
		$(this).children('p.qnaq').next().slideToggle(300).parent().siblings().children("p.qnaa, ul li").slideUp(300);

		return false;	
	});

	//오해와진실 퀴즈
	$('.trueBox1 ul li button.aw').click(function(){
		$(this).parent('div').siblings('div.truepop').show();
		$('.mBg').show();
	});

	$('.qback, .mBg').click(function(){
		$('.truepop').hide();
		$('.mBg').hide();
	})

	$('.wa').click(function(){
		$(this).parent('div').siblings('div.fpop').show();
		$('.mBg').show();
	});

	$('.trueBox1 .closeP').click(function(){
		$(this).parent('div').hide();
		$('.mBg').hide();
	});


	//메뉴고정
	var menuT = $('header').offset();
	$(window).scroll(function(){
		
		var doTop = $(document).scrollTop();
		var bartihs = $('header')

		if( doTop > menuT.top){
			$('header').addClass('on');	
		}else{
			$('header').removeClass('on');
		}
	});


});

function popupC(obj){
	$('.fchBox3 ul li .f_popup').hide();
	$('.mBg2').hide();
	$('.fchBox3 ul li').removeClass('on');
}
