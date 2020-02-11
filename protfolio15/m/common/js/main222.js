$(document).ready(function(){
	/*main 191022*/
	$('.viewBx > div').hide();
	$('.pageBx > ul > li > .tit').mouseenter(function(){
		//$('.pageBx ul li ul').stop().slideUp(400);
		//$(this).siblings('ul').stop().slideDown(400);
		$(this).parent('li').stop().animate({height:'425px'},500);
		$('.pageBx.on > ul > li > img:last').stop().hide();
		$('.pageBx.on > ul > li > img.on7').stop().show();
	});
	$('.pageBx > ul > li').mouseleave(function(){
		$(this).stop().animate({height:'130px'},500);
	});

	$('.pageBx > ul > li:last > img').mouseenter(function(){
		$('.pageBx.on > ul > li > img:last').stop().show();
		$('.pageBx.on > ul > li > img.on7').stop().hide();
	});

	$('.pageBx > ul > li:last > ul > li > img').click(function(){
		$('.pageBx > ul > li:last > img').hide();
		$(this).parent('li').parent('ul').siblings('.on8').show();
	});

	$('.pageBx > ul > li > ul > li').click(function(e){
		e.preventDefault()
		$(this).parents('.pageBx').animate({width:'50%', right:'30%', padding:'0 0 0 250px'},450).addClass('on');
		$('.viewBx').animate({right:'0'},500);
		$('.quizbx').addClass('on');
		$('.pageBx > ul > li > ul > li').removeClass('on');
		$(this).addClass('on');
		$(this).parent('ul').parent('li').stop().animate({height:'425px'},500);
	});

	$('.pageBx > ul > li > .tit').mouseenter(function(){
	});


	$('.tableBx .tit').click(function(e){
		$(this).parent('ul').parent('div').parent('div').animate({width:'730px', right:'50%'},250).addClass('on');
		$('.viewBx').animate({right:'0'},500);
	});


	$('[id^="view"]').on('click', function(e) {
		e.preventDefault();
		$('.viewBx > div').hide();
		$('.'+ this.id).show();
	});
	
	$('.header .btn_menu').click(function(){
		$('.menu').show();
	});

	$('.menu button').click(function(){
		$(this).parent('div').hide();
	});
});

 

var h; // 덈룄 곗쓽 믪씠瑜 吏 뺥븯 蹂 섏엯 덈떎.
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
});