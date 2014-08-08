define(function (require, exports, module) {

var rich = require('rich');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var app = require('app/famous/core');
var CubeView = require('./cube-view').CubeView;

var w = window.innerWidth;
var h = window.innerHeight;

var CubeLayout = rich.LayoutView.extend({
    name: 'CubeLayout',
    shouldInitializeRenderable: false,
    regions:{
        cube: rich.Region.extend({
            size: [w, h],
            modifier: function(){
                return new Modifier({
                    // origin: [0.5, 0.5]
                });
            }
        })
    },

    onShow : function(){
        this.cube.show(new CubeView());
    },

});

exports.CubeLayout = CubeLayout;

});
