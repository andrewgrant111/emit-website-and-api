/*
	Dopetrope by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
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

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				alignment: 'center'
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
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
 $(function () {
    var $panel = $('<div class="panel">13</div>');
    var slickOpts = {
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true
//           responsive: [{ 
//            breakpoint: 500,
//            settings: {
//            arrows: false
//        } 
//           }]
    };
    // Init the slick
    $('#dashboard').slick(slickOpts);
     
    var beforePrint = function() {
        $('#dashboard').unslick();
    };
    var afterPrint = function() {
        console.log('Functionality to run after printing');
    };

    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                beforePrint();
            } else {
                afterPrint();
            }
        });
    }

    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
    });

//Navigation links
$("#nav").html("<nav id=\"nav\"><ul><li><a href=\"/\">Home</a></li><li><a href=\"/general-medication-info/\">General Medication Info</a><ul><li><a href=\"/general-medication-info/rejection\">Rejection</a></li><li><a href=\"/general-medication-info/vaccination-after-transplant/\">Vaccination After Transplant</a></li><li><a href=\"/general-medication-info/over-the-counter-medication/\">Over-the-Counter Medication</a></li><li><a href=\"/general-medication-info/cyotoxic-safety-precautions/\">Cytotoxic Safety Precautions</a></li><li><a href=\"/general-medication-info/dental-protocol/\">Dental Protocol</a></li><li><a href=\"/general-medication-info/cancer-risks/\">Cancer Risks</a></li></ul></li><li><a href=\"/anti-rejection-medication/\">Anti-Rejection Medication</a><ul><li><a href=\"/anti-rejection-medication/tacrolimus/\">Tacrolimus</a></li><li><a href=\"/anti-rejection-medication/mycophenolate/\">Mycophenolate</a></li><li><a href=\"/anti-rejection-medication/azathioprine/\">Azathioprine</a></li><li><a href=\"/anti-rejection-medication/cyclosprine/\">Cyclosprine</a></li><li><a href=\"/anti-rejection-medication/prednisone/\">Prednisone</a></li><li><a href=\"/anti-rejection-medication/sirolimus/\">Sirolimus</a></li></ul></li><li><a href=\"/anti-infection-medication/\">Anti-Infection Medication</a><ul><li><a href=\"/anti-infection-medication/bacterial-infection/\">Bacterial Infection</a></li><li><a href=\"/anti-infection-medication/fungal-infection/\">Fungal  Infection</a><ul><li><a href=\"/anti-infection-medication/fungal-infection/sulfamethoxazole-trimethoprim\">Sulfamethoxazole / Trimethoprim</a></li><li><a href=\"/anti-infection-medication/fungal-infection/pentamidine\">Pentamidine</a></li><li><a href=\"/anti-infection-medication/fungal-infection/dapsone\">Dapsone</a></li><li><a href=\"/anti-infection-medication/fungal-infection/fluconazole\">Fluconazole</a></li></ul></li><li><a href=\"/anti-infection-medication/viral-infection/\">Viral  Infection</a><ul><li><a href=\"/anti-infection-medication/viral-infection/valganciclovir\">Valganciclovir</a></li><li><a href=\"/anti-infection-medication/viral-infection/valacyclovir\">Valacyclovir</a></li><li><a href=\"/anti-infection-medication/viral-infection/lamivudine\">Lamivudine</a></li></ul></li></ul></li><li><a href=\"/about\">About Us</a></li></ul></nav>");

//Footer copyright content
$("#footer").html("<div id=\"copyright\"><ul class=\"links\"><li>&copy; EMIT 2016. All rights reserved.</li></ul><br><span id=\"disclaimer\">The information on this website is intended to supplement the advice given to you by your transplant team. There may be side effects or instructions that are not listed on this website. If you feel you need more information, please contact your transplant physician or clinical pharmacist.</span></div>");

//<li>Design: <a href=\"http://www.melissastacey.ca\" target=\"_blank\">Melissa Stacey</a></li><li>Template: <a href=\"http://html5up.net\" target=\"_blank\">HTML5 UP</a></li>

//analytics content
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-78909007-1', 'auto');
  ga('send', 'pageview');

