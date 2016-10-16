/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Back to top
 * Description: An arrow pointing up, clcik and brings you to the top of the page.
 ********************************************************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

	/**-----------=====| DOM CACHING |=====-----------**/
	let backToTopContainerId = $( "#backToTopContainerId" );

	/**----------===| CLASS: CREATE ELEMENTS |===----------**/
	const createElem = require( './CreateElementClass.es6' );
	let createDiv = new createElem.CreateElementAny();

	let fBackToTop = () => {
		let inWindowHeight = window.innerHeight -100; // / 2;
		//console.log("inWindowHeight: ",inWindowHeight);
		let inWindowWidth = window.innerWidth;
		createDiv.fCreateTag( "div", "backToTop", "backToTopClass", 0, backToTopContainerId );
		let backToTopId = $( "#backToTop" + "Id_" + 0 );

		/**-----| Back to top links |-----**/
		$( backToTopId ).click( () => {
			location.href = "#ContactBanner";
		} );

		/**----------===| CLASS: CREATE NEW IMAGE |===----------**/
		const createImgElem = require( './newImage.es6' );
		let createImg = new createImgElem.CreateNewImage();
		/**-----| Back to top Image |-----**/
		backToTopId.css( {
			"height": "50px",
			"width": "50px",
			"background": "url(./images/backToTop.png)  center center no-repeat",
			"title": "some alt",
			//"background-color": "white",
			"background-size": "cover", //"cover",
			"position": "fixed", //relative absolute
			"right": "0px",
			"margin": "20px",
			"float": "right",
			"top": inWindowHeight,
			"opacity": "1",
			"cursor": "pointer",
			"border": "0px solid grey"
		} );
	}

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fBackToTop = fBackToTop;

}() );
