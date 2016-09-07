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
