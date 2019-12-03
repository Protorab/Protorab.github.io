// $(function () {
//     var slider = $('.slider'),
//         sliderContent = slider.html(), // Содержимое слайдера
//         slideWidth = $('.slider-box').outerWidth(), // Ширина слайдера
//         slideCount = $('.slider .slide').length, // Количество слайдов
//         prev = $('.slider-box .prev'), // Кнопка "назад"
//         next = $('.slider-box .next'), // Кнопка "вперед"
//         sliderInterval = 3300, // Интервал смены слайдов
//         animateTime = 500, // Время смены слайдов
//         course = 1, // Направление движения слайдера (1 или -1)
//         margin = -slideWidth; // Первоначальное смещение слайдов

//     $('.slider .slide:last').clone().prependTo('.slider'); // Копия последнего слайда помещается в начало.
//     $('.slider .slide').eq(1).clone().appendTo('.slider'); // Копия первого слайда помещается в конец.  
//     $('.slider').css('margin-left', -slideWidth); // Контейнер .slider сдвигается влево на ширину одного слайда.
//     function nextSlide() { // Запускается функция animation(), выполняющая смену слайдов.
//         interval = window.setInterval(animate, sliderInterval);
//     }

//     function animate() {
//         if (margin == -slideCount * slideWidth - slideWidth) { // Если слайдер дошел до конца
//             slider.css({
//                 'marginLeft': -slideWidth
//             }); // то блок .slider возвращается в начальное положение
//             margin = -slideWidth * 2;
//         } else if (margin == 0 && course == -1) { // Если слайдер находится в начале и нажата кнопка "назад"
//             slider.css({
//                 'marginLeft': -slideWidth * slideCount
//             }); // то блок .slider перемещается в конечное положение
//             margin = -slideWidth * slideCount + slideWidth;
//         } else { // Если условия выше не сработали,
//             margin = margin - slideWidth * (course); // значение margin устанавливается для показа следующего слайда
//         }
//         slider.animate({
//             'marginLeft': margin
//         }, animateTime); // Блок .slider смещается влево на 1 слайд.
//     }

//     function sliderStop() { // Функция преостанавливающая работу слайдера      
//         window.clearInterval(interval);
//     }

//     prev.click(function () { // Нажата кнопка "назад"
//         if (slider.is(':animated')) {
//             return false;
//         } // Если не происходит анимация
//         var course2 = course; // Временная переменная для хранения значения course
//         course = -1; // Устанавливается направление слайдера справа налево
//         animate(); // Вызов функции animate()
//         course = course2; // Переменная course принимает первоначальное значение
//     });
//     next.click(function () { // Нажата кнопка "назад"
//         if (slider.is(':animated')) {
//             return false;
//         } // Если не происходит анимация
//         var course2 = course; // Временная переменная для хранения значения course
//         course = 1; // Устанавливается направление слайдера справа налево
//         animate(); // Вызов функции animate()
//         course = course2; // Переменная course принимает первоначальное значение
//     });

//     slider.add(next).add(prev).hover(function () { // Если курсор мыши в пределах слайдера
//         sliderStop(); // Вызывается функция sliderStop() для приостановки работы слайдера
//     }, nextSlide); // Когда курсор уходит со слайдера, анимация возобновляется.

//     nextSlide(); // Вызов функции nextSlide()
// });
$(function call() {
    var trigger = $('.trigger');
    var form = $('#modalform');
    var trigger_status = $('.form-group-wrap-button p')
    trigger.on('click', function () {
        form.toggleClass('full_size');
        trigger_status.toggleClass('small');
        trigger_status.toggleClass('full');
    });
})

// ======================================================================
// ============
// var show = function (state) {
//     document.getElementById('modalform').style.display = state;
//     document.getElementById('filter').style.display = state;
//     // document.getElementById('thanks-form').style.display = state;
// };
// ============

$(function () {
    var close = $('.close-menu');
    var link = $('.m-menu-link');
    var menu = $('.m-menu');
    link.on('click', function (event) {
        event.preventDefault();
        menu.toggleClass('m-menu__active');
    });
    close.on('click', function (event) {
        event.preventDefault();
        menu.toggleClass('m-menu__active');
    });
});