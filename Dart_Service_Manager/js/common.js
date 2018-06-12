$(function() {

	var toggle = $('.toggle-mnu'),
			mnu = $('.main-mnu');

		toggle.on('click', function(e){
			e.preventDefault();
			toggle.toggleClass("on");
			mnu.slideToggle();
			return false;
		});

	var $services = $('.services-content-accordion');
	$services.find('li:first .services-content-text').css("display","block").toggleClass('show');
	$services.find('li:first').toggleClass('active');

	$('.services-content-title').click(function(e) {
	
		var $this = $(this);
	
		if ($this.next().hasClass('show')) {
				$this.parent().removeClass('active');
				$this.next().removeClass('show');
				$this.next().slideUp(350);
		} else {
				$this.parent().parent().find('li .services-content-text').removeClass('show');
				$this.parent().parent().find('li').removeClass('active');
				$this.parent().parent().find('li .services-content-text').slideUp(350);
				$this.next().toggleClass('show');
				$this.parent().toggleClass('active');
				$this.next().slideToggle(350);
		}
});

	$('.customers-review').slick({
		slidesToShow: 2,
		vertical: true,
		draggable: false,
		slidesToScroll: 1,
		nextArrow: '<i class="fas fa-chevron-down"></i>',
		prevArrow: '<i class="fas fa-chevron-up"></i>',
		responsive: [
		{
			breakpoint: 868,
			settings: {
				slidesToShow: 1,
			}
		}
	]
	});

	$('.team-carousel-img, .team-carousel-text').slick({
		slidesToShow: 3,
		draggable: false,
		slidesToScroll: 1,
		centerMode: true,
		autoplay: true,
		arrows: false,
		centerPadding: 0,
		pauseOnFocus: false,
		pauseOnHover: false,
		autoplaySpeed: 9000,
		responsive: [
		{
			breakpoint: 868,
			settings: {
				slidesToShow: 1,
			}
		}
	]
	});

	function onResize() {
		$('.tool-item-img-wrap').matchHeight();
		$('.customers-review-item-text').equalHeights();
		$('.team-carousel-item-img').equalHeights();
	}onResize();
	window.onresize = function() {onResize()};

});
