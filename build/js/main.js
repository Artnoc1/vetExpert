$(document).ready(function(){
	$('.slider-top').bxSlider({
		wrapperClass: 'slider-top-wrap',
		touchEnabled: false,
		auto: true,
		pause: 7000
	});
	var sliderVet = $('.slider-vet').bxSlider({
		slideWidth: 340,
		minSlides: 1,
		moveSlides: 1,
		maxSlides: 3,
		slideMargin: 30,
		adaptiveHeight: true,
		hideControlOnEnd: true,
		shrinkItems: true,
		wrapperClass: 'slider-ourvet',
		onSliderLoad: function () {
			$('.slider-vet>div:not(.bx-clone)').eq(1).addClass('change-color');
		},
		onSlideBefore: function ($slideElement, oldIndex, newIndex) {
			$('.ourvet__card').removeClass('change-color');
			$($slideElement).next().addClass('change-color');        
		}
	});
	var sliderFeedback = $('.slider-feedback').bxSlider({
		slideWidth: 350,
		minSlides: 1,
		moveSlides: 1,
		maxSlides: 3,
		slideMargin: 30,
		touchEnabled: false,
		responsive: false,
		adaptiveHeight: true,
		hideControlOnEnd: true,
		shrinkItems: true,
		onSliderLoad: function () {
			$('.slider-feedback>div:not(.bx-clone)').eq(1).addClass('change-width');
		},
		onSlideBefore: function ($slideElement, oldIndex, newIndex) {
			$('.slider-item').removeClass('change-width');
			$($slideElement).next().addClass('change-width');        
		}
	})
	$(".header__link, .scrolltosub, .footer__links, .header__link-logo, .header__mobile-link").click(function() {
		var scrollElem = $(this).attr('data-elem');
		if ($(window).width > 768){
			$([document.documentElement, document.body]).animate({
				scrollTop: $("#" + scrollElem).offset().top
			}, 555);
		} else {
			$([document.documentElement, document.body]).animate({
				scrollTop: $("#" + scrollElem).offset().top - 25
			}, 555);
		}
	});
	$(".header__mobile-burger, .header__mobile-close, .header__mobile-link").click(function(){
		$(".header__mobile-menu-list").toggleClass("menu-on");
		$("body").toggleClass("ovfh");
	})
	if($(window).width() < 768){
		sliderVet.reloadSlider({
			slideWidth: 340,
			minSlides: 1,
			moveSlides: 1,
			maxSlides: 1,
			slideMargin: 30,
			adaptiveHeight: false,
			hideControlOnEnd: true,
			shrinkItems: true,
			wrapperClass: 'slider-ourvet',
		});
		sliderFeedback.reloadSlider({
			slideWidth: 350,
			minSlides: 1,
			moveSlides: 1,
			maxSlides: 1,
			slideMargin: 30,
			touchEnabled: false,
			responsive: false,
			adaptiveHeight: true,
			hideControlOnEnd: true,
			shrinkItems: true,
		})
	}
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 0) {
		$(".header").addClass("active");
	} else { 
		$(".header").removeClass("active");
	}
});
