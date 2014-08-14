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

    var DIRECTION_X = GenericSync.DIRECTION_X;
    var DIRECTION_Y = GenericSync.DIRECTION_Y;

    var SimplePlugin =  marionette.Controller.extend({

        initialize : function(scrollView){
            this.scrollView = scrollView;

            // this.listenTo(this.scrollView, 'scroll:update', this.scrollVerify);

        },

        onScrollUpdate: function(data){
            // console.log('called');
            var delta = data.delta;

            this.scrollView._setScrollDirection(delta);

            // normalize the data based on direction

            if(this.scrollView.direction == DIRECTION_Y){
                delta[0] = 0;
                if(this.scrollView._scrollDirection == 'x' && this.scrollView.getDirectionalLockEnabled())return;
            }else if(this.scrollView.direction == DIRECTION_X){
                delta[1] = 0;
                if(this.scrollView._scrollDirection == 'y' && this.scrollView.getDirectionalLockEnabled())return;
            }

            var pos = this.scrollView._particle.getPosition();
            var gotoPosX = this.scrollView._positionX.get() + delta[0];
            var gotoPosY = this.scrollView._positionY.get() + delta[1];
            var contentSize = this.scrollView.getContentSize();
            var containerSize = this.scrollView.getSize();
            var scrollableDistanceX = contentSize[0] - containerSize[0];
            var scrollableDistanceY = contentSize[1] - containerSize[1];

            var isPastTop = gotoPosY > 0;
            var isPastBottom = scrollableDistanceY + gotoPosY < 0;
            var isPastLeft = gotoPosX > 0;
            var isPastRight = scrollableDistanceX + gotoPosX < 0;

            var isOutOfBoundsY = isPastTop || isPastBottom;
            var isOutOfBoundsX = isPastLeft || isPastRight;

            var springAnchor = [gotoPosX, gotoPosY, 0];
            var addSpring = false;

            var xSpringPos = gotoPosX;
            var ySpringPos = gotoPosY;

            var shouldScroll =  this.scrollView._shouldScroll(contentSize, containerSize);
            if(!shouldScroll)return;

            if(isOutOfBoundsX && this.scrollView.direction != DIRECTION_Y){
                xSpringPos = isPastRight ? -scrollableDistanceX : 0;
                springAnchor[0] = xSpringPos;
                addSpring = true;
            }
            if(isOutOfBoundsY && this.scrollView.direction != DIRECTION_X){
                ySpringPos = isPastBottom ? -scrollableDistanceY : 0;
                springAnchor[1] = ySpringPos;
                addSpring = true;
            }

            // this gets rid of the flutter when you're already going out of bounds
            if(this.scrollView._hasSpring && addSpring){
                return;
            }

            this.scrollView.setScrollPosition(gotoPosX, gotoPosY, false);
            this.scrollView._updateSpring(addSpring, xSpringPos, ySpringPos, springAnchor);
            this.scrollView.trigger('scroll:update', this.scrollView.getScrollPosition());
        },

    });

exports.SimplePlugin = SimplePlugin;

});
