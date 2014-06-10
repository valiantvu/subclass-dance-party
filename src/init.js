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
    // var lineUpFunctionName = $(this).data("lineUp-function-name");

    // var lineUpFunction = window[lineUpFunctionName];
    // console.log('here');
    // Select all dancers and change their top property
    for (var i = 0; i < window.dancers.length; i++) {
      console.dir(window.dancers);
      window.dancers[i].lineUp();
    }
  });

  $("span").on('click', function() {
    console.log('hi');

    // innerHTML('<img src="http://www.iconshock.com/img_jpg/SHINE7/communications/jpg/256/rainbow_icon.jpg"/>');
  });
});

