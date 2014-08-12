define(function (require, exports, module) {

var rich = require('rich');
var template = require('hbs!../../templates/scroll-control-view');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var CubeView = require('./cube-view').CubeView;

var w = window.innerWidth;
var h = window.innerHeight;

var ScrollControlView = rich.ItemView.extend({
    className: 'scroll-controlView',
    template : template,
    size: [w, h],
    initialize : function(){
        this.cubeView = new CubeView({
            size: [w, h]
        });

        this.addSubview(this.cubeView);

        this.modifier = new Modifier({
            origin: [0.5, 0.5],
        });
    },

    setScrollPosition: function(yPos){
        // console.log(yPos)
        this._currentPos = yPos;
        // console.log(yPos)
        this.cubeView.scrollPosition(yPos);
        // this.cubeView.invalidateView();
    },

    getScrollPosition: function(){
        // UPDATE for ryan
        //needs to be updated with proper math calcs

        var totalHeight = h * 4.7208;
        var tileHeight = totalHeight / 3;
        var selectedSpot = Math.round(this._currentPos/tileHeight);


        return -selectedSpot * tileHeight;
    },
});

exports.ScrollControlView = ScrollControlView;

});
