$(function(){
	var newcL = $('.newc .celebL li').length;
	var newcW = $('.newc .celebL li').width();

	$('.newc .celebL').css('width',newcL * '40'+'vw');

	//셀럽 뷰페이지 비디오 슬라이드
	var swiper = new Swiper('.swiper-container', {
	  centeredSlides: true,
	  spaceBetween:10,
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
	  simulateTouch:false,
	});

	//셀럽 뷰페이지 소개 더보기 버튼
	$('.listView .c_info button').click(function(){
		$('.listView .c_info dl dd').css('height','100%');
	});

	//가격설정
	//3자리 단위마다 콤마 생성
	function addCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	 
	//모든 콤마 제거
	function removeCommas(x) {
		if(!x || x.length == 0) return "";
		else return x.split(",").join("");
	}
	$(".price input:text[numberOnly]").on("keyup", function() {
		$(this).val(addCommas($(this).val().replace(/[^0-9]/g,"")));
//		$('.pri_txt').text(this.value);
	});

	//검색 input X 버튼
	var $ipt = $('.pri_txt'),
		$clearIpt = $('button.sch_del');
	$ipt.keyup(function(){
		$('button.sch_del').toggle(Boolean($(this).val()));
	});
	$clearIpt.toggle(Boolean($ipt.val()));
	$clearIpt.click(function(){
		$('.pri_txt').val('').focus();
		$(this).hide();
	});

	//faq
	$('.faq ul li .faq_on').hide();
	$('.faq ul li span').click(function(){
		$('.faq ul li .faq_on').slideUp(400);
		$(this).siblings('div').slideDown(400);
	});

	
	$('.next1').click(function(){
		$('.joinH1').removeClass('on')
		$('.joinH2').addClass('on');
	});
	$('.next2').click(function(){
		$('.joinH2').removeClass('on')
		$('.joinH3').addClass('on');
	});
	
	//프로필 이미지 업로드
    $("#proimg, #proimg2").change(function() {
        readURL(this);
    });
	$('#btn-upload').click(function (e) {
		e.preventDefault();
		$('#proimg').click();

	});

	//펼치기
	$('.rmore').click(function(){
		$('.revView .revdet').show();
	});

	//메뉴
	$('.mBtn').click(function(){
		$('.menuBox').animate({right:'0'},300);
	});
	$('.menuBox button').click(function(){
		$(this).parent('div').animate({right:'-100%'},300);
	});
	$('.menuBox > ul > li').click(function(){
		$(this).find('span').toggleClass('on');
		$(this).children('ul').slideToggle(400);
		$('.menuBox > ul > li').not(this).children('ul').slideUp(400);
		$('.menuBox > ul > li').not(this).find('span').removeClass('on');
	});

	//셀럽 검색 팝업
	$('#c_search').click(function(){
		$('.s_popup').show();
	});
	$('.s_popup .nextB').click(function(){
		$(this).parent('div').hide();
		$(this).parent('div').next('div').show();
		$('.Bg').show();
	});
	$('.s_popup2 a').click(function(){
		$(this).parent('div').hide();
		$('.s_popup3').show();
	});
	$('.closeP').click(function(){
		$(this).parent('div').hide();
		$('.Bg').hide();
	});


});

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
			$('#proimgf').attr('src', e.target.result);
			$('.proF .proF_img p').hide();
		}
		reader.readAsDataURL(input.files[0]);
	}
}

function changeValue(obj){
	
}


