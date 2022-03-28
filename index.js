import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const moreParamsBtn = document.querySelector('.form__btn_show-more-params');
moreParamsBtn.addEventListener('click', () => {
    document.querySelector('.form_additional-params').classList.toggle('is-opened');
});

const checkboxesArray = document.querySelectorAll('.checkbox');
checkboxesArray.forEach(ch => {
    ch.addEventListener('click', (evt) => {
        evt.target.nodeName === 'DIV'
            ? evt.target.classList.toggle('is-checked')
            : evt.target.parentElement.classList.toggle('is-checked');
    })
});


