$(document).ready(function(){
	$('.slider-top').slick({
		autoplay: true,
		autoplaySpeed: 7000,
		arrows: true,
		dots: true,
		prevArrow: '<a class="slick-prev"></a>',
		nextArrow: '<a class="slick-next"></a>',
		appendArrows: '.slider-top-arrows'
	});
	var sliderVet = $('.slider-vet').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		prevArrow: '<a class="slick-prev"></a>',
		nextArrow: '<a class="slick-next"></a>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				centerMode: true,
				slidesToShow: 1,
			}
		}
		]
	});
	var sliderFeedback = $('.slider-feedback').slick({
		slidesToShow: 3,
		variableWidth: true,
		dots: true,
		adaptiveHeight: true,
		prevArrow: '<a class="slick-prev"></a>',
		nextArrow: '<a class="slick-next"></a>',
		appendArrows: '.slider-feedback-arrows',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				centerMode: true,
				slidesToShow: 1
			}
		}
		]
	});
	var abonslider = $(".abon__items-wrapper").slick({
		slidesToShow: 3,
		variableWidth: true,
		appendArrows: '.arrows-abon',
		prevArrow: '<a class="slick-prev"></a>',
		nextArrow: '<a class="slick-next"></a>',
		infinite: false,
		responsive: [
		{
			breakpoint: 480,
			settings: {
				centerMode: true,
				slidesToShow: 1
			}
		}
		]
	});
});

$(".abon__items-wrapper").on('beforeChange', function(event, slick, currentSlide, nextSlide){
	$([document.documentElement, document.body]).animate({
		scrollTop: $(".abon__items-wrapper").offset().top - 80
	}, 666);
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 0) {
		$(".header").addClass("active");
	} else { 
		$(".header").removeClass("active");
	}
});

$(".footer__links, .header__mobile-link, .header__link, .headerbtn, .scrolltosub, .header__link-logo").click(function() {
	var scrollElem = $(this).attr('data-elem')
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#" + scrollElem).offset().top
	}, 666);
});
$(".header__mobile-burger, .header__mobile-close, .header__mobile-link").click(function(){
	$(".header__mobile-menu-list").toggleClass("menu-on")
});
$(".popup__close, .ourvet__popup").click(function(){
	$(".popup__overlay, .popup__window").toggleClass("showup");
		// $("body").toggleClass("ovfh");
	});
$(".mobile_slider-shwmore").click(function(){
	$('.mobile_slider').addClass('opened');
	$(".mobile_slider-shwmore").css('display','none');
});
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

$(".ourvet__popup").click(function(){
	var target = $(this).attr("data-info");
	$(".popup__name").html(persons[target].name);
	$(".popup__about").html(persons[target].desc);
	$(".popup__avatar").attr("src",persons[target].img);
})
var priceList = {
	standart: {
		name: 'Стандарт',
		price: '59',
		class: 'standart'
	},
	premium: {
		name: 'Премиум',
		price: '89',
		class: 'premium'
	},
	vip: {
		name: 'VIP',
		price: '119',
		class: 'vip'
	}
}
$(".pay-popup-close, .modal-pay").click(function(){
	$(".pay-popup-overlay, .pay-popup").toggleClass("showup");
	$("body").toggleClass('ovfh')
});

$(".modal-pay").click(function(){
	var price = $(this).attr("data-price");

	$("#abon-id").attr('value', priceList[price].price);
	$(".pay-tarrif").html(priceList[price].name);
	$(".acc").html(priceList[price].price);
	$(".pay-popup").attr("class","pay-popup showup")
	$(".pay-popup").addClass(priceList[price].class);
})