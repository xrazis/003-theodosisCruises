//  Default state of nav and container
if ($(window).scrollTop() > 50) {
    $(".navbar").addClass("active");
};

if ($(window).scrollTop() > 100) {
    $("#overlap-container").addClass("moveup");
};

//  Navbar - change color
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("active");
    } else {
        $(".navbar").removeClass("active");
    }
});

//  Container movement
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $("#overlap-container").addClass("moveup");
    } else {
        $("#overlap-container").removeClass("moveup");
    }
});

//  Carousel options
$('.carousel').carousel({
    interval: 3000,
    wrap: true
});