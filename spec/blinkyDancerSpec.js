describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe("Dancer", function() {
  var dancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a setPosition function", function() {
    dancer.setPosition();
    expect(dancer.$node[0].style.top).to.be.equal("10px");
    expect(dancer.$node[0].style.left).to.be.equal("20px");
  });
});

describe("BlinkyDancer", function() {
  var blinkydancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkydancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkydancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a setPosition function", function() {
    blinkydancer.setPosition();
    expect(blinkydancer.$node[0].style.top).to.be.equal("10px");
    expect(blinkydancer.$node[0].style.left).to.be.equal("20px");
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkydancer.$node, 'toggle');
    blinkydancer.step();
    expect(blinkydancer.$node.toggle.called).to.be.true;
  });

});
