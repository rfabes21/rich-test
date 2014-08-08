define(function (require, exports, module) {

var rich = require('rich');
var template = require('hbs!../../templates/slide-view');
var Transform = require('famous/core/Transform');

var SlideView = rich.ItemView.extend({
    template: template,
    className: 'slide',

    initialize: function(){
    },
});

exports.SlideView = SlideView;

});
