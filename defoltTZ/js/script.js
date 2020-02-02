$(document).ready(function () {
  $(".menu-block-item").click(function () {
    var i = $(this).data("id");
    $("#mb-" + i).toggleClass("_active");
    // $("#mb-1 .arrow>path").toggleClass("_activer");
    $("#mb-" + i + " .arrow").toggleClass("arrow_show");
    $("#mb-" + i + " path").toggleClass("_active");
    $("#sbm-" + i).toggleClass("_actived");
  })
})