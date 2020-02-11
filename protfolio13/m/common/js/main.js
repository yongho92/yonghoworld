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


	//커리큘럼
	/*$(".curr_slide").slick({
		autoplay: false,
		autoplaySpeed: 2000,
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		variableWidth: true,
		swipeToSlide: true,
		touchThreshold: 400,
		infinite: true,
		arrows: true, 
		outerEdgeLimit: true,
		swipe:false,
	});*/

	var num = $('.slick-cloned').length;
	console.log(num - 2);

	//소식
	$('.swiper-container2').slick({
		dots: true,
		slidesToShow: 1,
		swipe:false,
		autoplay:true,
		autoplaySpeed:3000,
		arrows:false,
	});

	//공지사항 / sns
	$(window).on("load",function(){
		var news_l = $('.main_box3 .news .news_list ul li').length;
		console.log(news_l);
		if($('.main_box3 .news .news_list ul li').length > 3){
			$(".news_list.content").mCustomScrollbar();
		};
		
		var news_h = $('.main_box3 .news .news_list ul li').height();
		console.log(news_h);

		$('.main_box3 .news .news_list').css('height',news_h*3+35);

		/*$('.sns_slide').mCustomScrollbar({
			axis:"x",
			advanced:{autoExpandHorizontalScroll:true}		
		});*/

	
		//소식
		/*$('.sns_slide').slick({
			slidesToShow: 1,
			dots: true,
			arrows:false,
			autoplay:true,
			autoplaySpeed:3000,
		});*/
	});

	var snsList = $('.sns_slide .sns_list').length;
	$('.sns_slide .sns_list').css('width',100/snsList + "%")
	


	//소식
	$('.sns_box').mCustomScrollbar({
		axis:"x",
		advanced:{autoExpandHorizontalScroll:true}		
	});


	//SNS
	/*$(".sns_slide").slick({
		autoplay: false,
		speed: 600, 
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 2,
		variableWidth: true,
		swipeToSlide: true,
		touchThreshold: 400,
		infinite: true,
		arrows: true,
		outerEdgeLimit: true,
		swipe:false,
	});*/


	$('.slick-active').prev().addClass('on');
	$('.main_box4 .slick-next').click(function(){
		$('.slick-slide').removeClass('on');
		$(this).siblings('div').children('div').children('.slick-active').prev().addClass('on');
	});

	$('.main_box4 .slick-prev').click(function(){
		$('.slick-slide').removeClass('on')
		$(this).siblings('div').children('div').children('.slick-active').prev().addClass('on')
	});

});

//스크롤버튼
function scrollMove(num){
	var offset = $("#div" + num).offset();
	$('html, body').animate({scrollTop : offset.top - 105}, 600);
	return false;
}

$(window).load(function(){
//메인 비쥬얼
	var	time = 5;
	var	bar, slick, isPause, tick, percentTime;
	var progressValue = document.querySelector('.main_progressbar');
	var RADIUS = 30;
	var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

	bar = $('.main_progress .progress');

	function startProgressbar() {
		resetProgressbar();
		percentTime = 0;
		isPause = false;
		tick = setInterval(interval, 5);
	}

	function interval() {
		if(isPause === false) {
			percentTime += 1 / (time + 0.1);
			bar.css({
				width: percentTime + '%'
			});
			if(percentTime >= 100) {
				slick.slick('slickNext');
				startProgressbar();
			}
		}
		progress(percentTime);

	}

	function progress(value) {
		var progress = value / 100;
		var dashoffset = CIRCUMFERENCE * (1 - progress);
		//console.log('progress:', percentTime + '%', '|', 'offset:', dashoffset)
		progressValue.style.strokeDashoffset = dashoffset;
	}

	progressValue.style.strokeDasharray = CIRCUMFERENCE;


	function resetProgressbar() {
		bar.css({
			width: 0 + '%'
		});
		clearTimeout(tick);
	}

	slick = $('.main_slider');
	slick.slick({
	  slidesToShow: 1,
	  swipe:false,
	  dots: true,
	  dotsClass: 'custom_paging',
	  customPaging: function (slider, i) {
			//FYI just have a look at the object to find available information
			//press f12 to access the console in most browsers
			//you could also debug or look in the source
			return  '<strong>' + (i + 1) + '</strong>' + '<span>' + '/' + '</span>' + slider.slideCount;
		}
	});


	startProgressbar();

	$('.main .slick-arrow').click(function(){
		startProgressbar();
		$('.main_svg .start').hide();
		$('.main_svg .stop').show();
	});

	$('.main_svg .stop').on('click', function(){
		resetProgressbar();
		$('.main_svg .start').show();
		$(this).hide();
	});
	$('.main_svg .start').on('click', function(){
		startProgressbar();
		$('.main_svg .stop').show();
		$(this).hide();
	});
});