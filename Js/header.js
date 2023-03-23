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
