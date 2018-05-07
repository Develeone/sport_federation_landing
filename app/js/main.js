$(document).ready(function () {

    $(".target-audience .item").click(function () {
        if($(this).hasClass("active"))
            $(this).removeClass("active");
        else {
            $(this).parent().find(".item").removeClass("active");
            $(this).addClass("active");
        }
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
        $(".inner-container").hide();
    });


    $(".recommended-by .prev").click(() => ChangeRecommendedBySlide("prev"));
    $(".recommended-by .next").click(() => ChangeRecommendedBySlide("next"));


    $(".place .prev").click(() => ChangePlaceSlide("prev"));
    $(".place .next").click(() => ChangePlaceSlide("next"));

    $('.reviews .list').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        initialSlide: 1
    });


    var widthtmp = $(".trainers .list-container").width() / 4 - 30;

    $(".trainers .item .pic").css("width", widthtmp+"px");



    var $bl    = $(".trainers .list"),
        mX     = 0;   // Real mouse position

    $bl.mousemove(function(e) {
        mX = e.pageX - this.offsetLeft - 200;

        console.log(mX);
    });

    setInterval(function () {
        $bl.scrollLeft(mX);
    }, 10);

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

var currentRecommendedBySlideId = 1;

function ChangeRecommendedBySlide(direction) {
    var recommendedBySlidesCount = $(".recommended-by .slide").length;

    if (recommendedBySlidesCount != $(".recommended-by .pic").length)
        alert("Attention!\n\nКоличество картинок в слайдере Нас Рекомендуют не соответствует количеству текстовых блоков!");

    if (direction == "next")
        currentRecommendedBySlideId = currentRecommendedBySlideId < recommendedBySlidesCount ? currentRecommendedBySlideId+1 : 1;
    else if (direction == "prev")
        currentRecommendedBySlideId = currentRecommendedBySlideId > 1 ? currentRecommendedBySlideId-1 : recommendedBySlidesCount;

    $(".recommended-by .slide").slideUp();
    $(".recommended-by .slide[data-id='"+currentRecommendedBySlideId+"']").slideDown();

    $(".recommended-by .pic").fadeOut();
    $(".recommended-by .pic[data-id='"+currentRecommendedBySlideId+"']").fadeIn();
}


var currentPlaceSlideId = 1;
function ChangePlaceSlide(direction) {
    var placeSlidesCount = $(".place .image").length;

    if (direction == "next")
        currentPlaceSlideId = currentPlaceSlideId < placeSlidesCount ? currentPlaceSlideId+1 : 1;
    else if (direction == "prev")
        currentPlaceSlideId = currentPlaceSlideId > 1 ? currentPlaceSlideId-1 : placeSlidesCount;

    $(".place .image").fadeOut();
    $(".place .image[data-id='"+currentPlaceSlideId+"']").fadeIn();
}