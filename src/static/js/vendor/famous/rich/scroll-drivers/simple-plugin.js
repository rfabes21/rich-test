define(function (require, exports, module) {

    var marionette = require('marionette');
    var Surface = require('famous/core/Surface');
    var FamousView = require('../view').FamousView;
    var GenericSync = require('famous/inputs/GenericSync');
    var PhysicsEngine = require('famous/physics/PhysicsEngine');
    var Particle = require('famous/physics/bodies/Particle');
    var Spring = require('famous/physics/forces/Spring');
    var Engine = require('famous/core/Engine');
    var TouchSync = require('famous/inputs/TouchSync');
    var ScrollSync = require('famous/inputs/ScrollSync');
    var MouseSync = require('famous/inputs/MouseSync');
    var EventHandler = require('famous/core/EventHandler');
    var Transitionable = require("famous/transitions/Transitionable");
    var events = require('../events');

    var SimplePlugin =  marionette.Controller.extend({

        initialize : function(scrollView){
            this.scrollView = scrollView;

            // this.listenTo(this.scrollView, 'scroll:update', this.verifyLimit);

        },


    });

exports.SimplePlugin = SimplePlugin;

});
