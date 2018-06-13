//add two lights to "portfolio" button that operates based on status of animation

//showcase is the div you click and figure is the element whose webkit-animation-play-state is getting changed:

  var showcase = document.querySelector("figure"); 
  $(".showcase").mouseover(function(){ 
  $(".red").addClass("glow-red"); 
  $(".green").removeClass("glow-green"); }); 
  showcase.addEventListener("mouseout", function(){ 
  $(".red").removeClass("glow-red");
  $(".green").addClass("glow-green");  
  });
