
window.addEventListener("scroll", () => {
    var ypos = window.pageYOffset;
    var backgroundImage = document.getElementById("homeBackground");

    backgroundImage.style.top = -(ypos / 75) + "vh";
});
window.addEventListener("scroll", () => {
    var ypos = window.pageYOffset;
    var parralaxElement = document.getElementById('kampanjFront')
    if (ypos > 1234) {
        parralaxElement.style.height = (40 - ((ypos - 1234) / 150)) + "vh";
        console.log(ypos);
    }
    else {
        parralaxElement.style.height = 40 + "vh";
    }

    var parralaxElement2 = document.getElementById('kampanjSub')
    if (ypos > 1234) {
        parralaxElement2.style.height = (40 - ((ypos - 1234) / 200)) + "vh";
    }
    else {
        parralaxElement2.style.height = 40 + "vh";
    }

    var parralaxElement3 = document.getElementById('kampanjCenter')
    if (ypos > 1234) {
        parralaxElement3.style.height = (40 - ((ypos - 1234) / 250)) + "vh";
    }
    else {
        parralaxElement3.style.height = 40 + "vh";
    }
});

window.addEventListener("scroll", () => {
    var ypos = window.pageYOffset;
    var parralaxMenu = document.getElementById('menu')

    parralaxMenu.style.height = (89 - (ypos / 17)) + "vh";
});

window.addEventListener("scroll", () => {
    var ypos = window.pageYOffset;
    var header = document.getElementById('header');
    if (ypos > 30000 && document.getElementById('menu').style.display == 'block') {
        $('#menu').slideUp();
    }
    console.log(ypos);
})


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
    $('#hamButton').click(function () {
        $('#menu').stop().slideToggle();
    });
})