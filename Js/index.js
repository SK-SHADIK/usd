let menualslideIndex = 1;
menualShowSlides(menualslideIndex);

let automenualslideIndex = 0;
autoShowSlides();

function plusSlides(n) {
    menualShowSlides(menualslideIndex += n);
}

function currentSlide(n) {
    menualShowSlides(menualslideIndex = n);
}

function menualShowSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let pointers = document.getElementsByClassName("pointer");
    if (n > slides.length) { menualslideIndex = 1 }
    if (n < 1) { menualslideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < pointers.length; i++) {
        pointers[i].className = pointers[i].className.replace(" active", "");
    }
    slides[menualslideIndex - 1].style.display = "block";
    pointers[menualslideIndex - 1].className += " active";
}
function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    let pointers = document.getElementsByClassName("pointer");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    automenualslideIndex++;
    if (automenualslideIndex > slides.length) { automenualslideIndex = 1 }
    for (i = 0; i < pointers.length; i++) {
        pointers[i].className = pointers[i].className.replace(" active", "");
    }
    slides[automenualslideIndex - 1].style.display = "block";
    pointers[automenualslideIndex - 1].className += " active";
    setTimeout(autoShowSlides, 5000); // Change image every 5 seconds
}