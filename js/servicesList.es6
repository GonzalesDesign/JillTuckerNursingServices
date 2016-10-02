/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Services List
 * Show a list of Services offered. Screen queries are divided
 	into 1 - 3 columns depends on the screen width.
 *************************************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

	/**----------===| CLASS: CREATE ELEMENTS |===----------**/
	const createElem = require( './CreateElementClass.es6' );
	let createDiv = new createElem.CreateElementAny();

	/**-----------=====| REQUIRE : NEW IMAGE |=====-----------**/
	const createIconImage = require( './newImage.es6' );
	let createNewIconImg = new createIconImage.CreateNewImage();

	/**-----------=====| DOM CACHING |=====-----------**/
	let mainContainer = $( ".mainContainer" );
	let servicesMainContainerId = $( "#servicesMainContainerId" );
	let ulContainerId = $( "#ulContainerId" );
	let serviceLi;

	const fServicesListAjax = () => {
		let promise = $.get( "./js/json/servicesList.json" );
		promise.then( function( data ) {
			let jx = 0;
			let ji = 0;
			let jj = 0;
			for ( let services of data.ServicesListContent ) {
				/*----- Services Title -----*/
				createDiv.fCreateTag( "div", "servicesContainer", "servicesContainerClass", jx, ulContainerId );
				//let servicesContainerId = $("#servicesContainer" + "Id_" + jx);
				let servicesContainerId = document.getElementById( "servicesContainer" + "Id_" + jx );
				servicesContainerId.innerHTML = services.introTitle;
				servicesContainerId.setAttribute( "name", "#" + services.introTitle );

				/*----- Services List -----*/
				let ul = document.createElement( 'ul' );
				ul.className = "servicesULClass";
				$( ul ).appendTo( ulContainerId ); //ulContainerId servicesContainerId
				let servicesULIdHeight = $( "ul" )[ 0 ].scrollHeight

				/*----- Services List Iteration -----*/
				for ( let servicesList of services.servicesList ) {
					ji++;
					/**----- Using UL & LI -----**/
					serviceLi = document.createElement( 'li' );
					//$(li).appendTo(servicesULId);
					serviceLi.className = "serviceLiClass";
					$( serviceLi ).appendTo( ul );
					serviceLi.innerHTML = serviceLi.innerHTML + servicesList.services;
					/**----- Getting the LI height -----**/
					let servicesLIIdHeight = $( serviceLi )[ 0 ].scrollHeight
				}
			}
		} )
	}

	/**----------=====| fRoundToTwo Function |=====----------**/
	/** Description: Rounds the decimals to two.
	 **-------------------------------------------------------**/
	let fRoundToTwo = function( num ) {
		return +( Math.round( num + "e+2" ) + "e-2" );
	};

	/**----------=====| fServicesResize Function |=====----------**/
	/** Description: Screen queries for this module.
	 **-----------------------------------------------------------**/
	let fServicesResize = () => {
		let browserWidth = window.innerWidth;
		let mainContainerWidth = mainContainer.width();
		let halfBrowserWidth = browserWidth / 2;
		let thirdBrowserWidth = fRoundToTwo( mainContainerWidth / 3 ) + "px";
		let quarterBrowserWidth = browserWidth / 4;
		let iconMainContainerClass = $( ".iconMainContainerClass" );
		let icon3ColumnsContainerClass = $( ".icon3ColumnsContainerClass" );
		let iconClass = $( ".iconClass" );
		let iconImageClass = $( ".iconImageClass" );
		let iconTitleClass = $( ".iconTitleClass" );
		let serviceLiClass = $( ".serviceLiClass" );

		/*-----[ Largest Screen ]-----*/
		if ( browserWidth > 1170 ) {
			iconClass.css( {
				"width": "25%"
			} );
			iconImageClass.css( {
				"float": "left"
			} );
			iconTitleClass.css( {
				"font-size": "2em",
				"top": "30px",
				"float": "left",
				"text-align": "left",
				"width": "55%"
			} );
			//fAnimIconTitle(iconTitleClass, "2em", "30px", "left", "left", "55%");
			serviceLiClass.css( {
				"width": thirdBrowserWidth
			} );
			//titleDescriptionBoxClass.css({"top": "65%", "padding-top": "30px", "padding-bottom": "40px"})

			/*-----[ .container is between 1170 and 970 width ]-----*/
		} else if ( browserWidth <= 1170 && browserWidth > 970 ) {
			iconClass.css( {
				"width": "25%"
			} );
			iconImageClass.css( {
				"float": "none"
			} );
			iconTitleClass.css( {
				"font-size": "2em",
				"top": "0px",
				"float": "none",
				"text-align": "center",
				"width": "100%"
			} );
			serviceLiClass.css( {
				"width": "50%"
			} );

			/*-----[ .container is between 970 and 750 width ]-----*/
		} else if ( browserWidth <= 970 && browserWidth > 750 ) {
			iconClass.css( {
				"width": "32%"
			} );
			iconImageClass.css( {
				"float": "none",
				"width": "120px"
			} );
			iconTitleClass.css( {
				"font-size": "2em",
				"top": "0px",
				"float": "none",
				"text-align": "center",
				"width": "100%"
			} );
			serviceLiClass.css( {
				"width": "50%"
			} );

			/*-----[ .container is between 750 and 550 width ]-----*/
		} else if ( browserWidth <= 750 && browserWidth > 550 ) {
			iconClass.css( {
				"width": "32%"
			} );
			iconImageClass.css( {
				"float": "none"
			} );
			iconTitleClass.css( {
				"font-size": "1.6em",
				"top": "0px",
				"float": "none",
				"text-align": "center",
				"width": "100%"
			} );
			serviceLiClass.css( {
				"width": "50%"
			} );

			/*-----[ .container is between 550 and 500 width ]-----*/
		} else if ( browserWidth <= 550 && browserWidth > 500 ) {
			iconClass.css( {
				"width": "60%"
			} );
			iconImageClass.css( {
				"float": "none"
			} );
			iconTitleClass.css( {
				"font-size": "2em",
				"top": "0px",
				"float": "none",
				"text-align": "center",
				"width": "100%"
			} );
			serviceLiClass.css( {
				"width": "80%"
			} );

			/*-----[ .container is less than 550 width ]-----*/
		} else {
			iconClass.css( {
				"width": "60%"
			} );
			iconImageClass.css( {
				"float": "none"
			} );
			iconTitleClass.css( {
				"font-size": "2em",
				"top": "0px",
				"float": "none",
				"text-align": "center",
				"width": "100%"
			} );
			serviceLiClass.css( {
				"width": "80%"
			} );
		}
	}

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fServicesListAjax = fServicesListAjax;
	module.exports.fServicesResize = fServicesResize;

}() );
