$(document).ready(function(){
	/*main 191022*/
	$('.pageBx > ul > li > .tit').mouseenter(function(){
		$('.pageBx ul li ul').stop().slideUp(400);
		$(this).siblings('ul').stop().slideDown(400);
		$('.pageBx.on > ul > li > img:last').stop().hide();
		$('.pageBx.on > ul > li > img.on7').stop().show();
	});

	$('.pageBx > ul > li:last > img').mouseenter(function(){
		$('.pageBx.on > ul > li > img:last').stop().show();
		$('.pageBx.on > ul > li > img.on7').stop().hide();
	});

	$('.pageBx > ul > li:last > ul > li > img').click(function(){
		$('.pageBx > ul > li:last > img').hide();
		$(this).parent('li').parent('ul').siblings('.on8').show();
	});

	$('.pageBx > ul > li > ul > li').hover(function(){
		$('.pageBx > ul > li > ul > li').removeClass('on');
		$(this).addClass('on');
	});

	$('.pageBx > ul > li > ul > li').click(function(e){
		e.preventDefault()
		$(this).parents('.pageBx').animate({width:'50%', right:'30%', padding:'0 0 0 12%'},450).addClass('on');
		$('.quizbx .viewBx').animate({right:'0'},500);
		$('.quizbx').addClass('on');
		$('.pageBx > ul > li > ul > li').removeClass('on');
		$(this).addClass('on');
	});

	$('.tableBx .tit').click(function(e){
		$(this).parent('ul').parent('div').parent('div').animate({width:'730px', right:'50%'},250).addClass('on');
		$('.viewBx').animate({right:'0'},500);
	});

	$('[id^="view"]').on('click', function(e) {
		e.preventDefault();
		$('.viewBx > div').removeClass('on');
		$('.'+ this.id).addClass('on');
	});
	
	$('.header .btn_menu').click(function(){
		$('.menu').show();
	});

	$('.menu button').click(function(){
		$(this).parent('div').hide();
	});

	$('.s3Box > a').click(function(e){
		e.preventDefault()
		$('.index_sec03 .wrap3').css('width','100%');
		$(this).parent('div').parent('div').animate({width:'50%', right:'30%', padding:'0 0 0 12%'},450).addClass('on');
		$('.index_sec03 .viewBx').animate({right:'0'},500);
		$('.s3Box > a').removeClass('on');
		$(this).addClass('on');
		$('.index_sec03').addClass('on');
	});

	$('.index_sec03 .view11 ul li > p').click(function(){
		//$('.qnaView').slideUp(300);
		//$(this).siblings('.qnaView').slideDown(300);
		$('.index_sec03 .view11 ul li').animate({height:'61px'},300);
		$(this).parent('li').animate({height:'195px'},300);
	});

	$('.index_sec03 .view10 ul li div button').hover(function(){
		$(this).toggleClass('on');
	});

	$('.pageBx .d2 li .tit').hover(function(){
		$('.pageBx .d2 li .tit').removeClass('on');
		$(this).addClass('on');
	});

	$('.pageBx .c_list li').click(function(){
		$('.index_sec04 .wrap3').css('width','100%');
		$(this).parents('.pageBx').animate({width:'50%', right:'30%', padding:'0 0 0 12%'},450).addClass('on');
		$(this).parent('ul').parent('div').parent('div').siblings('.viewBx').animate({width:'50%', right:'0%'},450).addClass('on');
		$('.pageBx .c_list li:first').removeClass('on');
		$(this).parent('div').siblings('ul').children('li:first').addClass('on');
	});
	$('.pageBx .c_list li').hover(function(){
		$('.pageBx .c_list li').removeClass('on');
		$(this).addClass('on');
	});

	$('.pageBx .c_list li').click(function(){
		$('.index_sec04').addClass('on');
	});


	$('.pageBx > ul > li').hover(function(){
		$('.pageBx > ul > li p').removeClass('on');
		$(this).children('p').addClass('on');
	});

});

 

/*var h; // 덈룄 곗쓽 믪씠瑜 吏 뺥븯 蹂 섏엯 덈떎.
var n=0; // 꾩껜瑜 대걣 닿 以묒슂 蹂 섏엯 덈떎.
var distance=0; // body, html 吏곸씠 꾩튂 낅땲 .

$(function(){
	setTimeout(function(){
		$(".quick li").eq(n).addClass("on");
		$('#wrap').parents("body, html").animate({scrollTop:distance}, 500);
	}, 150);

	$(window).resize(function(){
		h=$(window).height();
		$(".Allbox").css({height:h});
		distance=n*h;
	});

	$(window).trigger("resize");

	$(".quick li").click(function(e){
		e.preventDefault();
		n=$(this).index();
		distance=n*h;
			if(n == 2){
			$('.quick').addClass("on");
		}else if(n == 3){
			$('.quick').addClass("on");
		}else{
			$('.quick').removeClass("on");
		}
		if(n == 1){
			$('.page_Btn').addClass('on');
		}else if(n == 3){
			$('.page_Btn').addClass('on');
		}else{
			$('.page_Btn').removeClass('on');
		}
		$(".quick li").removeClass("on");
		$(this).addClass("on");
		$('#wrap').parents("body, html").animate({scrollTop:distance}, 500);
	});
});


$(window).resize(function(){
	if($(window).width() > 1024){
		$(document).mousewheel(function(e, delta){
			if($(".allon").is(":animated")){
				return false;
			}
			if(delta > 0){
			if(n > 0){
				n--;
			}
			}else{
				if(n < 4){ // 섏젙
				n++;
				}
			}
			if(n == 1){
				$('.page_Btn').addClass('on');
				$('.pageBx ul li ul').stop().slideUp(400);
				$('.pageBx.on > ul > li.over').children('.on8').hide();
				$('.pageBx.on > ul > li.over').children('.on7').show();
			}else if(n == 3){
				$('.page_Btn').addClass('on');
			}else{
				$('.page_Btn').removeClass('on');
			}
			distance=n*h;
			$(".allon").stop().animate({scrollTop:distance}, 500);
			$(".quick li").removeClass("on");
			if (n == 5){ 
				$(".quick li").eq(n-1).addClass("on");
			} else {
				$(".quick li").eq(n).addClass("on");
			}
		});
			$('body').css('overflow','hidden');
			$('body, html').addClass('allon');
			return false
			}else{
			$('body').css('overflow','visible');
			$('body, html').removeClass('allon');
		}
});*/