$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($("body").height()) * Math.random(),
      ($("body").width()) * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".lineUpButton").on("click", function(event){
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('body').on('dblclick', '.dancer', function() {

    this.remove();
    var top = this.style.top;
    var left = this.style.left;

    var explosion = $('<span class="explosion"><img src="src/explosion.gif"/></span>');
    var audioExplosion = $('<audio autoplay class="audioExplosion"><source src="src/explosion.mp3" type="audio/mpeg"></audio>');
    explosion[0].style.top = top;
    explosion[0].style.left = left;
    $('body').append(explosion);
    $('body').append(audioExplosion);

    setTimeout(function() {
      var explosions = $('.explosion');
      var audioExplosions = $('.audioExplosion');
      for (var key in explosions) {
        explosions.remove();
      }
    }, 2000);
  });

  $('body').on('click', '.dancer', function(){

    var top = parseInt(this.style.top.slice(0, this.style.top.length - 2));
    var left = parseInt(this.style.left.slice(0, this.style.left.length - 2));
    var distances = [];

    for( var i=0; i<window.dancers.length; i++ ){
      var compare = window.dancers[i].$node.position();
      var distance = Math.sqrt(Math.pow(top-compare.top, 2) + Math.pow(left-compare.left, 2));
      distances.push(distance);
    }

    var closest = [5000];
    for(var i=0; i<distances.length; i++){
      if( (distance[i] < closest[0]) && (distance[i] > 5)){
        closest = [distance[i], i];
      }
    }



    console.dir(closest);
  });

});

