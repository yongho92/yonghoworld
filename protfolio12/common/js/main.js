var h; // �������� ���̸� �����ϴ� �����Դϴ�.
var n=0; // ��ü�� �̲���� �߿��� �����Դϴ�.
var distance=0; // body, html�� �����̴� ��ġ�Դϴ�.
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
		$('.busi_l').addClass('on');
	}else{
		$('.busi_l').removeClass('on');
	}

	if(n == 2){
		$('.cut_txt').addClass('on');
	}else{
		$('.cut_txt').removeClass('on');
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
					if(n < 3){ //����
					n++;
					}
				}

				if(n == 1){
					$('.busi_l').addClass('on');
				}else{
					$('.busi_l').removeClass('on');
				}

				if(n == 2){
					$('.cut_txt').addClass('on');
				}else{
					$('.cut_txt').removeClass('on');
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

	//�ڽ� ��ü����
		$('.Allbox').css('height', $(window).height());

	//contact
	$('.contact .pos_box .pin2').hover(function(){
		var $this = $(this);

		$('.contact .pos_box3 .comp_map').toggleClass('on');
		$(this).siblings('div').toggleClass('on');
		$(this).children('a').toggleClass('on');
		$(this).toggleClass('on');
		$('.contact .pos_box .pin_on').toggleClass('on');

	});

	$('.comp_map').hover(function(){

		$('.contact .pos_box3 .comp_map').toggleClass('on');
		$(this).siblings('div').toggleClass('on');
		$(this).siblings('div').children('a').toggleClass('on');
		$(this).toggleClass('on');
		$('.contact .pos_box .pin_on').toggleClass('on');
	});

	//���ηѸ����
	var swiper = new Swiper('.swiper-container0', {
	  centeredSlides: true,
	  speed:1000,
	  loop:true,
	  autoplay: {
		delay: 7000,
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
		//$('.visual_slide .swiper-slide-active .visual_txt h2').animate({opacity:'1'},1000);
		//$('.visual_slide .swiper-slide-active .visual_txt p').delay(600).animate({opacity:'1'},1000);
		//$('.visual_slide .slide .visual_txt h2').animate({opacity:'0'},1000);
		//$('.visual_slide .slide .visual_txt p').delay(600).animate({opacity:'0'},1000);

	//���޴� �Ѹ�

});


function family_btn(obj){
	$(obj).parent().siblings('div').show();
}

$(document).ready(function(){ 
	setTimeout(function(){ 
		$('html, body').scrollTop(0); 
	}, 1000); 
});