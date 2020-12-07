$(document).ready(function () {




  //---------hamburger menu controller---------//
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').on('click',function(event){
    if(!$(event.target).is('.navbar-toggler')){
      $('.navbar-collapse').collapse('hide');
    }
 });

 
  //--------- smooth scroll ---------//
  $(document).on("scroll", onScroll);

  $('.nav-item a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('.nav-item a').each(function () {
      $(this).removeClass('current');
    })
    $(this).addClass('current');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

  //--------- smooth scroll ---------//

 
  $('.tab_block a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");


    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });







//--------- detect scroll ---------//
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.navbar-nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();

    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.navbar-nav li a').removeClass("current");
      currLink.addClass("current");
    } else if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      $('.navbar-nav li a').removeClass("current");
      currLink.addClass("current");
    } else {
      currLink.removeClass("current");
    }
  });






}