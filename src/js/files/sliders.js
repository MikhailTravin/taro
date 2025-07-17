/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Перечень слайдеров
// Проверяем, есть ли слайдер на стронице
if (document.querySelector('.reviews__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.reviews__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 20,
		speed: 800,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.reviews__arrow-prev',
			nextEl: '.reviews__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1.1,
				spaceBetween: 10,
			},
			550: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},
			767.98: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			991.98: {
				slidesPerView: 2.5,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});
}

if (document.querySelector('.program__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.program__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 20,
		speed: 800,

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			500: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			},
			1460: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});
}