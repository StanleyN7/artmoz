// Mobile menu
	$('.burger').on('click', function() {
		$('.menu').addClass('active');
	});
	$('.menu_item_submenu a').on('click', function(e) {
		if ($( window ).width() <= 1199){
			if(!$(this).hasClass('active')) {
				e.preventDefault();
				$('.menu_item_submenu a').removeClass('active');
				$(this).addClass('active');
				$('.sub-menu').slideUp(300);
				$(this).closest('.menu_item_submenu').find('.sub-menu').slideDown(300);
			}
		}
	});
	$('.close_menu_mob').on('click', function() {
		closeMobMenu();
	});
	$(document).on('click', function(e) {
		console.log($(e.target));
		if (!$(e.target).closest('.menu').length && !$(e.target).closest('.burger').length) {
			console.log('out');
			closeMobMenu();
		}
		e.stopPropagation();
	});
	function closeMobMenu () {
		$('.menu').removeClass('active');
		$('.sub-menu').slideUp(300);
		$('.menu_item_submenu a').removeClass('active');
	}

// Slider
	if ($('.top_news_slider').length) {
		$('.top_news_slider').sliderPro({
			width: '100%',
			height: 60,
			arrows: false,
			buttons: false,
			autoplay: false,
			// autoplay: true, // включить автоплей переключение топ новостей
			autoplayOnHover: 'none',
			orientation: 'vertical',
			keyboard: false,
			touchSwipe: false
		});
		$('.top_news_nav .prew-btn').on('click', function(){
			$('.top_news_slider').sliderPro( 'previousSlide' );
		});
		$('.top_news_nav  .next-btn').on('click', function(){
			$('.top_news_slider').sliderPro( 'nextSlide' );
		});
	}

// Header scroll
	$(document).on('scroll', function(){
		if ($( window ).width() >= 1200){
			if($(window).scrollTop() >= $('.header_top').outerHeight()){
				/*$('.header_top').slideUp(300);
				$('.top_news').slideUp(300);*/
				console.log('show');
				$('.header_content').addClass('fixed');
			} else {
				console.log('hide');
				$('.header_content').removeClass('fixed');
				/*$('.header_top').slideDown(300);
				$('.top_news').slideDown(300);*/
			}
		}
	});


// Resize main padding
	$(window).on('load', function(){
		// mainPadding();
	});
	$(window).resize(function() {
		if ($( window ).width() >= 1200){
			closeMobMenu();
		}
		// mainPadding();
	});
	function mainPadding () {
		$('.main').css('padding-top', $('header').outerHeight() + 'px');
	}

// Comments answer
	$('.answer_btn').on('click', function(){
		$(this).slideUp(300);
		$(this).closest('.comment').find('.answer_form:first').slideDown(300);
	});
	$('.cancel_btn').on('click', function(){
		$(this).closest('.comment').find('.answer_btn').slideDown(300);
		$(this).closest('.comment').find('.answer_form').slideUp(300);
	});
