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
    $('#map-od0').toggleClass('fade_out');
    $('#map-od0').toggleClass('fade_in');
    $('#path0').click(function () {
      $("map-od0").toggleClass('__opacity')
    })
  }, function () {
    $('#map-od0').removeClass('fade_in');
    $('#map-od0').addClass('fade_out')
  })

  $('#path1').hover(function () {
    $('#map-od1').removeClass('fade_out');
    $('#map-od1').addClass('fade_in');
  }, function () {
    $('#map-od1').removeClass('fade_in');
    $('#map-od1').addClass('fade_out')
  })
});
$(function () {
  $('path').click(function () {
    $(this).toggleClass('__opacity ');
  })
  // $('map-objects-discription').hover(function () {
  //   $(this).css('opacity', '1');
  // })
})