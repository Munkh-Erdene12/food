import { slide } from "./modul/slide.js";
import { shopMenu } from "./modul/shop.js";
const header = document.getElementById("header");
const navigations = document.querySelectorAll("ul li a");
const navigation = document.querySelector(".navigation");
const section = document.querySelectorAll("section");
const link = document.querySelectorAll(".link-item");
window.addEventListener("scroll", (e) => {
  header.classList.toggle("sticky", window.scrollY > 0);

  let current = "home";
  section.forEach((sec) => {
    const sectionTop = sec.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = sec.id;
    }
  });
  navigations.forEach((el) => {
    el.classList.remove("acitve");
    if (el.href.includes(current)) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
  navigation.classList.remove("open");
  bar.classList.remove("fa-times");
});
// header active mouse 1 darah uyd
navigations.forEach((nvg) => {
  nvg.addEventListener("click", () => {
    navigations.forEach((el) => {
      el.classList.remove("active");
    });
    nvg.classList.add("open");
  });
});

let bar = document.getElementById("bars");
bar.addEventListener("click", (e) => {
  bar.classList.add("fa-times");
  navigation.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item")) {
    navigation.classList.remove("open");
    bar.classList.remove("fa-times");
    e.target.classList.add("active");
  }
});

slide();
// shop nemeh bolon hasah
shopMenu();
