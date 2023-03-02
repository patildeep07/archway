
// Sticky Header

const header = document.querySelector("header")
const sectionOne = document.querySelector(".landingPage")

const sectionOneOptions = {
    rootMargin: "-700px 0px 0px 0px"
}

const sectionOneObserver = new IntersectionObserver (function (entries, sectionOneObserver) {
    entries.forEach( entry => {
        if (!entry.isIntersecting) {
            header.classList.add("onScroll")
        } else {
            header.classList.remove("onScroll")
        }
    })
}, sectionOneOptions)

sectionOneObserver.observe(sectionOne)


// Mobile Menu

const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', "true")
        navToggle.setAttribute('aria-expanded', "true")
    } else {
        primaryNav.setAttribute('data-visible', "false" )
        navToggle.setAttribute('aria-expanded', "false")
    }
} )


// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });