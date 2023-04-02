const submit = document.getElementById("submit");
const id = document.getElementById("foodId");
const price = document.getElementById("foodPrice");
const title = document.getElementById("foodTitle");
const img = document.getElementById("foodImg");
let baseData = [];
let storedData = localStorage.getItem("FoodBase");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  // объект үүсгэнэ
  const newItem = {
    id: id.value,
    price: price.value,
    title: title.value,
    img: "",
  };
  // зургыг хадгалах
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    newItem.img = reader.result;
    baseData.push(newItem);
    localStorage.setItem("FoodBase", JSON.stringify(baseData));
  });
  if (img.files[0]) {
    reader.readAsDataURL(img.files[0]);
  }
  id.value = "";
  price.value = "";
  title.value = "";
  img.value = "";
});
