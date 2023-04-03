const submit = document.getElementById("submit");
const id = document.getElementById("foodId");
const price = document.getElementById("foodPrice");
const title = document.getElementById("foodTitle");
const img = document.getElementById("foodImg");
console.log(id);
let baseData = JSON.parse(localStorage.getItem("FoodBase")) || [];

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const newItem = {
    id: id.value,
    price: parseInt(price.value),
    title: title.value,
    num: 1,
    img: null,
  };
  let item = baseData.find((id) => id.id);

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
  alert("Amjiltai post oruulla");
});
