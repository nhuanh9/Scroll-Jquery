$(document).ready(function() {
	$(window).scroll(function(event) {
		console.log($(window).scrollTop());
		var vitri = $(window).scrollTop();
		if (vitri >=800) {
			$('.menutren').addClass('bienhinh');
		} else  {
			$('.menutren').removeClass('bienhinh');
		}
	});
});