/***********************************************
 * Project: Jill Tucker Nursing Services
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
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

	/**-----------=====| DOM CACHING |=====-----------**/
	let mainContainer = $(".mainContainer");
	let aboutMainContainerClass = $(".aboutMainContainerClass");
	let aboutMainContainerId = $("#aboutMainContainerId");

	let aboutContainerClass = $(".aboutContainerClass");
	let aboutContainerId = $("#aboutContainerId");

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

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.fAboutAjax = fAboutAjax;

}());
