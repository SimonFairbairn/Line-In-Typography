/**
 *	Creates typographic overlays for testing line heights and grids
 *
 *	@version 0.3.0
 *
 *	@author	Simon Fairbairn
 *
 */


(function($) {
	"use strict";
	// Create the control panel. This should only be fired once.
	$.fn.LineInTypography = function(options) {
		// Extend our default options with those provided.
		// Note that the first arg to extend is an empty object -
		// this is to keep from overriding our "defaults" object.
		var opts = $.extend({}, $.fn.LineInTypography.defaults, options);
		opts.selector = $(this).selector;
		opts.lineHeightContainerHeight = $(opts.lineHeightContainer).height();
		opts.lineHeight = Math.round(
			parseFloat(
				$(opts.lineHeightContainer).css('line-height')
			)
		);

		var verticalRhythm = {}
		verticalRhythm.id = "litLines";
		verticalRhythm.bgPos = opts.backgroundOffset;
		verticalRhythm.inputId = "litChangeLineHeight";
		verticalRhythm.stripe1 = "rgba(255,255,255,0.2)";
		verticalRhythm.stripe2 = "rgba(0,0,0,0.1)";

		verticalRhythm.changeLineHeight = function( lineHeight ) {
			$('.litLines').css({"-webkit-background-size" : parseInt(lineHeight, 10) * 2 + "px " + parseInt(lineHeight, 10) * 2 + "px"});

			$('.litLines').css({"-moz-background-size" : parseInt(lineHeight, 10) * 2 + "px " + parseInt(lineHeight, 10) * 2 + "px"});
			$('.litLines').css({"-o-background-size" : parseInt(lineHeight, 10) * 2 + "px " + parseInt(lineHeight, 10) * 2 + "px"});
			$('.litLines').css({"background-size" : parseInt(lineHeight, 10) * 2 + "px " + parseInt(lineHeight, 10) * 2 + "px"});
			$('.litLines').css({"background-image" : "-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(50%, " + verticalRhythm.stripe1 + "), color-stop(50%, " + verticalRhythm.stripe2 + "))"});
			$('.litLines').css({"background-image" : " -webkit-linear-gradient(50% 0%, " + verticalRhythm.stripe1 + " 50%, " + verticalRhythm.stripe2 + " 50%)"});
			$('.litLines').css({"background-image" : " -moz-linear-gradient(50% 0%, #ffffff 50%, #dddddd 50%)"});
			$('.litLines').css({"background-image" : "-o-linear-gradient(50% 0%, " + verticalRhythm.stripe1 + " 50%, " + verticalRhythm.stripe2 + " 50%)"});
			$('.litLines').css({"background-image" : "-ms-linear-gradient(50% 0%, " + verticalRhythm.stripe1 + " 50%, " + verticalRhythm.stripe2 + " 50%)"});
			$('.litLines').css({"background-image" : "linear-gradient(50% 0%, " + verticalRhythm.stripe1 + " 50%, " + verticalRhythm.stripe2 + " 50%)"});
			$('.litLines').css({"background-position" : "0 " + verticalRhythm.bgPos + "px"});			
		}


		function addButton( text, id ) {
			return $('<a />').attr('href', '#').attr('id', id).text(text);
		}



	function loadButtons(opts) {

		var buttonDiv = $('<div />').attr('id', 'lit-buttons');

		var buttonControls = $('<div />')
								.addClass('lit-controls');

		var up = addButton('▲', 'litButtonUp');
		up.click( function() {
			verticalRhythm.bgPos = verticalRhythm.bgPos - 1;
			$('.'  + verticalRhythm.id).css(
				{'background-position' : '0 ' + verticalRhythm.bgPos + 'px'}
			);
			return false;
		});
		var down = addButton('▼', 'litButtonDown');
		down.click( function() {
			verticalRhythm.bgPos = verticalRhythm.bgPos + 1;
			$('.'  + verticalRhythm.id).css(
				{'background-position' : '0 ' + verticalRhythm.bgPos + 'px'}
			);
			return false;
		});		

		var onOff = addButton('On', 'litButtonOn');
		onOff.click( function() {
			$('.test-p').toggle();
			if ( $(this).hasClass('off') ) {
				$(this).removeClass('off');
				$(this).text('On');
				verticalRhythm.changeLineHeight(opts.lineHeight);

			} else {
				$(this).addClass('off');
				$(this).text('Off');
				$('.litLines').attr('style', '');

			}
			return false;
		});

		var changeLineHeight = $('<input />')
			.attr('type', 'number')
			.attr('name', verticalRhythm.inputId)
			.attr('id', verticalRhythm.inputId)
			.attr('style', 'max-width: 60px; background: #FAE6E8; border-radius: 5px; border: 1px solid #8E094A; box-shadow: inset 1px 1px 3px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.4); padding: 2px 6px; color: #8E094A; font-weight: bold; text-align: center; font-size: 18px; ')
			.val(opts.lineHeight)
			.blur(function() {
				verticalRhythm.changeLineHeight($(this).val());	
			})
			.keypress( function(e) {
				if ( !$('#litButtonOn').hasClass('off' ) ) {
					if ( e.which == 13 ) {
						verticalRhythm.changeLineHeight($(this).val());	
					
					}
				}
				

			});


		buttonControls.append(up).append(down).append(onOff).append(changeLineHeight);
		var testP = $('<div />').addClass('test-p').html(opts.testHtml);

		if ( opts.lineState !== 'on' ) {
			testP.hide();
		}

		buttonDiv.append(buttonControls);
		var verticalRhythmDiv = $('<div />')
			.attr('id', verticalRhythm.id)
			.css({
				'background-position' : '0 ' + opts.backgroundOffset + 'px'
			});

		if( opts.lineState !== 'on' ) {
			verticalRhythmDiv.hide();
		} else {
			$(opts.selector).addClass('litLines');
		}

		$(opts.lineHeightContainer)
			.prepend( testP)
			.append( buttonDiv )
			.append( verticalRhythmDiv );
	}

		$(opts.selector).addClass('litLines');
			loadButtons(opts);
			var string	=	"<style>";
			string		+=	"#lit-buttons {";
			string		+=		"font-family: 'Helvetica', sans-serif; position: fixed; top: 50px; right: 0; z-index: 200; background: #F7B8D3; padding: 15px;";
			string		+=		"border: 1px solid #8E094A; -moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.4);";
			string		+=		"width: 130px;";
			string		+=	"}";
			string		+=	"#litButtonOn,#litButtonUp,#litButtonDown {";
			string		+= 		"text-decoration: none; color: #8E094A; text-shadow: 0 1px 0 rgba(255,255,255,0.4)";
			string		+=	"}";
			string		+=	"#litButtonOn:hover,#litButtonUp:hover,#litButtonDown:hover {";
			string		+= 		"color: #C73C73;";
			string		+=	"}";
			string		+=	"#litButtonOn:active,#litButtonUp:active,#litButtonDown:active {";
			string		+= 		"color: #C73C73; text-shadow: none;";
			string		+=	"}";

			string		+=	"#litButtonOn {";
			string		+=	"margin-right: 10px; width: 15px; display: inline-block; text-align: center";
			string		+=	"}";
			string		+=	"#litButtonUp,#litButtonDown {";
			string		+=		"position: absolute; text-shadow: 0 1px 3px rgba(0,0,0,0.3); ";
			string		+=	"}";
			string		+=	"#litButtonUp {";
			string		+=		"top: 5px;";
			string		+=	"}";
			string		+=	"#litButtonDown {";
			string		+=		"bottom: 0px;";
			string		+=	"}";

			string		+=	".switchImages embed, .switchImages img, .switchImages object, .switchImages video, .switchImages iframe  {";
			string		+=		"display: none !important;";
			string		+=	"}";
			string		+=	".litLines {";
			string		+=	"}";
			string		+=	"</style>";



			$('head').append(string);		
			verticalRhythm.changeLineHeight(opts.lineHeight);

		return this.each( function() {
			var $this = $(this);
			var width = $this.width();
			var maxWidth = $this.css('max-width');


		});
	};







	// Default options. Can be overriden
	$.fn.LineInTypography.defaults = {
		gridContainer		: "#wrap",
		lineHeightContainer	: 'body',
		backgroundOffset	: -7,
		grid				: '12',
		gridState			: 'off',
		lineState			: 'on',
		testHtml			: "<p>Test paragraph to show line height</p>",
		pluginUrl			: "js/mylibs/"
	};

})(jQuery);