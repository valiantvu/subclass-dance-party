var TravDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src="http://iconbug.com/data/53/256/b88e0b8122a6383eebe488006694720d.png"/></span>');
  this.setPosition(top, left);
  this.counter = 85;
  this.width = $('body').width();
};

TravDancer.prototype = Object.create(BlinkyDancer.prototype);

TravDancer.prototype.step = function(){
  BlinkyDancer.prototype.step.call(this);
  if(this.counter === 5){
    this.counter = 85;
  }
  var leftPosition = (this.counter/100) * this.width;
  this.$node.css({left: leftPosition});
  this.counter--;

};

