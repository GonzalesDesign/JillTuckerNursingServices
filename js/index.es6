/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Index 071416
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";
	console.log("index.es6x");
	let d = new Date();
	let n = d.getMinutes();
	console.log("Date in minutes: ", n);

	/**----------===| MODULE: COMMON |===----------**/
	var common = require("./common");

	/**----------===| MODULE: LANDING PAGE |===----------**/
	const landingPage = require( './landingPage.es6' );
	landingPage.fLandingPageAjax();
	landingPage.fLandingPageResize();

	/**----------===| MODULE: IMAGE CAROUSEL |===----------**/
	const imageCarousel = require( './imageCarousel.es6' );
	imageCarousel.fCarouselResize();

	/**----------===| MODULE: LANDING PAGE DESCRIPTION |===----------**/
	const landingPageDesc = require( './landingPageDescription.es6' );
	landingPageDesc.fLandingPageDescAjax();
	landingPageDesc.fLandingPageDescResize();

	/**----------===| MODULE: SERVICES |===----------**/
	const servicesList = require( './servicesList.es6' );
	servicesList.fServicesListAjax();

	/**----------===| MODULE: RESPONSES |===----------**/
	const responsesSection = require( './responses.es6' );
	responsesSection.fResponsesAjax();

	/**----------===| MODULE: HEALTH CARE |===----------**/
	const halthCareSection = require( './healthCare.es6' );
	halthCareSection.fHealthCareAjax();

	/**----------===| MODULE: ABOUT || EXPERIENCE |===----------**/
	const aboutSection = require( './about.es6' );
	aboutSection.fAboutAjax();

	/**----------===| MODULE: TESTIMONIALS |===----------**/
	// const testimonialsSection = require( './testimonials.es6' );
	// testimonialsSection.fTestimonialsAjax();

	/**----------===| FUNCTION: SCREEN RESIZE QUERIES |===----------**/
	let fOnWindowResize = function() {

		servicesList.fServicesResize();

		landingPage.fLandingPageResize();
		
		landingPageDesc.fLandingPageDescResize();

		imageCarousel.fCarouselResize();

	}

	$( window ).on( 'resize', fOnWindowResize );

}() );
