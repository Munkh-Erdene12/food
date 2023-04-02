const email = document.querySelector(".emails");
const password = document.querySelector(".passwords");
const loginBtn = document.getElementById("login");
const userData = JSON.parse(localStorage.getItem("userList"));
const loginDefualt = document.querySelector(".loginDefualt");
const user = document.querySelector(".user");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let loginEmail = email.value;
  let loginPassword = password.value;

  if (userData) {
    let isUserValid = userData.find((user) => {
      return user.email === loginEmail && user.password === loginPassword;
    });

    if (isUserValid) {
      if (isUserValid.email === "admin@gmail.com") {
        console.log("first");
        window.location.href = "/admin.html";
      } else {
        alert("Танд энэ өдрийн мэнд хүргэе " + isUserValid.name);
        window.location.href = "/index.html";
      }
    } else {
      alert("Нууц үг буруу");
    }
  } else {
    console.log("Мэдээлэл олдсонгүй");
  }
});
