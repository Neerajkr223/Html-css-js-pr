const body = document.querySelector('body');
const toggleButton = document.querySelector('.toggle-button');
const lightOption = document.querySelector('.light-option');
const darkOption = document.querySelector('.dark-option');
const toggleCircle = document.querySelector('.toggle-circle');
const swiperr = document.querySelector('.swiper');
const darkTheme = document.querySelectorAll('.dark-theme');
const section6container = document.querySelector('.main-section-6-container');
const proDroneArticle = document.querySelectorAll('.pro-drone-article')
const cards = document.querySelectorAll('.main-section-6-container-right-card-1')
const hamBurger = document.querySelector('.hamburger');
const hamburgerMenuPage = document.querySelector('.hamburger-menu-page');
const hamburgerClose = document.querySelector('.hamburger-close');

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    },
});

toggleButton.addEventListener('click', () => {
    
    toggleButton.classList.toggle('active');
    if(toggleButton.classList.contains('active')) {
        darkTheme.forEach((dark) => {
            dark.style.color = 'white'
        })
        proDroneArticle.forEach((pro) => {
            pro.style.color = '#b9bab8'
        })
        darkOption.style.color = 'white'
        lightOption.style.color = '#959aa6'
        body.style.backgroundColor = '#0b0f1a'
        section6container.style.backgroundColor = '#151721'
        cards.forEach((card) => {
            card.style.backgroundColor = '#1e212b'
            card.style.boxShadow = "0px 5px 10px hsla(0, 0.00%, 0.00%, 0.12)";
        })

    } else {
        darkOption.style.color = '';
        lightOption.style.color = '';
        body.style.backgroundColor = ''
        darkTheme.forEach((dark) => {
            dark.style.color = ''
        })
        section6container.style.backgroundColor = ''
        proDroneArticle.forEach((pro) => {
            pro.style.color = ''
        })
        cards.forEach((card) => {
            card.style.backgroundColor = ''
            card.style.boxShadow = ''
        })
    }
});
hamBurger.addEventListener('click', () => {
    hamburgerMenuPage.style.right = '0px';
    hamburgerMenuPage.style.transitionDuration = '0.3s' 
    hamburgerMenuPage.style.transitionTimingFunction = 'ease'
    body.classList.add('no-scroll')
});
hamburgerClose.addEventListener('click', () => {
    hamburgerMenuPage.style.right = '-100%'
    body.classList.remove("no-scroll")
})

