
window.addEventListener("scroll", () => {
    var ypos = window.pageYOffset;
    var parralaxElement = document.getElementById('rp-280')
    if (ypos > 10) {
        parralaxElement.style.height = (50 - ((ypos - 10) / 100)) + "vh";
        console.log(ypos);
    }
    else {
        parralaxElement.style.height = 50 + "vh";
    }

    var parralaxElement2 = document.getElementById('g-28')
    if (ypos > 10) {
        parralaxElement2.style.height = (50 - ((ypos - 10) / 200)) + "vh";
    }
    else {
        parralaxElement2.style.height = 50 + "vh";
    }

    var parralaxElement3 = document.getElementById('rp-280-atmos')
    if (ypos > 10) {
        parralaxElement3.style.height = (50 - ((ypos - 10) / 300)) + "vh";
    }
    else {
        parralaxElement3.style.height = 50 + "vh";
    }
    console.log(ypos);
});

$(document).ready(function () {
    //toggle menu
    $('#hamButton').click(function () {
        $('#menu').stop().slideToggle();
    });

    $('#buttonOne').click(function () {
        $('#rp-280').stop().css({
            background: 'url(http://e994010f48279d85b5d7-a0bc3fbf1884fc0965506ae2b946e1cd.r57.cf2.rackcdn.com/product-images/Reference_Premiere_-_280F_Cherry_System_Shot_635575108408955000.jpg)',
            backgroundPosition: 'center 0',
            backgroundSize: '80%',
            backgroundRepeat: 'no-repeat'
        });
        $('#rp-280 header h2').text('RP-280 - Cherry');
    });
    $('#buttonTwo').click(function () {
        $('#rp-280').stop().css({
            background: 'url(http://e994010f48279d85b5d7-a0bc3fbf1884fc0965506ae2b946e1cd.r57.cf2.rackcdn.com/product-images/Reference_Premiere_-_280F_Ebony_System_Shot_635575108711595000.jpg)',
            backgroundPosition: 'center 0',
            backgroundSize: '80%',
            backgroundRepeat: 'no-repeat'
        });
        $('#rp-280 header h2').text('RP-280 - Ebony');
    });


    $('#buttonThreeOne').click(function () {
        $('#rp-280-atmos').stop().css({
            background: 'url(http://e994010f48279d85b5d7-a0bc3fbf1884fc0965506ae2b946e1cd.r57.cf2.rackcdn.com/product-images/514_Atmos_System_walnut_and_black.jpg)',
            backgroundPosition: 'center -20%',
            backgroundSize: '70%',
            backgroundRepeat: 'no-repeat'
        });
        $('#rp-280-atmos header h2').text('RP-280 Atmos - Walnut');
    });
    $('#buttonThreeTwo').click(function () {
        $('#rp-280-atmos').stop().css({
            background: 'url(http://e994010f48279d85b5d7-a0bc3fbf1884fc0965506ae2b946e1cd.r57.cf2.rackcdn.com/product-images/_448xAUTO_fit_center-center_80/514-Atmos-Systems.jpg)',
            backgroundPosition: 'center -20%',
            backgroundSize: '70%',
            backgroundRepeat: 'no-repeat'
        });
        $('#rp-280-atmos header h2').text('RP-280 Atmos - Black');
    });
});