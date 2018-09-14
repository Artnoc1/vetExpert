$(document).ready(function(){
	$('.slider-top').bxSlider({
		wrapperClass: 'slider-top-wrap',
		touchEnabled: false,
		auto: true,
		pause: 7000
	});
	$('.slider-vet').bxSlider({
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
	$('.slider-feedback').bxSlider({
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
	$(".header__link, .scrolltosub, .footer__links, .header__link-logo").click(function() {
		var scrollElem = $(this).attr('data-elem');
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#" + scrollElem).offset().top
		}, 555);
	});

});

$(window).scroll(function() {
	if ($(this).scrollTop() > 0) {
		$(".header").addClass("active");
	} else { 
		$(".header").removeClass("active");
	}
});
