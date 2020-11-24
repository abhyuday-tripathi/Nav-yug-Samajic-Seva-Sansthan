burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
rightNav = document.querySelector(".rightNav");
btn1 = document.getElementById("btn1");

function send() {
  alert("Success! Message Send!");
}

burger.addEventListener("click", () => {
  rightNav.classList.toggle("v-class-resp");
  navList.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
  navbar.classList.toggle("white");
});

window.addEventListener("scroll", function () {
  navbar.classList.toggle("white", window.scrollY > 0);
});
