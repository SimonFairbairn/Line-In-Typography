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

			var string	=	"<style>";
			string		+=	"#lit-buttons {";
			string		+=		"position: fixed; top: 50px; right: 0; z-index: 200; background: #fff; padding: 15px;";
			string		+=		"border: 1px solid #000; -moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 10px; ";
			string		+=		"width: 400px;";
			string		+=	"}";
			string		+=	".switchImages embed, .switchImages img, .switchImages object, .switchImages video, .switchImages iframe  {";
			string		+=		"display: none !important;";
			string		+=	"}";
			string		+=	".litLines {";
			string		+=		"-webkit-background-size: " + parseInt(opts.lineHeight, 10) * 2 + "px " + parseInt(opts.lineHeight, 10) * 2 + "px;";
			string		+=		"-moz-background-size: " + parseInt(opts.lineHeight, 10) * 2 + "px " + parseInt(opts.lineHeight, 10) * 2 + "px;";
			string		+=		"-o-background-size: " + parseInt(opts.lineHeight, 10) * 2 + "px " + parseInt(opts.lineHeight, 10) * 2 + "px;";
			string		+=		"background-size: " + parseInt(opts.lineHeight, 10) * 2 + "px " + parseInt(opts.lineHeight, 10) * 2 + "px;";
			string		+=		"background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(50%, #ffffff), color-stop(50%, #dddddd));";
			string		+=		"background-image: -webkit-linear-gradient(50% 0%, #ffffff 50%, #dddddd 50%);";
			string		+=		"background-image: -moz-linear-gradient(50% 0%, #ffffff 50%, #dddddd 50%);";
			string		+=		"background-image: -o-linear-gradient(50% 0%, #ffffff 50%, #dddddd 50%);";
			string		+=		"background-image: -ms-linear-gradient(50% 0%, #ffffff 50%, #dddddd 50%);";
			string		+=		"background-image: linear-gradient(50% 0%, #ffffff 50%, #dddddd 50%);";
			string		+=		"background-position : 0 " + opts.backgroundOffset + "px;";
			string		+=	"}";
			string		+=	".gr960-12 {";
			string		+=	"background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(0%, rgba(100, 100, 225, 0.25)), color-stop(6.78%, rgba(100, 100, 225, 0.25)), color-stop(6.78%, rgba(0, 0, 0, 0)), color-stop(8.475%, rgba(0, 0, 0, 0)), color-stop(8.475%, rgba(100, 100, 225, 0.25)), color-stop(15.254%, rgba(100, 100, 225, 0.25)), color-stop(15.254%, rgba(0, 0, 0, 0)), color-stop(16.949%, rgba(0, 0, 0, 0)), color-stop(16.949%, rgba(100, 100, 225, 0.25)), color-stop(23.729%, rgba(100, 100, 225, 0.25)), color-stop(23.729%, rgba(0, 0, 0, 0)), color-stop(25.424%, rgba(0, 0, 0, 0)), color-stop(25.424%, rgba(100, 100, 225, 0.25)), color-stop(32.203%, rgba(100, 100, 225, 0.25)), color-stop(32.203%, rgba(0, 0, 0, 0)), color-stop(33.898%, rgba(0, 0, 0, 0)), color-stop(33.898%, rgba(100, 100, 225, 0.25)), color-stop(40.678%, rgba(100, 100, 225, 0.25)), color-stop(40.678%, rgba(0, 0, 0, 0)), color-stop(42.373%, rgba(0, 0, 0, 0)), color-stop(42.373%, rgba(100, 100, 225, 0.25)), color-stop(49.153%, rgba(100, 100, 225, 0.25)), color-stop(49.153%, rgba(0, 0, 0, 0)), color-stop(50.847%, rgba(0, 0, 0, 0)), color-stop(50.847%, rgba(100, 100, 225, 0.25)), color-stop(57.627%, rgba(100, 100, 225, 0.25)), color-stop(57.627%, rgba(0, 0, 0, 0)), color-stop(59.322%, rgba(0, 0, 0, 0)), color-stop(59.322%, rgba(100, 100, 225, 0.25)), color-stop(66.102%, rgba(100, 100, 225, 0.25)), color-stop(66.102%, rgba(0, 0, 0, 0)), color-stop(67.797%, rgba(0, 0, 0, 0)), color-stop(67.797%, rgba(100, 100, 225, 0.25)), color-stop(74.576%, rgba(100, 100, 225, 0.25)), color-stop(74.576%, rgba(0, 0, 0, 0)), color-stop(76.271%, rgba(0, 0, 0, 0)), color-stop(76.271%, rgba(100, 100, 225, 0.25)), color-stop(83.051%, rgba(100, 100, 225, 0.25)), color-stop(83.051%, rgba(0, 0, 0, 0)), color-stop(84.746%, rgba(0, 0, 0, 0)), color-stop(84.746%, rgba(100, 100, 225, 0.25)), color-stop(91.525%, rgba(100, 100, 225, 0.25)), color-stop(91.525%, rgba(0, 0, 0, 0)), color-stop(93.22%, rgba(0, 0, 0, 0)), color-stop(93.22%, rgba(100, 100, 225, 0.25)), color-stop(100.0%, rgba(100, 100, 225, 0.25)), color-stop(100.0%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0)));";
  			string		+=	"background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(100, 100, 225, 0.25) 0%, rgba(100, 100, 225, 0.25) 6.78%, rgba(0, 0, 0, 0) 6.78%, rgba(0, 0, 0, 0) 8.475%, rgba(100, 100, 225, 0.25) 8.475%, rgba(100, 100, 225, 0.25) 15.254%, rgba(0, 0, 0, 0) 15.254%, rgba(0, 0, 0, 0) 16.949%, rgba(100, 100, 225, 0.25) 16.949%, rgba(100, 100, 225, 0.25) 23.729%, rgba(0, 0, 0, 0) 23.729%, rgba(0, 0, 0, 0) 25.424%, rgba(100, 100, 225, 0.25) 25.424%, rgba(100, 100, 225, 0.25) 32.203%, rgba(0, 0, 0, 0) 32.203%, rgba(0, 0, 0, 0) 33.898%, rgba(100, 100, 225, 0.25) 33.898%, rgba(100, 100, 225, 0.25) 40.678%, rgba(0, 0, 0, 0) 40.678%, rgba(0, 0, 0, 0) 42.373%, rgba(100, 100, 225, 0.25) 42.373%, rgba(100, 100, 225, 0.25) 49.153%, rgba(0, 0, 0, 0) 49.153%, rgba(0, 0, 0, 0) 50.847%, rgba(100, 100, 225, 0.25) 50.847%, rgba(100, 100, 225, 0.25) 57.627%, rgba(0, 0, 0, 0) 57.627%, rgba(0, 0, 0, 0) 59.322%, rgba(100, 100, 225, 0.25) 59.322%, rgba(100, 100, 225, 0.25) 66.102%, rgba(0, 0, 0, 0) 66.102%, rgba(0, 0, 0, 0) 67.797%, rgba(100, 100, 225, 0.25) 67.797%, rgba(100, 100, 225, 0.25) 74.576%, rgba(0, 0, 0, 0) 74.576%, rgba(0, 0, 0, 0) 76.271%, rgba(100, 100, 225, 0.25) 76.271%, rgba(100, 100, 225, 0.25) 83.051%, rgba(0, 0, 0, 0) 83.051%, rgba(0, 0, 0, 0) 84.746%, rgba(100, 100, 225, 0.25) 84.746%, rgba(100, 100, 225, 0.25) 91.525%, rgba(0, 0, 0, 0) 91.525%, rgba(0, 0, 0, 0) 93.22%, rgba(100, 100, 225, 0.25) 93.22%, rgba(100, 100, 225, 0.25) 100.0%, rgba(0, 0, 0, 0) 100.0%, rgba(0, 0, 0, 0) 100%);";
			string		+=	"background-image: -moz-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(100, 100, 225, 0.25) 0%, rgba(100, 100, 225, 0.25) 6.78%, rgba(0, 0, 0, 0) 6.78%, rgba(0, 0, 0, 0) 8.475%, rgba(100, 100, 225, 0.25) 8.475%, rgba(100, 100, 225, 0.25) 15.254%, rgba(0, 0, 0, 0) 15.254%, rgba(0, 0, 0, 0) 16.949%, rgba(100, 100, 225, 0.25) 16.949%, rgba(100, 100, 225, 0.25) 23.729%, rgba(0, 0, 0, 0) 23.729%, rgba(0, 0, 0, 0) 25.424%, rgba(100, 100, 225, 0.25) 25.424%, rgba(100, 100, 225, 0.25) 32.203%, rgba(0, 0, 0, 0) 32.203%, rgba(0, 0, 0, 0) 33.898%, rgba(100, 100, 225, 0.25) 33.898%, rgba(100, 100, 225, 0.25) 40.678%, rgba(0, 0, 0, 0) 40.678%, rgba(0, 0, 0, 0) 42.373%, rgba(100, 100, 225, 0.25) 42.373%, rgba(100, 100, 225, 0.25) 49.153%, rgba(0, 0, 0, 0) 49.153%, rgba(0, 0, 0, 0) 50.847%, rgba(100, 100, 225, 0.25) 50.847%, rgba(100, 100, 225, 0.25) 57.627%, rgba(0, 0, 0, 0) 57.627%, rgba(0, 0, 0, 0) 59.322%, rgba(100, 100, 225, 0.25) 59.322%, rgba(100, 100, 225, 0.25) 66.102%, rgba(0, 0, 0, 0) 66.102%, rgba(0, 0, 0, 0) 67.797%, rgba(100, 100, 225, 0.25) 67.797%, rgba(100, 100, 225, 0.25) 74.576%, rgba(0, 0, 0, 0) 74.576%, rgba(0, 0, 0, 0) 76.271%, rgba(100, 100, 225, 0.25) 76.271%, rgba(100, 100, 225, 0.25) 83.051%, rgba(0, 0, 0, 0) 83.051%, rgba(0, 0, 0, 0) 84.746%, rgba(100, 100, 225, 0.25) 84.746%, rgba(100, 100, 225, 0.25) 91.525%, rgba(0, 0, 0, 0) 91.525%, rgba(0, 0, 0, 0) 93.22%, rgba(100, 100, 225, 0.25) 93.22%, rgba(100, 100, 225, 0.25) 100.0%, rgba(0, 0, 0, 0) 100.0%, rgba(0, 0, 0, 0) 100%);";
			string		+=	"background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(100, 100, 225, 0.25) 0%, rgba(100, 100, 225, 0.25) 6.78%, rgba(0, 0, 0, 0) 6.78%, rgba(0, 0, 0, 0) 8.475%, rgba(100, 100, 225, 0.25) 8.475%, rgba(100, 100, 225, 0.25) 15.254%, rgba(0, 0, 0, 0) 15.254%, rgba(0, 0, 0, 0) 16.949%, rgba(100, 100, 225, 0.25) 16.949%, rgba(100, 100, 225, 0.25) 23.729%, rgba(0, 0, 0, 0) 23.729%, rgba(0, 0, 0, 0) 25.424%, rgba(100, 100, 225, 0.25) 25.424%, rgba(100, 100, 225, 0.25) 32.203%, rgba(0, 0, 0, 0) 32.203%, rgba(0, 0, 0, 0) 33.898%, rgba(100, 100, 225, 0.25) 33.898%, rgba(100, 100, 225, 0.25) 40.678%, rgba(0, 0, 0, 0) 40.678%, rgba(0, 0, 0, 0) 42.373%, rgba(100, 100, 225, 0.25) 42.373%, rgba(100, 100, 225, 0.25) 49.153%, rgba(0, 0, 0, 0) 49.153%, rgba(0, 0, 0, 0) 50.847%, rgba(100, 100, 225, 0.25) 50.847%, rgba(100, 100, 225, 0.25) 57.627%, rgba(0, 0, 0, 0) 57.627%, rgba(0, 0, 0, 0) 59.322%, rgba(100, 100, 225, 0.25) 59.322%, rgba(100, 100, 225, 0.25) 66.102%, rgba(0, 0, 0, 0) 66.102%, rgba(0, 0, 0, 0) 67.797%, rgba(100, 100, 225, 0.25) 67.797%, rgba(100, 100, 225, 0.25) 74.576%, rgba(0, 0, 0, 0) 74.576%, rgba(0, 0, 0, 0) 76.271%, rgba(100, 100, 225, 0.25) 76.271%, rgba(100, 100, 225, 0.25) 83.051%, rgba(0, 0, 0, 0) 83.051%, rgba(0, 0, 0, 0) 84.746%, rgba(100, 100, 225, 0.25) 84.746%, rgba(100, 100, 225, 0.25) 91.525%, rgba(0, 0, 0, 0) 91.525%, rgba(0, 0, 0, 0) 93.22%, rgba(100, 100, 225, 0.25) 93.22%, rgba(100, 100, 225, 0.25) 100.0%, rgba(0, 0, 0, 0) 100.0%, rgba(0, 0, 0, 0) 100%);";
			string		+=	"background-image: -ms-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(100, 100, 225, 0.25) 0%, rgba(100, 100, 225, 0.25) 6.78%, rgba(0, 0, 0, 0) 6.78%, rgba(0, 0, 0, 0) 8.475%, rgba(100, 100, 225, 0.25) 8.475%, rgba(100, 100, 225, 0.25) 15.254%, rgba(0, 0, 0, 0) 15.254%, rgba(0, 0, 0, 0) 16.949%, rgba(100, 100, 225, 0.25) 16.949%, rgba(100, 100, 225, 0.25) 23.729%, rgba(0, 0, 0, 0) 23.729%, rgba(0, 0, 0, 0) 25.424%, rgba(100, 100, 225, 0.25) 25.424%, rgba(100, 100, 225, 0.25) 32.203%, rgba(0, 0, 0, 0) 32.203%, rgba(0, 0, 0, 0) 33.898%, rgba(100, 100, 225, 0.25) 33.898%, rgba(100, 100, 225, 0.25) 40.678%, rgba(0, 0, 0, 0) 40.678%, rgba(0, 0, 0, 0) 42.373%, rgba(100, 100, 225, 0.25) 42.373%, rgba(100, 100, 225, 0.25) 49.153%, rgba(0, 0, 0, 0) 49.153%, rgba(0, 0, 0, 0) 50.847%, rgba(100, 100, 225, 0.25) 50.847%, rgba(100, 100, 225, 0.25) 57.627%, rgba(0, 0, 0, 0) 57.627%, rgba(0, 0, 0, 0) 59.322%, rgba(100, 100, 225, 0.25) 59.322%, rgba(100, 100, 225, 0.25) 66.102%, rgba(0, 0, 0, 0) 66.102%, rgba(0, 0, 0, 0) 67.797%, rgba(100, 100, 225, 0.25) 67.797%, rgba(100, 100, 225, 0.25) 74.576%, rgba(0, 0, 0, 0) 74.576%, rgba(0, 0, 0, 0) 76.271%, rgba(100, 100, 225, 0.25) 76.271%, rgba(100, 100, 225, 0.25) 83.051%, rgba(0, 0, 0, 0) 83.051%, rgba(0, 0, 0, 0) 84.746%, rgba(100, 100, 225, 0.25) 84.746%, rgba(100, 100, 225, 0.25) 91.525%, rgba(0, 0, 0, 0) 91.525%, rgba(0, 0, 0, 0) 93.22%, rgba(100, 100, 225, 0.25) 93.22%, rgba(100, 100, 225, 0.25) 100.0%, rgba(0, 0, 0, 0) 100.0%, rgba(0, 0, 0, 0) 100%);";
			string		+=	"background-image: linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(100, 100, 225, 0.25) 0%, rgba(100, 100, 225, 0.25) 6.78%, rgba(0, 0, 0, 0) 6.78%, rgba(0, 0, 0, 0) 8.475%, rgba(100, 100, 225, 0.25) 8.475%, rgba(100, 100, 225, 0.25) 15.254%, rgba(0, 0, 0, 0) 15.254%, rgba(0, 0, 0, 0) 16.949%, rgba(100, 100, 225, 0.25) 16.949%, rgba(100, 100, 225, 0.25) 23.729%, rgba(0, 0, 0, 0) 23.729%, rgba(0, 0, 0, 0) 25.424%, rgba(100, 100, 225, 0.25) 25.424%, rgba(100, 100, 225, 0.25) 32.203%, rgba(0, 0, 0, 0) 32.203%, rgba(0, 0, 0, 0) 33.898%, rgba(100, 100, 225, 0.25) 33.898%, rgba(100, 100, 225, 0.25) 40.678%, rgba(0, 0, 0, 0) 40.678%, rgba(0, 0, 0, 0) 42.373%, rgba(100, 100, 225, 0.25) 42.373%, rgba(100, 100, 225, 0.25) 49.153%, rgba(0, 0, 0, 0) 49.153%, rgba(0, 0, 0, 0) 50.847%, rgba(100, 100, 225, 0.25) 50.847%, rgba(100, 100, 225, 0.25) 57.627%, rgba(0, 0, 0, 0) 57.627%, rgba(0, 0, 0, 0) 59.322%, rgba(100, 100, 225, 0.25) 59.322%, rgba(100, 100, 225, 0.25) 66.102%, rgba(0, 0, 0, 0) 66.102%, rgba(0, 0, 0, 0) 67.797%, rgba(100, 100, 225, 0.25) 67.797%, rgba(100, 100, 225, 0.25) 74.576%, rgba(0, 0, 0, 0) 74.576%, rgba(0, 0, 0, 0) 76.271%, rgba(100, 100, 225, 0.25) 76.271%, rgba(100, 100, 225, 0.25) 83.051%, rgba(0, 0, 0, 0) 83.051%, rgba(0, 0, 0, 0) 84.746%, rgba(100, 100, 225, 0.25) 84.746%, rgba(100, 100, 225, 0.25) 91.525%, rgba(0, 0, 0, 0) 91.525%, rgba(0, 0, 0, 0) 93.22%, rgba(100, 100, 225, 0.25) 93.22%, rgba(100, 100, 225, 0.25) 100.0%, rgba(0, 0, 0, 0) 100.0%, rgba(0, 0, 0, 0) 100%);";
			string		+=	"background-position: left top;";
			string		+=	"-webkit-background-origin: content;";
			string		+=	"-moz-background-origin: content;";
			string		+=	"-ms-background-origin: content-box;";
			string		+=	"-o-background-origin: content-box;";
			string		+=	"background-origin: content-box;";
			string		+=	"-webkit-background-clip: content-box;";
			string		+=	"-moz-background-clip: content-box;";
			string		+=	"background-clip: content-box;";
			string		+=	"}";
			string		+=	"</style>";


			$('head').append(string);		
		return this.each( function() {
			var $this = $(this);
			var width = $this.width();
			var maxWidth = $this.css('max-width');
			var gridClass = false;
			if ( opts.gridState === 'on' ) {
				if (opts.grid === '12' ) {
					gridClass = 'gr960-12';
				} else {
					gridClass = 'gr960-16';
				}
			}
			$this.addClass('columns')
			$(opts.gridContainer).addClass(gridClass);


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
		testHtml			: "<p>Test paragraph to show line height</p><p>Test paragraph to show line height</p>",
		pluginUrl			: "js/mylibs/"
	};

})(jQuery);