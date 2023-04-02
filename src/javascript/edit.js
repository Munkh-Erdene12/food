const boxContainer = document.querySelector(".box-container");
const container = document.querySelector(".container");
const boxview = document.querySelector(".boxview");
const foodBase = JSON.parse(localStorage.getItem("FoodBase"));
let adminPost = "";
let boxViews = "";
foodBase.forEach((element) => {
  adminPost = `
    <div class="box" data-name="${element.id}">
            <img src="${element.img}" alt="" />
            <h3>${element.title}</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="cart">
              <span>$${element.price}</span>
              <a href="#" class="btns addCart edit" data-name='${element.id}'>edit</a>
            </div>
          </div>
    `;
  boxContainer.innerHTML += adminPost;
});
const edit = document.querySelectorAll(".edit");
console.log(edit);
edit.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    boxview.classList.add("activeView");

    const id = e.currentTarget.getAttribute("data-name");
    const item = foodBase.find((base) => base.id === id);
    boxViews = `
    <div class="close">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="imgAdmin">
          <img src="${item.img}" alt="" />
        </div>
        <div class="titleAdmin">
          <input
            type="text"
            name="title"
            placeholder="title"
            class="adminIn titleInputValue"
            id="title"
            value="${item.title}"

            required
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            class="adminIn priceInputValue"
            id="price"
            value="${item.price}"
            required
          />

            <input
            type="file"
            name="image"
            class="adminIn"
            accept="image/jpg, image/jpeg, image/png"
            id="img"
          />
        </div>
        <div class="deleteAdmin">
          <input type="submit" data-update='${item.id}' class="adminIn sub submit" />
        </div>
         <div class="deleteAdmin">
          <input type="submit" data-delete='${item.id}' class="adminIn sub delete" />
        </div>
    `;
    boxview.innerHTML = boxViews;
    const closeBtn = document.querySelector(".close");

    closeBtn.addEventListener("click", () => {
      boxview.classList.remove("activeView");
    });
    const submit = document.querySelector(".submit");
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      const id = e.currentTarget.getAttribute("data-update");
      const itemIndex = foodBase.findIndex((base) => base.id === id);
      const fileInput = document.getElementById("img");
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const updatedItem = {
          ...foodBase[itemIndex],
          price: document.getElementById("price").value,
          title: document.getElementById("title").value,
          img: reader.result,
        };
        foodBase[itemIndex] = updatedItem;
        localStorage.setItem("FoodBase", JSON.stringify(foodBase));
        boxview.classList.remove("activeView");
        location.reload();
      });

      if (fileInput.files[0]) {
        reader.readAsDataURL(fileInput.files[0]);
      } else {
        const updatedItem = {
          ...foodBase[itemIndex],
          price: document.getElementById("price").value,
          title: document.getElementById("title").value,
        };
        foodBase[itemIndex] = updatedItem;
        localStorage.setItem("FoodBase", JSON.stringify(foodBase));
        boxview.classList.remove("activeView");
        location.reload();
      }
    });
    const deletes = document.querySelector(".delete");
    deletes.addEventListener("click", (e) => {
      e.preventDefault();
      let id = e.currentTarget.getAttribute("data-delete");
      let item = foodBase.find((el) => el.id === id);
      if (item !== -1) {
        foodBase.splice(item, 1);
        localStorage.setItem("FoodBase", JSON.stringify(foodBase));
        boxview.classList.remove("activeView");
        location.reload();
      }
    });
  });
});
