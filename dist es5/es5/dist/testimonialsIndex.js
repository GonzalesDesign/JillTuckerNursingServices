"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};
	/******/
	/******/ // The require function
	/******/function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;
		/******/
		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };
		/******/
		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Flag the module as loaded
		/******/module.loaded = true;
		/******/
		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;
	/******/
	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";
	/******/
	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	/***********************************************
  * Project: Jill Tucker Nursing Services
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Testimonials Index
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		console.log("testimonialsIndex.es6");

		/**----------===| MODULE: COMMON |===----------**/
		//var common = require("./common");

		/**----------===| MODULE: LANDING PAGE |===----------**/
		var landingPage2 = __webpack_require__(2);
		landingPage2.fLandingPageAjax();
		landingPage2.fLandingPageResize();

		/**----------===| MODULE: TESTIMONIALS |===----------**/
		var testimonialsSection = __webpack_require__(11);
		testimonialsSection.fTestimonialsAjax();

		/**----------===| MODULE: TESTIMONIALS |===----------**/
		var testimonialsBackToTop = __webpack_require__(12);
		testimonialsBackToTop.fBackToTop();

		/**----------===| FUNCTION: SCREEN RESIZE QUERIES |===----------**/
		var tI = 0;

		var fOnWindowResize = function fOnWindowResize() {

			console.log("testimonialsIndex resize: ", tI++);

			//servicesList.fServicesResize();

			landingPage2.fLandingPageResize();

			//imageCarousel.fCarouselResize();
			testimonialsBackToTop.fBackToTop();
		};

		$(window).on('resize', fOnWindowResize);
	})();

	/***/
},,
/* 1 */
/* 2 */
/***/function (module, exports, __webpack_require__) {

	/***********************************************
  * Project: Jill Tucker Nursing Services
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Landing Page
  * Description: Includes the following; Logo, Menu, Carousel
  ***********************************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		/**----------===| CLASS: CREATE ELEMENTS |===----------**/

		var createElem = __webpack_require__(3);
		var createDiv = new createElem.CreateElementAny();

		/**----------===| MODULE: NEW IMAGE |===----------**/
		var createImage = __webpack_require__(4);
		var createNewImg = new createImage.CreateNewImage();

		/**----------===| MODULE: IMAGE CAROUSEL |===----------**/
		var carouselCreate = __webpack_require__(5);

		/**----------===| FUNCTION: ANCHOR LINK |===----------**/
		var fGoTo = function fGoTo(link) {
			location.href = link;
		};

		/**-----------=====| DOM CACHING |=====-----------**/
		var mainContainer = $(".mainContainer");
		var landingPageContainer = $(".landingPageContainer");
		var landingPageContainerId = $("#landingPageContainerId");
		var logoContainerClass = $(".logoContainerClass");
		var logoContainerId = $("#logoContainerId");
		var menuNavClass = $(".menuNavClass");
		var menuNavClassId = $("#menuNavClassId");
		// let landingPageDescriptionId = $( "#landingPageDescriptionId" )

		var fLandingPageAjax = function fLandingPageAjax() {
			var promise = $.get("./js/json/landingPage.json");
			promise.then(function (data) {
				var jx = 0;
				var ji = 0;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = data.LandingPageContent[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var introData = _step.value;

						/**-----| Logo |-----**/
						createDiv.fCreateTag("div", "logo", "logoClass", jx, logoContainerId);
						var logoId = $("#logo" + "Id_" + jx);
						/**-----| Company Logo Image |-----**/
						createNewImg.fCreateNewImage(logoId, introData.companyLogo, "80%", "White");
						/**-----| CONCIERGE HOME CARE NURSING |-----**/
						createDiv.fCreateTag("div", "logoSubTitle", "logoSubTitleClass", jx, logoContainerId);
						//let logoSubTitleId = $("#logoSubTitleId_"+jx);
						var logoSubTitleId = document.getElementById("logoSubTitle" + "Id_" + jx);
						logoSubTitleId.innerHTML = introData.introSubTitle;
						/**-----| ADDRESS: NY & DC |-----**/
						createDiv.fCreateTag("div", "logoAddress", "logoAddressClass", jx, logoContainerId);
						var logoAddressId = document.getElementById("logoAddress" + "Id_" + jx);
						logoAddressId.innerHTML = introData.logoAddress;
						/**-----| Menu Navigation |-----**/
						createDiv.fCreateTag("div", "menuNavContainer", "menuNavContainerClass", jx, menuNavClass);
						var menuNavContainerId = document.getElementById("menuNavContainer" + "Id_" + jx);

						var _iteratorNormalCompletion2 = true;
						var _didIteratorError2 = false;
						var _iteratorError2 = undefined;

						try {
							var _loop = function _loop() {
								var menus = _step2.value;

								ji++;
								createDiv.fCreateTag("div", "menu", "menuClass", ji, menuNavContainerId);
								var menuId = document.getElementById("menu" + "Id_" + ji);
								//let menuId = $("#menu" + "Id_" + ji);
								//let menuId = $("#menuId_" + ji);
								var menuClass = $(".menuClass");
								menuId.innerHTML = menus.menu;

								/**-----| Menu anchor links |-----**/
								$(menuId).click(function () {
									fGoTo(menus.link);
									//Email contact form nav menu button
									if (menus.menu === "Contact") {
										$('#myModal').modal('show');
									}
								});
							};

							for (var _iterator2 = introData.mainMenuNavs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
								_loop();
							}

							/**-----| Images Carousel |-----**/
						} catch (err) {
							_didIteratorError2 = true;
							_iteratorError2 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion2 && _iterator2.return) {
									_iterator2.return();
								}
							} finally {
								if (_didIteratorError2) {
									throw _iteratorError2;
								}
							}
						}

						var createCarousel = new carouselCreate.fBuildCarousel();

						/**-----| Landing Page Description |-----**/
						// createDiv.fCreateTag( "div", "landingPage", "landingPageClass", jx, landingPageDescriptionId );
						// let landingPageId = document.getElementById( "landingPage" + "Id_" + jx );
						//let x = $("#landingPage" + "Id_" + jx);
						// let strng = introData.landingPageDescription;
						// let subStrng = strng.substr( 0, 700 );
						// landingPageId.innerHTML = subStrng;
					}

					/**-----| Screen resize querie on load |-----**/
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				fLandingPageResize();
			});
		};

		var screenXSmall = 550;
		var screenSmall = 750;
		var screenMedium = 970;
		var largeScreen = 1200;

		var fLandingPageResize = function fLandingPageResize() {
			console.log("fLandingPageResize: ");
			var browserWidth = window.innerWidth;
			var menuClass = $(".menuClass");
			var largeFont = "28px";
			var medFont = "26px";
			var smallFont = "22px";
			var tinyFont = "18px";

			/*-----[ Largest Screen ]-----*/
			if (browserWidth > largeScreen) {
				menuClass.css({
					"font-size": largeFont,
					"padding-left": "34px",
					"padding-right": "34px"
				});
				/*-----[ .container is between largeScreen and screenMedium width ]-----*/
			} else if (browserWidth <= largeScreen && browserWidth > screenMedium) {
				menuClass.css({
					"font-size": largeFont,
					"padding-left": "12px",
					"padding-right": "12px"
				});
				/*-----[ .container is between screenMedium and screenSmall width ]-----*/
			} else if (browserWidth <= screenMedium && browserWidth > screenSmall) {
				menuClass.css({
					"font-size": medFont,
					"padding-left": "10px",
					"padding-right": "10px"
				});
				/*-----[ .container is between screenSmall and screenXSmall width ]-----*/
			} else if (browserWidth <= screenSmall && browserWidth > screenXSmall) {
				menuClass.css({
					"font-size": smallFont,
					"padding-left": "6px",
					"padding-right": "6px"
				});
				/*-----[ .container is less than screenXSmall width ]-----*/
			} else {
				menuClass.css({
					"font-size": tinyFont,
					"padding-left": "12px",
					"padding-right": "12px"
				});
			}
		};

		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fLandingPageAjax = fLandingPageAjax;
		module.exports.fLandingPageResize = fLandingPageResize;
	})();

	/***/
},
/* 3 */
/***/function (module, exports) {

	/***********************************************
  * Project: Jill Tucker Nursing Services
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: CreateElementClass
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		/**----------=====| CreateElementAny Class |=====----------**/
		/** Description: Class template for creating a basic tag.
   **---------------------------------------------------------**/

		var CreateElementAny = function () {
			function CreateElementAny() {
				_classCallCheck(this, CreateElementAny);
			}

			/** Generic method for creating a tag element **/


			_createClass(CreateElementAny, [{
				key: "fCreateTag",
				value: function fCreateTag(tagType, title, className, counter, appendedTo) {
					var divName = document.createElement(tagType);
					divName.id = title + "Id_" + counter; //set id
					divName.className = className; //title + "Class";
					var divNameId = $("#" + title + "Id_" + counter); //get id
					//console.log("divNameId: ",divNameId);
					$(divName).appendTo(appendedTo);

					//DEV: TEMP
					// divNameId.css({
					// 	"height": "100px",
					// 	"border": "1px solid yellowGreen"
					// })
				}
			}]);

			return CreateElementAny;
		}();

		;

		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.CreateElementAny = CreateElementAny;
	})();

	/***/
},
/* 4 */
/***/function (module, exports) {

	/***********************************************
  * Project: Jill Tucker Nursing Services
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: New Image
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		var CreateNewImage = function () {
			function CreateNewImage() {
				_classCallCheck(this, CreateNewImage);
			}
			/**----------===| NEW IMAGE CREATION |===----------**/


			_createClass(CreateNewImage, [{
				key: "fCreateNewImage",
				value: function fCreateNewImage(divNameId, jsonImage, bgImgSize, bgColor) {
					var myIntroImage = new Image();
					var imagesPath = "./images/";
					myIntroImage.src = imagesPath + jsonImage; //responses.responsesImages[2].image;

					divNameId.css({
						// "height": imgHeight,
						// "width": imgWidth,
						"background": "url(" + myIntroImage.src + ")  center center no-repeat",
						"background-color": bgColor,
						"background-size": bgImgSize, //"cover",
						"position": "relative", //relative absolute
						"float": "left",
						"opacity": "1"
					});
				}
			}]);

			return CreateNewImage;
		}();

		/**-----------=====| EXPORTS |=====-----------**/


		module.exports.CreateNewImage = CreateNewImage;
	})();

	/***/
},
/* 5 */
/***/function (module, exports) {

	/***********************************************
  * Project: Jill Tucker Nursing Services
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Create Carousel : Bootstrap
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/

		/**----------=====| CreateCarousel Class |=====----------**/
		/** Description:
   ** Class template for creating Bootstrap carousel.
   *********************************************************/
		var CreateCarousel = function () {
			function CreateCarousel() {
				_classCallCheck(this, CreateCarousel);

				/**-----| Clears the content within the div class="carousel-inner"... |-----**/
				$('.carousel-inner').empty();
			}

			/** Generic method for creating a tag element **/


			_createClass(CreateCarousel, [{
				key: "fCreateCarousel",
				value: function fCreateCarousel(itemId, imahe, titolo, deskription, counter, intervalTimer) {
					/**-----| Create new LI(s) for the Indicators |-----**/
					var listItem = document.createElement('li');
					listItem.className = "";
					listItem.id = "listItemId";
					listItem.setAttribute("data-target", "#modalCarousel");
					listItem.setAttribute("data-slide-to", counter);
					$(listItem).appendTo(".carousel-indicators");

					/**-----| Create new image(s) |-----**/
					var myImage = new Image();
					myImage.src = "images/" + imahe; //images.imgName;
					//console.log("myImage.src: ", myImage.src);
					myImage.className = "imgClass";

					/**-----| Create a new div elements to hold each images with class name and id |-----**/
					var itemDiv = document.createElement('div');
					itemDiv.id = itemId + counter; //Assign a unique ID for each div
					//let itemId = itemId + counter;
					itemDiv.className = "item"; //Assign a Class name for each div
					itemDiv.title = titolo; //images.imgTitle;
					myImage.style.width = "100%";
					myImage.style.height = "auto";
					//item = $(".item"); //This work but the top position doesn't!

					$(itemDiv).appendTo("#carouslInnerId"); //Assign itemDiv inside carouslInnerId div
					//carouslInnerId.appendChild (itemDiv); //same as above. appendTo is faster
					itemDiv.appendChild(myImage); //Populate itemDiv div with images but only shows the active div
					/**-----| Title Inside Carousel Body |-----**/
					var carouselTitleBox = document.createElement('div');
					itemDiv.appendChild(carouselTitleBox);
					/*modalHeader.title       = aThumbTitleText[counter];
      modalHeader.appendChild (carouselTitleBox);*/
					carouselTitleBox.id = "carouselTitleBoxId" + counter;
					carouselTitleBox.className = "carouselTitleBoxClass";
					carouselTitleBox.innerHTML = titolo; //images.imgTitle;

					/**-----| Div to hold the Title and Description |-----**/
					var titleDescriptionBox = document.createElement('div');
					titleDescriptionBox.className = "titleDescriptionBoxClass";
					titleDescriptionBox.id = "titleDescriptionBoxId" + counter;

					$(titleDescriptionBox).appendTo(itemDiv);

					$(carouselTitleBox).appendTo(titleDescriptionBox);

					/**-----| Description Inside Carousel Body |-----**/
					var carouselDescriptionBox = document.createElement('div');
					//aCarouselDescriptionBox[aCarouselDescriptionBox.length] = carouselDescriptionBox; //push
					carouselDescriptionBox.id = "carouselDescriptionBoxId" + counter;
					//aCarouselDescriptionBoxId[aCarouselDescriptionBoxId.length] = aCarouselDescriptionBoxId.id; //push
					carouselDescriptionBox.className = "carouselDescriptionBoxClass";
					carouselDescriptionBox.innerHTML = deskription; //images.imgDescription;
					//$(carouselDescriptionBox).appendTo(itemDiv);
					$(carouselDescriptionBox).appendTo(titleDescriptionBox);

					//itemDiv.appendChild(carouselDescriptionBox);

					/**-----| Activate the 'active' Class for the selected Id |-----**/
					//let intervalTimer = 6000; //4000; //false;
					if (itemDiv.id === itemId + 0) {
						//console.log("itemDiv.id: ", itemDiv.id);
						$(".item").addClass('active');
						$(listItem).addClass('active');
						/**-----| Interval timer |-----**/
						$('#modalCarousel').carousel({
							interval: intervalTimer
						});
					}

					/*----- Trigger scren queries on load -----*/
					fCarouselResize();
				}
			}]);

			return CreateCarousel;
		}();

		;

		var createKarousel = new CreateCarousel();
		// createKarousel.fCreateCarousel(images.imgName, images.imgTitle, images.imgDescription, i)

		function fBuildCarousel() {
			/**-----| JSON DATA |-----*/
			var fContentDataAjax = function fContentDataAjax() {
				var promise = $.get("./js/json/carouselImages.json");
				promise.then(function (data) {
					var jx = 0;
					var ji = 0;
					//let itemId = "bikerId"
					var _iteratorNormalCompletion3 = true;
					var _didIteratorError3 = false;
					var _iteratorError3 = undefined;

					try {
						for (var _iterator3 = data.ContentDataMain[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
							var content = _step3.value;

							/**-----| Populate carousel container |-----**/
							var _iteratorNormalCompletion4 = true;
							var _didIteratorError4 = false;
							var _iteratorError4 = undefined;

							try {
								for (var _iterator4 = content.images[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
									var images = _step4.value;

									createKarousel.fCreateCarousel("imgCarouselId", images.imgName, images.imgTitle, images.imgDescription, ji, content.carouselIntervalTimer * 1000);
									ji++;
								}
							} catch (err) {
								_didIteratorError4 = true;
								_iteratorError4 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion4 && _iterator4.return) {
										_iterator4.return();
									}
								} finally {
									if (_didIteratorError4) {
										throw _iteratorError4;
									}
								}
							}
						}
					} catch (err) {
						_didIteratorError3 = true;
						_iteratorError3 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion3 && _iterator3.return) {
								_iterator3.return();
							}
						} finally {
							if (_didIteratorError3) {
								throw _iteratorError3;
							}
						}
					}
				});
			};

			/*----- Invoke function -----*/
			fContentDataAjax();
		};

		var fCarouselResize = function fCarouselResize() {
			var browserWidth = window.innerWidth;
			//console.log("browserWidth: ", browserWidth);
			var carouselTitleBoxClass = $(".carouselTitleBoxClass");
			var carouselDescriptionBoxClass = $(".carouselDescriptionBoxClass");
			var titleDescriptionBoxClass = $(".titleDescriptionBoxClass");

			var largeTitleFont = "2.6em";
			var medTitleFont = "1.8em";
			var largeDescFont = "1.5em";
			var medDescFont = "1em";

			/*-----[ Largest Screen ]-----*/
			if (browserWidth > 1170) {
				carouselTitleBoxClass.css({
					"font-size": largeTitleFont
				});
				carouselDescriptionBoxClass.css({
					"font-size": largeDescFont
				});
				titleDescriptionBoxClass.css({
					"top": "65%",
					"padding-top": "30px",
					"padding-bottom": "40px"
				});

				/*-----[ .container is between 1170 and 970 width ]-----*/
			} else if (browserWidth <= 1170 && browserWidth > 970) {
				carouselTitleBoxClass.css({
					"font-size": largeTitleFont
				});
				carouselDescriptionBoxClass.css({
					"font-size": largeDescFont
				});
				titleDescriptionBoxClass.css({
					"top": "65%",
					"padding-top": "30px",
					"padding-bottom": "40px"
				});

				/*-----[ .container is between 970 and 750 width ]-----*/
			} else if (browserWidth <= 970 && browserWidth > 750) {
				carouselTitleBoxClass.css({
					"font-size": largeTitleFont
				});
				carouselDescriptionBoxClass.css({
					"font-size": largeDescFont
				});
				titleDescriptionBoxClass.css({
					"top": "65%",
					"padding-top": "20px",
					"padding-bottom": "20px"
				});

				/*-----[ .container is between 750 and 550 width ]-----*/
			} else if (browserWidth <= 750 && browserWidth > 550) {
				carouselTitleBoxClass.css({
					"font-size": medTitleFont
				});
				carouselDescriptionBoxClass.css({
					"font-size": medDescFont
				});
				titleDescriptionBoxClass.css({
					"top": "65%",
					"padding-top": "20px",
					"padding-bottom": "20px"
				});

				/*-----[ .container is less than 550 width ]-----*/
			} else {
				carouselTitleBoxClass.css({
					"font-size": medTitleFont
				});
				carouselDescriptionBoxClass.css({
					"font-size": medDescFont
				});
				titleDescriptionBoxClass.css({
					"top": "50%"
				});
			}
		};
		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fBuildCarousel = fBuildCarousel;
		module.exports.fCarouselResize = fCarouselResize;
	})();

	/***/
},,,,,,
/* 6 */
/* 7 */
/* 8 */
/* 9 */
/* 10 */
/* 11 */
/***/function (module, exports, __webpack_require__) {

	/***********************************************
  * Project: Jill Tucker Nursing Services
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Testimonials from Patients & Clients
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		/**----------===| CLASS: CREATE ELEMENTS |===----------**/

		var createElem = __webpack_require__(3);
		var createDiv = new createElem.CreateElementAny();

		/**-----------=====| DOM CACHING |=====-----------**/
		// let mainContainer = $( ".mainContainer" );
		// let testimonialsMainContainerClass = $( ".testimonialsMainContainerClass" );
		// let testimonialsMainContainerId = $( "#testimonialsMainContainerId" );
		var testimonialsContainerClass = $(".testimonialsContainerClass");
		var testimonialsContainerId = $("#testimonialsContainerId");

		var fTestimonialsAjax = function fTestimonialsAjax() {
			var promise = $.get("./js/json/testimonials.json");
			promise.then(function (data) {
				var jx = 0;
				var ji = 0;
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {
					for (var _iterator5 = data.TestimonialsListContent[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var testimonials = _step5.value;

						/**-----| Create div to hold the title |-----**/
						createDiv.fCreateTag("div", "testimonialTitleContainer", "testimonialTitleContainerClass", jx, testimonialsContainerId);
						var testimonialTitleContainerId = document.getElementById("testimonialTitleContainer" + "Id_" + jx);
						testimonialTitleContainerId.innerHTML = testimonials.introTitle;

						/**----------===| testimonials |===----------**/
						var _iteratorNormalCompletion6 = true;
						var _didIteratorError6 = false;
						var _iteratorError6 = undefined;

						try {
							for (var _iterator6 = testimonials.testimonials[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
								var testimonial = _step6.value;

								ji++;
								createDiv.fCreateTag("div", "testimonialsContainer", "testimonialsContainerClass", ji, testimonialsContainerId);
								var testimonialsContId = document.getElementById("testimonialsContainer" + "Id_" + ji);
								testimonialsContId.innerHTML = testimonial.testimonial;
							}
						} catch (err) {
							_didIteratorError6 = true;
							_iteratorError6 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion6 && _iterator6.return) {
									_iterator6.return();
								}
							} finally {
								if (_didIteratorError6) {
									throw _iteratorError6;
								}
							}
						}
					}
				} catch (err) {
					_didIteratorError5 = true;
					_iteratorError5 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion5 && _iterator5.return) {
							_iterator5.return();
						}
					} finally {
						if (_didIteratorError5) {
							throw _iteratorError5;
						}
					}
				}
			});
		};

		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fTestimonialsAjax = fTestimonialsAjax;
	})();

	/***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

	/***********************************************
  * Project: Jill Tucker Nursing Services
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Back to top
  * Description: An arrow pointing up, clcik and brings you to the top of the page.
  ********************************************************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		/**-----------=====| DOM CACHING |=====-----------**/

		var backToTopContainerId = $("#backToTopContainerId");

		/**----------===| CLASS: CREATE ELEMENTS |===----------**/
		var createElem = __webpack_require__(3);
		var createDiv = new createElem.CreateElementAny();

		var fBackToTop = function fBackToTop() {
			var inWindowHeight = window.innerHeight - 100; // / 2;
			console.log("inWindowHeight: ", inWindowHeight);
			var inWindowWidth = window.innerWidth;
			createDiv.fCreateTag("div", "backToTop", "backToTopClass", 0, backToTopContainerId);
			var backToTopId = $("#backToTop" + "Id_" + 0);

			/**-----| Back to top links |-----**/
			$(backToTopId).click(function () {
				location.href = "#ContactBanner";
			});

			/**----------===| CLASS: CREATE NEW IMAGE |===----------**/
			var createImgElem = __webpack_require__(4);
			var createImg = new createImgElem.CreateNewImage();
			/**-----| Back to top Image |-----**/
			backToTopId.css({
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
			});
		};

		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fBackToTop = fBackToTop;
	})();

	/***/
}
/******/]);
//# sourceMappingURL=testimonialsIndex.js.map