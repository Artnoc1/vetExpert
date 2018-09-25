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
	// if($(window).width() < 768){
	// 	sliderVet.reloadSlider({
	// 		maxSlides: 3,
	// 		slideWidth: 280,
	// 		adaptiveHeight: true,
	// 		slideMargin: 0
	// 	});
	// 	sliderFeedback.reloadSlider({
	// 		maxSlides: 3,
	// 		slideWidth: 280,
	// 		adaptiveHeight: true,
	// 		slideMargin: 0
	// 	})
	// }
	var persons = {
		alex: {
			img: 'img/alex.png',
			name: "Калиновский Алексей Анатольевич",
			desc: "Окончил Московскую Ветеринарную Академию им. К.И.Скрябина. Заведовал экспериментально-биологической клиникой в ГНЦ колопроктологии МЗ РФ. Занимался разработкой новых видов анастомозов. Разработал и внедрил в практику метод эндоскопических исследований в ветеринарной медицине мелких домашних животных.<br><br>В 1989 году открыл первую частную ветеринарную Клинику в Москве.  Несколько лет был вице-президентом Российской Ассоциации Практикующих Ветеринарных Врачей. Первый российский врач, ставший членом American Animal Hospital Assosiation. Работал научным сотрудником в Онкологическом центре Университета МакГилл (Монреаль, Канада).<br><br>В настоящее время работает над проблемой внедрения метода регенеративной терапии в практику ветеринарных врачей. Опубликовал 17 научных работ. Награжден орденом «Ветеринарный Крест РАПВВ»"
		},
		nataly: {
			img: 'img/nataly.png',
			name: "Лавренова Наталья Александровна",
			desc: "Около 30 лет практикует в ведущих ветклиниках Москвы. Специалист в области лечения и подготовки служебных собак. Внештатный сотрудник в отряде Спасательной службы МЧС. Инструктор-методист Программы первой помощи Российского Красного Креста. Последние годы – сотрудник Клиники спонтанной онкологии животных ФГБУ им. П.А. Герцена. <br><br>Награждена медалью «За заслуги в области ветеринарии»"
		},
		sergy: {
			img: 'img/sergy.png',
			name: "Орехов Сергей Андреевич",
			desc: "Выпускник Брянской государственной сельскохозяйственной академии. <br><br>Несколько лет работал практикующим ветеринарным врачом в частных и государственных клиниках. <br><br>Сейчас сотрудник территориального отдела Россельхознадзора, занимается вопросами правового контроля перемещения животных внутри страны и по всему миру."
		}
	}
	$(".popup__close, .ourvet__popup").click(function(){
		$(".popup__overlay, .popup__window").toggleClass("showup");
		// $("body").toggleClass("ovfh");
	});
	$(".ourvet__popup").click(function(){
		var target = $(this).attr("data-info");
		$(".popup__name").html(persons[target].name);
		$(".popup__about").html(persons[target].desc);
		$(".popup__avatar").attr("src",persons[target].img);
	})
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 0) {
		$(".header").addClass("active");
	} else { 
		$(".header").removeClass("active");
	}
});
