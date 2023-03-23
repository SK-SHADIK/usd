// // --------------- Slider ---------------

// let menualslideIndex = 1;
// menualShowSlides(menualslideIndex);

// let automenualslideIndex = 0;
// autoShowSlides();

// function plusSlides(n) {
//     menualShowSlides(menualslideIndex += n);
// }

// function currentSlide(n) {
//     menualShowSlides(menualslideIndex = n);
// }

// function menualShowSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("slides");
//     let pointers = document.getElementsByClassName("pointer");
//     if (n > slides.length) { menualslideIndex = 1 }
//     if (n < 1) { menualslideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < pointers.length; i++) {
//         pointers[i].className = pointers[i].className.replace(" active", "");
//     }
//     slides[menualslideIndex - 1].style.display = "block";
//     pointers[menualslideIndex - 1].className += " active";
// }
// function autoShowSlides() {
//     let i;
//     let slides = document.getElementsByClassName("slides");
//     let pointers = document.getElementsByClassName("pointer");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     automenualslideIndex++;
//     if (automenualslideIndex > slides.length) { automenualslideIndex = 1 }
//     for (i = 0; i < pointers.length; i++) {
//         pointers[i].className = pointers[i].className.replace(" active", "");
//     }
//     slides[automenualslideIndex - 1].style.display = "block";
//     pointers[automenualslideIndex - 1].className += " active";
//     setTimeout(autoShowSlides, 5000); // Change image every 5 seconds
// }

// --------------- NavBar ---------------

const navBtn = document.querySelector(".menu-icon span");
        const btnSearch = document.querySelector(".search-icon");
        const btnCancel = document.querySelector(".cancel-icon");
        const list = document.querySelector(".nav-list");
        const searchForm = document.querySelector("form");
        navBtn.onclick = () => {
            list.classList.add("active");
            navBtn.classList.add("hide");
            btnSearch.classList.add("hide");
            btnCancel.classList.add("show");
        }
        btnCancel.onclick = () => {
            list.classList.remove("active");
            navBtn.classList.remove("hide");
            btnSearch.classList.remove("hide");
            btnCancel.classList.remove("show");
            btnCancel.style.color = "#ff3d00";
        }
        btnSearch.onclick = () => {
            searchForm.classList.add("active");
            btnSearch.classList.add("hide");
            btnCancel.classList.add("show");
        }
