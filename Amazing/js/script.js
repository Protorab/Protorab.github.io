$(function() {
    var close = $('.close-menu');
    var bar = $('.bar-menu')
    var link = $('.m-menu-link');
    var overley = $('.header_overley');
    var menu = $('.menu');
    link.on('click', function(event) {
        event.preventDefault();
        overley.toggleClass('header_overley__active');
        // link.toggleClass('close-menu');
        menu.toggleClass('menu__active');
        bar.toggleClass('hide');
        close.toggleClass('hide');
    });
    // close.on('click', function(event) {
    //     event.preventDefault();
    //     menu.toggleClass('menu__active');
    // });
});