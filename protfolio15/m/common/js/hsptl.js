	function district(str){

		var arr0	= [];
		var arr1	= [	"종로구","중구","용산구","성동구","광진구","동대문구","중랑구","성북구","강북구","도봉구",
						"노원구","은평구","서대문구","마포구","양천구","강서구","구로구","금천구","영등포구","동작구",
						"관악구","서초구","강남구","송파구","강동구"];
		var arr2	= [	"가평군","고양시 덕양구","고양시 일산동구","고양시 일산서구","과천시","광명시","광주시","구리시","군포시","김포시",
						"남양주시","동두천시","부천시","성남시 분당구","성남시 수정구","성남시 중원구","수원시 권선구","수원시 영통구","수원시 장안구","수원시 팔달구",
						"시흥시","안산시 단원구","안산시 상록구","안성시","안양시 동안구","안양시 만안구","양주시","양평군","여주시","연천군",
						"오산시","용인시 기흥구","용인시 수지구","용인시 처인구","의왕시","의정부시","이천시","파주시","평택시","포천시",
						"하남시","화성시"];
		var arr3	= [	"강릉시","고성군","동해시","삼척시","속초시","양구군","양양군","영월군","원주시","인제군",
						"정선군","철원군","춘천시","태백시","평창군","홍천군","화천군","횡성군"];
		var arr4	= [	"거제시","거창군","고성군","김해시","남해군","밀양시","사천시","산청군","양산시","의령군",
						"진주시","창녕군","창원시 마산합포구","창원시 마산회원구","창원시 성산구","창원시 의창구","창원시 진해구","통영시","하동군","함안군",
						"함양군","합천군"];
		var arr5	= [	"경산시","경주시","고령군","구미시","군위군","김천시","문경시","봉화군","상주시","성주군",
						"안동시","영덕군","영양군","영주시","영천시","예천군","울릉군","울진군","의성군","청도군",
						"청송군","칠곡군","포항시 남구","포항시 북구"];
		var arr6	= [	"광산구","남구","동구","북구","서구"];
		var arr7	= [	"남구","달서구","달성군","동구","북구","서구","수성구","중구"];
		var arr8	= [	"대덕구","동구","서구","유성구","중구"];
		var arr9	= [	"강서구","금정구","기장군","남구","동구","동래구","부산진구","북구","사상구","사하구",
						"서구","수영구","연제구","영도구","중구","해운대구"];
		var arr10	= [	"남구","동구","북구","울주군","중구"];
		var arr11	= [	"강화군","계양구","남동구","동구","미추홀구","부평구","서구","연수구","옹진군","중구"];
		var arr12	= [	"강진군","고흥군","곡성군","광양시","구례군","나주시","담양군","목포시","무안군","보성군",
						"순천시","신안군","여수시","영광군","영암군","완도군","장성군","장흥군","진도군","함평군",
						"해남군","화순군"];
		var arr13	= [	"고창군","군산시","김제시","남원시","무주군","부안군","순창군","완주군","익산시","임실군",
						"장수군","전주시 덕진구","전주시 완산구","정읍시","진안군"];
		var arr14	= [	"계룡시","공주시","금산군","논산시","당진시","보령시","부여군","서산시","서천군","아산시",
						"예산군","천안시 동남구","천안시 서북구","청양군","태안군","홍성군"];
		var arr15	= [	"괴산군","단양군","보은군","영동군","옥천군","음성군","제천시","증평군","진천군","청주시 상당구",
						"청주시 서원구","청주시 청원구","청주시 흥덕구","충주시"];
		var arr16	= [	"서귀포시","제주시"];
		var arr17	= [];

		var arr_district = {
			"":arr0,
			"서울특별시":arr1,
			"경기도":arr2,
			"강원도":arr3,
			"경상남도":arr4,
			"경상북도":arr5,
			"광주광역시":arr6,
			"대구광역시":arr7,
			"대전광역시":arr8,
			"부산광역시":arr9,
			"울산광역시":arr10,
			"인천광역시":arr11,
			"전라남도":arr12,
			"전라북도":arr13,
			"충청남도":arr14,
			"충청북도":arr15,
			"제주특별자치도":arr16,
			"세종특별자치시":arr17
		};
		setQ1( arr_district[str] );
	}

	function setQ1(arr){
		$("#Q1 option").remove();
		$("#Q1").append("<option value=''>시/군/구</option>");
		if( arr.length > 0 ){
			arr.forEach(function (item) {
				$("#Q1").append("<option value='"+item.replace(" ", "")+"'>"+item+"</option>");
			});
		}
		$("#Q1 option:eq(0)").prop("selected", true);
	}

	function getHsptlXml(){
		loadPrg("on");
		var params=$("#Q0, #Q1, #QN").serialize();
		$.ajax({
			type	: "POST",
			url		: "/api/xmlSearch.php",
			data	: params,
			dataType:"xml",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			success : function(xml) {
				xmlParse(xml);
			},
			complete : function(data) {
				// finish : success Or fail
				loadPrg("off");
			},
			error : function(xhr, status, error) {
				alert("error : " + xhr.status);
			}
		});
	}

	function xmlParse(xml){
		var tag="";
		var isFirst=true;
		if( $(xml).find("item").length>0 ){
			$(".loclist ul li").remove();
			$(xml).find("item").each(function(){
				$(".loclist ul li").slice(0, 3).show(); // 최초 10개 선택

				/*
				console.log(
					$(this).find("dutyAddr").text() + "\n" + 
					$(this).find("dutyName").text() + "\n" + 
					$(this).find("dutyTel1").text() + "\n" + 
					$(this).find("wgs84Lat").text() + "\n" + 
					$(this).find("wgs84Lon").text()
				);
				*/
				tag=
					"<li data-lat=\""+$(this).find("wgs84Lat").text()+"\" data-lng=\""+$(this).find("wgs84Lon").text()+"\" onclick=\"javascript:fnMove('1')"+"\"><dl><dt>"+
					$(this).find("dutyName").text()+
					"</dt><dd>"+
					$(this).find("dutyAddr").text()+
					"</dd></dl><span class=\"num\">"+
					$(this).find("dutyTel1").text()+"</span></li>";
				$(".loclist ul").append(tag);
				if( isFirst ){
					startMap($(this).find("wgs84Lat").text(), $(this).find("wgs84Lon").text());
					isFirst=false;
					$("#load").click(function(e){ // Load More를 위한 클릭 이벤트e
					e.preventDefault();
					$(".loclist ul li:hidden").slice(0, 3).show(); // 숨김 설정된 다음 10개를 선택하여 표시
				});
				}
			});
		} else {
			$(".loclist ul li").remove();
			endMap();
			alert("검색된 정보가 없습니다.");
			
		}
	}

	function loadPrg(str){
		if(str=="on"){$("#loadPrg").show();$("button.btn_search").hide();}
		if(str=="off"){$("#loadPrg").hide();$("button.btn_search").show();}
	}

	$(function(){
		$("button.btn_search").on("click", function(){
			getHsptlXml();
			
		});

		$(document).on("click", ".loclist ul li", function(){
			moveMap( $(this).attr("data-lat"), $(this).attr("data-lng") );
			$('.mapbx').animate({scrollTop},500);
		});

		getHsptlXml();
		district($("#Q0").val());
	});


function fnMove(seq){
	var offset = $(".mapmove" + seq).offset();
	$('html, body').animate({scrollTop : offset.top}, 400);
}
























	var map;
	var marker;
	function startMap(p_lat, p_lng){
		var lat = p_lat;
		var lng = p_lng;
		var mapPoint = new naver.maps.LatLng(lat, lng);

		map = new naver.maps.Map('mapDiv', {
			useStyleMap: true,
			center: mapPoint,
			zoom: 16
		});

		marker = new naver.maps.Marker({
			position: mapPoint,
			map: map
		});
	}

	function endMap(){
		map.destroy();
	}

	function moveMap(p_lat, p_lng){
		var lat = p_lat;
		var lng = p_lng;
		var mapPoint = new naver.maps.LatLng(lat, lng);

		marker.setPosition(mapPoint);
		map.panTo(mapPoint);
	}