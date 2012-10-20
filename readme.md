# Line In Typography

* Version: 0.3.0
* Stable tag: 0.2.0

This magical piece of markup monkery will make your mission to muster magnificent missives on your monitor much more manageable.

## Description

"You know, for grids." #obscurefilmreferences

This plugin allows display lines based on your theme's line height so that you can correctly set your vertical rhythm and line up all of your typography to a baseline grid like the titan of typography that I'm certain you are. 

One should be aware that this is a plugin primarily promoted to pixel pushers and isn't for production use. You would do well to know quite a bit about CSS and you should know how your theme is laid out in the HTMLs before using this plugin. 


## Usage

Just dump the jquery.lineintypography.min.js file in your js/ folder, link to it in your HTML and then attach it to your root element like so:

`jQuery('body').lineInTypography();`

Check out `index.html` for more configuration options and to see it in action.

## To Do

* Add better default CSS to show what's possible

## Changelog

### 0.1.1
* Resurrecting from the dead

### 0.2.0
* Adding readme.txt
* Restructuring folders
* Adding support for CSS gradients to remove need for images
* Removing LESS and replacing with SASS
* Adding test image with and without float to check text flows
* Adding default styling

### 0.2.1
* Added support for a 12 column, pure CSS grid
* Fixing issue with grids and lines not playing nice
