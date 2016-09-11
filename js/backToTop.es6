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
	// let mainContainer = $( ".mainContainer" );
	// let responsesMainContainerClass = $( ".responsesMainContainerClass" );
	// let responsesMainContainerId = $( "#responsesMainContainerId" );
	// let responsesContainerClass = $( ".responsesContainerClass" );
	// let responsesContainerId = $( "#responsesContainerId" )

	/**----------===| CLASS: CREATE ELEMENTS |===----------**/
	const createElem = require( './CreateElementClass.es6' );
	let createDiv = new createElem.CreateElementAny();

	let fBackToTop = () => {
		let inWindowHeight = window.innerHeight -100; // / 2;
		console.log("inWindowHeight: ",inWindowHeight);
		let inWindowWidth = window.innerWidth;
		createDiv.fCreateTag( "div", "backToTop", "backToTopClass", 0, backToTopContainerId );
		let backToTopId = $( "#backToTop" + "Id_" + 0 );
		//backToTopId.title = "titleString";
		//backToTopId.setAttribute('alt', 'new alt');
		//backToTopId.alt = 'foo';
		/**-----| Back to top links |-----**/
		$( backToTopId ).hover( () => {
			//this.alt = "ContactBanner";
			//setAttribute('alt', 'new alt');
			//backToTopId.title = "titleString";
		} );
		$( backToTopId ).click( () => {
			location.href = "#ContactBanner";
		} );
		// let responseTitleContainerId = document.getElementById( "responseTitleContainer" + "Id_" + jx );
		// responseTitleContainerId.innerHTML = responses.introTitle;

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

		/**----------===| FUNCTION: SCREEN RESIZE QUERIES |===----------**/
		// let fOnWindowResize = function() {
		// 	backToTopId.css( {
		// 		"height": "50px",
		// 		"width": "50px",
		// 		"background": "url(./images/backToTop.png)  center center no-repeat",
		// 		"background-color": "white",
		// 		"background-size": "cover", //"cover",
		// 		"position": "fixed", //relative absolute
		// 		"right": "0px",
		// 		"margin": "20px",
		// 		"float": "right",
		// 		"top": inWindowHeight,
		// 		"opacity": "1",
		// 		"border": "1px solid red"
		// 	} );
		// }
		//
		// $( window ).on( 'resize', fOnWindowResize );

		// $CopyFontSize $titleFontSize $contactFontSize

		// createImg.fCreateNewImage( backToTopId, "backToTop.png", "100px", "white" );
		// backToTopId.css( {
		// 	// "height": 100px,
		// 	// "width": 100px
		// }
		// 	"height": "100px",
		// 	"width": "100px",
		// 	"position": "fixed", //relative absolute
		// 	"float": "right",
		// 	"top": "200px"
		// 	"opacity": "1"
		// } )

		//createNewImg.fCreateNewImage( logoId, introData.companyLogo, "80%", "White" );

		// position: fixed;
	    // float: left;
	    // opacity: 1;
	    // background: url("http://localhost:8080/images/backToTop.png") center center / 100px no-repeat white;
	    // border: 1px solid black;
	    // height: 100px;
	    // width: 100px;
	    // top: 200px;

	}
	//
	// const fResponsesAjax = () => {
	// 	let promise = $.get( "./js/json/responses.json" );
	// 	promise.then( function( data ) {
	// 		let jx = 0;
	// 		let ji = 0;
	// 		for ( let responses of data.ResponsesListContent ) {
	// 			/**-----| Create div to hold the title |-----**/
	// 			createDiv.fCreateTag( "div", "responseTitleContainer", "responseTitleContainerClass", jx, responsesContainerId );
	// 			let responseTitleContainerId = document.getElementById( "responseTitleContainer" + "Id_" + jx );
	// 			responseTitleContainerId.innerHTML = responses.introTitle;
	//
	// 			/**----------===| RESPONSES |===----------**/
	// 			for ( let response of responses.responses ) {
	// 				ji++;
	// 				createDiv.fCreateTag( "div", "testimonialsContainer", "testimonialsContainerClass", ji, responsesContainerId );
	// 				let testimonialsContainerId = document.getElementById( "testimonialsContainer" + "Id_" + ji );
	// 				testimonialsContainerId.innerHTML = response.response;
	// 			}
	// 		}
	// 	} )
	// };

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fBackToTop = fBackToTop;

}() );
