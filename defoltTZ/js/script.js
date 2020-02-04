$(document).ready(function () {
  $("#header .menu-block-item").click(function () {
    var i = $(this).data("id");
    $(".menu-block-item").removeClass("_active");
    $(".mb-" + i).toggleClass("_active");
    $(".menu-block-item .arrow").removeClass("arrow_show");
    $(".mb-" + i + " .arrow").toggleClass("arrow_show");
    $(".menu-block-item path").removeClass("_active");
    $(".mb-" + i + " path").toggleClass("_active");
    $(".sub-menu-block").removeClass("_actived");
    $("#sbm-" + i).toggleClass("_actived");
    $(".content-block img").hide();
    $("#ci-" + i).show();
    $(".mb-" + i).click(function () {
      $(".mb-" + i).toggleClass("_active");
      $(".mb-" + i + " .arrow").toggleClass("arrow_show");
      $(".mb-" + i + " path").toggleClass("_active");
      $("#sbm-" + i).toggleClass("_actived");
      $(".content-block img").hide();
      $("#ci-" + i).show();
    })
  })

})