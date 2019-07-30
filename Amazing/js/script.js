$(function() {
    var close = $('.close-menu');
    var bar = $('.bar-menu')
    var link = $('.m-menu-link');
    var overley = $('.header_overley');
    var menu = $('.menu');
    var play = $('.music-button-click');
    var play_icon = $('.play');
    var stop = $('.stop');
    var audio = new Audio('source/song.mp3');
    link.on('click', function(event) {
        event.preventDefault();
        overley.toggleClass('header_overley__active');
        // link.toggleClass('close-menu');
        menu.toggleClass('menu__active');
        bar.toggleClass('hide');
        close.toggleClass('hide');
    });
    play.on('click', function(event) {
        audio.play();
        play_icon.toggleClass('hide');
        stop.toggleClass('hide');
    });
});