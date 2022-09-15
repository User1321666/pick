function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add("active")

    for (const slide of slides) {
        slide.addEventListener('click', () =>{
            clearActiveClasses()
            slide.classlist.add('active')
        })
    }
    function clearActiveClasses(){
        slides.forEach(() => {
            slide.classlist.remove('active')
        })
    }
}

slidesPlugin()