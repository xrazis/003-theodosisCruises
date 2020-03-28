// Scroll to top button appear
$(document).scroll(function() {
  var scrollDistance = $(this).scrollTop();
  if (scrollDistance > 100) {
    $(".scroll-to-top").fadeIn();
  } else {
    $(".scroll-to-top").fadeOut();
  }
});

//  Default state of nav and container
if ($(window).scrollTop() > 50) {
  $(".navbar").addClass("active");
  $(".logo-main").attr("src", "img/logos/logo-main_black.png");
}

if ($(window).scrollTop() > 60) {
  $("#overlap-container").addClass("moveup");
}

//  Navbar - change color
$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    $(".navbar").addClass("active");
    $(".logo-main").attr("src", "img/logos/logo-main_black.png");
  } else {
    $(".navbar").removeClass("active");
    $(".logo-main").attr("src", "img/logos/logo-main.png");
  }
});

//  Container movement
$(window).scroll(function() {
  if ($(window).scrollTop() > 60) {
    $("#overlap-container").addClass("moveup");
  } else {
    $("#overlap-container").removeClass("moveup");
  }
});

//  Carousel options
$(".carousel").carousel({
  interval: 3000,
  wrap: true
});

//  Fullscreen menu on small/medium screens
$("#navToggler").click(function() {
  $("#navbarSupportedContent")
    .stop(true, false)
    .animate({ width: "toggle" }, 350);
  $(this).toggleClass("move-toggler", 300);
  $("#changeIcon").toggleClass("changeIcon", 300);
  $("#logo").toggle("drop", 500);
});
