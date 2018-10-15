$(document).ready(function () {
	$('.canhcam-testimonials-1 .owl-carousel').owlCarousel({
		items: 2,
		loop: true,
		center: false,
		padding: 10,
		margin: 20,
		navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
		nav: true,
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: false,
		callbacks: true,
		responsive : {
			// breakpoint from 0 up
			480 : {
				items: 2,
			},
			// breakpoint from 480 up
			768 : {
				items: 3,
			},
			// breakpoint from 768 up
		}
	});

});

$(window).resize(function () {

})
