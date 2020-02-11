$(function(){
	var bodyOffset = jQuery('body').offset();
	jQuery(window).scroll(function() {
		if (jQuery(document).scrollTop() > bodyOffset.top) {
			jQuery('#header').addClass('on1');
		} else {
			jQuery('#header').removeClass('on1');
		}
	});

	//메뉴
	/*$('.menu').mouseenter(function(){
		$(this).parent('div').parent('div').animate({height:'200px'},5);
		$('#header').addClass('on2');
		//$('.h_menu').delay(10).fadeIn();
	});
	$('#header').mouseleave(function(){
		$(this).animate({height:'100px'},1).removeClass('on2');
		//$('.h_menu').delay(50).fadeOut();
		mouse_over = setTimeout(function(){
			$('.h_menu').hide();
		},100);
		$(this).removeClass('on3');
		$('.slp_search').fadeOut();
	});

	$('.menu > ul > li').mouseenter(function(){
		var thism = this;
		clearTimeout(mouse_over);
		$('.h_menu').hide();
		$('.h_menu'+($(this).index()+1)).show();
		console.log(mouse_over);
	});

	var mouse_over = "";


	$('.head .menu > ul > li > a').mouseenter(function(){
		$('.head .menu > ul > li > a').removeClass('on');
		setTimeout(function(){
			$(this).delay(300).addClass('on');
		},500);
		
	});

	//검색버튼
	$('.head_r ul .icon1').click(function(){
		$(this).parent('ul').parent('div').parent('div').parent('div').animate({height:'250px'},5).addClass('on3');
		$('.slp_search').delay(220).fadeIn();
	});
	$('.slp_search .select_box > span').click(function(){
		$(this).siblings('ul').animate({height:'200px'},2000);
	});*/

	//메뉴
	$('#header').mouseleave(function(){
		$('.menu > ul > li > a').removeClass('on');
		$(this).removeClass('on');
		$(this).removeClass('on3');
		mouse_over = setTimeout(function(){
			$('.h_menu').hide();
			$('.allmenu').hide();
		},1);
	});

	$('.menu > ul > li').mouseenter(function(){
		$('#header').addClass('on');
		$('.menu > ul > li > a').removeClass('on');
		$(this).children('a').addClass('on');
		var mouse_over = "";
		var thism = this;
		clearTimeout(mouse_over);
		$('.h_menu').hide();
		$('.h_menu'+($(this).index()+1)).show();
		console.log(mouse_over);
	});


	//학당안내
	$('.head_r ul .icon1').click(function(){
		$(this).parent('ul').parent('div').parent('div').parent('div').addClass('on2');
		$('.slp_search').delay(80).fadeIn();
		$('.h_menu').hide();
		$('.allmenu').hide();
		$('#header').removeClass('on');
		$('#header').removeClass('on3');
	});

	$('.sclose').click(function(){
		$('#header').removeClass('on2');
		$('.slp_search').hide();
	});

	$('.slp_search .select_box1 > span').click(function(){
		$(this).siblings('ul').toggleClass('on');
	});

	$('.slp_search .select_box1 ul li').click(function(){
		var t_txt = $(this).text()
		$(this).parent('ul').siblings('span').text(t_txt);
		$(this).parent('ul').removeClass('on');

		if($('.slp_search .select_box1 ul li').click){
			$('.slp_search .select_box2 > span').on('click', function(){
				$(this).siblings('ul').toggleClass('on');
			});
		}else{
			$('.select_box2').off('click');
		}

	});

	//전체메뉴
	$('.head_r ul .icon2').click(function(){
		$(this).parent('ul').parent('div').parent('div').parent('div').addClass('on3');
		$('.allmenu').delay(80).fadeIn();
		$('.h_menu').hide();
		$('.slp_search').hide();
		$('#header').removeClass('on2');
	});

	//탑버튼
	$('.top').click(function(){
		$('html, body').animate({
			scrollTop : 0
		}, 400)
		return false;
	});


	//메뉴
	$('.m_menubox ul li ul').hide();
	$('.m_menubox > ul > li > a').click(function(){
		$('.m_menubox > ul > li > a').removeClass('on');
		$(this).addClass('on');
		$(this).siblings('ul').slideToggle(300);
		$('.m_menubox ul li a').not(this).siblings('ul').slideUp(300);
		$('.m_menubox ul li a').not(this).removeClass('on');
		
	});

	$('.m_menu').click(function(){
		$('.m_menubox').animate({left:'0'},500);
		$('.m_bg').show();
		$('#header').addClass('bg');
		$('#header').removeClass('on2');
		$('.slp_search').hide();
	});

	$('.m_close').click(function(){
		$('.m_menubox').animate({left:'-100%'},500);
		$('.m_bg').hide();
		$('#header').removeClass('bg');
	});

	//관련사이트
	$('.family button').click(function(){
		$(this).siblings('ul').slideToggle().show();
	});

	//서브메뉴
	$('.s_depth1 li .on').click(function(){
		$(this).siblings('ul').slideToggle(500);
	});

	//셀렉트
	$('.ap_set span').click(function(){
		$(this).siblings('ul').slideToggle(300);
	});
	$('.ap_set ul li').click(function(){
		var t_txt = $(this).text()
		$(this).parent('ul').siblings('span').text(t_txt);
		$(this).parent('ul').slideUp(300);
	});

});