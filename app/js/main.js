$(document).ready(function () {

    $(".target-audience .item").click(function () {
        $(this).parent().find(".item").removeClass("active");
        $(this).addClass("active");
    });

});