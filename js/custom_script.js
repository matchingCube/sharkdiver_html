$(document).ready(function () {
    $(".toggle-mobile-menu").click(function () {
        $(".body-wrap").toggleClass("body-wrap-out");
        $(".body-block").toggleClass("body-wrap-out");
        $(".body-block").css("display", "block");
        $("body").css("overflow-y", "hidden");
    });
    $(".body-block").mousedown(function () {
        $(".body-wrap").removeClass("body-wrap-out");
        $(".body-block").removeClass("body-wrap-out");
        $(".body-block").css("display", "none");
        $("body").css("overflow-y", "auto");
    });
    $("#about").click(function () {
        $("#main_nav").addClass("mainmenu-slide-out");
        $("#submenu_about").addClass("submenu-slide-in");
        $(".to-mainmenu").css("display", "block");
        $("#sidebar-title").text("ABOUT");
    });
    $("#adventure").click(function () {
        $("#main_nav").addClass("mainmenu-slide-out");
        $("#submenu_adventure").addClass("submenu-slide-in");
        $(".to-mainmenu").css("display", "block");
        $("#sidebar-title").text("ADVENTURE");
    });
    $("#media").click(function () {
        $("#main_nav").addClass("mainmenu-slide-out");
        $("#submenu_media").addClass("submenu-slide-in");
        $(".to-mainmenu").css("display", "block");
        $("#sidebar-title").text("MEDIA");
    });
    $(".to-mainmenu").click(function () {
        $("#main_nav").removeClass("mainmenu-slide-out");
        if ($("#submenu_about").hasClass("submenu-slide-in")) {
            $("#submenu_about").removeClass("submenu-slide-in");
        } else if ($("#submenu_adventure").hasClass("submenu-slide-in")) {
            $("#submenu_adventure").removeClass("submenu-slide-in");
        } else if ($("#submenu_media").hasClass("submenu-slide-in")) {
            $("#submenu_media").removeClass("submenu-slide-in");
        }
        $(".to-mainmenu").css("display", "none");
        $("#sidebar-title").text("MENU");
    });
    $(".to-top").click(function () {
        $(window).scrollTop(0);
    })
});
$(window).scroll(function () {
    var scroll_top = $(window).scrollTop();
    if (scroll_top > 110) {
        $(".to-top").addClass("fade-in");
    } else if ($(".to-top").hasClass("fade-in")) {
        $(".to-top").removeClass("fade-in");
    }
});