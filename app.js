
// Sticky Header

const header = document.querySelector("header")
const sectionOne = document.querySelector(".landingPage")

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
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
