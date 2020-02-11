//肄섑뀗痢� 以묒븰 �꾩튂
function centerPos () {
	$(window).on("resize",function () {
		var $center=$(".centerPos");
		var $center1=$(".centerPos1");
		var $center2=$(".centerPos2");
		var $center3=$(".centerPos3");
		//console.log($(this));
		var topPos=($(this).height()-$center.outerHeight())/2;
		var leftPos=($(this).width()-$center.outerWidth())/2;

		var topPos1=($(this).height()-$center1.outerHeight())/2;
		var leftPos1=($(this).width()-$center1.outerWidth())/2;

		var topPos2=($(this).height()-$center2.height())/2;
		var leftPos2=($(this).width()-$center2.outerWidth())/2;

		var topPos3=($(this).height()-$center3.outerHeight())/2;
		var leftPos3=($(this).width()-$center3.outerWidth())/2;
		//console.log($(this).height(),$center.outerHeight(),$(this).width(),$center.outerWidth());
		var slidH=$("#container .area_brand").height();
		if ($(this).width()>768) {
			$center.css({position:"static","padding-top":slidH/4.645});
			$center1.css({top:topPos1,left:leftPos1});
			$center2.css({top:topPos2,left:leftPos2});
			$center3.css({top:topPos3,left:leftPos3,"position":"absolute"});
		}
		if ($(this).width()<=768) {
			$center.css({position:"static","padding-top":slidH/4.645});
			$center1.css({/*top:topPos1,*/left:leftPos1});
			$center2.css({/*top:topPos2,*/left:leftPos2});
			$center3.css({left:leftPos3,"position":"static"});
		}
	});
	$(window).trigger("resize");
}

//�꾩껜 �ㅽ겕濡�, aside 硫붾돱, �ㅽ겕濡ㅻ떎�� 踰꾪듉
function snb () {
	var $menu=$("#snb ul li");
	var $cnt=$("#container > .area_main");
	var headHei=$("#header").outerHeight();
	var total=$cnt.size();		//length �꾨줈�쇳떚, size() 硫붿꽌��
	var cntPosY;
	//console.log("�ㅻ뜑 �믪씠 : " + headHei,"area 媛�닔 : " + total, $cnt.eq());

	//4) �대젮吏� �덈룄李쎌쓽 �믪씠�� 理쒖쟻�� �쒗궎湲�
	$(window).on("resize",function  () {
		var cntHei=$(window).height()-$("#header").outerHeight();
		var cntHei_H=cntHei / 2;
		//console.log("�덈룄�� �믪씠 : " + $(window).height(), "�덈룄�곗갹�� 留욌뒗 area�믪씠 : " + cntHei);
		//$cnt.css("height",cntHei);

		//泥ル쾲吏� �곸뿭 �믪씠

		//$(".visual_bg").css("height",cntHei);
		//$("#mainSlider ul .visual1").css("height",cntHei);
		
		if ($(this).width()<=768) {
			$("#mainSlider ul .visual1").css({"height" : "0", "padding-bottom" : "56.25%"});
		} else {
			$("#mainSlider ul .visual1").css("height",cntHei);
		}
		
		$cnt.eq(0).css({"paddingTop":headHei})

		//泥ル쾲吏� �곸뿭�� �쒖쇅�� �섎㉧吏� �믪씠媛� �쒖뼱
		if ($(this).width()>768) {
			for (var i=1; i<total; i++) {
				$cnt.eq(i).css("height",cntHei+50);
			}
			//$cnt.eq(0).css({"paddingTop":headHei,"height":cntHei+80});
		}

		//innovation box�믪씠�쒖뼱, business box�믪씠�쒖뼱
		if ($(this).width()<=768) {
			for (var i=1; i<total; i++) {
				//$cnt.eq(i).css("height",cntHei+50);
				$cnt.eq(i).css("min-height","440px");
			}
			//$cnt.eq(0).css({"paddingTop":headHei,"height":cntHei+50});
			//$cnt.eq(3).css("min-height",1024);

			var innoBox=$(".area_innovation .inner ul li");
			// innoBox.css("height",$cnt.outerHeight()/2.714);
			innoBox.css({"height":$cnt.outerHeight()/1.8,"margin-top":"10px"});


			var busiBox=$(".area_business .prdt .cnt_prdt .slide .slides li");
			var busiBox_wid=$(".area_business .prdt .cnt_prdt .slide .slides li").width();
			var imgHei=$(".area_business .prdt .cnt_prdt .slide .slides li .img_prdt").height();

			//busiBox.css("height",$cnt.outerHeight()/1.764);
			/*var busiHei=busiBox.css("height",busiBox_wid * 1.618);
			$(".area_business .prdt .cnt_prdt").css("height",busiBox_wid * 1.618);
			busiBox.find(".txt_prdt").css("height",busiHei.height()-imgHei);*/


		}

		//resize媛� �쇱뼱�� 寃쎌슦 �꾩옱 $cnt�� offset().top 媛믪쓣 李얠븘媛�寃� �쒕떎

		//4媛쒖쓽 article �쒓렇�� offset().top媛믪쓣 諛곗뿴�� ���ν븯怨� �몄텧
		cntPosY=new Array(total+1);

		for (var i=0; i<total; i++) {
			cntPosY[i]=$cnt.eq(i).offset().top-headHei+50;
		}
		cntPosY[i]=$(document).height()-$(window).height();		//留덉�留� 而⑦뀗痢좎쓽 �믪씠媛� ��븘 �ㅽ겕濡ㅻ컮媛� 媛��� 留덉�留됱뿉 �꾩튂�� 寃쎌슦�� 蹂��섏뿉 ����
		//console.log("媛� �곸뿭�� offset().top媛� : "+cntPosY);

		var onIdx=$("#snb ul li.on").index();
		var tgPos=cntPosY[onIdx];
		//console.log(onIdx, tgPos);

		$(window).off("scroll");
		if ($(window).width()>768) {
			$("html, body").stop().animate({scrollTop:tgPos},function  () {
				$(window).on("scroll",scrollMove);
			});
		}

		// �ㅽ겕濡� �ㅼ슫 踰꾪듉
		$cnt.each(function  (i) {
			//console.log(i);
			i=0;
			$(".scrollDown").on("click",function  () {
				//i=i*(cntHei+50);
				//var thisTop=$(this).offset().top;
				//console.log(thisTop);//829, 1707, 2555, 3424

				//console.log(i,onIdx);

				$("html, body").stop().animate({scrollTop:cntPosY[1]},function  () {
					$(window).on("scroll",scrollMove);
				});
				//console.log(tgPos);
				//console.log(cntPosY[1],cntPosY[2],cntPosY[3]);
				/*
				if ($(window).scrollTop()==0) {
					i=0;
				}else if ($(window).scrollTop()==cntPosY[1]) {
					i=cntPosY[1];
				}else if ($(window).scrollTop()==cntPosY[2]) {
					i=cntPosY[2];
				}else if ($(window).scrollTop()==cntPosY[3]) {
					i=cntPosY[3];
				}
				*/
				//else if (i<4) {
				//	$(this).show();
				//}
				i++;
				return false;
			});
		});
		// snb txt fade
		if ($(this).width()<1600) {
			$menu.children().hover(function () {
				$("#snb ul").css("backgroundPosition","93%");
				$(this).find(".txt").show();//.stop().fadeIn();

			},function  () {
				$("#snb ul").css("backgroundPosition","50%");
				$(this).find(".txt").hide();//.stop().fadeOut();

			});
		}
	});

	$(window).trigger("resize");

	//1) �몃뵒耳��댄꽣 click
	$menu.children().on("click",function  () {
		//1-1) .on �대옒�ㅻ챸 �쒖뼱
		$(this).parent().addClass("on").siblings().removeClass("on");
		//1-2) animate
		var tgIdx=$(this).parent().index();
		var tgPosY=cntPosY[tgIdx];
		//console.log(tgIdx, tgPosY);
		$(window).off("scroll");
		if ($(window).width()>768) {
			$("html, body").stop().animate({scrollTop:tgPosY}, 700, function  () {
				$(window).on("scroll",scrollMove);
			});
		}
		if ($("#snb ul li.color_b").hasClass("on")) {
			$("#snb ul li .txt").css("color","#000");
			$("#snb ul li.on .txt").css("color","#c70850");
		}else {
			$("#snb ul li .txt").css("color","#fff");
			$("#snb ul li.on .txt").css("color","#c70850");
		}
		return false;
	});

	//2) �ㅽ겕濡ㅻ컮 ��吏곸씠湲�
	$(window).on("scroll",scrollMove);
	function scrollMove () {
		var srollY=$(window).scrollTop();
		//console.log(srollY);

		for (var i=0; i<=total; i++) {
			if (srollY>=cntPosY[i]) {
				$menu.eq(i).addClass("on").siblings().removeClass("on");
			}
			else if (srollY==cntPosY[total]) {
				$menu.eq(i).addClass("on").siblings().removeClass("on");
			}
			if ($("#snb ul li.color_b").hasClass("on")) {
				$("#snb ul li .txt").css("color","#000");
				$("#snb ul li.on .txt").css("color","#c70850");
			}else {
				$("#snb ul li .txt").css("color","#fff");
				$("#snb ul li.on .txt").css("color","#c70850");
			}
		}
	}

	//3) 留덉슦�ㅽ쑀 ��吏곸씠湲�

	$cnt.on("mousewheel DOMMouseScroll",function  (e) {
		e.preventDefault();
		var wheelNum=e.originalEvent.wheelDelta || e.originalEvent.detail*-1;
		var thisIdx=$(this).index();
		//console.log(wheelNum, thisIdx);
		if ($(window).width()>768) {
			if (!$("html, body").is(":animated")) {
				//�꾨옒濡� �대룞(�뚯닔), �꾨줈 �대룞(�묒닔)
				if (wheelNum<0 && thisIdx<total) {
					$("html, body").stop(true).animate({scrollTop:cntPosY[thisIdx+1]},700,"easeInOutQuad");
					return false;
				}else if (wheelNum>0 && thisIdx>0) {
					$("html, body").stop(true).animate({scrollTop:cntPosY[thisIdx-1]},700,"easeInOutQuad");
					return false;
				}

				if (wheelNum>0 && thisIdx==3 && $(document).height()-$(window).height()==$(window).scrollTop()) {
					$("html, body").stop(true).animate({scrollTop:cntPosY[thisIdx]},700,"easeInOutQuad");
					return false;
				}
			}
		}
	});
}
