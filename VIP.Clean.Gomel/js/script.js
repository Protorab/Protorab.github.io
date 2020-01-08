$(document).ready(function () {
  var windowWidth = $(window).width();
  if (windowWidth > 999) {
    $(".item").attr('onclick', "");
    $(".item").removeClass("bt-trigger");
  } else {
    $(".item").attr('onclick', "show( 'block')");
    $(".item").addClass("bt-trigger");
  }

  $(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth < 999) {
      $(".item").addClass("bt-trigger");
      $(".item").attr('onclick', "show( 'block')");
    } else {
      $(".item").removeClass("bt-trigger");
      $(".item").attr('onclick', "");
    }
  });
});
// =============
$(function call() {
  var trigger = $(".trigger");
  var form = $("#modalform");
  var trigger_status = $(".form-group-wrap-button p");
  trigger.on("click", function () {
    form.toggleClass("full_size");
    trigger_status.toggleClass("small");
    trigger_status.toggleClass("full");
  });
});
// ===========================
$(document).ready(function () {
  $(".bt-trigger").click(function () {
    var i = $(this).data("id");
    var mt = $("#mt" + i).text();
    var mi = $("#mi" + i).data("src");
    $(".form-discription").hide();
    $(".form-img-wrap-roundabout").hide();
    $("#discription-" + i + ".form-discription").show();
    $("#roundabout-" + i + ".form-img-wrap-roundabout").show();
    // $("roundabout-" + i).show();
    // var fd = $('#m-discription' + i).text();
    $("#fi").attr("src", mi);
    // $('#f-discription').text(fd)
    $("#ft").text(mt);
    $(".info-form").show();
    console.log(i)
  });
});
$(document).ready(function () {
  $(".preview-img img").click(function () {
    var i = $(this).data("id");
    console.log(i);
    var sm_img = $("#prev-" + i + " img").attr("src");
    $("#fi").attr("src", sm_img);

  })

})

// ======================================================================
// ============
var show = function (state) {
  document.getElementById("inf_frm").style.display = state;
  document.getElementById("filter").style.display = state;
  // document.getElementById('thanks-form').style.display = state;
};
// ============

$(function () {
  var close = $(".close-menu");
  var link = $(".m-menu-link");
  var menu = $(".m-menu");
  link.on("click", function (event) {
    event.preventDefault();
    menu.toggleClass("m-menu__active");
    link.hide();
    close.show();
  });
  close.on("click", function (event) {
    event.preventDefault();
    menu.toggleClass("m-menu__active");
    link.show();
    close.hide();
  });
});
// ===========