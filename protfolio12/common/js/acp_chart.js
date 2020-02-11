$(document).ready(function(){

	/*
	 * ��씠�� �ㅼ젙
	 * stockInfo.jsp
	 * */
	$(".tab_content").hide();
	$("ul.tabs li:first").addClass("active").show();
	$(".tab_content:first").show();

	$("ul.tabs li").click(function() {

		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();

		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
	
	/*
	 *李⑦듃 
	 * */
	onChart(870, 305, '002230');
});