/**
 *	Creates typographic overlays for testing line heights and grids
 *
 *	@version 0.2.0
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
		verticalRhythm.changeLineHeight = function( lineHeight ) {
			$('.litLines').css({"-webkit-background-size" : parseInt(lineHeight, 10) * 2 + "px " + parseInt(lineHeight, 10) * 2 + "px"});

			$('.litLines').css({"-moz-background-size" : parseInt(lineHeight, 10) * 2 + "px " + parseInt(lineHeight, 10) * 2 + "px"});
			$('.litLines').css({"-o-background-size" : parseInt(lineHeight, 10) * 2 + "px " + parseInt(lineHeight, 10) * 2 + "px"});
			$('.litLines').css({"background-size" : parseInt(lineHeight, 10) * 2 + "px " + parseInt(lineHeight, 10) * 2 + "px"});
			$('.litLines').css({"background-image" : "-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(50%, #ffffff), color-stop(50%, #dddddd))"});
			$('.litLines').css({"background-image" : " -webkit-linear-gradient(50% 0%, #ffffff 50%, #dddddd 50%)"});
			$('.litLines').css({"background-image" : " -moz-linear-gradient(50% 0%, #ffffff 50%, #dddddd 50%)"});
			$('.litLines').css({"background-image" : "-o-linear-gradient(50% 0%, #ffffff 50%, #dddddd 50%)"});
			$('.litLines').css({"background-image" : "-ms-linear-gradient(50% 0%, #ffffff 50%, #dddddd 50%)"});
			$('.litLines').css({"background-image" : "linear-gradient(50% 0%, #ffffff 50%, #dddddd 50%)"});
			$('.litLines').css({"background-position" : "0 " + verticalRhythm.bgPos + "px"});			
		}


		function addButton( text, id ) {
			return $('<a />').attr('href', '#').attr('id', id).text(text);
		}



	function loadButtons(opts) {

		var buttonDiv = $('<div />').attr('id', 'lit-buttons');

		var buttonControls = $('<div />')
								.addClass('lit-controls');

		var up = addButton('Up', 'litButtonUp');
		up.click( function() {
			verticalRhythm.bgPos = verticalRhythm.bgPos - 1;
			$('.'  + verticalRhythm.id).css(
				{'background-position' : '0 ' + verticalRhythm.bgPos + 'px'}
			);
			return false;
		});
		var down = addButton('Down', 'litButtonDown');
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
			.val(opts.lineHeight)
			.blur(function() {
				verticalRhythm.changeLineHeight($(this).val());	
			})
			.keypress( function(e) {
				if ( e.which == 13 ) {
					verticalRhythm.changeLineHeight($(this).val());	
					return false;
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
			string		+=		"position: fixed; top: 50px; right: 0; z-index: 200; background: #fff; padding: 15px;";
			string		+=		"border: 1px solid #000; -moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 10px; ";
			string		+=		"width: 200px;";
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