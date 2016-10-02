/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Previous News
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

	/**----------===| CLASS: CREATE ELEMENTS |===----------**/
	const createElem = require( './CreateElementClass.es6' );
	let createDiv = new createElem.CreateElementAny();

	/**-----------=====| DOM CACHING |=====-----------**/
	// let mainContainer = $( ".mainContainer" );
	// let previousNewsMainContainerClass = $( ".previousNewsMainContainerClass" );
	// let previousNewsMainContainerId = $( "#previousNewsMainContainerId" );
	 let previousNewsContainerClass = $( ".previousNewsContainerClass" );
	let previousNewsContainerId = $( "#previousNewsContainerId" );

	const fPreviousNewsAjax = () => {
		let promise = $.get( "./js/json/previousNews.json" );
		promise.then( function( data ) {
			console.log("data: ", data);
			let jx = 0;
			let ji = 0;
			for ( let prevNews of data.PreviousNewsListContent ) {
				console.log("prevNews: ", prevNews);
				/**-----| Create div to hold the title |-----**/
				createDiv.fCreateTag( "div", "previousNewsTitleContainer", "previousNewsTitleContainerClass", jx, previousNewsContainerId );
				let previousNewsTitleContainerId = document.getElementById( "previousNewsTitleContainer" + "Id_" + jx );
				console.log("previousNewsTitleContainerId: ", previousNewsTitleContainerId);
				previousNewsTitleContainerId.innerHTML = prevNews.introTitle;
				console.log("prevNews.introTitle: ", prevNews.introTitle);

				/**----------===| previousNews |===----------**/
				for ( let previousNews of prevNews.previousNews ) {
					ji++;
					createDiv.fCreateTag( "div", "previousNewsContainer", "previousNewsContainerClass", ji, previousNewsContainerId );
					let previousNewsContId = document.getElementById( "previousNewsContainer" + "Id_" + ji );
					previousNewsContId.innerHTML = previousNews.previousNews;
				}
			}
		} )
	};

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fPreviousNewsAjax = fPreviousNewsAjax;

}() );
