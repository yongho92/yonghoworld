$(function(){

	//메인 서비스
	  var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.ser-button-next',
        prevEl: '.ser-button-prev',
      },
    });

	$('.visual .service').click(function(){
		$( 'html, body' ).stop().animate( { scrollTop : '980' },500 );
	});

	$('.intro').parents('body').addClass('on');

	$('.mapcont .viewBtn').click(function(){
		$('.popupBox, .bg').show();
		var galleryThumbs = new Swiper('.gallery-thumbs', {
			spaceBetween: 10,
			slidesPerView: 3,
			loop:true,
			freeMode: true,
			loopedSlides: 5, //looped slides should be the same
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			direction:'vertical',
			});
		var galleryTop = new Swiper('.gallery-top', {
			spaceBetween: 10,
			loop:true,
			loopedSlides: 5, //looped slides should be the same
			navigation: {
			  nextEl: '.img-button-next1',
			  prevEl: '.img-button-prev1',
			},
			thumbs: {
			  swiper: galleryThumbs,
			},
		});
	});

	$('.popupBox button').click(function(){
		$('.popupBox, .bg').hide();	
	});

	$('#allcheck').click(function(){
		if($('#allcheck').prop("checked")){
			$('.mapcont .mapList table tbody tr td input[type="checkbox"]').prop("checked",true);
		}else{
			$('.mapcont .mapList table tbody tr td input[type="checkbox"]').prop("checked",false);
		}
	});

	//gnb
	$('header > ul').mouseenter(function(){
		$(this).parent('header').addClass('on');
	});

	$('header').mouseleave(function(){
		$(this).removeClass('on');
	});

	$('header > ul > li > a').mouseenter(function(){
		$(this).addClass('on');
	});
	$('header > ul > li > a').mouseleave(function(){
		$(this).removeClass('on');
	});

	$('.recont').parents('body').children('header').addClass('header2');

	var jbOffset = $( 'header' ).offset();
	$( window ).scroll( function() {
	  if ( $( document ).scrollTop() > jbOffset.top ) {
		$( 'header' ).addClass( 'jbFixed' );
	  }
	  else {
		$( 'header' ).removeClass( 'jbFixed' );
	  }
	});

	$(document).ready(function(){
		$(this).scrollTop(0);
	});

	//데이터 지도보기


	$('.mapList .mem_ipt input').click(function(){
		var addlist = $(this).parent('div').parent('td').parent('tr').clone();
		$('.mycheck .checkList table tbody').append(addlist);
	});

	$('.mapList .mem_ipt .allcheck').click(function(){
		var addlist2 = $('.mapcont .mapList table tbody tr').clone();
		$('.mycheck .checkList table tbody').append(addlist2);
	});

	$('.lnb .lnbBox > form > fieldset > ul > li > .txt').click(function(){
		$('.lnb .lnbBox > form > fieldset > ul > li .lnbOn').slideUp();
		$(this).siblings('.lnbOn').slideDown();
	});
	
	$('.delete').click(function(){
		console.log(1);
	});

});

function deletebtn(obj){
	$(obj).parent('td').parent('tr').remove();
	$('.mapcont .mapList table tbody tr td input[type="checkbox"]').prop("checked",false);
}


function popupbtn(obj){
	$('.popupBox, .bg').show();
}