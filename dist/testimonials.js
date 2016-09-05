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
	 * Module: Testimonials Index
	 ***********************************************/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
		console.log("testimonialsIndex.es6");
	
		/**----------===| MODULE: COMMON |===----------**/
		//var common = require("./common");
	
		/**----------===| MODULE: LANDING PAGE |===----------**/
		const landingPage = __webpack_require__( 2 );
		landingPage.fLandingPageAjax();
		landingPage.fLandingPageResize();
	
		/**----------===| MODULE: TESTIMONIALS |===----------**/
		const testimonialsSection = __webpack_require__( 10 );
		testimonialsSection.fTestimonialsAjax();
	
		// /**----------===| MODULE: IMAGE CAROUSEL |===----------**/
		// const imageCarousel = require( './imageCarousel.es6' );
		// imageCarousel.fCarouselResize();
		//
		// /**----------===| MODULE: SERVICES |===----------**/
		// const servicesList = require( './servicesList.es6' );
		// servicesList.fServicesListAjax();
		//
		// /**----------===| MODULE: RESPONSES |===----------**/
		// const responsesSection = require( './responses.es6' );
		// responsesSection.fResponsesAjax();
		//
		// /**----------===| MODULE: HEALTH CARE |===----------**/
		// const halthCareSection = require( './healthCare.es6' );
		// halthCareSection.fHealthCareAjax();
		//
		// /**----------===| MODULE: ABOUT || EXPERIENCE |===----------**/
		// const aboutSection = require( './about.es6' );
		// aboutSection.fAboutAjax();
	
		/**----------===| FUNCTION: SCREEN RESIZE QUERIES |===----------**/
		let fOnWindowResize = function() {
	
			//servicesList.fServicesResize();
	
			//landingPage.fLandingPageResize();
	
			//imageCarousel.fCarouselResize();
	
		}
	
		$( window ).on( 'resize', fOnWindowResize );
	
	}() );


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "Common";


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/***********************************************
	 * Project: Jill Tucker Nursing Services
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Landing Page
	 ***********************************************/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
		console.log("landingPage.es6");
	
		/**----------===| CLASS: CREATE ELEMENTS |===----------**/
		const createElem = __webpack_require__( 3 );
		let createDiv = new createElem.CreateElementAny();
	
		/**----------===| MODULE: NEW IMAGE |===----------**/
		const createImage = __webpack_require__( 4 );
		let createNewImg = new createImage.CreateNewImage();
	
		/**----------===| MODULE: IMAGE CAROUSEL |===----------**/
		const carouselCreate = __webpack_require__( 5 );
	
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
		let largeScreen = 1170;
	
		let fLandingPageResize = () => {
			let browserWidth = window.innerWidth;
			let menuClass = $( ".menuClass" );
	
			/*-----[ Largest Screen ]-----*/
			if ( browserWidth > largeScreen ) {
				menuClass.css( {
						"font-size": "1.8em",
						"padding-left": "34px",
						"padding-right": "34px"
					} )
					/*-----[ .container is between largeScreen and screenMedium width ]-----*/
			} else if ( browserWidth <= largeScreen && browserWidth > screenMedium ) {
				menuClass.css( {
						"font-size": "1.8em",
						"padding-left": "12px",
						"padding-right": "12px"
					} )
					/*-----[ .container is between screenMedium and screenSmall width ]-----*/
			} else if ( browserWidth <= screenMedium && browserWidth > screenSmall ) {
				menuClass.css( {
						"font-size": "1.4em",
						"padding-left": "10px",
						"padding-right": "10px"
					} )
					/*-----[ .container is between screenSmall and screenXSmall width ]-----*/
			} else if ( browserWidth <= screenSmall && browserWidth > screenXSmall ) {
				menuClass.css( {
						"font-size": "1.3em",
						"padding-left": "10px",
						"padding-right": "10px"
					} )
					/*-----[ .container is less than screenXSmall width ]-----*/
			} else {
				menuClass.css( {
					"font-size": "1.2em",
					"padding-left": "2px",
					"padding-right": "2px"
				} )
			}
		}
	
		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fLandingPageAjax = fLandingPageAjax;
		module.exports.fLandingPageResize = fLandingPageResize;
	
	}() );


/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports) {

	/***********************************************
	 * Project: Jill Tucker Nursing Services
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: 
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
/* 5 */
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
				let titleDescriptionBoxClass = $( ".titleDescriptionBoxClass" );
	
				/*-----[ Largest Screen ]-----*/
				if ( browserWidth > 1170 ) {
					carouselTitleBoxClass.css( {
						"font-size": "3em"
					} );
					titleDescriptionBoxClass.css( {
						"top": "65%",
						"padding-top": "30px",
						"padding-bottom": "40px"
					} )
	
					/*-----[ .container is between 1170 and 970 width ]-----*/
				} else if ( browserWidth <= 1170 && browserWidth > 970 ) {
					carouselTitleBoxClass.css( {
						"font-size": "3em"
					} );
					titleDescriptionBoxClass.css( {
						"top": "65%",
						"padding-top": "30px",
						"padding-bottom": "40px"
					} )
	
					/*-----[ .container is between 970 and 750 width ]-----*/
				} else if ( browserWidth <= 970 && browserWidth > 750 ) {
					carouselTitleBoxClass.css( {
						"font-size": "3em"
					} );
					titleDescriptionBoxClass.css( {
						"top": "65%",
						"padding-top": "20px",
						"padding-bottom": "20px"
					} )
	
					/*-----[ .container is between 750 and 550 width ]-----*/
				} else if ( browserWidth <= 750 && browserWidth > 550 ) {
					carouselTitleBoxClass.css( {
						"font-size": "2em"
					} );
					titleDescriptionBoxClass.css( {
						"top": "65%",
						"padding-top": "20px",
						"padding-bottom": "20px"
					} )
	
					/*-----[ .container is less than 550 width ]-----*/
				} else {
					carouselTitleBoxClass.css( {
						"font-size": "2em"
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/***********************************************
	 * Project: Jill Tucker Nursing Services
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Testimonials from Patients & Clients
	 ***********************************************/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
		console.log("testimonials");
	
		/**----------===| MODULE: COMMON |===----------**/
		var common = __webpack_require__(1);
	
		/**----------===| CLASS: CREATE ELEMENTS |===----------**/
		const createElem = __webpack_require__( 3 );
		let createDiv = new createElem.CreateElementAny();
	
		/**-----------=====| DOM CACHING |=====-----------**/
		let mainContainer = $( ".mainContainer" );
		let testimonialsMainContainerClass = $( ".testimonialsMainContainerClass" );
		let testimonialsMainContainerId = $( "#testimonialsMainContainerId" );
		let testimonialsContainerClass = $( ".testimonialsContainerClass" );
		let testimonialsContainerId = $( "#testimonialsContainerId" )
	
		const fTestimonialsAjax = () => {
			let promise = $.get( "./js/json/testimonials.json" );
			console.log("testimonials.json");
			promise.then( function( data ) {
				let jx = 0;
				let ji = 0;
				for ( let testimonials of data.TestimonialsListContent ) {
					console.log("data");
					/**-----| Create div to hold the title |-----**/
					createDiv.fCreateTag( "div", "testimonialTitleContainer", "testimonialTitleContainerClass", jx, testimonialsContainerId );
					let testimonialTitleContainerId = document.getElementById( "testimonialTitleContainer" + "Id_" + jx );
					testimonialTitleContainerId.innerHTML = testimonials.introTitle;
	
					/**----------===| testimonials |===----------**/
					for ( let testimonial of testimonials.testimonials ) {
						ji++;
						cre00ateDiv.fCreateTag( "div", "testimonialsContainer", "testimonialsContainerClass", ji, testimonialsContainerId );
						let testimonialsContainerId = document.getElementById( "testimonialsContainer" + "Id_" + ji );
						testimonialsContainerId.innerHTML = testimonial.testimonial;
					}
				}
			} )
		};
	
		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fTestimonialsAjax = fTestimonialsAjax;
	
	}() );


/***/ }
/******/ ]);
//# sourceMappingURL=testimonials.js.map