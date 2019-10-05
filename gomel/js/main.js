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




// =========================
$(function () {
  $('#path0').hover(function () {
    $('#map-od0').removeClass('default-opacity');
    $('#map-od0').toggleClass('fade_in');
    $('#path0').click(function () {
      $('#map-od0').toggleClass('__opacity ');
    })
  })
  $('#path1').hover(function () {
    // $('#map-od0').removeClass('__opacity');
    $('#map-od1').toggleClass('fade_in');
    $('#path1').click(function () {
      $('#map-od1').toggleClass('__opacity ');
    })
  })
  $('#path2').hover(function () {
    // $('#map-od0').removeClass('__opacity');
    $('#map-od2').toggleClass('fade_in');
    $('#path2').click(function () {
      $('#map-od2').toggleClass('__opacity ');
    })
  })
  $('#path3').hover(function () {
    // $('#map-od0').removeClass('__opacity');
    $('#map-od3').toggleClass('fade_in');
    $('#path3').click(function () {
      $('#map-od3').toggleClass('__opacity ');
    })
  })
  $('#path4').hover(function () {
    // $('#map-od0').removeClass('__opacity');
    $('#map-od4').toggleClass('fade_in');
    $('#path4').click(function () {
      $('#map-od4').toggleClass('__opacity ');
    })
  })
  $('#path5').hover(function () {
    // $('#map-od0').removeClass('__opacity');
    $('#map-od5').toggleClass('fade_in');
    $('#path5').click(function () {
      $('#map-od5').toggleClass('__opacity ');
    })
  })
  $('#path6').hover(function () {
    // $('#map-od0').removeClass('__opacity');
    $('#map-od6').toggleClass('fade_in');
    $('#path6').click(function () {
      $('#map-od6').toggleClass('__opacity ');
    })
  })
  $('#path7').hover(function () {
    // $('#map-od0').removeClass('__opacity');
    $('#map-od7').toggleClass('fade_in');
    $('#path7').click(function () {
      $('#map-od7').toggleClass('__opacity ');
    })
  })
  $('#path8').hover(function () {
    // $('#map-od0').removeClass('__opacity');
    $('#map-od8').toggleClass('fade_in');
    $('#path8').click(function () {
      $('#map-od8').toggleClass('__opacity ');
    })
  })
  $('#path9').hover(function () {
    // $('#map-od0').removeClass('__opacity');
    $('#map-od9').toggleClass('fade_in');
    $('#path9').click(function () {
      $('#map-od9').toggleClass('__opacity ');
    })
  })
  $('#path10').hover(function () {
    // $('#map-od0').removeClass('__opacity');
    $('#map-od10').toggleClass('fade_in');
    $('#path10').click(function () {
      $('#map-od10').toggleClass('__opacity ');
    })
  })
  $('#path11').hover(function () {
    // $('#map-od0').removeClass('__opacity');
    $('#map-od11').toggleClass('fade_in');
    $('#path11').click(function () {
      $('#map-od11').toggleClass('__opacity ');
    })
  })
  $('#path12').hover(function () {
    // $('#map-od0').removeClass('__opacity');
    $('#map-od12').toggleClass('fade_in');
    $('#path12').click(function () {
      $('#map-od12').toggleClass('__opacity ');
    })
  })
});
// ===================
$(function () {
  $('path').click(function () {
    $(this).toggleClass('__opacity ');
  })

})