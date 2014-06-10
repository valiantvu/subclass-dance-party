var Bouncer = function(top, left, timeBetweenSteps) {
  timeBetweenSteps = 50;
  this.series = [1, 0.75, 0.5, 0.375, 0.25, 0.185, 0.12, 0.09, 0.06, 0.045, 0.03, 0.015, 0, 0.015, 0.03, 0.045, 0.06, 0.09, 0.12, 0.185, 0.25, 0.75, 0.5];
  this.counter = 0;
  this.maxHeight = top;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><a><img src="http://www.tomstuder.com/wp-content/uploads/2012/07/dog-011.png"/></a></span>');
  this.setPosition(top, left);
};

Bouncer.prototype = Object.create(Dancer.prototype);

Bouncer.prototype.constructor = Bouncer;

Bouncer.prototype.lineUp = function(){
  this.maxHeight = 0.25 * $('body').height();
};

Bouncer.prototype.step = function() {
  if (this.counter === this.series.length - 1) {
    this.counter = 0;
  }
  Dancer.prototype.step.call(this);
  var height = this.maxHeight*(this.series[this.counter]);
  this.$node.css({top: height});
  this.counter++;
};

