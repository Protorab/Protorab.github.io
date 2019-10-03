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


// =========================
$(function () {
  $('#path0').hover(function () {
    $('#map-objects-discription1').removeClass('fade_out');
    $('#map-objects-discription1').addClass('fade_in');
  }, function () {
    $('#map-objects-discription1').removeClass('fade_in');
    $('#map-objects-discription1').addClass('fade_out')

  })
});