 define(function (require, exports, module) {

var rich = require('rich');
var template = require('hbs!../../templates/camera');

var CameraView = rich.ItemView.extend({
    template: template,
    className: 'camera',

    initialize: function(){

    },
});

exports.CameraView = CameraView;

});
