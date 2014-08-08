define(function (require, exports, module) {

var rich = require('rich');
var template = require('hbs!../../templates/film-view');
var Transform = require('famous/core/Transform');

var FilmView = rich.ItemView.extend({
    template: template,
    className: 'film-view',

    initialize: function(){
    },
});

exports.FilmView = FilmView;

});
