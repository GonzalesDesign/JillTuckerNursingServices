/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Testimonials Index
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";
	console.log("testimonialsIndex.es6");

	/**----------===| MODULE: COMMON |===----------**/
	//var common = require("./common");

	/**----------===| MODULE: LANDING PAGE |===----------**/
	const landingPage2 = require( './landingPage.es6' );
	landingPage2.fLandingPageAjax();
	landingPage2.fLandingPageResize();

	/**----------===| MODULE: TESTIMONIALS |===----------**/
	const testimonialsSection = require( './testimonials.es6' );
	testimonialsSection.fTestimonialsAjax();

	/**----------===| MODULE: TESTIMONIALS |===----------**/
	const testimonialsBackToTop = require( './backToTop.es6' );
	testimonialsBackToTop.fBackToTop();

	/**----------===| FUNCTION: SCREEN RESIZE QUERIES |===----------**/
	let tI = 0;

	let fOnWindowResize = function() {

		console.log("testimonialsIndex resize: ", tI++);

		//servicesList.fServicesResize();

		landingPage2.fLandingPageResize();

		//imageCarousel.fCarouselResize();
		testimonialsBackToTop.fBackToTop();

	}

	$( window ).on( 'resize', fOnWindowResize );

}() );
