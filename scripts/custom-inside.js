$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
        $("#header").removeClass("header-noshadow");
    } else {
        $("#header").addClass("header-noshadow");
    }
});