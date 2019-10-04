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
  $('#path2').hover(function () {
    $('#map-od2').removeClass('fade_out');
    $('#map-od2').addClass('fade_in');
  }, function () {
    $('#map-od2').removeClass('fade_in');
    $('#map-od2').addClass('fade_out')
  })
  $('#path3').hover(function () {
    $('#map-od3').removeClass('fade_out');
    $('#map-od3').addClass('fade_in');
  }, function () {
    $('#map-od3').removeClass('fade_in');
    $('#map-od3').addClass('fade_out')
  })
  $('#path4').hover(function () {
    $('#map-od4').removeClass('fade_out');
    $('#map-od4').addClass('fade_in');
  }, function () {
    $('#map-od4').removeClass('fade_in');
    $('#map-od4').addClass('fade_out')
  })
  $('#path5').hover(function () {
    $('#map-od5').removeClass('fade_out');
    $('#map-od5').addClass('fade_in');
  }, function () {
    $('#map-od5').removeClass('fade_in');
    $('#map-od5').addClass('fade_out')
  })
  $('#path6').hover(function () {
    $('#map-od6').removeClass('fade_out');
    $('#map-od6').addClass('fade_in');
  }, function () {
    $('#map-od6').removeClass('fade_in');
    $('#map-od6').addClass('fade_out')
  })
  $('#path7').hover(function () {
    $('#map-od7').removeClass('fade_out');
    $('#map-od7').addClass('fade_in');
  }, function () {
    $('#map-od7').removeClass('fade_in');
    $('#map-od7').addClass('fade_out')
  })
  $('#path8').hover(function () {
    $('#map-od8').removeClass('fade_out');
    $('#map-od8').addClass('fade_in');
  }, function () {
    $('#map-od8').removeClass('fade_in');
    $('#map-od8').addClass('fade_out')
  })
  $('#path9').hover(function () {
    $('#map-od9').removeClass('fade_out');
    $('#map-od9').addClass('fade_in');
  }, function () {
    $('#map-od9').removeClass('fade_in');
    $('#map-od9').addClass('fade_out')
  })
  $('#path10').hover(function () {
    $('#map-od10').removeClass('fade_out');
    $('#map-od10').addClass('fade_in');
  }, function () {
    $('#map-od10').removeClass('fade_in');
    $('#map-od10').addClass('fade_out')
  })
  $('#path11').hover(function () {
    $('#map-od11').removeClass('fade_out');
    $('#map-od11').addClass('fade_in');
  }, function () {
    $('#map-od11').removeClass('fade_in');
    $('#map-od11').addClass('fade_out')
  })
  $('#path12').hover(function () {
    $('#map-od12').removeClass('fade_out');
    $('#map-od12').addClass('fade_in');
  }, function () {
    $('#map-od12').removeClass('fade_in');
    $('#map-od12').addClass('fade_out')
  })
});
$(function () {
  $('path').click(function () {
    $(this).toggleClass('__opacity ');
  })

})