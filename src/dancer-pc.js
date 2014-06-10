var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"><img src="http://www.tomstuder.com/wp-content/uploads/2012/07/dog-011.png"/></span>');
  this.setPosition(top, left);
  this.step();
  this._timeBetweenSteps = timeBetweenSteps;
};

Dancer.prototype.step = function() {
  // var stepCall = function() { this.step.call(this); };
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
