/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: About || Experience
 ***********************************************/

(function() { /*IIFE:Immediately-Invoked Function Expression*/

	/**-----------=====| IMPORT | REQUIRE |=====-----------**/
	/** Description:
	 ** Files requiring from other js files
	 **----------------------------------------------------------------**/
	const createElem = require('./CreateElementClass.es6');
	let createDiv = new createElem.CreateElementAny();

	//let servicesContainer = $(".servicesContainer");
	//let servicesContainerId = $("#servicesContainerId");
	//let servicesMainContainerId = $("#servicesMainContainerId");

	/**-----------=====| DOM CACHING |=====-----------**/
	let mainContainer = $(".mainContainer");
	let aboutMainContainerClass = $(".aboutMainContainerClass");
	let aboutMainContainerId = $("#aboutMainContainerId");

	let aboutContainerClass = $(".aboutContainerClass");
	let aboutContainerId = $("#aboutContainerId")
	//console.log("aboutContainerId: ", aboutContainerId);

	// let healthTitleClass = $(".healthTitleClass");
	// let healthTitleId = $("#healthTitleId")
	//
	// let healthQuoteClass = $(".healthQuoteClass");
	// let healthQuoteId = $("#healthQuoteId")

	const fAboutAjax = () => {
		let promise = $.get("./js/json/about.json");
		promise.then(function(data) {
			let jx = 0;
			let ji = 0;
			for (let about of data.AboutListContent) {
				//let aboutContainerId = $("#aboutContainerId")
				/**-----| Create div to hold the healthTitle |-----**/
				createDiv.fCreateTag("div", "aboutTitleContainer", "aboutTitleContainerClass", jx, aboutContainerId);
				let aboutTitleContainerId = document.getElementById("aboutTitleContainer" + "Id_" + jx);
				aboutTitleContainerId.innerHTML = about.introTitle;
				//console.log("aboutTitleContainerId: ", aboutTitleContainerId);
				//console.log("about.introTitle: ", about.introTitle);

				/**-----| Create div to hold Description |-----**/
				createDiv.fCreateTag("div", "aboutDescription", "aboutDescriptionClass", jx, aboutContainerId);
				let aboutDescriptionId = document.getElementById("aboutDescription" + "Id_" + jx);
				aboutDescriptionId.innerHTML = about.description[jx].aboutDesription;
				//console.log("aboutContainerId: ", aboutContainerId);
				//console.log("about.quote[jx].about: ", about.quote[jx].about);
			}
		})
	};

	let fLandingPageAnim = () => {
		//console.log("mainContainerWidthX: ", mainContainer.width());
	}

	// export default function fLandingPageAnim(){
	//     console.log("mainContainerWidthX: ", mainContainer.width());
	// }

	//  export default function cube() {
	//   return mainContainer.width(); //x * x * x;
	// }


	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fAboutAjax = fAboutAjax;
	//module.exports.fLandingPageAnim = fLandingPageAnim;


}());
