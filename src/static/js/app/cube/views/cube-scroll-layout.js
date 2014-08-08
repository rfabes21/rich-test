define(function (require, exports, module) {

var rich = require('rich');
var app = require('app/famous/core');
var backbone = require('backbone');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var scroll = require('rich/scrollview');
var CubeView = require('./cube-view').CubeView;
var ScrollControlView = require('./scroll-control-view').ScrollControlView;

var w = window.innerWidth * 0.6;
var h = window.innerHeight * 0.6;
var scrollH = h * 3;

var CubeScrollLayout = rich.LayoutView.extend({
    name: 'CubeLayout',
    template: false,
    regions:{
        scrollContainer: rich.Region.extend({
            size: [w, h],
            modifier: function(){
                return new Modifier({
                    origin: [0.5, 0.5]
                });
            }
        })
    },

    onShow: function(){
        var scrollView = new scroll.ScrollView({
            contentSize: [w, h * 12],
            size: [w, h],
            direction: scroll.DIRECTION_Y
        });

        this.listenTo(scrollView, 'scroll:update', this.onScrollUpdate);

        this.scrollControlView = new ScrollControlView({
            size: [w, h]
        });

        scrollView.addSubview(this.scrollControlView);

        this.scrollContainer.context.setPerspective(5000);
        this.scrollContainer.show(scrollView);
    },

    onScrollUpdate: function(data){
        var y = -data[1];
        this.scrollControlView.setScrollPosition(y);
    },



});

exports.CubeScrollLayout = CubeScrollLayout;

});
