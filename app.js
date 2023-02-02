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