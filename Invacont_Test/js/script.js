$(document).ready(function () {
  $('.menu-bar').click(function () {
    $('.menu-bar').toggleClass('close');
    $('.bar').toggleClass('change');
    $('.menu-bar').toggleClass('change');
    $('.m-menu').toggleClass('__menu-show');
  })
  $('.m-menu a').click(function () {
    $('.menu-bar').toggleClass('close');
    $('.bar').toggleClass('change');
    $('.menu-bar').toggleClass('change');
    $('.m-menu').toggleClass('__menu-show');
  })

})