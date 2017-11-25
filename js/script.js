$(document).ready(function() {
  $(".cross").hide();
  $(".menu").hide();
  $(".hamburger").click(function() {
    $(".menu").slideToggle("fast", function() {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });
  $(".cross").click(function() {
    $(".menu").slideToggle("fast", function() {
      $(".cross").hide();
      $(".hamburger").show();
    });
  });
  $(window).on("resize", function() {
    if (window.innerWidth > 767) {
      $(".hamburger").hide();
    } else {
      $(".hamburger").show();
    }
  });
});
