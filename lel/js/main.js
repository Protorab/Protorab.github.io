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
    $('#filter').show();
    var i = $(this).data('id');
    $('#p' + i).show();
    // $('#p' + i).toggleClass('.info-form-grid_add');
  });
  $('.but-cancel').click(function () {
    $('.product-img-container>.product-img ').hide();
    $('.product-img-container>.product-img__default').show();
    $('#filter').hide();
    $('.info-form').hide();
  })
  $('#filter').click(function () {
    $('.product-img-container>.product-img ').hide();
    $('.product-img-container>.product-img__default').show();
    $('#filter').hide();
    $('.info-form').hide();
  })
});
// ===================================
$(document).ready(function () {
  $('.more-but').click(function ShowMore() {
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
    $('.product-img-container>.product-img ').hide();
    var i = $(this).data('id');
    $('#b_img' + i).show();
  });
});
//  ===================================================
$(document).ready(function () {
  $('.order-but').click(function () {
    var i = $(this).data('id');
    console.log($('#p' + i + '>.product-tittle').text());
    var name = $('#p' + i + '>.product-tittle').text();
    $('#ExampleInputOrder').val(name);
  })
})
$(document).ready(function () {
  $('.form-but-group.order-but').click(function () {
    var i = $(this).data('id');
    console.log($('#p' + i + '>.product-tittle').text());
    var name = $('#p' + i + '>.product-tittle').text();
    $('#ExampleInputOrder').val(name);
  })

})
// ==========
$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $('.menu').addClass('_show');
    console.log('11');
  } else {
    $('.menu').removeClass('scroll')
  }
});
// =====================
$(document).ready(function () {
  $('.product-img-watermark-color').hover(function () {
    // $('.main-preview-img-wrap>img ').hide();
    var i = $(this).data('id');
    $('#c' + i).toggleClass('__block__active');
    // $('#c' + i).toggleClass('__fade-in');
  });
});