
$(document).ready(function(){
	
	//사업장
	/*$('.map_local:first').show();
	
		$('.tab2 li a').click(function(){
			$('.tab2 li a').removeClass('on');
			$(this).addClass('on');

			$('.map_local').hide();
			var map_c = $(this).attr("rel");
			$("#" + map_c).fadeIn();

			 if ($(this[href$=""])){
				
			 }
		});*/

		//제품정보 탭
		var prodTab = $('.prod_tab li').length;
		if(prodTab == 4){
			$('.prod_tab li').css('width','25%');
		}else if(prodTab == 3){
			$('.prod_tab li').css('width','33.3%');
		}else if(prodTab == 2){
			$('.prod_tab li').css('width','50%');
		}else if(prodTab == 1){
			$('.prod_tab li').css('width','100%');
		}
});

