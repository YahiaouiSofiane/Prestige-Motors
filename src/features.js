// Mobile Menu
const menuToggler = document.querySelector(".menu__toggle")
const menuClose = document.querySelector(".menu__close")

const mobileMenu = document.querySelector(".mobile__menu")
const mobileLinks = document.querySelectorAll(".mobile__links")

menuToggler.addEventListener('click', () => {
    openMenu();

    menuClose.addEventListener('click' , () => {
        closeMenu();
    })

    mobileLinks.forEach(link => {
        link.addEventListener('click' , () => {
            closeMenu();
        })
    })
})

function openMenu () {
    mobileMenu.classList.add('display__flex')
    document.body.style.overflowY = "hidden"
    menuToggler.classList.add('display__none')
    menuClose.classList.add("display__block")
}

function closeMenu () {
    mobileMenu.classList.remove('display__flex')
    document.body.style.overflowY = "auto"
    menuToggler.classList.remove('display__none')
    menuClose.classList.remove("display__block")
}

// Gallery scroll
const previousImage = document.querySelector('.previous__image')
const nextImage = document.querySelector('.next__image')

const galleryContainer = document.querySelector(".gallery__collection")

previousImage.addEventListener('click', () => {
    if (window.screen.width >= 1280) {
        galleryContainer.scrollLeft -= 1000;
    }else {
        galleryContainer.scrollLeft -= 235;
    }
})
nextImage.addEventListener('click', () => {
    if (window.screen.width >= 1280) {
        galleryContainer.scrollLeft += 1000;
    }else {
        galleryContainer.scrollLeft += 235;
    }
})