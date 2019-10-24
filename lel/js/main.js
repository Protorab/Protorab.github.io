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
// ==============
// open modal
$(document).ready(function () {
  $('.subtablink').click(function () {
    $('#tovari-bed> div').hide();
    var i = $(this).data('id');
    $('.b' + i).fadeIn();
  });
});
// ==================
var show = function (state) {
  document.getElementById('modalform').style.display = state;
  document.getElementById('filter').style.display = state;
}
// ====================================
$(document).ready(function () {
  $('.more-but').click(function () {
    // $('.info-form').hide();
    var i = $(this).data('id');
    $('#p' + i).show();
    // $('#p' + i).toggleClass('.info-form-grid_add');
  });
  $('.info-form .but-cancel').click(function () {
    $('.info-form').hide();
  })
});
// ===================================
$(document).ready(function () {
  $('.more-but').click(function () {
    // $('.info-form').hide();
    var i = $(this).data('id');
    $('#p' + i).show();
    // $('#p' + i).toggleClass('.info-form-grid_add');
  });
  $('.info-form .but-cancel').click(function () {
    $('.info-form').hide();
  })
});
// ================================================
$(document).ready(function () {
  $('.small-img').click(function () {
    $('.product-img-container>.product-img').hide();
    var i = $(this).data('id');
    $('#b_img' + i).show();
    // $('#p' + i).toggleClass('.info-form-grid_add');
  });
  // $('.info-form .but-cancel').click(function () {
  // $('.info-form .product-img').hide();
  // })
});