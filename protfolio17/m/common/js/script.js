$(document).ready(function(){

	//메인비쥬얼
    var swiper = new Swiper('.visual .swiper-container', {
	  speed: 900,
		slidesPerView: 'auto',
		loopedSlides: 1,
		loop: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.visual-button-next',
        prevEl: '.visual-button-prev',
      },
      pagination: {
        el: '.visual-pagination',
      },
      /* scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
	 swiperOption: {
		loop: true,
		slidesPerView: 1
	  },*/
    });

	var visual = $('.visual ul li').length;
	if(visual === 4){
		$('.visual .swiper-container .visual-pagination .swiper-pagination-bullet').css('width','50%');
	}else if(visual === 5){
		$('.visual .swiper-container .visual-pagination .swiper-pagination-bullet').css('width','33.3%');
	}else if(visual === 6){
		$('.visual .swiper-container .visual-pagination .swiper-pagination-bullet').css('width','25%');
	}else if(visual === 7){
		$('.visual .swiper-container .visual-pagination .swiper-pagination-bullet').css('width','20%');
	}else if(visual === 8){
		$('.visual .swiper-container .visual-pagination .swiper-pagination-bullet').css('width','16.65%');
	}else if(visual === 9){
		$('.visual .swiper-container .visual-pagination .swiper-pagination-bullet').css('width','14.28%');
	}else if(visual === 10){
		$('.visual .swiper-container .visual-pagination .swiper-pagination-bullet').css('width','12.5%');
	}


	//메인 팝업
    var swiper = new Swiper('.popupL .swiper-container', {
      centeredSlides: true,
	  loop:true,
      autoplay: {
        delay: 250000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

	//메인 베스트상품
    var swiper = new Swiper('.bestbox .swiper-container', {
      centeredSlides: true,
	  speed: 900,
	  loop:true,
      pagination: {
        el: '.best-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.best-button-next',
        prevEl: '.best-button-prev',
      },
    });

	//리뷰
    var swiper = new Swiper('.review .swiper-container', {
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      navigation: {
        nextEl: '.review-button-next',
        prevEl: '.review-button-prev',
      },
    });

	//메인 팔로우
    var swiper = new Swiper('.follow .swiper-container2', {
      slidesPerView: 3,
      freeMode: true,
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
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.top-button-next',
        prevEl: '.top-button-prev',
      },
    });


	//상품상세페이지 이미지 롤링
    var swiper = new Swiper('.roimg .swiper-container0', {
      centeredSlides: true,
	  speed: 900,
	  loop:true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.view-pagination',
      },
    });

	//상세 안내메세지
    var swiper6 = new Swiper('.event.swiper-container', {
	  speed: 800,
      slidesPerView: 1,
	  loop:true,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.info-button-next',
        prevEl: '.info-button-prev',
      },
	  allowTouchMove:false,
    });

	//상세페이지 함께 본 상품
   /* var swiper4 = new Swiper('.product_B .swiper-container5', {
	  speed: 500,
      slidesPerView: 3,
	  loop:true,
      navigation: {
        nextEl: '.pb-button-next',
        prevEl: '.pb-button-prev',
      },
	  allowTouchMove:false,
    });*/

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
    });

	//고객리뷰 베스트
    var swiper6 = new Swiper('.bestrev.swiper-container', {
	  slidesPerView:1,
	  speed: 800,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      navigation: {
        nextEl: '.review-button-next',
        prevEl: '.review-button-prev',
      },
    });

	//고객리뷰 베스트
    var swiper6 = new Swiper('.Breview .swiper-container', {
	  slidesPerView:'auto',
	  speed: 800,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
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
	});

	$('.tbanner button').click(function(){
		$(this).parent('div').parent('div').slideUp(300);
		$('header .menu_on').addClass('on');
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
	});

	$('.pclose').click(function(){
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

	//메뉴
	$('header .headt .mobm button').click(function(){
		$(this).hide();
		$(this).siblings('button').show();
		$('header .menu_on').show();
		$('body').css('overflow','hidden');
		//메뉴 배너
		var swiper = new Swiper('.menuB.swiper-container', {
		  speed: 900,
		  loop:true,
		  autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		  },
		  navigation: {
			nextEl: '.banner-button-next',
			prevEl: '.banner-button-prev',
		  },
		});
		//메뉴 롤링 어워드
		var swiper = new Swiper('.awardsB .swiper-container', {
		  slidesPerView: 'auto',
		  loop: true,
		  autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		  },
		});
	});


	$('header .headt .mobm .close').click(function(){
		$(this).hide();
		$(this).siblings('button').show();
		$('header .menu_on').hide();
		$('body').css('overflow','visible');
	});

	$('header .menu_on > .menuL > ul > li > span').click(function(){
		$(this).siblings('ul').slideToggle(300);
		$('header .menu_on > .menuL > ul > li > span').not(this).siblings('ul').slideUp(300);
		
	});

	//팝업
	$('.popupL').siblings('div.popupbg').show();
	$('.popupL .tdBtn button').click(function(){
		$('.popupL, .popupbg').hide();

	});

	//상세페이지 문의
	$('.p_qna ul li').click(function(){
		$('.p_qna ul li .qnaOn').hide();
		$(this).children('.qnaOn').show();
	});

	$('h5.slideT').click(function(){
		$(this).parent('div').toggleClass('on');
	});

	$('.writing').click(function(){
		$('.p_qna').hide();
		$('.qna_ipt').show();
	});
	$('.writingC').click(function(){
		$('.p_qna').show();
		$('.qna_ipt').hide();		
	});

	$('.drGo').click(function(){
		$('.purcBoxon').animate({bottom:'0'},300).addClass('on');
		$('.drbg').fadeIn('fast');
	});
	$('.drUp').click(function(){
		$('.purcBoxon').animate({bottom:'-135vw'},300);
		$('.drbg').fadeOut('fast');
	});

	//검색
	$('.vivid .listS .searchB').click(function(){
		$('.vivid .listS .searchBox').show();
	});

	$('.viewL .scBox .review li').click(function(){
		$('.popupR').show();
		$('.bg').show();
	});

	$('.bestrev ul li').click(function(){
		$('.bestrev .popupR').show();
		$('.bg').show();
	});

	$('.reviewHot ul li.hotlist').click(function(){
		$('.reviewHot .popupR').show();
		$('.bg').show();
	});

	$('.bg').click(function(){
		$(this).hide();
		$('.popupR').hide();
	});

	$('.popupR .close').click(function(){
		$('.popupR').hide();
		$(this).parents('section').children('.bg').hide();

	});


	//상품 리스트 더보기
	$('.product .prod_list > li').slice(0,8).show();
	if($('.product .prod_list > li:hidden').length == 0){
		$('#morereview2').hide();
	}
	$('#morereview2').click(function(e){
		e.preventDefault();
		$('.product .prod_list > li:hidden').slice(0,8).show();
		if($('.product .prod_list > li:hidden').length == 0){
			$(this).hide();
		}
	});

	//고객리뷰 더보기
	$('.reviewHot ul li.hotlist').slice(0,4).show();
	if($('.reviewHot ul li.hotlist:hidden').length == 0){
		$('#morereview3').hide();
	}
	$('#morereview3').click(function(e){
		e.preventDefault();
		$('.reviewHot ul li.hotlist:hidden').slice(0,4).show();
		if($('.reviewHot ul li.hotlist:hidden').length == 0){
			$(this).hide();
		}
	});

	//상품 고객리뷰 더보기
	$('.productInfo .b_review2 .reviewList.bestInfo > ul > li').slice(0,5).show();
	if($('..productInfo .b_review2 .reviewList.bestInfo > ul > li:hidden').length == 0){
		$('#morereview4').hide();
	}
	$('#morereview4').click(function(e){
		e.preventDefault();
		$('.productInfo .b_review2 .reviewList.bestInfo > ul > li:hidden').slice(0,5).show();
		if($('.productInfo .b_review2 .reviewList.bestInfo > ul > li:hidden').length == 0){
			$(this).hide();
		}
	});

	$('.optBox .purcBox ul li button').click(function(){
		$(this).toggleClass('on');
	});

	$('.vivid ul li .vividTxt p.txtline2').click(function(){
		$(this).toggleClass('on');
	});

	$('.vivid ul li .vividTxt a').click(function(){
		$(this).siblings('p').toggleClass('on');
	});

	$('.minus').click(function(e){
		e.preventDefault();
		var cNum = $(this).siblings('input').val();
		var pNum = parseInt(cNum,10);
		pNum--;
		if(pNum<=0){
			alert('최소수량입니다.');
			pNum=1;
		}
		$(this).siblings('input').val(pNum);
		
	});

	$('.plus').click(function(e){
		e.preventDefault();
		var cNum = $(this).siblings('input').val();
		var pNum = parseInt(cNum,10);
		pNum++;
		if(pNum>10){
			alert('최대수량입니다.');
			pNum=10;
		}
		$(this).siblings('input').val(pNum);
		
	});

	$('.drBtn a').click(function(){

		if($('#option1').val() == "" || $('#option1').val() == undefined || $('#option1').val() == null) {
			alert("필수 옵션을 선택해주세요.")
		}

	});

	$(document).ready(function(){	
		var jbOffset = $( '.headFixed' ).offset();
		$( window ).scroll( function() {
		  if ( $( document ).scrollTop() > jbOffset.top ) {
			$( '.headFixed' ).addClass( 'fixedH' );
			$( 'header .menu_on' ).addClass( 'on' );
		  }
		  else {
			$('.headFixed').removeClass('fixedH');
			$( 'header .menu_on' ).removeClass( 'on' );
		  }
		});		
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

