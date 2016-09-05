/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: testimonials2
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";
	console.log("testimpnials2.es6");
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds();
	console.log("Time: ", h,":", m,":", s);

	/**----------===| MODULE: COMMON |===----------**/
	var common = require("./common");

	/**----------===| MODULE: LANDING PAGE |===----------**/
	const landingPage = require( './landingPage.es6' );
	landingPage.fLandingPageAjax();
	landingPage.fLandingPageResize();

	/**----------===| MODULE: IMAGE CAROUSEL |===----------**/
	const imageCarousel = require( './imageCarousel.es6' );
	imageCarousel.fCarouselResize();

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

		imageCarousel.fCarouselResize();

	}

	$( window ).on( 'resize', fOnWindowResize );

}() );
