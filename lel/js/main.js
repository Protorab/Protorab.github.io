function ShowClose(x) {

  x.classList.toggle("change");
}
// ===================
$(function () {
  var link = $('.menu-bar');
  var menu = $('.menu');
  var logo = $('.logo');
  var bars = $('.menu-bar>div');
  link.on('click', function (event) {
    event.preventDefault();
    menu.toggleClass('_show');
    logo.toggleClass('color_change ');
  });
});
