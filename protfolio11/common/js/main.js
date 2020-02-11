var h; // 윈도우의 높이를 지정하는 변수입니다.
var n=0; // 전체를 이끌어가는 중요한 변수입니다.
var distance=0; // body, html이 움직이는 위치입니다.
h=$(window).height();
$(function(){

setTimeout(function(){
	$("body, html").animate({scrollTop:distance}, 500);
	}, 150);

$(window).resize(function(){
	$(".Allbox").css({height:h});
	distance=n*h;
});
$(window).trigger("resize");


$(".quick li").click(function(e){
	e.preventDefault();
	n=$(this).index();
	distance=n*h;
	$("body, html").animate({scrollTop:distance}, 500);
	
	if(n == 1){
		$('.ab_list a').addClass('on');
	}else{
		$('.ab_list a').removeClass('on');
	}

	if(n == 2){
		$('.area_list').addClass('on');
	}else{
		$('.area_list').removeClass('on');
	}

	if(n == 3){
		$('.prod_box .prod .prod_txt').addClass('on');
	}else{
		$('.prod_box .prod .prod_txt').removeClass('on');
	}

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
					if(n < 3){ //수정
					n++;
					}
				}

				if(n == 1){
					$('.ab_list a').addClass('on');
				}else{
					$('.ab_list a').removeClass('on');
				}

				if(n == 2){
					$('.area_list').addClass('on');
				}else{
					$('.area_list').removeClass('on');
				}

				if(n == 3){
					$('.prod_box .prod .prod_txt').addClass('on');
				}else{
					$('.prod_box .prod .prod_txt').removeClass('on');
				}

			distance=n*h;
			$(".allon").stop().animate({scrollTop:distance}, 500);

		});
		$('body').css('overflow-y','hidden');
		$('body, html').addClass('allon');
		return false
		}else{
		$('body').css('overflow-y','visible');
		$('body, html').removeClass('allon');
		}
});


$(document).ready(function(){

	//박스 전체높이
		$('.Allbox').css('height', $(window).height());

	//메인롤링배너
	var swiper = new Swiper('.swiper-container0', {
		speed:800,
	  //effect:'fade',
	  centeredSlides: true,
	  parallax: true,
	  loop:true,
	  autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	  },
	  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	  simulateTouch:false,
	});



});


function family_btn(obj){
	$(obj).parent().siblings('div').show();
}

$(document).ready(function(){ 
	setTimeout(function(){ 
		$('html, body').scrollTop(0); 
	}, 1000); 
});