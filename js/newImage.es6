/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Responses from Patients & Clients
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

	class CreateNewImage {
		constructor() {}
			/**----------===| NEW IMAGE CREATION |===----------**/
		fCreateNewImage( divNameId, jsonImage, bgImgSize, bgColor ) {
			let myIntroImage = new Image();
			let imagesPath = "./images/";
			myIntroImage.src = imagesPath + jsonImage; //responses.responsesImages[2].image;

			divNameId.css( {
				// "height": imgHeight,
				// "width": imgWidth,
				"background": "url(" + myIntroImage.src + ")  center center no-repeat",
				"background-color": bgColor,
				"background-size": bgImgSize, //"cover",
				"position": "relative", //relative absolute
				"float": "left",
				"opacity": "1"
			} )
		}
	}

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.CreateNewImage = CreateNewImage;


}() );
