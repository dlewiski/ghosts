$(document).ready(function() {
  $(".clickable1").click(function() {
    $(".ghost1").toggle();
    $("#secondGhost").toggle();
  });
  $(".clickable2").click(function() {
    $(".ghost2").toggle();
  });
});
