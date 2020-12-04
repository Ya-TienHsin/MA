$(document).ready(function () {
    // 主視覺輪播
    $('.main_slider').on('init', function () {
            $('.slick-slide[data-slick-index="0"]').addClass('moving');
        })
        .slick({
            fade: true,
            accessibility: false,
            autoplay: true,
            speed: 2000,
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
            infinite: true,
            swipe: false,
            pauseOnHover: false,
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var slide_num = $('.slick-slide', this).length;
            $('.slick-slide[data-slick-index="' + (currentSlide - 1) + '"]').removeClass('moving');
            $('.slick-slide[data-slick-index="' + nextSlide + '"]').addClass('moving');
            if (currentSlide == 0) {
                $('.slick-slide[data-slick-index="' + (slide_num - 1) + '"]').removeClass('moving');
            }
        });
    // mobile
    FastClick.attach(document.body);
    // sidebar
    if ($(window).width() > 768) {
        var sidebar = new StickySidebar('.sidebar', {
            topSpacing: 20,
            bottomSpacing: 20,
            containerSelector: '.main-content',
            innerWrapperSelector: '.sidebar__inner'
        });
    }
    if ($(window).width() < 769) {
        $('.boxRetailBanking').append($('.remove1'));
        $('.boxWholesaleBanking').append($('.remove3'));
        $('.boxMulti-filedRotation').append($('.remove4'));
        $('.boxOverseas').append($('.remove2'));

        $(".hamburger").click(function () {
            $(".navbar-nav").slideToggle();
            $(this).toggleClass('active');
        })
        $(".navbar-nav li").click(function () {
            $(".navbar-nav").slideToggle();
        })
    }
    // QA
    var e;
    e = $(".question dt"), $(".question dd:not(:first)").hide(), e.click((function () {
        $(this).toggleClass("active"), $(this).next("dd").slideToggle("fast")
    }));
    // 專業領域切換
    $(".Overseas").click(function () {
        $(".item").removeClass("show");
        $(".fixedOverseas").addClass("show");
        $(".boxOverseas").addClass("show");
        $(".backgroundText h2").text("Overseas")
        $("html,body").animate({
            scrollTop: $("#sectionPorfessinal").offset().top - 100
        }, 500);
    })
    $(".RetailBanking").click(function () {
        $(".item").removeClass("show");
        $(".fixedRetailBanking").addClass("show");
        $(".boxRetailBanking").addClass("show");
        $(".backgroundText h2").text("RetailBanking");
        $("html,body").animate({
            scrollTop: $("#sectionPorfessinal").offset().top - 100
        }, 500);
    })
    $(".WholesaleBanking").click(function () {
        $(".item").removeClass("show");
        $(".fixedWholesaleBanking").addClass("show");
        $(".boxWholesaleBanking").addClass("show");
        $(".backgroundText h2").text("WholesaleBanking");
        $("html,body").animate({
            scrollTop: $("#sectionPorfessinal").offset().top - 100
        }, 500);
    })
    $(".Multi-filedRotation").click(function () {
        $(".item").removeClass("show");
        $(".fixedMulti-filedRotation").addClass("show");
        $(".boxMulti-filedRotation").addClass("show");
        $(".backgroundText h2").text("Multi-filedRotation");
        $("html,body").animate({
            scrollTop: $("#sectionPorfessinal").offset().top - 100
        }, 500);
    })

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
    // AOS
    AOS.init({
        once: true
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
        str = d;
        document.getElementById("pad").innerHTML = str;
    }

    window.onload = function () {
        document.getElementById("start_pad").innerHTML = getString(startDate);
        document.getElementById("end_pad").innerHTML = getString(endDate);
        setInterval(cal, 1000);
    }
});