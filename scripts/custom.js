$(document).ready(function () {
    var togle_btn = $(".togle-btn");

//show menu for small screens
    togle_btn.on("click", function () {
        $("section").slideToggle("medium");
    });

    $("section>a").on("click", function () {
        $("section").css({
            "display": "none"
        });
    });


// animate window scroll
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).position().top
        }, 500);
        return false;
    });
});