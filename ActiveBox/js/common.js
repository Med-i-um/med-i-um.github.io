$(function() {

	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('.top-line').addClass('fixed');
		} else {
			$('.top-line').removeClass('fixed');
		}
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

		// Mobile Navigation
	$('.mobile-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.mobile-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});

	$('.work-item').fancybox();

	$('.carousel-testimonials').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplayHoverPause: true,
		autoplaySpeed: 750,
		smartSpeed: 750,
		responsiveClass: true,
	});

	function onResize() {
		$('.carousel-testimonials-content').matchHeight();
	}onResize();
	window.onresize = function() {onResize()};

});