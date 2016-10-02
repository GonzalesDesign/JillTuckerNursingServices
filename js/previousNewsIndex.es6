/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Previous News Index
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";
	console.log("previousNewsIndex.es6");

	/**----------===| MODULE: COMMON |===----------**/
	//var common = require("./common");

	/**----------===| MODULE: LANDING PAGE |===----------**/
	const landingPage2 = require( './landingPage.es6' );
	landingPage2.fLandingPageAjax();
	landingPage2.fLandingPageResize();

	/**----------===| MODULE: TESTIMONIALS |===----------**/
	const previousNewsSection = require( './previousNews.es6' );
	previousNewsSection.fPreviousNewsAjax();

	/**----------===| MODULE: TESTIMONIALS |===----------**/
	const testimonialsBackToTop = require( './backToTop.es6' );
	testimonialsBackToTop.fBackToTop();

	/**----------===| FUNCTION: SCREEN RESIZE QUERIES |===----------**/
	let fOnWindowResize = function() {

		landingPage2.fLandingPageResize();

		testimonialsBackToTop.fBackToTop();

	}

	$( window ).on( 'resize', fOnWindowResize );

}() );
