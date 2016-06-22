/*
	Arcana by Pixelarity
	html5up.net | @ajlkn
	License: pixelarity.com/license
*/

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				offsetY: -15,
				hoverDelay: 0,
				alignment: 'center'
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title"></span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery);

//Slick slider
$(document).ready(function(){
    //Drug page slider, no autoplay
      $('.slider').slick({
        dots: true,
        slidesToShow: 1,
          cssEase: 'linear'
      });
    //Home page slider, autoplay
      $('.slider-home').slick({
        dots: true,
        slidesToShow: 1,
          autoplay: true,
        autoplaySpeed: 5000,
          cssEase: 'linear'
      });
    });

//Footer social icons
//$(".icons").html("<ul class=\"icons\"><li><a href=\"#\" class=\"icon fa-twitter\"><span class=\"label\">Twitter</span></a></li><li><a href=\"#\" class=\"icon fa-facebook\"><span class=\"label\">Facebook</span></a></li><li><a href=\"#\" class=\"icon fa-github\"><span class=\"label\">GitHub</span></a></li><li><a href=\"#\" class=\"icon fa-linkedin\"><span class=\"label\">LinkedIn</span></a></li><li><a href=\"#\" class=\"icon fa-google-plus\"><span class=\"label\">Google+</span></a></li></ul>");

//Footer copyright content
$(".copyright").html("<div class=\"copyright\"><ul class=\"menu\"><li>&copy; EMIT 2016. All rights reserved.</li><li>The information on this website is intended to supplement the advice given to you by your transplant team. There may be side effects or instructions that are not listed on this website. If you feel you need more information, please contact your transplant physician or clinical pharmacist.</li></ul></div>");