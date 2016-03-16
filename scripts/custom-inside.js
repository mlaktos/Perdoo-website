$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("#header").removeClass("header-noshadow");
    } else {
        $("#header").addClass("header-noshadow");
    }
});