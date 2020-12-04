$(document).ready(function () {
      // Top
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $('#top').fadeIn("fast");
            $('.sideBtn').fadeIn("fast");
        } else {
            $('#top').fadeOut("fast");
            $('.sideBtn').fadeOut("fast");
        }
    });
    $('#top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
    // 日期倒數
    var startDate = new Date();
    var endDate = new Date(2021, 03, 31, 23, 59);
    var spantime = (endDate - startDate) / 1000;

    function getString(dt) {
        return dt.getFullYear() + "年" + (dt.getMonth() + 1) + "月" + dt.getDate() + "日" + dt.getHours() + "时" + dt
            .getMinutes() + "分";
    }

    function cal() {
        spantime--;
        var d = Math.floor(spantime / (24 * 3600));
        var h = Math.floor((spantime % (24 * 3600)) / 3600);
        var m = Math.floor((spantime % 3600) / (60));
        var s = Math.floor(spantime % 60);
        str = d ;
        document.getElementById("pad").innerHTML = str;
    };

    window.onload = function () {
        document.getElementById("start_pad").innerHTML = getString(startDate);
        document.getElementById("end_pad").innerHTML = getString(endDate);
        setInterval(cal, 1000);
    };
    // AOS
    AOS.init({
        once: true
    });
    // slogan切換
    if ($(window).width() < 769) {
        $('.fancyboxOut').each(function () {
            var txt = $(this).find('.slogan b')
            $(this).find('.diary').prepend(txt);
        })
    }
});
