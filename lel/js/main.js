// $(document).ready(function fade() {
//   $(".product").attr('data-aos', 'fade-left');
//   $(".product").addClass(' aos-init aos-animate ');
//   // aos-init aos-animate
// });
$(document).ready(function stok() {
  $(".product-img-not-in-stock").click(function () {
    $('.small-img-box-discription .in-stock').hide();
    $('.small-img-box-discription .not-in-stock').show();
  });
});
$(document).ready(function () {
  $(".product-img-in-stock").click(function () {
    // console.log(+1);
    $('.small-img-box-discription .in-stock').show();
    $('.small-img-box-discription .not-in-stock').hide();
  });
});



$(document).ready(function () {
  $('#map').hover(function () {
    $('#map h3').toggleClass('__fade-in');
    $('#map h3').toggleClass('__fade-out');
    $('.overley').click(function () {
      $('.overley').fadeOut();
    });
  });
});

// =======================
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
// =========== open modal =====================
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
  // document.getElementById('thanks-form').style.display = state;
};
// ====================================
$(document).ready(function () {
  $('.more-but').click(function ShowMore() {
    $('#filter').show();
    var i = $(this).data('id');
    $('#p' + i).show();
  });
  $('.but-cancel').click(function () {
    $('.product-img-container>.product-img ').hide();
    $('.product-img-container>.product-img__default').show();
    $('#filter').hide();
    $('.info-form').hide();
    $('.small-img-box-discription .in-stock').show();
    $('.small-img-box-discription .not-in-stock').hide();
  });
  $('#filter').click(function () {
    $('.product-img-container>.product-img ').hide();
    $('.product-img-container>.product-img__default').show();
    $('#filter').hide();
    $('.info-form').hide();
  });
});

// =============preview_img_in_infoform================
$(document).ready(function () {
  $('.small-img').click(function () {
    $('.product-img-container>.product-img ').hide();
    var i = $(this).data('id');
    $('#b_img' + i).show();
  });
});
//  ==============auto insert name of order=======================
$(document).ready(function () {
  $('.order-but').click(function () {
    var i = $(this).data('id');
    console.log($('#p' + i + '>.product-tittle').text());
    var name = $('#p' + i + '>.product-tittle').text();
    $('#ExampleInputOrder').val(name);
  });
});
$(document).ready(function () {
  $('.form-but-group.order-but').click(function () {
    var i = $(this).data('id');
    console.log($('#p' + i + '>.product-tittle').text());
    var name = $('#p' + i + '>.product-tittle').text();
    $('#ExampleInputOrder').val(name);
  });
});
// ==============scroll menu change============================
function scroscrollTopl() {
  window.onscroll = function () {
    var fixedTop = $('.menu');
    if (window.pageYOffset > 300) {
      fixedTop.addClass('_show');
      this.console.log('11');
    } else {
      fixedTop.removeClass('_show');
    }
  };
}
// ====== color change ===========
$(document).ready(function () {
  $('.product-img-watermark-color').hover(function () {
    // $('.main-preview-img-wrap>img ').hide();
    var i = $(this).data('id');
    $('#c' + i).toggleClass('__block__active');
    // $('#c' + i).toggleClass('__fade-in');
  });
});


// ++++++++++++++++ send form +++++++++++
$(document).ready(function () {

  //E-mail Ajax Send
  $("#modalform").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $('#modalform').hide();
      $('#thanks-form').show();

      // alert("Thank you!");
      // setTimeout(function () {
      //   // Done Functions
      //   th.trigger("reset");
      // }, 1000);
    });
    return false;
  });
});
// ============thanks form close==========
$(document).ready(function () {
  $('#back').click(function () {
    $('#thanks-form').hide();
  });
});

// ==========================================
$(document).ready(function () {
  $('.small-img img').click(function () {
    color_text = $(this).attr('alt');
    $('.info-form .product-tittle').text(' ' + color_text);
  });
});