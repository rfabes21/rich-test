define(function (require, exports, module) {

var rich = require('rich');
var template = require('hbs!../../templates/scroll-control-view');
var Modifier = require('famous/core/Modifier');
var CubeView = require('./cube-view').CubeView;

var w = window.innerWidth * 0.6;
var h = window.innerHeight * 0.6;

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
            origin: [0.5, 0.5]
        });
    },

    setScrollPosition: function(yPos){
        var yValue = Math.abs(yPos);
        this.cubeView.scrollPosition(yPos);
    },
});

exports.ScrollControlView = ScrollControlView;

});
