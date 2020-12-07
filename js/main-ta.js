$(document).ready(function () {
	// QA
	var e;
	e = $(".question dt"), $(".question dd:not(:first)").hide(), e.click((function () {
		$(this).toggleClass("active"), $(this).next("dd").slideToggle("fast")
	}));

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
	// 選單
	if ($(window).width() < 769) {
		$(".hamburger").click(function () {
			$(".navbar-nav").slideToggle();
			$(this).toggleClass('active');
		})
		$(".nav-link").click(function () {
			$(".navbar-nav").slideToggle();
			$(".hamburger").removeClass('active');
		})
	}
	// scroll
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location
			.hostname == this.hostname && this.hash.slice(1) != 'top') {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});