/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Health Care In The News
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

	/**----------===| CLASS: CREATE ELEMENTS |===----------**/
	const createElem = require( './CreateElementClass.es6' );
	let createDiv = new createElem.CreateElementAny();

	/**-----------=====| DOM CACHING |=====-----------**/
	let mainContainer = $( ".mainContainer" );
	let healthMainContainerClass = $( ".healthMainContainerClass" );
	let healthMainContainerId = $( "#healthMainContainerId" );

	let healthContainerClass = $( ".healthContainerClass" );
	let healthContainerId = $( "#healthContainerId" )

	const fHealthCareAjax = () => {
		let promise = $.get( "./js/json/healthCare.json" );
		promise.then( function( data ) {
			let jx = 0;
			let ji = 0;
			for ( let health of data.HealthCareListContent ) {
				/**-----| Create div to hold the healthTitle |-----**/
				createDiv.fCreateTag( "div", "healthTitleContainer", "healthTitleContainerClass", jx, healthContainerId );
				let healthTitleContainerId = document.getElementById( "healthTitleContainer" + "Id_" + jx );
				healthTitleContainerId.innerHTML = health.introTitle;

				/**-----| Create div to hold Quote |-----**/
				createDiv.fCreateTag( "div", "healthQuoteContainer", "healthQuoteContainerClass", jx, healthContainerId );
				let healthQuoteContainerId = document.getElementById( "healthQuoteContainer" + "Id_" + jx );
				healthQuoteContainerId.innerHTML = health.quote[ jx ].healthQuote;
			}
		} )
	};

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fHealthCareAjax = fHealthCareAjax;

}() );
