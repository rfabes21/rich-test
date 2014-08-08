define(function(require, exports, module) {

var marionette = require('marionette');
var SlideshowLayout = require('app/slideshow/views/slideshow-layout').SlideshowLayout;
var CubeLayout = require('app/cube/views/cube-layout').CubeLayout;
var CubeScrollLayout = require('app/cube/views/cube-scroll-layout').CubeScrollLayout;

var ApplicationDelegate = marionette.Controller.extend({

    initialize: function(options){
        this.app = options.app;
        this.app.window.context.setPerspective(3000);
        // this.app.window.show(new SlideshowLayout());
        // this.app.window.show(new CubeLayout());
        this.app.window.show(new CubeScrollLayout());
    }
});

exports.ApplicationDelegate = ApplicationDelegate;
});
