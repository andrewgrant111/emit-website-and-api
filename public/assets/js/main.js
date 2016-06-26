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

//Navigation
$("#nav").html("<ul><li><a href=\"/\">Home</a></li>" +
"<li><a href=\"/general-medication-info/\"  id=\"general-medication-info\">General Medication Info</a><ul>" +
"<li><a href=\"/general-medication-info/rejection\">Rejection</a></li>" +
"<li><a href=\"/general-medication-info/vaccination-after-transplant/\">Vaccination After Transplant</a></li>" +
"<li><a href=\"/general-medication-info/over-the-counter-medication/\">Over-the-Counter Medication</a></li>" +
"<li><a href=\"/general-medication-info/cyotoxic-safety-precautions/\">Cytotoxic Safety Precautions</a></li>" +
"<li><a href=\"/general-medication-info/dental-protocol/\">Dental Protocol</a></li>" +
"<li><a href=\"/general-medication-info/cancer-risks/\">Cancer Risks</a></li></ul></li>" +
"<li><a href=\"/anti-rejection-medication/\" id=\"anti-rejection-medication\">Anti-Rejection Medication</a><ul>" +
"<li><a href=\"/anti-rejection-medication/tacrolimus/\">Tacrolimus</a></li>" +
"<li><a href=\"/anti-rejection-medication/mycophenolate/\">Mycophenolate</a></li>" +
"<li><a href=\"/anti-rejection-medication/azathioprine/\">Azathioprine</a></li>" +
"<li><a href=\"/anti-rejection-medication/cyclosporine/\">Cyclosporine</a></li>" +
"<li><a href=\"/anti-rejection-medication/prednisone/\">Prednisone</a></li>" +
"<li><a href=\"/anti-rejection-medication/sirolimus/\">Sirolimus</a></li></ul></li>" +
"<li><a href=\"/anti-infection-medication/\">Anti-Infection Medication</a><ul>" +
"<li><a href=\"/anti-infection-medication/bacterial-infection/\">Bacterial Infection</a></li>" +
"<li><a href=\"/anti-infection-medication/fungal-infection/\">Fungal  Infection</a><ul>" +
"<li><a href=\"/anti-infection-medication/fungal-infection/sulfamethoxazole-trimethoprim/\">Sulfamethoxazole / Trimethoprim</a></li>" +
"<li><a href=\"/anti-infection-medication/fungal-infection/pentamidine/\">Pentamidine</a></li>" +
"<li><a href=\"/anti-infection-medication/fungal-infection/dapsone/\">Dapsone</a></li>" +
"<li><a href=\"/anti-infection-medication/fungal-infection/fluconazole/\">Fluconazole</a></li></ul></li>" +
"<li><a href=\"/anti-infection-medication/viral-infection/\">Viral  Infection</a><ul>" +
"<li><a href=\"/anti-infection-medication/viral-infection/valganciclovir/\">Valganciclovir</a></li>" +
"<li><a href=\"/anti-infection-medication/viral-infection/valacyclovir/\">Valacyclovir</a></li>" +
"<li><a href=\"/anti-infection-medication/viral-infection/lamivudine/\">Lamivudine</a></li></ul></li></ul></li>" +
"<li><a href=\"/about/\">About Us</a></li><li><a href=\"/contact/\">Contact Us</a></li></ul>");

(function() {
	var nav = document.getElementById('nav'),
	anchor = nav.getElementsByTagName('a'),
	current = window.location.pathname.split('/')[1];
	for (var i = 0; i < anchor.length; i++) {
		var anchorMenu = anchor[i].pathname.split('/')[1] //anchor[i].href.split('/')[3]
		if(anchorMenu == current) {
			anchor[i].parentElement.className = "current";
		}
	}
})();

//Footer social icons
//$(".icons").html("<ul class=\"icons\"><li><a href=\"#\" class=\"icon fa-twitter\"><span class=\"label\">Twitter</span></a></li><li><a href=\"#\" class=\"icon fa-facebook\"><span class=\"label\">Facebook</span></a></li><li><a href=\"#\" class=\"icon fa-github\"><span class=\"label\">GitHub</span></a></li><li><a href=\"#\" class=\"icon fa-linkedin\"><span class=\"label\">LinkedIn</span></a></li><li><a href=\"#\" class=\"icon fa-google-plus\"><span class=\"label\">Google+</span></a></li></ul>");

//Footer copyright content
$(".copyright").html("<div class=\"copyright\"><ul class=\"menu\"><li>&copy; EMIT 2016. All rights reserved.</li><li>The information on this website is intended to supplement the advice given to you by your transplant team. There may be side effects or instructions that are not listed on this website. If you feel you need more information, please contact your transplant physician or clinical pharmacist.</li></ul></div>");
