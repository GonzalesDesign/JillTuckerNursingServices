/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Landing Page Description
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";
	console.log("landingPageDescription.es6");

	/**----------===| CLASS: CREATE ELEMENTS |===----------**/
	const createElem = require( './CreateElementClass.es6' );
	let createDiv = new createElem.CreateElementAny();

	/**----------===| MODULE: NEW IMAGE |===----------**/
	const createImage = require( './newImage.es6' );
	let createNewImg = new createImage.CreateNewImage();

	/**----------===| MODULE: IMAGE CAROUSEL |===----------**/
	const carouselCreate = require( './imageCarousel.es6' );

	/**----------===| FUNCTION: ANCHOR LINK |===----------**/
	const fGoTo = ( link ) => {
		location.href = link;
	}

	/**-----------=====| DOM CACHING |=====-----------**/
	let mainContainer = $( ".mainContainer" );
	let landingPageContainer = $( ".landingPageContainer" );
	let landingPageContainerId = $( "#landingPageContainerId" );
	let logoContainerClass = $( ".logoContainerClass" );
	let logoContainerId = $( "#logoContainerId" );
	let menuNavClass = $( ".menuNavClass" );
	let menuNavClassId = $( "#menuNavClassId" );
	let landingPageDescriptionId = $( "#landingPageDescriptionId" )

	const fLandingPageDescAjax = () => {
		let promise = $.get( "./js/json/landingPageDescription.json" );
		promise.then( function( data ) {
			let jx = 0;
			let ji = 0;
			for ( let introData of data.LandingPageDescription ) {

				/**-----| Landing Page Description |-----**/
				createDiv.fCreateTag( "div", "landingPageDesc", "landingPageDescClass", jx, landingPageDescriptionId );
				let landingPageDescId = document.getElementById( "landingPageDesc" +
					"Id_" + jx );
				let strng = introData.landingPageDescription;
				let subStrng = strng.substr( 0, 700 );
				landingPageDescId.innerHTML = subStrng;
			}

		} )
	};

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fLandingPageDescAjax = fLandingPageDescAjax;

}() );
