$(document).ready(function(){

	//메인비쥬얼
    var swiper = new Swiper('.visual .swiper-container', {
      centeredSlides: true,
	  slidesPerView: 1,
	  speed: 900,
	  loop:true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
	  pagination: {
		el: '.visual-pagination',
		type: 'fraction',
	  },
      navigation: {
        nextEl: '.visual-button-next',
        prevEl: '.visual-button-prev',
      },
    });

	//헤더
	$('header .headt ul > li.cut').click(function(){
		$(this).children('ul').slideToggle(1);
		$(this).toggleClass('on');
	});
	$('[id^="menuTxt"]').hover(function(e) {
		e.preventDefault();
		$('.menurBox').hide();
		$('.'+ this.id).show();
	});
	$('.menul ul li a').mouseenter(function(){
		$('.menul ul li a').removeClass('on');
		$(this).addClass('on');
	});

	//메인 베스트상품
	var galleryThumbs1 = new Swiper('.bestbox .gallery-thumbs1', {
		slidesPerView: 4,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		direction:'vertical',
		touchRatio: 0,
		});
	var galleryTop1 = new Swiper('.bestbox .gallery-top1', {
	    loop:true,
	    loopedSlides: 5, //looped slides should be the same
		speed: 500,
	    navigation: {
			nextEl: '.best-button-next',
			prevEl: '.best-button-prev',
	    },
		pagination: {
			el: '.best-pagination',
			type: 'fraction',
		},
	    thumbs: {
		  swiper: galleryThumbs1,
	    },
	    simulateTouch:false,
	});

	galleryTop1.on('slideNextTransitionStart', function () {
		var $target = $(".bestl ul li");
		var onIdx =$(".bestl ul li.on").index();
		onIdx++;

		if(onIdx >= $target.length) onIdx = 0;

		$target.removeClass("on").eq(onIdx).addClass("on");
	});

	galleryTop1.on('slidePrevTransitionStart', function () {
		var $target = $(".bestl ul li");
		var onIdx =$(".bestl ul li.on").index();
		onIdx--;
		if(onIdx < 0) onIdx = $target.length-1;

		$target.removeClass("on").eq(onIdx).addClass("on");
	});
	

	//메인 팔로우
    var swiper = new Swiper('.follow .swiper-container2', {
	  allowTouchMove:false,
	  slidesPerView:6,
	  loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.f-button-next',
        prevEl: '.f-button-prev',
      },
    });


	//리스트페이지 상단 롤링배너
    var swiper3 = new Swiper('.top_bg .swiper-container4', {
      centeredSlides: true,
	  speed: 900,
	  loop:true,
      autoplay: {
        delay: 30000000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.top-button-next',
        prevEl: '.top-button-prev',
      },
	  allowTouchMove:false,
    });


	//상품상세페이지 이미지 롤링
    var galleryThumbs = new Swiper('.roimg .gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 'auto',
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.roimg .gallery-top', {
      spaceBetween: 10,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });


	//상세페이지 함께 본 상품
    var swiper4 = new Swiper('.product_B .swiper-container5', {
	  speed: 500,
      slidesPerView: 3,
	  loop:true,
      navigation: {
        nextEl: '.pb-button-next',
        prevEl: '.pb-button-prev',
      },
	  allowTouchMove:false,
    });

	//상세페이지 추천 상품
    var swiper5 = new Swiper('.product_B .swiper-container6', {
	  speed: 500,
      slidesPerView: 3,
	  loop:true,
      navigation: {
        nextEl: '.pb2-button-next',
        prevEl: '.pb2-button-prev',
      },
	  allowTouchMove:false,
    });

	//상세페이지 베스트 리뷰
    var swiper6 = new Swiper('.b_review2 .swiper-container7', {
      spaceBetween: 20,
	  speed: 800,
      slidesPerView: 1,
	  loop:true,
      navigation: {
        nextEl: '.review-button-next',
        prevEl: '.review-button-prev',
      },
	  allowTouchMove:false,
    });

	//상세 안내메세지
    var swiper6 = new Swiper('.event.swiper-container', {
	  speed: 800,
      slidesPerView: 1,
	  loop:true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.txt-button-next',
        prevEl: '.txt-button-prev',
      },
	  allowTouchMove:false,
    });

	//고객리뷰 베스트
    var swiper6 = new Swiper('.bestrev.swiper-container', {
	  slidesPerView:1,
	  speed: 800,
      navigation: {
        nextEl: '.review-button-next',
        prevEl: '.review-button-prev',
      },
	  allowTouchMove:false,
    });

	/*$(".best-button-next").on("click", function(){
      var $target = $(".bestl ul li");
      var onIdx =$(".bestl ul li.on").index();
      onIdx++;
      
      if(onIdx >= $target.length) onIdx = 0;

      $target.removeClass("on").eq(onIdx).addClass("on");
    });

	$(".best-button-prev").on("click", function(){
      var $target = $(".bestl ul li");
      var onIdx =$(".bestl ul li.on").index();
      onIdx--;
      if(onIdx < 0) onIdx = $target.length-1;

      $target.removeClass("on").eq(onIdx).addClass("on");
    });*/


	$('.swiper-container2 .swiper-slide').removeClass('on');	
	$('.swiper-container2 .swiper-slide').removeClass('on2');	
	$('.swiper-container2 .swiper-slide-active').prev().prev().addClass('on');
	$('.swiper-container2 .swiper-slide-active').prev().prev().prev().addClass('on2');
	$('.swiper-container2 .swiper-slide-active').next().next().addClass('on');
	$('.swiper-container2 .swiper-slide-active').next().next().next().addClass('on2');
	
	$('.f-button-next').click(function(){
	$('.swiper-container2 .swiper-slide-active').prev().prev().addClass('on');
		$('.swiper-container2 .swiper-slide-active').prev().prev().prev().addClass('on2');
		$('.swiper-container2 .swiper-slide-active').next().next().addClass('on');
		$('.swiper-container2 .swiper-slide-active').next().next().next().addClass('on2');		
	});

	$('header .menu > ul > li > a').mouseenter(function(){
		$('header .menu > ul > li .menu_on').hide();
		$('header .menu > ul > li > a').removeClass('on');
		$(this).addClass('on');
		$(this).siblings('.menu_on').show();
	});
	$('header .menu > ul').mouseleave(function(){
		$('header .menu > ul > li > a').removeClass('on');
		$(this).children('li').children('.menu_on').hide();
		$('.menul ul li a').removeClass('on');
		$('.menul ul li a:eq(0)').addClass('on');
		$('.menurBox').hide();
		$('.menuTxt1').show();
	});

	$('.tbanner button').click(function(){
		$(this).parent('div').parent('div').slideUp(300);
	});

	//qna
	$('.qna .qnaBox ul li').click(function() {
		var qna = $(this);
		if(qna.hasClass('on')) {
			qna.removeClass('on');
		} else {
			qna.addClass('on').siblings().each(function(){$(this).removeClass('on');});
		}
		
		$(this).children('p.qnaq').next().slideToggle(300).parent().siblings().children("p.qnaa, ul li").slideUp(300);

		return false;	
	});

	/*$(".hotBox").mCustomScrollbar({
		axis:"x",
		theme:"light-3",
		advanced:{autoExpandHorizontalScroll:true}
	});*/

	//리뷰
    var swiper = new Swiper('.reviewHot .swiper-container', {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.hot-button-next',
        prevEl: '.hot-button-prev',
      },
	 allowTouchMove:false,
    });
	 
	 
	/*$('.hot-button-next').click(function(e){
		e.preventDefault();
		var curnt = 0;
		var curntnum = $('.reviewHot .swiper-wrapper .hotlist').length;
		var width = $('.reviewHot .swiper-wrapper .hotlist').width();

		$('.reviewHot .swiper-wrapper').css('-webkit-transform',  'translateX(' + width + 'px)');
		for(var i=0; i<$('.reviewHot .swiper-wrapper .hotlist').length; i++){
			$('.reviewHot .swiper-wrapper').css('-webkit-transform',  'translateX(' + i + 'px)');
		}
	});*/



	$('.hot-button-next').click(function(){
		$('.reviewHot ul.swiper-wrapper').removeClass('on');
		if($('.reviewHot ul.swiper-wrapper li.hotlist:eq(2)').hasClass('swiper-slide-active')){
			$('.reviewHot ul.swiper-wrapper').addClass('on2');
		}else{
			$('.reviewHot ul.swiper-wrapper').removeClass('on2');
		};
	});


	$('.hot-button-prev').click(function(){
		if($('.reviewHot ul.swiper-wrapper li.hotlist:eq(0)').hasClass('swiper-slide-active') == true){
			$('.reviewHot ul.swiper-wrapper').addClass('on');
		};
	});

	$(".popbot").mCustomScrollbar({
		axis:"y",
		theme:"light-3",
		advanced:{autoExpandHorizontalScroll:true}
	});

  $("#productBtn").toggle(function(){
	$('.vividList').hide();
	$('.productList').show();
  },function(){
	$('.vividList').show();
	$('.productList').hide();
  });


	//바로구매 팝업
	$('.purchase').click(function(){
		$('.pPopup, .popupbg').show();
		var galleryThumbs = new Swiper('.roimg .gallery-thumbs', {
		  spaceBetween: 10,
		  slidesPerView: 4,
		  loop: true,
		  freeMode: true,
		  loopedSlides: 5, //looped slides should be the same
		  watchSlidesVisibility: true,
		  watchSlidesProgress: true,
		});
		var galleryTop = new Swiper('.roimg .gallery-top', {
		  spaceBetween: 10,
		  loop:true,
		  loopedSlides: 5, //looped slides should be the same
		  navigation: {
			nextEl: '.gallery-button-next',
			prevEl: '.gallery-button-prev',
		  },
		  thumbs: {
			swiper: galleryThumbs,
		  },
		});
		//상세 안내메세지
		var swiper = new Swiper('.event.swiper-container', {
		  speed: 800,
		  slidesPerView: 1,
		  loop:true,
		  autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		  },
		  navigation: {
			nextEl: '.txt-button-next',
			prevEl: '.txt-button-prev',
		  },
		  allowTouchMove:false,
		});
	});

	$('.pclose, .popupbg').click(function(){
		$('.pPopup, .popupbg').hide();
	});


    $('.prod_list > li').mouseenter(function() {
        $(this).children('div').children('div').stop().css({'display': 'table', 'opacity': 0}).animate({'opacity': 1}, 300);
    });
    $('.prod_list > li').mouseleave(function() {
        $(this).children('div').children('div').stop().animate({'opacity': 0}, 300, function() {
            $(this).css({'display': 'none'})
        });
    });

	$('.bg').click(function(){
		$(this).hide();
		$('.popupR').hide();
	});

	$('.popupR .close').click(function(){
		$('.bg').hide();
		$('.popupR').hide();
	});

	$('.qna_S').parent('td').parent('tr').hide();
	$('.p_qna table tbody tr td').click(function(){
		$(this).parent('tr').next('tr').toggleClass('on');
		console.log(1);
	});

	$('.writing').click(function(){
		$('.p_qna').hide();
		$('.qna_ipt').show();
	});
	$('.writingC').click(function(){
		$('.p_qna').show();
		$('.qna_ipt').hide();		
	});

	$('.productInfo .b_review2 .reviewList.bestInfo ul li > img').siblings('div').addClass('on');

	$('.bestrev ul li, .viewT .viewL .scBox .review li').click(function(){
		$('.popupR').show();
		$('.bg').show();
	});


});
 $(document).ready(function()
 {
  $("#productBtn").toggle(
  function()
  {
	  	$(this).addClass('on');
   		$('.vividList').hide();
		$('.productList').show();
  },
  function()
  {
	  	$(this).removeClass('on');
		$('.vividList').show();
		$('.productList').hide();

  });
 });

