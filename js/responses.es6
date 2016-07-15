/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Responses from Patients & Clients
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

	/**----------===| CLASS: CREATE ELEMENTS |===----------**/
	const createElem = require( './CreateElementClass.es6' );
	let createDiv = new createElem.CreateElementAny();

	/**-----------=====| DOM CACHING |=====-----------**/
	let mainContainer = $( ".mainContainer" );
	let responsesMainContainerClass = $( ".responsesMainContainerClass" );
	let responsesMainContainerId = $( "#responsesMainContainerId" );
	let responsesContainerClass = $( ".responsesContainerClass" );
	let responsesContainerId = $( "#responsesContainerId" )

	const fResponsesAjax = () => {
		let promise = $.get( "./js/json/responses.json" );
		promise.then( function( data ) {
			let jx = 0;
			let ji = 0;
			for ( let responses of data.ResponsesListContent ) {
				/**-----| Create div to hold the title |-----**/
				createDiv.fCreateTag( "div", "responseTitleContainer", "responseTitleContainerClass", jx, responsesContainerId );
				let responseTitleContainerId = document.getElementById( "responseTitleContainer" + "Id_" + jx );
				responseTitleContainerId.innerHTML = responses.introTitle;

				/**----------===| RESPONSES |===----------**/
				for ( let response of responses.responses ) {
					ji++;
					createDiv.fCreateTag( "div", "testimonialsContainer", "testimonialsContainerClass", ji, responsesContainerId );
					let testimonialsContainerId = document.getElementById( "testimonialsContainer" + "Id_" + ji );
					testimonialsContainerId.innerHTML = response.response;
				}
			}
		} )
	};

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fResponsesAjax = fResponsesAjax;

}() );
