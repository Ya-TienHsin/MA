$(document).ready(function () {


    //Branch switch
    $(document).on("click", "#mapNav .menu", function () {
        var numberIndex = $(this).index();

        if (!$(this).is("current")) {
            $("#mapNav .menu").removeClass("current");
            $("#bankBranch li").removeClass("current");

            $(this).addClass("current");
            $("#bankBranch ul").find("li:eq(" + numberIndex + ")").addClass("current");

            var listItemHeight = $(".naccs ul")
                .find("li:eq(" + numberIndex + ")")
                .innerHeight();
            $(".naccs ul").height(listItemHeight + "px");
        }
    });


    //Square Area aling to center
    if (window.matchMedia("(min-width: 510px)").matches) {} else {
        $(window).on('load resize', function () {
            var ww = $(window).width();
            $(".squareCenter").css({
                left: -(510 - ww) / 2
            });
        });
    }



    //Rule slide and toggle + -
    $("#goto9 dt").click(function () {
        if ($(this).next('dd').is(":visible")) {
            $(this).find(".closeBtn").toggle();
            $(this).next('dd').stop().slideToggle('fast');
        } else {
            $(this).find(".closeBtn").toggle();
            $(this).next('dd').stop().slideToggle('fast');

        }
    });




    //colorbox
    $('.moreBtn').colorbox({
        fixed: true,
        width: '90%',
        height: '90%',
        maxWidth: '500px',
        maxHeight: '650px'
    });
    $('.squareC').colorbox({
        fixed: true,
        width: '90%',
        height: '90%',
        maxWidth: '500px',
        maxHeight: '650px'
    });



    //Detect ie
    function isIE() {
        ua = navigator.userAgent;
        /* MSIE used to detect old browsers and Trident used to newer ones*/
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

        return is_ie;
    }
    /* Create an alert to show if the browser is IE or not */
    if (isIE()) {
        // document.getElementById("aos-css-ie").disabled = true;    
        // document.getElementById("aos-js-ie").disabled = true;    
        $("#aos-js-ie").remove()
        $("#aos-css-ie").remove()
    } else {
        AOS.init();
    }




    //gotop
    var gotop = $('#goTop');
    gotop.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            gotop.fadeIn();
        } else {
            gotop.stop().fadeOut();
        }

    });


    let scrollRef = 0;

    window.addEventListener('scroll', function() {
      // increase value up to 10, then refresh AOS
      scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    });


});