// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 71
        },
        1000,
        "easeInOutExpo"
      );
      return false;
    }
  }
});

//  Intersection API
const images = document.querySelectorAll("[data-src]");
const config = {
  rootMargin: "0px 0px 50px 0px",
  threshold: 0
};
let loaded = 0;

let observer = new IntersectionObserver(function(entries, self) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // console.log(`Image ${entry.target.src} is in the viewport!`);
      preloadImage(entry.target);
      // Stop watching and load the image
      self.unobserve(entry.target);
    }
  });
}, config);

images.forEach(image => {
  observer.observe(image);
});

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
}

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
}

if ($(window).scrollTop() > 60) {
  $("#overlap-container").addClass("moveup");
}

//  Navbar - change color
$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    $(".navbar").addClass("active");
  } else {
    $(".navbar").removeClass("active");
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
