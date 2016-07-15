/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Screen Queries
 * Usage: For different screen sizes
 ***********************************************/

(function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

    /**-----------=====| DOM CACHING |=====-----------**/
	let mainContainer = $(".mainContainer");

    /**-----------=====| SCREEN QUERIES CLASS |=====-----------**/
    class ScreenQueries {
		constructor() {}

        fScreenQueries(myFunct1()){
            let mainContainerWidth = mainContainer.width();

            if(mainContainerWidth > 1200){
                myFunct1();
            }
        }
    }

    let fIlScreenResize = () => {
		let mainContainerWidth = mainContainer.width();
		//console.log("mainContainerWidth: ", mainContainerWidth);
		//let li = $("li")
		let serviceLiClass = $(".serviceLiClass");
		let ulContainerClass = $(".ulContainerClass");
		if (mainContainerWidth > 1000) {
            console.log("serviceLiClass: ",serviceLiClass)
			serviceLiClass.css({
				"width": "25%"
			})
			ulContainerClass.css({
				"height": "280px"
			})
		} else if (mainContainerWidth <= 720 && mainContainerWidth > 450) {
			serviceLiClass.css({
				"width": "50%"
			})
			ulContainerClass.css({
				"height": "400px"
			})
		} else if (mainContainerWidth <= 450) {
			serviceLiClass.css({
				"width": "80%"
			})
			ulContainerClass.css({
				"height": "640px"
			})
		} else {
			serviceLiClass.css({
				"width": "30%"
			})
			ulContainerClass.css({
				"height": "340px"
			})
		}
	}


    /**-----------=====| EXPORTS |=====-----------**/
	module.exports.ScreenQueries = ScreenQueries;

}());
