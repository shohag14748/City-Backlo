$(document).ready(function() {
	var bg = $('.main-content-top').height()+50;
	$('.body .bg').css({
		height: bg,
		minHeight: 200
	});
	$(window).resize(function() {
		var bg = $('.main-content-top').height()+50;
		$('.body .bg').css({
			height: bg,
			minHeight: 200
		});
		if($(window).width()>991){
			$('.open').removeClass('icon-rotate');
			$('.nav-left').removeClass('nav-left-show');
			$('.nav-left span').removeClass('nav-left-close');
		}
	});
	$('.open').on('click',function(){
		$(this).toggleClass('icon-rotate');
		$('.nav-left').toggleClass('nav-left-show');
		$('.nav-left span').toggleClass('nav-left-close');
	});
});