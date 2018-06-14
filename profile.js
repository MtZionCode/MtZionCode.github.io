//add two lights to "portfolio" button that operates based on status of animation

//showcase is the div you click and figure is the element whose webkit-animation-play-state is getting changed:
$(document).ready(function () {
"use strict"
//part 1: add two lights to "portfolio" button that operates based on status of animation
//part 2: make red light blink while mouse is over contents of "Portfolio" button drop-down menu

/*part 1*/

  var showcase = document.querySelector("figure"); 
  showcase.addEventListener("mouseover", function(){ 
  $(".red").addClass("glow-red"); 
  $(".green").removeClass("glow-green"); }); 
  showcase.addEventListener("mouseout", function(){ 
  $(".red").removeClass("glow-red"); 
  $(".green").addClass("glow-green");  
  });

/*part 2*/

var dropdown = document.querySelector('.dropdown-content');
dropdown.addEventListener('mouseenter', blinking);
dropdown.addEventListener('mouseleave', stopBlinking);

let isBlinking = false;
var element = $(".red");

function blinking() {
  if (!isBlinking) {
    isBlinking = true;
    var shown = true;
    var element = $(".red").addClass("glow-red"); 
    interval = setInterval(toggle, 100);

    function toggle() {
      if (shown) {
        element.hide();
        shown = false;
      } else {
        element.show();
        shown = true;
      }
    }
  }
}


function stopBlinking() {
  var element = $(".red").removeClass("glow-red"); 
  clearInterval(interval)
  isBlinking = false;
  element.show()
}

});
