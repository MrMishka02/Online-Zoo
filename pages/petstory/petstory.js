// alert("Hello, I'm currently working on week 4! Thank you!")
//Burger Menu
const burgerBtn = document.getElementsByClassName("burger_icon")[0];
burgerBtn.onclick = function burger(){
    const burgNav = document.getElementById("mynav");
    burgNav.classList.toggle("burgNav");
    document.getElementsByClassName("burger_logo")[0].style.display = "block";
    document.getElementsByClassName("circle-h2-btn")[0].style.display = "none";
    const darked = document.createElement("div");
    darked.className = "darked";
    document.body.appendChild(darked);
    darked.onclick = closeBurger;
}

function closeBurger() {
    const myNav = document.getElementById("mynav");
    myNav.classList.toggle("burgNav");
    document.getElementsByClassName("circle-h2-btn")[0].style.display = "flex";
    const darkBack = document.getElementsByClassName("darked")[0];
    document.body.removeChild(darkBack);
    console.log("hi")
}

const closeBtn = document.getElementsByClassName("cross")[0];
closeBtn.onclick = closeBurger;

//Pets Carousel
const nextBtn = document.getElementsByClassName("next");
const prevBtn = document.getElementsByClassName("prev");
const cards = document.querySelector(".cards");
const slides = Array.from(cards.children);

window.onload = function(){
    for (let i = 0; i < slides.length; i++){
        newArray = slides.slice().sort(() => Math.random() - 0.5);
        for (j = 0; j < newArray.length; j++){
            cards.append(newArray[j])
        }
    }
}

nextBtn[0].onclick = function(){
    for (let i = 0; i < slides.length; i++){
        newArray = slides.slice().sort(() => Math.random() - 0.5);
        for (j = 0; j < newArray.length; j++){
            cards.append(newArray[j]);
            document.querySelector(".card").classList.remove("cardRight");
            document.querySelector(".card").classList.add("cardLeft");
        }
    }
}

prevBtn[0].onclick = function(){
    for (let i = 0; i < slides.length; i++){
        newArray = slides.slice().sort(() => Math.random() - 0.5);
        for (j = 0; j < newArray.length; j++){
            cards.append(newArray[j]);
            document.querySelector(".card").classList.remove("cardLeft");
            document.querySelector(".card").classList.add("cardRight");
        }
    }
}

//Testimonials slider
const inputRange = document.querySelector(".scroll");
const testimonialSlides = document.querySelector(".users");
const testimonialSlide = document.querySelector(".user");

inputRange.addEventListener("input", rangeValue);

function rangeValue(){
    let rangeValue = Number(inputRange.value);
    let slideWidth = testimonialSlide.getBoundingClientRect().width;
    for (var i = 0; i < rangeValue; i++){
        testimonialSlides.scrollTo({left: slideWidth, behavior: "smooth"});
        slideWidth = slideWidth + 305;
    }
    if (i == 0){
        testimonialSlides.scrollTo({left: 0, behavior: "smooth"});
    }
}
