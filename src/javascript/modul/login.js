const email = document.querySelector(".emails");
const password = document.querySelector(".passwords");
const loginBtn = document.getElementById("login");
const userData = JSON.parse(localStorage.getItem("userList"));
const loginDefualt = document.querySelector(".loginDefualt");
const user = document.querySelector(".user");
const form = document.querySelector("form");
const container = document.querySelector(".container-form");
const mainContainerUser = document.querySelector(".forms-container");
let userLogin = "";
let UserUpdateInfo = "";
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
        // alert("Танд энэ өдрийн мэнд хүргэе " + isUserValid.name);
        form.style.display = "none";
        container.classList.add("form");
        userLogin = `
        <form
              action=""
              method="post"
              class="loginDefualt"
              enctype="multipart/form-data"
            >
              <h3>My Account</h3>
              <div class="img">
                <img src="${isUserValid.img}" alt="" />
              </div>
              <h1 class="proName">${isUserValid.name}</h1>
              <input
                type="submit"
                name="update"
                id="updateProfile"
                value="Update profile"
                class="btn update"
              />
              <input
                type="submit"
                name="goback"
                id="goBack"
                value="Go back"
                class="btn goBack"
              />
        `;
        mainContainerUser.innerHTML = userLogin;
      }
      const goBack = document.getElementById("goBack");
      goBack.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "/index.html";
      });
      const update = document.getElementById("updateProfile");
      const formUpadte = document.querySelector(".loginDefualt");
      update.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("object");
        mainContainerUser.classList.add("displayNoneForm");
        UserUpdateInfo = `
            <form
          action=""
          method="post"
          class="updateForm"
          enctype="multipart/form-data"
          id="update"
        >
          <h3>Update now</h3>
          <div class="left">
            <label for="">Username</label><br />
            <input
              type="text"
              name="name"
              class="box"
              id="NewName"
              placeholder="userName"
              value='${isUserValid.name}'
            />
            <label for="">Update your pic</label><br />

            <input
              type="file"
              name="image"
              class="box"
              accept="image/jpg, image/jpeg, image/png"
              id="newImg"
            />
          </div>
          <div class="right">
            <label for="">Old password</label><br />

            <input
              type="password"
              name="password"
              value="${isUserValid.password}"
              placeholder="enter password"
              class="box OldPassword"
              id="OldPassword"
              required
            />
            <label for="">New password</label><br />

            <input
              type="password"
              name="password"
              placeholder="enter password"
              class="box newPassword"
              id="newPassword"
              required
            />
            <label for="">Confrim new password</label><br />

            <input
              type="password"
              name="password"
              placeholder="enter password"
              class="box newPassword"
              id="NewConfrimPassword"
              required
            />
          </div>
          <input
            type="submit"
            name="submit"
            id="upadte"
            value="update now"
            class="btn update"
          />
        </form>
        `;
        container.innerHTML = UserUpdateInfo;
        const updateImg = document.querySelector("#newImg");
        const oldPassword = document.querySelector("#OldPassword");
        const newPassword = document.querySelector("#newPassword");
        const confirmPassword = document.querySelector("#NewConfrimPassword");
        const updateForm = document.querySelector("#update");
        updateForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const newName = document.querySelector("#NewName").value;
          const img = updateImg.files[0];
          const oldPass = oldPassword.value;
          const newPass = newPassword.value;
          const confirmPass = confirmPassword.value;
          if (oldPass === isUserValid.password) {
            const updatedUser = {
              name: newName,
              email: isUserValid.email,
              password: newPass,
              img: null,
            };
            const filteredUserList =
              userData.filter((user) => user.email !== isUserValid.email) || [];

            const reader = new FileReader();

            reader.addEventListener("load", () => {
              const updatedUser = {
                name: newName,
                email: isUserValid.email,
                password: newPass,
                img: reader.result,
              };
              const filteredUserList = userData.filter(
                (user) => user.email !== isUserValid.email
              );
              filteredUserList.push(updatedUser);
              localStorage.setItem(
                "userList",
                JSON.stringify(filteredUserList)
              );
            });
            if (img) {
              reader.readAsDataURL(img);
            }
            alert("Мэдээлэл шинэчлэгдлээ");
            window.location.href = "/src/html/login.html";
          }
        });
      });
    } else {
      alert("Нууц үг буруу");
    }
  } else {
    console.log("Мэдээлэл олдсонгүй");
  }
});
const userJson = JSON.parse(localStorage.getItem("userList"));
