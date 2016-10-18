$(document).ready(function() {
  $("#pinky img").click(function() {
    $("#pinky ul").prepend("<li>What are we taking over?</li>");
    $("#brain ul").append("<li>THE WORLD</li>").hide().fadeIn('slow');
  });
  $("#brain img").click(function() {
    $("#brain ul").prepend("<li>What are we taking over pinky?</li>");
    $("#pinky ul").append("<li>All of the cheese!</li>").hide().fadeIn('slow');

  });
});
