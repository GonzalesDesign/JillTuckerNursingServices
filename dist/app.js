/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/***********************************************
	 * Project: Jill Tucker Nursing Services
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Index
	 ***********************************************/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
		console.log("index.es6x");
		let d = new Date();
		let h = d.getHours();
		let n = d.getMinutes();
		console.log("Date in minutes: ", h,":",n);
	
		/**----------===| MODULE: LANDING PAGE |===----------**/
		const landingPage = __webpack_require__( 1 );
		landingPage.fLandingPageAjax();
		landingPage.fLandingPageResize();
	
		/**----------===| MODULE: IMAGE CAROUSEL |===----------**/
		const imageCarousel = __webpack_require__( 4 );
		imageCarousel.fCarouselResize();
	
		/**----------===| MODULE: LANDING PAGE DESCRIPTION |===----------**/
		const landingPageDesc = __webpack_require__( 5 );
		landingPageDesc.fLandingPageDescAjax();
		//landingPageDesc.fLandingPageDescResize();
	
		/**----------===| MODULE: SERVICES |===----------**/
		const servicesList = __webpack_require__( 6 );
		servicesList.fServicesListAjax();
	
		/**----------===| MODULE: RESPONSES |===----------**/
		const responsesSection = __webpack_require__( 7 );
		responsesSection.fResponsesAjax();
	
		/**----------===| MODULE: HEALTH CARE |===----------**/
		const halthCareSection = __webpack_require__( 8 );
		halthCareSection.fHealthCareAjax();
	
		/**----------===| MODULE: ABOUT || EXPERIENCE |===----------**/
		const aboutSection = __webpack_require__( 9 );
		aboutSection.fAboutAjax();
	
		/**----------===| FUNCTION: SCREEN RESIZE QUERIES |===----------**/
		let fOnWindowResize = function() {
	
			servicesList.fServicesResize();
	
			landingPage.fLandingPageResize();
	
			imageCarousel.fCarouselResize();
	
		}
	
		$( window ).on( 'resize', fOnWindowResize );
	
	}() );


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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
	
		/**----------===| CLASS: CREATE ELEMENTS |===----------**/
		const createElem = __webpack_require__( 2 );
		let createDiv = new createElem.CreateElementAny();
	
		/**----------===| MODULE: NEW IMAGE |===----------**/
		const createImage = __webpack_require__( 3 );
		let createNewImg = new createImage.CreateNewImage();
	
		/**----------===| MODULE: IMAGE CAROUSEL |===----------**/
		const carouselCreate = __webpack_require__( 4 );
	
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


/***/ },
/* 2 */
/***/ function(module, exports) {

	/***********************************************
	 * Project: Jill Tucker Nursing Services
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: CreateElementClass
	 ***********************************************/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
	
		/**----------=====| CreateElementAny Class |=====----------**/
		/** Description: Class template for creating a basic tag.
		 **---------------------------------------------------------**/
		class CreateElementAny {
			constructor() {}
	
			/** Generic method for creating a tag element **/
			fCreateTag( tagType, title, className, counter, appendedTo ) {
				let divName = document.createElement( tagType );
				divName.id = title + "Id_" + counter; //set id
				divName.className = className; //title + "Class";
				let divNameId = $( "#" + title + "Id_" + counter ); //get id
				//console.log("divNameId: ",divNameId);
				$( divName ).appendTo( appendedTo );
	
				//DEV: TEMP
				// divNameId.css({
				// 	"height": "100px",
				// 	"border": "1px solid yellowGreen"
				// })
	
			}
		};
	
		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.CreateElementAny = CreateElementAny;
	
	}() );


/***/ },
/* 3 */
/***/ function(module, exports) {

	/***********************************************
	 * Project: Jill Tucker Nursing Services
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: New Image
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


/***/ },
/* 4 */
/***/ function(module, exports) {

	/***********************************************
	 * Project: Jill Tucker Nursing Services
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Create Carousel : Bootstrap
	 ***********************************************/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
	
		/**----------=====| CreateCarousel Class |=====----------**/
		/** Description:
		 ** Class template for creating Bootstrap carousel.
		 *********************************************************/
		class CreateCarousel {
			constructor() {
				/**-----| Clears the content within the div class="carousel-inner"... |-----**/
				$( '.carousel-inner' ).empty();
			}
	
			/** Generic method for creating a tag element **/
			fCreateCarousel( itemId, imahe, titolo, deskription, counter, intervalTimer ) {
				/**-----| Create new LI(s) for the Indicators |-----**/
				let listItem = document.createElement( 'li' );
				listItem.className = "";
				listItem.id = "listItemId";
				listItem.setAttribute( "data-target", "#modalCarousel" );
				listItem.setAttribute( "data-slide-to", counter );
				$( listItem ).appendTo( ".carousel-indicators" );
	
				/**-----| Create new image(s) |-----**/
				let myImage = new Image();
				myImage.src = "images/" + imahe; //images.imgName;
				//console.log("myImage.src: ", myImage.src);
				myImage.className = "imgClass";
	
				/**-----| Create a new div elements to hold each images with class name and id |-----**/
				let itemDiv = document.createElement( 'div' );
				itemDiv.id = itemId + counter; //Assign a unique ID for each div
				//let itemId = itemId + counter;
				itemDiv.className = "item"; //Assign a Class name for each div
				itemDiv.title = titolo; //images.imgTitle;
				myImage.style.width = "100%";
				myImage.style.height = "auto";
				//item = $(".item"); //This work but the top position doesn't!
	
				$( itemDiv ).appendTo( "#carouslInnerId" ); //Assign itemDiv inside carouslInnerId div
				//carouslInnerId.appendChild (itemDiv); //same as above. appendTo is faster
				itemDiv.appendChild( myImage ); //Populate itemDiv div with images but only shows the active div
				/**-----| Title Inside Carousel Body |-----**/
				let carouselTitleBox = document.createElement( 'div' );
				itemDiv.appendChild( carouselTitleBox );
				/*modalHeader.title       = aThumbTitleText[counter];
				 modalHeader.appendChild (carouselTitleBox);*/
				carouselTitleBox.id = "carouselTitleBoxId" + counter;
				carouselTitleBox.className = "carouselTitleBoxClass";
				carouselTitleBox.innerHTML = titolo; //images.imgTitle;
	
				/**-----| Div to hold the Title and Description |-----**/
				let titleDescriptionBox = document.createElement( 'div' );
				titleDescriptionBox.className = "titleDescriptionBoxClass";
				titleDescriptionBox.id = "titleDescriptionBoxId" + counter;
	
				$( titleDescriptionBox ).appendTo( itemDiv );
	
				$( carouselTitleBox ).appendTo( titleDescriptionBox );
	
				/**-----| Description Inside Carousel Body |-----**/
				let carouselDescriptionBox = document.createElement( 'div' );
				//aCarouselDescriptionBox[aCarouselDescriptionBox.length] = carouselDescriptionBox; //push
				carouselDescriptionBox.id = "carouselDescriptionBoxId" + counter;
				//aCarouselDescriptionBoxId[aCarouselDescriptionBoxId.length] = aCarouselDescriptionBoxId.id; //push
				carouselDescriptionBox.className = "carouselDescriptionBoxClass";
				carouselDescriptionBox.innerHTML = deskription; //images.imgDescription;
				//$(carouselDescriptionBox).appendTo(itemDiv);
				$( carouselDescriptionBox ).appendTo( titleDescriptionBox );
	
				//itemDiv.appendChild(carouselDescriptionBox);
	
				/**-----| Activate the 'active' Class for the selected Id |-----**/
				//let intervalTimer = 6000; //4000; //false;
				if ( itemDiv.id === itemId + 0 ) {
					//console.log("itemDiv.id: ", itemDiv.id);
					$( ".item" ).addClass( 'active' );
					$( listItem ).addClass( 'active' );
					/**-----| Interval timer |-----**/
					$( '#modalCarousel' ).carousel( {
						interval: intervalTimer
					} );
				}
	
				/*----- Trigger scren queries on load -----*/
				fCarouselResize();
			}
		};
	
		let createKarousel = new CreateCarousel();
		// createKarousel.fCreateCarousel(images.imgName, images.imgTitle, images.imgDescription, i)
	
		function fBuildCarousel() {
			/**-----| JSON DATA |-----*/
			const fContentDataAjax = () => {
				let promise = $.get( "./js/json/carouselImages.json" );
				promise.then( function( data ) {
					let jx = 0;
					let ji = 0;
					//let itemId = "bikerId"
					for ( let content of data.ContentDataMain ) {
						/**-----| Populate carousel container |-----**/
						for ( let images of content.images ) {
							createKarousel.fCreateCarousel( "imgCarouselId", images.imgName, images.imgTitle, images.imgDescription, ji, ( content.carouselIntervalTimer * 1000 ) );
							ji++;
	
						}
					}
				} )
			};
	
			/*----- Invoke function -----*/
			fContentDataAjax();
	
		};
	
		let fCarouselResize = () => {
				let browserWidth = window.innerWidth;
				//console.log("browserWidth: ", browserWidth);
				let carouselTitleBoxClass = $( ".carouselTitleBoxClass" );
				let carouselDescriptionBoxClass = $( ".carouselDescriptionBoxClass" );
				let titleDescriptionBoxClass = $( ".titleDescriptionBoxClass" );
	
				let largeTitleFont = "2.6em";
				let medTitleFont = "1.8em";
				let largeDescFont = "1.5em";
				let medDescFont = "1em";
	
				/*-----[ Largest Screen ]-----*/
				if ( browserWidth > 1170 ) {
					carouselTitleBoxClass.css( {
						"font-size": largeTitleFont
					} );
					carouselDescriptionBoxClass.css( {
						"font-size": largeDescFont
					} );
					titleDescriptionBoxClass.css( {
						"top": "65%",
						"padding-top": "30px",
						"padding-bottom": "40px"
					} )
	
					/*-----[ .container is between 1170 and 970 width ]-----*/
				} else if ( browserWidth <= 1170 && browserWidth > 970 ) {
					carouselTitleBoxClass.css( {
						"font-size": largeTitleFont
					} );
					carouselDescriptionBoxClass.css( {
						"font-size": largeDescFont
					} );
					titleDescriptionBoxClass.css( {
						"top": "65%",
						"padding-top": "30px",
						"padding-bottom": "40px"
					} )
	
					/*-----[ .container is between 970 and 750 width ]-----*/
				} else if ( browserWidth <= 970 && browserWidth > 750 ) {
					carouselTitleBoxClass.css( {
						"font-size": largeTitleFont
					} );
					carouselDescriptionBoxClass.css( {
						"font-size": largeDescFont
					} );
					titleDescriptionBoxClass.css( {
						"top": "65%",
						"padding-top": "20px",
						"padding-bottom": "20px"
					} )
	
					/*-----[ .container is between 750 and 550 width ]-----*/
				} else if ( browserWidth <= 750 && browserWidth > 550 ) {
					carouselTitleBoxClass.css( {
						"font-size": medTitleFont
					} );
					carouselDescriptionBoxClass.css( {
						"font-size": medDescFont
					} );
					titleDescriptionBoxClass.css( {
						"top": "65%",
						"padding-top": "20px",
						"padding-bottom": "20px"
					} )
	
					/*-----[ .container is less than 550 width ]-----*/
				} else {
					carouselTitleBoxClass.css( {
						"font-size": medTitleFont
					} );
					carouselDescriptionBoxClass.css( {
						"font-size": medDescFont
					} );
					titleDescriptionBoxClass.css( {
						"top": "50%"
					} )
				}
			}
			/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fBuildCarousel = fBuildCarousel;
		module.exports.fCarouselResize = fCarouselResize;
	
	}() );


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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
		const createElem = __webpack_require__( 2 );
		let createDiv = new createElem.CreateElementAny();
	
		/**----------===| MODULE: NEW IMAGE |===----------**/
		const createImage = __webpack_require__( 3 );
		let createNewImg = new createImage.CreateNewImage();
	
		/**----------===| MODULE: IMAGE CAROUSEL |===----------**/
		const carouselCreate = __webpack_require__( 4 );
	
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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

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
		const createElem = __webpack_require__( 2 );
		let createDiv = new createElem.CreateElementAny();
	
		/**-----------=====| REQUIRE : NEW IMAGE |=====-----------**/
		const createIconImage = __webpack_require__( 3 );
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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/***********************************************
	 * Project: Jill Tucker Nursing Services
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Responses from Patients & Clients
	 ***********************************************/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
	
		/**----------===| CLASS: CREATE ELEMENTS |===----------**/
		const createElem = __webpack_require__( 2 );
		let createDiv = new createElem.CreateElementAny();
	
		/**-----------=====| DOM CACHING |=====-----------**/
		let mainContainer = $( ".mainContainer" );
		let responsesMainContainerClass = $( ".responsesMainContainerClass" );
		let responsesMainContainerId = $( "#responsesMainContainerId" );
		let responsesContainerClass = $( ".responsesContainerClass" );
		let responsesContainerId = $( "#responsesContainerId" )
	
		const fResponsesAjax = () => {
			let promise = $.get( "./js/json/responses.json" );
			promise.then( function( data ) {
				let jx = 0;
				let ji = 0;
				for ( let responses of data.ResponsesListContent ) {
					/**-----| Create div to hold the title |-----**/
					createDiv.fCreateTag( "div", "responseTitleContainer", "responseTitleContainerClass", jx, responsesContainerId );
					let responseTitleContainerId = document.getElementById( "responseTitleContainer" + "Id_" + jx );
					responseTitleContainerId.innerHTML = responses.introTitle;
	
					/**----------===| RESPONSES |===----------**/
					for ( let response of responses.responses ) {
						ji++;
						createDiv.fCreateTag( "div", "testimonialsContainer", "testimonialsContainerClass", ji, responsesContainerId );
						let testimonialsContainerId = document.getElementById( "testimonialsContainer" + "Id_" + ji );
						testimonialsContainerId.innerHTML = response.response;
					}
				}
			} )
		};
	
		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fResponsesAjax = fResponsesAjax;
	
	}() );


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/***********************************************
	 * Project: Jill Tucker Nursing Services
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Health Care In The News
	 ***********************************************/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
	
		/**----------===| CLASS: CREATE ELEMENTS |===----------**/
		const createElem = __webpack_require__( 2 );
		let createDiv = new createElem.CreateElementAny();
		//fCreateTag( div, title, className, counter, appendedTo )
	
		/**-----------=====| DOM CACHING |=====-----------**/
		let mainContainer = $( ".mainContainer" );
		let healthMainContainerClass = $( ".healthMainContainerClass" );
		let healthMainContainerId = $( "#healthMainContainerId" );
	
		let healthContainerClass = $( ".healthContainerClass" );
		let healthContainerId = $( "#healthContainerId" )
	
		const fHealthCareAjax = () => {
			let promise = $.get( "./js/json/healthCare.json" );
			promise.then( function( data ) {
				let jx = 0;
				let ji = 0;
				for ( let health of data.HealthCareListContent ) {
					/**-----| Create div to hold the healthTitle |-----**/
					createDiv.fCreateTag( "div", "healthTitleContainer", "healthTitleContainerClass", jx, healthContainerId );
					let healthTitleContainerId = document.getElementById( "healthTitleContainer" + "Id_" + jx );
					healthTitleContainerId.innerHTML = health.introTitle;
	
					/**-----| Create div to hold Quote |-----**/
					createDiv.fCreateTag( "div", "healthQuoteContainer", "healthQuoteContainerClass", jx, healthContainerId );
					let healthQuoteContainerId = document.getElementById( "healthQuoteContainer" + "Id_" + jx );
					healthQuoteContainerId.innerHTML = health.quote[ jx ].healthQuote;
				}
			} )
		};
	
		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fHealthCareAjax = fHealthCareAjax;
	
	}() );


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

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
		const createElem = __webpack_require__(2);
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


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map