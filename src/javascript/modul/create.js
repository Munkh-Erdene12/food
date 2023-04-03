const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const password = document.getElementById("password");
const ConfrimPassword = document.getElementById("confirmPassword");
const text = document.querySelectorAll(".text");
const resigter = document.querySelector(".register");
const check = document.getElementById("check");
const inputImg = document.getElementById("img");
check.addEventListener("click", (e) => {
  if ((password.type === "password", ConfrimPassword.type === "password")) {
    password.type = "text";
    ConfrimPassword.type = "text";
  } else {
    password.type = "password";
    ConfrimPassword.type = "password";
  }
});

resigter.addEventListener("click", (e) => {
  e.preventDefault();

  // Хэрэглэгчийн мэдээлэл объект байдлаар үүсгэнэ
  let user = {
    name: inputName.value,
    email: inputEmail.value,
    password: password.value,
    img: null,
  };
  const regex1 = /[a-z]/;
  const regexP2 = /[A-Z]/;
  const regexP3 = /\d/;
  const regexP4 = /\W/;
  const regexP5 = /.{8,}/;
  if (
    regex1.test(user.password) &&
    regexP2.test(user.password) &&
    regexP3.test(user.password) &&
    regexP4.test(user.password) &&
    regexP5.test(user.password)
  ) {
    // shine massiv
    let userList = [];

    // Хэрэглэгчийн мэдээлэлийг унших
    const storedUserList = localStorage.getItem("userList");

    //  shine hereglegj nemne
    storedUserList ? (userList = JSON.parse(storedUserList)) : false;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      user.img = reader.result;
      userList.push(user);
      localStorage.setItem("userList", JSON.stringify(userList));
    });
    console.log(reader);
    if (img.files[0]) {
      reader.readAsDataURL(img.files[0]);
    }
    // array luu nemj hadaglana
    inputName.value = "";
    inputEmail.value = "";
    password.value = "";
    ConfrimPassword.value = "";
    alert("Амжилтай бүртгэлээ");
    window.location.href = "/src/html/login.html";
  } else {
    alert("Нууц үг том, жижиг, тоо, тэмдэгнүүд орох ёстой!");
  }
});
const userData = JSON.parse(localStorage.getItem("userList"));
