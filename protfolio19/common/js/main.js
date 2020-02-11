var h; // 윈도우의 높이를 지정하는 변수입니다.
var n=0; // 전체를 이끌어가는 중요한 변수입니다.
var distance=0; // body, html이 움직이는 위치입니다.


$(document).ready(function(){
	//박스 전체높이
	$('.mainbox').css('height', $(window).height());

	//모션

});

$(function(){

	setTimeout(function(){
		$(".quick li").eq(n).addClass("on");
		$(".scroll li").eq(n).addClass("on");
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
		if(n == 3){
			$('.quick').addClass("on");
			$('.header').addClass("on");
			$('.mainbox4 .scroll').addClass("on");
		}else{
			$('.quick').removeClass("on");
			$('.header').removeClass("on");
			$('.mainbox4 .scroll').removeClass("on");
		}

		$(".quick li").removeClass("on");
		$(this).addClass("on");
		$('#wrap').parents("body, html").animate({scrollTop:distance}, 500);
	});

});
$(document).keydown(function(event) {
	 if (event.keyCode == '33') {


	 }
});
$(window).resize(function(){
	if($(window).width() > 1024){
		$("body").css('overflow','hidden');
		$(document).mousewheel(function(e, delta){
			if($('.family_p').css('display') == 'block'){
				$('#wrap').parents("body, html").stop().animate({scrollTop:distance}, 500);

			}

			if($('#wrap').parents("body, html").is(":animated")){
				return false;
			}
			if(delta > 0){
				if(n > 0){
					n--;
				}
			}else{
				if(n < 5){ //수정
					n++;
				}
			}

			if(n == 3){
				$('.quick').addClass("on");
				$('.header').addClass("on");
				$('.scroll').addClass("on");
			}else{
				$('.quick').removeClass("on");
				$('.header').removeClass("on");
				$('.scroll').removeClass("on");
			}

			distance=n*h;
			$('#wrap').parents("body, html").stop().animate({scrollTop:distance}, 500);
			$(".quick li").removeClass("on");
			$(".scroll li").removeClass("on");
			if (n == 5){ 
				$(".quick li").eq(n-1).addClass("on");
				$(".scroll li").eq(n-1).addClass("on");
				$('.scroll').fadeOut(300);
			} else {
				$(".quick li").eq(n).addClass("on");
				$(".scroll li").eq(n).addClass("on");
				$('.scroll').fadeIn(300);
			}

		});
		return false
	}

});

$(document).ready(function(){ 
	setTimeout(function(){ 
		$('html, body').scrollTop(0); 
	}, 1000); 
});

