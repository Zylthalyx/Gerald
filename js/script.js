

$(document).ready(function(){

	//Hero //

		var $heroContainer = $('.hero');

	$heroContainer.height(window.innerHeight);

	$(window).resize(function() {

		$heroContainer.height(window.innerHeight);

	}

	//Isotope filters//

	var $workFilterLinks = $('.work-filters li'),

		$container = $('.work-items');

	$workFilterLinks.find('a').click(function() {

		$workFilterLinks.removeClass('active');

		$container.isotope({

			filter: $(this).attr('data-filter'),

			itemSelector: '.isotope-item',
			animationEngine : "best-available",
			masonry: {
				columnWidth: '.isotope-item'
			}

	});

		$(this).parent().addClass('active');

		return false;

});