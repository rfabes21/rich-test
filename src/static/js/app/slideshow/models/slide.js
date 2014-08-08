define(function( require, exports, module ){

var backbone = require('backbone');
var Slide = backbone.Model.extend({
    defaults: {
        size: null,
        content: null,
        tx: 0,
        ty: 0
    }
});

exports.Slide = Slide;

});
