alert("Hello, I'm currently working on week 4! Thank you!")

const burgerBtn = document.getElementsByClassName("burger_icon")[0];
burgerBtn.onclick = function burger(){
    document.getElementById("mynav").style.display = "block";
    document.getElementsByClassName("burger_logo")[0].style.display = "block";
    document.getElementsByClassName("circle-h2-btn")[0].style.display = "none";
    const darked = document.createElement("div");
    darked.className = "darked";
    document.body.appendChild(darked);
}
const closeBtn = document.getElementsByClassName("cross")[0];
closeBtn.onclick = function closeBurger(){
    document.getElementById("mynav").style.display = "none";
    document.getElementsByClassName("circle-h2-btn")[0].style.display = "flex";
    const darkBack = document.getElementsByClassName("darked")[0];
    document.body.removeChild(darkBack);
    location.reload();
}
