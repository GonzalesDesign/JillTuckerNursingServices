/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Testimonials from Patients & Clients
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";
	console.log("testimonials");

	/**----------===| MODULE: COMMON |===----------**/
	var common = require("./common");

	/**----------===| CLASS: CREATE ELEMENTS |===----------**/
	const createElem = require( './CreateElementClass.es6' );
	let createDiv = new createElem.CreateElementAny();

	/**-----------=====| DOM CACHING |=====-----------**/
	let mainContainer = $( ".mainContainer" );
	let testimonialsMainContainerClass = $( ".testimonialsMainContainerClass" );
	let testimonialsMainContainerId = $( "#testimonialsMainContainerId" );
	let testimonialsContainerClass = $( ".testimonialsContainerClass" );
	let testimonialsContainerId = $( "#testimonialsContainerId" )

	const fTestimonialsAjax = () => {
		let promise = $.get( "./js/json/testimonials.json" );
		console.log("testimonials.json");
		promise.then( function( data ) {
			console.log("data: ");
			let jx = 0;
			let ji = 0;
			for ( let testimonials of data.TestimonialsListContent ) {
				console.log("data");
				/**-----| Create div to hold the title |-----**/
				createDiv.fCreateTag( "div", "testimonialTitleContainer", "testimonialTitleContainerClass", jx, testimonialsContainerId );
				let testimonialTitleContainerId = document.getElementById( "testimonialTitleContainer" + "Id_" + jx );
				testimonialTitleContainerId.innerHTML = testimonials.introTitle;

				/**----------===| testimonials |===----------**/
				for ( let testimonial of testimonials.testimonials ) {
					ji++;
					createDiv.fCreateTag( "div", "testimonialsContainer", "testimonialsContainerClass", ji, testimonialsContainerId );
					let testimonialsContId = document.getElementById( "testimonialsContainer" + "Id_" + ji );
					testimonialsContId.innerHTML = testimonial.testimonial;
				}
			}
		} )
	};

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fTestimonialsAjax = fTestimonialsAjax;

}() );
