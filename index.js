import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const moreParamsBtn = document.getElementById('more-params-btn');
moreParamsBtn.addEventListener('click', () => {
    document.querySelector('.form_additional-params').classList.toggle('is-opened');
});

const checboxesArray = document.querySelectorAll('.checkbox');
checboxesArray.forEach(ch => {
    ch.addEventListener('click', (evt) => {
        evt.target.classList.toggle('is-checked');
    })
})


