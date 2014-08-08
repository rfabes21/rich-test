define(function (require, exports, module) {

var rich = require('rich');
var template = require('hbs!../../templates/photo-view');
var Transform = require('famous/core/Transform');
var SlideData = require('app/slideshow/data/slide-data');

var PhotoView = rich.ItemView.extend({
    template: template,
    className: 'photo-view',
    ui: {
        photo: '.photo img'
    },


    initialize: function(){

    },

    onRender: function(){
        this.fetchPhoto();
    },

    fetchPhoto: function(){
        var photoUrl = SlideData.defaultImage;
        this.ui.photo.attr('src', photoUrl);
    },
});

exports.PhotoView = PhotoView;

});
