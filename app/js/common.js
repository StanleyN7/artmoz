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
	$(window).resize(function() {
		if ($( window ).width() >= 1200){
			closeMobMenu();
		}
		mainPadding();
	});
	function closeMobMenu () {
		$('.menu').removeClass('active');
		$('.sub-menu').slideUp(300);
		$('.menu_item_submenu a').removeClass('active');
	}



$(window).on('load', function(){
	// console.log($('header').outerHeight());
	// $('.main').css('padding-top', $('header').outerHeight() + 'px');
	mainPadding();
});

function mainPadding () {
	$('.main').css('padding-top', $('header').outerHeight() + 'px');
}



