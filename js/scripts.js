$(document).ready(function() {
  $(".clickable1").click(function() {
    $(".ghost1").fadeToggle();
    $("#secondGhost").fadeToggle();
  });
  $(".clickable2").click(function() {
    $(".ghost2").slideToggle();
  });
});
