$(document).ready(function() {
	$(window).scroll(function(event) {
		var vitribody = $(window).scrollTop();
		var vitrigiaodien =$('.giaodien').offset().top-450;
		if (vitribody >= vitrigiaodien) {
			$('.giaodien').addClass('animate__animated animate__pulse ');
		}
	});
});