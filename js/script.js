let swiper = new Swiper('.slide-content', {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        374: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        767: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
})

const iconMenu = document.querySelector('.header__toggle')
const menuBody = document.querySelector('.header__navigation')

if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}

const menuPoints = document.querySelectorAll('.header__menu--point[data-goto]')

if (menuPoints.length !== 0) {
    menuPoints.forEach((menuPoint) => {
        menuPoint.addEventListener('click', onMenuPointClick)
    })
}

function onMenuPointClick(e) {
    const menuPoint = e.target
    if (
        menuPoint.dataset.goto &&
        document.querySelector(menuPoint.dataset.goto)
    ) {
        const gotoBlock = document.querySelector(menuPoint.dataset.goto)
        const gotoBlockValue =
            gotoBlock.getBoundingClientRect().top + pageYOffset

        if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock')
            iconMenu.classList.remove('_active')
            menuBody.classList.remove('_active')
        }

        window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth',
        })
        e.preventDefault()
    }
}
