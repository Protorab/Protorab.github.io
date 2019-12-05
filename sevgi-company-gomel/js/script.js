$(function call() {
    var trigger = $('.trigger');
    var form = $('#modalform');
    var trigger_status = $('.form-group-wrap-button p')
    trigger.on('click', function () {
        form.toggleClass('full_size');
        trigger_status.toggleClass('small');
        trigger_status.toggleClass('full');
    });
})
$(document).ready(function () {
    $('.more-btn').click(function () {
        var i = $(this).data('id');
        var mt = $("#mt" + i).text();
        var mi = $("#mi" + i).data("src");
        $('#discription-' + i + '.discription').show();
        // var fd = $('#m-discription' + i).text();
        $('#fi').attr('src', mi);
        // $('#f-discription').text(fd)
        $('#ft').text(mt);
        $('.info-form').show();
    })
})
// ======================================================================
// ============
var show = function (state) {
    document.getElementById('inf_frm').style.display = state;
    document.getElementById('filter').style.display = state;
    // document.getElementById('thanks-form').style.display = state;
};
// ============

$(function () {
    var close = $('.close-menu');
    var link = $('.m-menu-link');
    var menu = $('.m-menu');
    link.on('click', function (event) {
        event.preventDefault();
        menu.toggleClass('m-menu__active');
    });
    close.on('click', function (event) {
        event.preventDefault();
        menu.toggleClass('m-menu__active');
    });
});
// ===========