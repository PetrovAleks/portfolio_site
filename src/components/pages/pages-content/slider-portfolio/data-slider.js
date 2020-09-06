import blog from "../images/portfolio/blog.png";
import galler from "../images/portfolio/galler.png";
import GO_iteens from "../images/portfolio/GO_iteens.png";
import localStor from "../images/portfolio/localStor.png";
import search_img from "../images/portfolio/search_img.png";
import timer from "../images/portfolio/timer.png";
import vanilaSlider from "../images/portfolio/Vanila-slider.png";

const dataImg = [
	blog,
	galler,
	GO_iteens,
	localStor,
	search_img,
	timer,
	vanilaSlider,
];
const dataPreview = [
	{
		site: "https://petrovaleks.github.io/goit-markup-hw-04-blog/",
		code: "https://github.com/PetrovAleks/goit-markup-hw-04-blog",
		name: "Blog",
		text:
			"Блог, без подключения JS на чистом CSS и HTML. Валидная разметка и доступный для всех браузеров ",
		img: blog,
		id: 0,
	},
	{
		site: "https://petrovaleks.github.io/goit-js-hw-08-gallery/",
		code: "https://github.com/PetrovAleks/goit-js-hw-08-gallery",
		name: "Gallery",
		text:
			"Создал галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне",
		img: galler,
		id: 1,
	},
	{
		site: "https://petrovaleks.github.io/project_group3/",
		code: "https://github.com/PetrovAleks/project_group3",
		name: "Go iteens",
		text:
			"Этот сайт, продукт командной работы из 4-х человек. Сайт адаптивный под все экраны. Сделан на чистом HTML/CSS ",
		img: GO_iteens,
		id: 2,
	},
	{
		site: "https://petrovaleks.github.io/goit-js-hw-10-food-service/",
		code: "https://github.com/PetrovAleks/goit-js-hw-10-food-service",
		name: "Food Service",
		text:
			"Создал страницу меню с возможностью выбора темы для сервиса заказа еды с возможностью сохранения ее в localStorage. Так эе использовал шаблонизатор Handlebars",
		img: localStor,
		id: 3,
	},
	{
		site: "https://petrovaleks.github.io/goit-js-hw-13-image-finder/",
		code: "https://github.com/PetrovAleks/goit-js-hw-13-image-finder",
		name: "Image finder",
		text:
			"Написал небольшое приложение поиска и просмотра изображений по ключевому слову. Для HTTP-запросов использовал публичный Pixabay API.",
		img: search_img,
		id: 4,
	},
	{
		site: "https://petrovaleks.github.io/goit-js-hw-11-timer/",
		code: "https://github.com/PetrovAleks/goit-js-hw-11-timer",
		name: "Timer",
		text:
			"Создал плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.",
		img: timer,
		id: 5,
	},
	{
		site: "https://petrovaleks.github.io/vanilla_slider/",
		code: "https://github.com/PetrovAleks/vanilla_slider",
		name: "Слайдер",
		text:
			"Слайдер на ванильном JS который можно использовать на любом сайте и подключать аннимацю",
		img: vanilaSlider,
		id: 6,
	},
	null,
];

export { dataImg, dataPreview };
