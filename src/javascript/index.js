import { slide } from "./modul/slide.js";
import { shopMenu } from "./modul/shop.js";
const header = document.getElementById("header");
const navigations = document.querySelectorAll("ul li a");
const navigation = document.querySelector(".navigation");
const section = document.querySelectorAll("section");
const link = document.querySelectorAll(".link-item");

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function FadeOut() {
  setInterval(loader, 3000);
}
window.onload = FadeOut;

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

const submit = document.getElementById("submitOrder");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("name"),
    number = document.getElementById("number"),
    order = document.getElementById("orders"),
    food = document.getElementById("food"),
    nemelt = document.getElementById("nemeltFood"),
    date = document.getElementById("date"),
    address = document.getElementById("address"),
    msg = document.getElementById("message");

  // Хэрэглэгчийн мэдээлэлийг унших
  let orderList = JSON.parse(localStorage.getItem("orderList") || "[]");

  let orderVal = {
    name: name.value,
    number: number.value,
    order: order.value,
    food: food.value,
    nemelt: nemelt.value,
    date: date.value,
    address: address.value,
    msg: msg.value,
  };
  if (
    orderVal.name !== "" &&
    orderVal.number !== "" &&
    orderVal.order !== "" &&
    orderVal.food !== "" &&
    orderVal.nemelt !== "" &&
    orderVal.date !== "" &&
    orderVal.address !== ""
  ) {
    orderList.push(orderVal);
    localStorage.setItem("orderList", JSON.stringify(orderList));

    // Элементүүдийг цэвэрлэх
    name.value = "";
    number.value = "";
    order.value = "";
    food.value = "";
    nemelt.value = "";
    date.value = "";
    address.value = "";
    msg.value = "";
  } else {
    alert("Утга хоосон байна");
  }
});
