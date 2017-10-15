$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back_to_top').fadeIn();
        } else {
            $('.back_to_top').fadeOut();
        }
    });

    $('.back_to_top').click(function () {
        $('#jumbotrons').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
    });

});