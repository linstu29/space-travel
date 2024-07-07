// active header sticky
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
});

// active scroll menu
const liLink = document.querySelectorAll("header ul li a");
const section = document.querySelectorAll("section");

function activeMenu() {
    let secLength = section.length;
    while (--secLength && window.scrollY + 500 < section[secLength].offsetTop) { }
    liLink.forEach(sec => sec.classList.remove("active"));
    if (secLength >= 0) { // Ensure secLength is valid
        liLink[secLength].classList.add("active");
    }
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// active menu icon
const menuIcon = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon.onclick = () => { // Corrected from onClick to onclick
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

// remove menu list
window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
};

// scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

// Select all elements with the respective classes and observe them
const scrollLeft = document.querySelectorAll(".scroll-left");
scrollLeft.forEach((el) => observer.observe(el));

const scrollRight = document.querySelectorAll(".scroll-right");
scrollRight.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));


// Login form

let labels = document.querySelectorAll("label");

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split("")
        .map(
            (letter, i) =>
                `<span style="transition-delay:${i * 60}ms">${letter}</span>`
        )
        .join("");
});


//switch between Login and Logout page
/*
let containerForm = document.querySelector(".container-form");
let loginLink = document.querySelector(".loginLink");
let logoutLink = document.querySelector(".logoutLink");

logoutLink.addEventListener("click", () => {
    containerForm.classList.add("active");
});

logoutLink.addEventListener("click", () => {
    containerForm.classList.remove("active");
}); */
