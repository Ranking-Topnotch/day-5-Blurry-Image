// Get the image element
var image = document.getElementById("pic");

// Set the initial opacity and blur values
var opacity = 0;
var blur = 5;

// Create an interval to gradually increase the opacity and remove the blur
var interval = setInterval(function() {
  // Increase the opacity
  opacity += 0.005;
  image.style.opacity = opacity;

  // Decrease the blur
  blur -= 0.05;
  image.style.filter = "blur(" + blur + "px)";

  // If the opacity reaches 1, stop the interval
  if (opacity >= 1) {
    clearInterval(interval);
  }
}, 50); // Change the time interval to slow down the transition (in milliseconds)
