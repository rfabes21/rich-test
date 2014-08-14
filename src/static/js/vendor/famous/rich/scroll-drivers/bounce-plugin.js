define(function (require, exports, module) {

    var PhysicsEngine = require('famous/physics/PhysicsEngine');
    var Particle = require('famous/physics/bodies/Particle');
    var Spring = require('famous/physics/forces/Spring');
    var TouchSync = require('famous/inputs/TouchSync');
    var ScrollSync = require('famous/inputs/ScrollSync');
    var MouseSync = require('famous/inputs/MouseSync');
    var events = require('../events');
    var SimplePlugin = require('./simple-plugin').SimplePlugin;

    var BouncePlugin =  SimplePlugin.extend({

        initialize : function(scrollView){
            this.scrollView = scrollView;

            // this.listenTo(this.scrollView, 'scroll:update', this.scrollVerify);

        },

        updateSpring: function(addSpring, xSpringPos, ySpringPos, springAnchor){
            var springOptions = {
                anchor: springAnchor,
                period: 500,
                dampingRatio: 1
            };

            if(addSpring){
                this.scrollView._spring.setOptions(springOptions);
                if(this.scrollView._hasSpring){
                    // update spring
                }else{
                    // add a spring
                    this.scrollView._particle.setVelocity(0);
                    // undo this dino
                    // this.scrollView._physicsEngine.attach([this.scrollView._spring], this.scrollView._particle);
                    this.scrollView._hasSpring = true;
                    this.scrollView._scrollableView.setNeedsDisplay(true);
                    this.scrollView._scrollableView.on(events.RENDER, this.scrollView._onSpringRender);
                }
                this.scrollView._positionY.set(ySpringPos);
                this.scrollView._positionX.set(xSpringPos);
            }else{
                if(this.scrollView._hasSpring){
                    // undo this dino
                    // this.scrollView._physicsEngine.detachAll();
                    this.scrollView._particle.setVelocity(0);
                    this.scrollView._hasSpring = false;
                    this.scrollView._scrollableView.setNeedsDisplay(false);
                    this.scrollView._scrollableView.off(events.RENDER, this.scrollView._onSpringRender);
                }
            }
        },
    });

exports.BouncePlugin = BouncePlugin;

});
