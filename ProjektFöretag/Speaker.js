
window.addEventListener("scroll", () => {
    var ypos = window.pageYOffset;
    var head = document.getElementById("speakerHead");

    head.style.padding = 5 + (ypos / 500) + "%";
});



$(document).ready(function () {
    var page = $('#header').offset().top + 500,
        $window = $(window);
    $window.scroll(function () {
        if (document.getElementById('menu').style.display == 'block') {
            if ($window.scrollTop() >= page) {
                $("#menu").css({ display: 'none' });
                $("html, body").stop().delay(100).animate({ scrollTop: $("#header").offset().top }, 50);
            }
        }
    });
    //toggle menu
    $('#hamButton').click(function () {
        $('#menu').stop().slideToggle();
    });
});