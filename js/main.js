$(document).ready(function(){
	$('.nav-min__icon').click(function(){
		$(this).toggleClass('open');
        $('.nav').fadeToggle(300);
	});
});