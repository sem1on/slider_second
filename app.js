//Получаем необходимые элементы со страницы
const slides = document.querySelectorAll('.slider'); //Слайды
const slidesWrapper = document.querySelector('.wrapper'); //Главная обертка, через которую мы видим слайд
const slidesField = document.querySelector('.inner'); //Блок-карусель на все слайды
const width = window.getComputedStyle(slidesWrapper).width;// Получаем ширину блока на странице

const next = document.querySelector('.next');//Стрелка вперед
const prev = document.querySelector('.prev');//Стрелка назад

let offset = 0; // Переменная-ориентир для  определения ширины сдвига слайдов

slidesField.style.width = 100 * slides.length +'%'; // Устанавливаем ширину блака, равной ширине всех слайдов
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';
slidesWrapper.style.overflow = 'hidden'; // Скрываем лишние слайды


slides.forEach(slide => {      // Устанавливаем каждому слайду определенную ширину,
    slide.style.width = width; // равную ширине нашего wrapper
})

// Обработчики событий
next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {  //Возвращаем сладер на первый 
        offset = 0;                                                           //при достижении последнего
    } else {
        offset += +width.slice(0, width.length - 2);  // Устанавливаем значение переменной-ориентира в пикселях, 
    }                                                 // полученных от ширины отображаемого блока wrapper
    slidesField.style.transform = `translateX(-${offset}px)`;// Сдвигаем элемент
});

// Повторяем в другую сторону
prev.addEventListener('click', () => { 
    if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
});
