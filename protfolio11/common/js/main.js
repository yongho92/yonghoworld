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
					if(n < 3){ //����
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

	//�ڽ� ��ü����
		$('.Allbox').css('height', $(window).height());

	//���ηѸ����
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