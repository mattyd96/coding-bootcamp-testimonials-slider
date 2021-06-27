var slideIndex = 0;

function nextSlide () {
    slideIndex += 1;
    console.log(slideIndex);
    showSlide();
}

function prevSlide () {
    slideIndex -= 1;
    showSlide();
}

function showSlide () {
    //get slides
    var slides = document.getElementsByClassName('testimony');

    //make sure slide index is withing range (loop around)
    if(slideIndex < 0) {slideIndex = slides.length - 1}
    else if(slideIndex >= slides.length) {slideIndex = 0}

    //set all slides to opaque
    Array.from(slides).forEach(element => {
        element.style.opacity = "0";
    });

    //show current slide
    slides[slideIndex].style.opacity = "1";
}

// Add event listener on keydown for slide changes
document.addEventListener('keydown', (event) => {
    var name = event.key;

    if(name == "ArrowRight") {
        nextSlide();
    }
    else if(name == "ArrowLeft") {
        prevSlide();
    }

}, false);

window.onload = (event) => {
    console.log('The page has fully loaded');
    var slides = document.getElementsByClassName('testimony');
    slides[0].style.opacity = "1";
};