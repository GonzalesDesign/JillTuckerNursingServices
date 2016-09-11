/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Landing Page
 * Description: Includes the following; Logo, Menu, Carousel
 ***********************************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";
	console.log("landingPage.es6");

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
	// let landingPageDescriptionId = $( "#landingPageDescriptionId" )

	const fLandingPageAjax = () => {
		let promise = $.get( "./js/json/landingPage.json" );
		promise.then( function( data ) {
			let jx = 0;
			let ji = 0;
			for ( let introData of data.LandingPageContent ) {
				/**-----| Logo |-----**/
				createDiv.fCreateTag( "div", "logo", "logoClass", jx, logoContainerId );
				let logoId = $( "#logo" + "Id_" + jx );
				/**-----| Company Logo Image |-----**/
				createNewImg.fCreateNewImage( logoId, introData.companyLogo, "80%", "White" );
				/**-----| CONCIERGE HOME CARE NURSING |-----**/
				createDiv.fCreateTag( "div", "logoSubTitle", "logoSubTitleClass", jx, logoContainerId );
				//let logoSubTitleId = $("#logoSubTitleId_"+jx);
				let logoSubTitleId = document.getElementById( "logoSubTitle" + "Id_" + jx );
				logoSubTitleId.innerHTML = introData.introSubTitle;
				/**-----| ADDRESS: NY & DC |-----**/
				createDiv.fCreateTag( "div", "logoAddress", "logoAddressClass", jx, logoContainerId );
				let logoAddressId = document.getElementById( "logoAddress" + "Id_" + jx );
				logoAddressId.innerHTML = introData.logoAddress;
				/**-----| Menu Navigation |-----**/
				createDiv.fCreateTag( "div", "menuNavContainer", "menuNavContainerClass", jx, menuNavClass );
				let menuNavContainerId = document.getElementById( "menuNavContainer" + "Id_" + jx );

				for ( let menus of introData.mainMenuNavs ) {
					ji++;
					createDiv.fCreateTag( "div", "menu", "menuClass", ji, menuNavContainerId );
					let menuId = document.getElementById( "menu" + "Id_" + ji );
					//let menuId = $("#menu" + "Id_" + ji);
					//let menuId = $("#menuId_" + ji);
					let menuClass = $( ".menuClass" );
					menuId.innerHTML = menus.menu;

					/**-----| Menu anchor links |-----**/
					$( menuId ).click( () => {
						fGoTo( menus.link );
						//Email contact form nav menu button
						if(menus.menu === "Contact"){
							$('#myModal').modal('show');
						}
					} );
				}

				/**-----| Images Carousel |-----**/
				let createCarousel = new carouselCreate.fBuildCarousel();

				/**-----| Landing Page Description |-----**/
				// createDiv.fCreateTag( "div", "landingPage", "landingPageClass", jx, landingPageDescriptionId );
				// let landingPageId = document.getElementById( "landingPage" + "Id_" + jx );
				//let x = $("#landingPage" + "Id_" + jx);
				// let strng = introData.landingPageDescription;
				// let subStrng = strng.substr( 0, 700 );
				// landingPageId.innerHTML = subStrng;
			}

			/**-----| Screen resize querie on load |-----**/
			fLandingPageResize();

		} )
	};

	let screenXSmall = 550;
	let screenSmall = 750;
	let screenMedium = 970;
	let largeScreen = 1200;

	let fLandingPageResize = () => {
		console.log("fLandingPageResize: ");
		let browserWidth = window.innerWidth;
		let menuClass = $( ".menuClass" );
		let largeFont = "28px";
		let medFont = "26px";
		let smallFont = "22px";
		let tinyFont = "18px";

		/*-----[ Largest Screen ]-----*/
		if ( browserWidth > largeScreen ) {
			menuClass.css( {
					"font-size": largeFont,
					"padding-left": "34px",
					"padding-right": "34px"
				} )
				/*-----[ .container is between largeScreen and screenMedium width ]-----*/
		} else if ( browserWidth <= largeScreen && browserWidth > screenMedium ) {
			menuClass.css( {
					"font-size": largeFont,
					"padding-left": "12px",
					"padding-right": "12px"
				} )
				/*-----[ .container is between screenMedium and screenSmall width ]-----*/
		} else if ( browserWidth <= screenMedium && browserWidth > screenSmall ) {
			menuClass.css( {
					"font-size": medFont,
					"padding-left": "10px",
					"padding-right": "10px"
				} )
				/*-----[ .container is between screenSmall and screenXSmall width ]-----*/
		} else if ( browserWidth <= screenSmall && browserWidth > screenXSmall ) {
			menuClass.css( {
					"font-size": smallFont,
					"padding-left": "6px",
					"padding-right": "6px"
				} )
				/*-----[ .container is less than screenXSmall width ]-----*/
		} else {
			menuClass.css( {
				"font-size": tinyFont,
				"padding-left": "12px",
				"padding-right": "12px"
			} )
		}
	}

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fLandingPageAjax = fLandingPageAjax;
	module.exports.fLandingPageResize = fLandingPageResize;

}() );
