$(function(){

	$(window).scroll(function(){
		$('.main_box1').each(function(){
			var bottom = $(this).offset().top + $(this).outerHeight();
			var bwindow = $(window).scrollTop() + $(window).height();

			if(bwindow > bottom-500){
				$(this).addClass('on');
			}
		});

		$('.main_box1.on .inf_ani .inf_bg2').delay(10).queue(function(next) {
		  $(this).addClass("on");
		  next();
		});

		$('.main_box1.on .inf_ani .inf_txt, .main_box1.on .inf_ani .inf_txt2').addClass('on');
	});




	var num = $('.slick-cloned').length;
	console.log(num - 2);



	$('#tab1').click(function(){
		$('.main_box2 .tab a').removeClass('on');
		$(this).addClass('on');
		$('.curr_box').show();
		$('.online_box').hide();
	});

	$('#tab2').click(function(){
		$('.main_box2 .tab a').removeClass('on');
		$(this).addClass('on');
		$('.curr_box').hide();
		$('.online_box').show();
	});

	//소식
	$('.swiper-container2').slick({
		dots: true,
		slidesToShow: 1,
		swipe:false,
		autoplay:true,
		autoplaySpeed:3000,
		arrows:false,
	});

	//공지사항
	$(window).on("load",function(){
		var news_l = $('.main_box3 .news .news_list ul li').length;
		console.log(news_l);
		if($('.main_box3 .news .news_list ul li').length > 3){
			$(".content").mCustomScrollbar();
		}
	});
	

	//SNS
	var slideSns = $(".sns_slide").slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 2,
		variableWidth: true,
		swipeToSlide: true,
		touchThreshold: 400,
		infinite: true,
		outerEdgeLimit: true,
		swipe:false,
		autoplay:true,
		autoplaySpeed:3000,
		pauseOnHover:false,
		pauseOnFocus:false,
		prevArrow: '<a href="javascript:;" class="slick-prev slick-arrow"></a>',
		nextArrow: '<a href="javascript:;" class="slick-next slick-arrow"></a>'

	});

	var snslist = $('.sns_slide .slick-slide').length;
	var snslistN = $('.sns_slide .slick-cloned').length;

	slideSns.on('afterChange', function(event, slick, currentSlide){ 
	 
	// slick - is a slider object with a lot of useful info 
	 
	// currentSlide - is a current slide index (starts from 0) 
	 
	if(slick.slideCount === currentSlide + snslist - snslistN){ 
	 
		$('.sns_slide .slick-slide').addClass('on');
		$('.sns_slide .slick-active').removeClass('on');
		$('.sns_slide .slick-active').next().removeClass('on');
		
	} 
	 
	});


	$('.sns_slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.sns_slide .slick-slide').removeClass('on');
		$(this).children('div').children('div').children('.slick-active').prev().next().addClass('on');

	});

	$('.slick-active').prev().addClass('on');
	$('.main_box4 .slick-next').click(function(){
		$('.slick-slide').removeClass('on');
		$(this).siblings('div').children('div').children('.slick-active').prev().addClass('on');
	});

	$('.main_box4 .slick-prev').click(function(){
		$('.slick-slide').removeClass('on')
		$(this).siblings('div').children('div').children('.slick-active').prev().addClass('on')
	});

	
	//메인비주얼
	slick = $('.main_slider');
	slick.slick({
	  slidesToShow: 1,
	  swipe:false,
	  dots: false,
	  autoplay: true,
	  autoplaySpeed: 2000, 
	});

});

//스크롤버튼
function scrollMove(num){
	var offset = $("#div" + num).offset();
	$('html, body').animate({scrollTop : offset.top - 100}, 600);
	return false;
}

