$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("#header").removeClass("header-bright");
    } else {
        $("#header").addClass("header-bright");
//        $("#header").css({"background-color":"rgba(255, 255, 255, .9)"})
    }
});