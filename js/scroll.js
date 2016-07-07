$(document).ready(function() {
    var stickyNavTop = $('#buttons').offset().top;

    var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
        $('#buttons').addClass('sticky');
    } else {
        $('#buttons').removeClass('sticky');
    }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});