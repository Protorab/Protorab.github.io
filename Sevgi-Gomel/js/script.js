$(document).ready(function() {
    $("overlay-item").mouseover(function() {
            $("overlay-item").height("100px");
            $("discrioption").display("inline");
        },
        function() {
            $("overlay-item").height("100px");
            $("discrioption").display("none");
        })
})