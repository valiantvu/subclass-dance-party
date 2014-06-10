var Bouncer = function(top, left, timeBetweenSteps) {
  timeBetweenSteps = 100;
  this.series = [1, 0.5, 0.25, 0.12, 0.06, 0.03, 0, 0.03, 0.06, 0.12, 0.25, 0.5];
  this.counter = 0;
  this.maxHeight = top;
  Dancer.call(this, top, left, timeBetweenSteps);
};

Bouncer.prototype = Object.create(Dancer.prototype);

Bouncer.prototype.constructor = Bouncer;

Bouncer.prototype.step = function() {
  if (this.counter === 12) {
    this.counter = 0;
  }
  Dancer.prototype.step.call(this);
  var height = this.maxHeight*(this.series[this.counter]);
  this.$node.css({top: height});
  this.counter++;
};
