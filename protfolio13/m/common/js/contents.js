$(function(){

	//공지사항
	$(window).on("load",function(){
		//var news_l = $('.main_box3 .news .news_list ul li').length;
			$(".at_scr").mCustomScrollbar();
	});
	

});

$(document).ready(function(){

	$(window).scroll(function(){
		$('.group').each(function(){
			var bottom = $(this).offset().top + $(this).outerHeight();
			var bwindow = $(window).scrollTop() + $(window).height();

			if(bwindow > bottom-500){
				$(this).addClass('on');
			}
		});

		$('.inf_box3.on .inf_g .progress').animate({'stroke-dashoffset':'0'},3500);

		$('.inf_box1.on .inf_ani .inf_bg2').delay(100).queue(function(next) {
		  $(this).addClass("on");
		  next();
		});

		$('.inf_box1.on .inf_ani .inf_txt, .inf_box1.on .inf_ani .inf_txt2').addClass('on');

		$('.inf_box1.on .inf_bg1 .box').animate(
		{ deg: -90 },
		{
		  duration: 1200,
		  step: function(now) {
			$(this).css({ transform: 'rotate(' + now + 'deg)' },3000);
		  }
		});

		$('.inf_box1.on .inf_bg2 .box').animate(
		{ deg: 70 },
		{
		  duration: 1200,
		  step: function(now) {
			$(this).css({ transform: 'rotate(' + now + 'deg)' },3000);
		  }
		});

		$('.arrow').addClass('on');
	});

	/*var p = document.querySelector('.progress'), 
    svgc = 100;

	var svgme = function() {
	  if(svgc < 0) svgc = 100;
	  p.style.strokeDashoffset = svgc;
	  svgc--;
	  requestAnimationFrame(svgme);
	  
	}

	  if(svgc < 0){
		clearInterval()
	  }

	svgme();*/


	//입학절차
	$('.step ul li').click(function(){
		$('.step ul li').removeClass('on');
		$(this).addClass('on');
		
		var stepList = $(this).index()+1

		$('.step_db').removeClass('on');
		$('.step' + stepList).addClass('on');
	});

	
	//입학절차 학당찾기
	$('.at_search .search_box > span').click(function(){
		$('.at_search .search_box ul').animate({height:'113px'},200).show().css('border-bottom','1px solid #ddd');
	});

	$('.at_search .search_box').mouseleave(function(){
		$('.at_search .search_box ul').animate({height:'0px'},200).css('border-bottom','none');
	});
	
	$('.at_search .search_box ul li').click(function(){
		$('.at_search .search_box ul').animate({height:'0px'},200).css('border-bottom','none');
		var t_txt = $(this).text()
		$('.at_search .search_box > span').text(t_txt);
	});


	//커리큘럼 팝업
	$('.rad_hover ul').click(function(){
		$(this).siblings('div').css('display','block');
		$('.on_bg').show();
	});

	$('.rad_popup button').click(function(){
		$('.rad_popup').hide();
		$('.on_bg').hide();
	});

	$('.rad_hover.bg4 ul').click(function(){
		$('.on_bg').hide();
	});

	//커리큘럼 로드맵
	$('.culum_proc').mCustomScrollbar({
		axis:"x",
		advanced:{autoExpandHorizontalScroll:true}		
	});

	//입학절차 단계 슬라이드
	$('.step_list').slick({
	  dots:true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  arrows:false,
	});			

	//가맹문의
	$('.ap_set span').click(function(){
		$(this).siblings('ul').slideToggle(300);
	});
	$('.ap_set ul li').click(function(){
		var t_txt = $(this).text()
		$(this).parent('ul').siblings('span').text(t_txt);
		$(this).parent('ul').slideUp(300);
	});

	//신청서 셀렉트
	$('.ap_set span').click(function(){
		console.log(1);
	});

	$('.video .video_box').hide();
	$('.video .video_box:first').show();

	//비디오
	$('.alps_box .alps_img ul li a').click(function(){
		$('.video .video_box').hide();
		$('.alps_box .alps_img ul li a').removeClass('on');
		$(this).addClass('on')
	});

	$('.v1').click(function(){
		$('.video .video1').show();
	});
	$('.v2').click(function(){
		$('.video .video2').show();
	});
	$('.v3').click(function(){
		$('.video .video3').show();
	});
	$('.v4').click(function(){
		$('.video .video4').show();
	});

	/*공지사항 슬라이드*/
	var notice_h = $('.notice .nbox img').height();
	$('.notice .nbox').css('height',notice_h);

	$(".fi_map_on:first").show();
	$(".fi_map_p p").click(function(){
		if($(this).hasClass("on"))
		{
			$(".fi_map_p p").removeClass("on");
			$(".fi_map_on").slideUp(300);
			return;
		}
		$(".fi_map_p p").removeClass("on");
		$(".fi_map_on").slideUp(300);
		$(this).toggleClass("on");
		$(this).siblings(".fi_map_on").slideToggle(300);
	});
});



function fnMove(seq){
	var offset = $(".at_map" + seq).offset();
	$('html, body').animate({scrollTop : offset.top}, 400);
}