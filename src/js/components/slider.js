import Swiper, { Navigation, Pagination, FreeMode } from "swiper";
Swiper.use([Navigation, Pagination, FreeMode]);

const swiperEl = document.querySelector(".cast__slider");
const castSlider = new Swiper(swiperEl, {
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".cast__button-next",
		prevEl: ".cast__button-prev",
		disabledClass: "cast__button-disabled",
	},
	freeMode: {
		enabled: true,
		sticky: true,
	},
	grabCursor: true,
	watchSlidesProgress: true,
	slideVisibleClass: "cast__slide-visible",
	spaceBetween: 24,
	breakpoints: {
		0: {
			slidesPerView: 1,
			freeMode: {
				enabled: false,
			},
		},
		320: {
			slidesPerView: 1.5,
		},
		480: {
			slidesPerView: 2.35,
		},
		769: {
			slidesPerView: 4,
		},
	},
});

castSlider.slides.forEach((slide) => {
	let allContent = slide.querySelector(".cast__content");
	let visibleContent = slide.querySelector(".cast__content-visible");
	let contentTranslateValue = allContent.offsetHeight - visibleContent.offsetHeight - 45;
	allContent.style.transform = `translateY(${contentTranslateValue}px)`;
	setTimeout(() => {
		allContent.style.transition = `transform 0.6s ease, background 0.6s ease`;
	}, 0);
});
