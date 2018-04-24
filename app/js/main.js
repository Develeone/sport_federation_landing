$(document).ready(function () {

    $(".target-audience .item").click(function () {
        $(this).parent().find(".item").removeClass("active");
        $(this).addClass("active");
    });

    $(".trainers .item").click(function () {
        $(this).parent().find(".item").removeClass("active");
        $(this).addClass("active");
    });

    $(document).scroll(function () {
        SetHeaderOpacity();
    });

    function SetHeaderOpacity () {
        var opacity = 1 - $(document).scrollTop().valueOf() / $(window).height();
        var showing = true;

        if (opacity < 0 && showing) {
            $(".header").css("display", "none");
            showing = false;
        } else if (opacity >= 0 && $(".header").css("display") == "none") {
            $(".header").css("display", "block");
            showing = true;
        } else if (opacity >= 0 && showing) {
            $(".header").css("opacity", opacity);
        }
    }

    SetHeaderOpacity();

    $(".menu-button").click(function () {
        $(".menu").addClass("active");
    });
    $(".menu-close-button").click(function () {
        $(".menu").removeClass("active");
    });


    $(".open-conference-modal").click(function () {
        $(".modal-conference").addClass("active");
    });
    $(".modal-conference .close-button").click(function () {
        $(".modal-conference").removeClass("active");
    });

    $(".sale").click(function () {
        $(".modal-callback").addClass("active");
    });

    $('.trainers .list-container .list').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        initialSlide: 1
    });


    $('.reviews .list').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        initialSlide: 1
    });


});

var agreement = false;
function switchAgreement() {
    agreement = !agreement;
    var checkbox = $(".agreement-checkbox");
    var button = $(".button-send");

    if (agreement) {
        $(checkbox).attr("src", "images/checkbox.svg");
        $(button).removeAttr("disabled");
    } else {
        $(checkbox).attr("src", "images/checkbox_unchecked.svg");
        $(button).attr("disabled", "disabled");
    }
}