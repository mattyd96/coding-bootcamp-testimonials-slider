//psuedo database
var slides = [
    {
        image: "images/image-tanya.jpg",
        text: "\“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. \”",
        name: "Tanya Sinclair",
        title: "UX Engineer"
    },
    {
        image:"images/image-john.jpg",
        text: "\“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \”",
        name: "John Tarkpor",
        title: "Junior Front-end Developer"
    }  
]

var slideIndex = 0;

//go to next slide
function nextSlide () {
    slideIndex += 1;
    console.log(slideIndex);
    showSlide();
}

//go to previous slide
function prevSlide () {
    slideIndex -= 1;
    showSlide();
}

function showSlide() {
    //make sure slideIndex stays in bounds and loops around
    if(slideIndex < 0) {slideIndex = slides.length - 1}
    else if(slideIndex >= slides.length) {slideIndex = 0}

    //replace all necessary elements with the next slides information
    document.getElementById("pic-replace").src = slides[slideIndex].image;
    document.getElementById("text-replace").innerText = slides[slideIndex].text;
    document.getElementById("name-replace").innerText = slides[slideIndex].name;
    document.getElementById("title-replace").innerText = slides[slideIndex].title;
}