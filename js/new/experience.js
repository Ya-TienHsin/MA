$(document).ready(function () {
      // Top
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $('#top').fadeIn("fast");
            $('.sideBtn').fadeIn("fast");
            $('.return').fadeIn("fast");
        } else {
            $('#top').fadeOut("fast");
            $('.sideBtn').fadeOut("fast");
            $('.return').fadeOut("fast");
        }
    });
    $('#top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
    // Menu
    $('.navProfessional').click(function(){
        $("#sideTraining").removeClass("active");
        $(".trainingMenu").removeClass("active");
        $(".professionalMenu").addClass("active");
        $("#sideProfessional").addClass("active");
    })
    $('.navTraining').click(function(){
        $("#sideTraining").addClass("active");
        $(".trainingMenu").addClass("active");
        $(".professionalMenu").removeClass("active");
        $("#sideProfessional").removeClass("active");
    })
    if ($(window).width() < 769) {
        $(".hamburger").click(function () {
            $(".navbar-nav").slideToggle();
            $(this).toggleClass('active');
        });
        $(".nav-link").click(function () {
            $(".navbar-nav").slideToggle();
            $(".hamburger").toggleClass('active');
        });
    }
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
    // 心得切換
    $(".trainingMenu").click(function () {
        $(this).addClass("active");
        $(".professionalMenu").removeClass("active");
        $("#sideTraining").addClass("active");
        $("#sideProfessional").removeClass("active");
    });
    $(".professionalMenu").click(function () {
        $(this).addClass("active");
        $(".trainingMenu").removeClass("active");
        $("#sideProfessional").addClass("active");
        $("#sideTraining").removeClass("active");
    });
    var url=window.location.href.split("#")[1]
    var a = ['program1','program2','program3','program4','sideTraining'];
    var b = ['MultifiledRotation','Overseas','WholesaleBanking','RetailBanking'];
    
    if (url == a[0] | url == a[1] | url == a[2] | url == a[3] | url == a[4]) {
        $("#sideTraining").addClass("active");
        $(".trainingMenu").addClass("active");
        $(".professionalMenu").removeClass("active");
        $("#sideProfessional").removeClass("active");
    };
    if (url == b[0] | url == b[1] | url == b[2] | url == b[3]) {
        $("#sideTraining").removeClass("active");
        $(".trainingMenu").removeClass("active");
        $(".professionalMenu").addClass("active");
        $("#sideProfessional").addClass("active");
    }

});
