define(function (require, exports, module) {

var rich = require('rich');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var app = require('app/famous/core');
var CameraView = require('./camera-view').CameraView;
var SlideshowView = require('./slideshow-view').SlideshowView;

//camera and slide placement
var cameraWidth =  0.6 * window.innerHeight;
var slideWidth = 0.8 * cameraWidth;
var slideHeight = slideWidth + 40;
var slidePosition = 0.77 * cameraWidth;

var SlideshowLayout = rich.LayoutView.extend({
    name: 'SlideshowLayout',
    shouldInitializeRenderable: false,
    regions:{
        camera: rich.Region.extend({
            size: [cameraWidth, true],
            modifier: function(){
                return new Modifier({
                    origin: [0.5, 0],
                    align: [0.5, 0],
                });
            },
        }),

        slideShow : rich.Region.extend({
            size: [slideWidth, slideHeight],
            zIndex: 3,
            modifier: function(){
                return new Modifier({
                    origin: [0.5, 0],
                    align: [0.5, 0],
                    transform: Transform.translate(0, slidePosition, 0),
                });
            },
        }),
    },

    onShow : function(){
        this.camera.show(new CameraView());
        this.slideShow.show(new SlideshowView());
    },

});

exports.SlideshowLayout = SlideshowLayout;

});
