$(function(){
	var oShaiXuan = $(".shaixuan");
	var oFilter = $(".filter");
	var oDel = $(".del");
	var oConfire = $(".confire");
	var aLi = $(".nav li");

	oShaiXuan.on("touchstart",showFilter);
	oDel.on("touchend",showFilter);
	oConfire.on("touchend",showFilter);
	aLi.on("touchend",change);

	function showFilter(){
		oFilter.toggleClass('show');
	}

	function change() {
		$(this).addClass('current').siblings().removeClass('current');
	}

});