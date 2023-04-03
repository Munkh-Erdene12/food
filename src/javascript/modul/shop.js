const foodBase = JSON.parse(localStorage.getItem("FoodBase"));
const shopMenuIcon = document.querySelector(".shopNum");
const shopList = document.querySelector(".right");
const boxContainer = document.querySelector(".box-container");
const shopLinstContainer = document.querySelector(".shopLinstContainer");
const shopNum = document.querySelector(".nums");
const shopSums = document.querySelector(".shopSum");
const numberShop = document.querySelector(".number");
let shopListItem = "";
let menuList = "";
let result = 0;
let shopSum = 0;
let num = 0;
console.log(foodBase);
export let shopMenu = () => {
  shopMenuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    shopList.classList.toggle("shopMenu");
  });

  foodBase.forEach((baseElement) => {
    menuList = `
        <div class="box" data-name="">
            <div class="fa fa-heart hrt"></div>
            <img src="${baseElement.img}" alt="" />
            <h3>${baseElement.title}</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="cart">
              <span>₮ ${baseElement.price}</span>
              <a href="#" class="btns addCart" data-target='${baseElement.id}'>add to cart</a>
            </div>
          </div>
`;

    boxContainer.innerHTML += menuList;
  });
  const addCartButtons = document.querySelectorAll(".addCart");
  addCartButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      shopNum.innerHTML = result += 1;
      const targetId = e.currentTarget.getAttribute("data-target");
      const item = foodBase.find((baseElement) => baseElement.id === targetId);
      shopSum += item.price;
      shopSums.innerHTML = shopSum;

      num += item.num;
      numberShop.innerHTML = num;
      shopListItem = `
       <div class="list">
            <div class="img">
              <img src="${item.img}" alt="" />
            </div>
            <div class="listTitle">
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <h3 class="listTitle">${item.title} ₮${item.price}</h3>
            </div>
            <div class="cart">
              <div class="iconDelte" data-name='${item.id}'>
                <i class="fa-solid fa-trash-can"></i>
              </div>
              <span>Төлбөр төлөх</span>
            </div>
          </div>
      `;

      shopLinstContainer.innerHTML += shopListItem;
      const delt = document.querySelectorAll(".iconDelte");
      delt.forEach((dl) => {
        dl.addEventListener("click", (e) => {
          e.preventDefault();
          let id = e.currentTarget.getAttribute("data-name");
          let dlet = foodBase.find((baseElement) => baseElement.id === id);
          shopSum -= dlet.price;
          shopSums.innerHTML = shopSum;
          num -= dlet.num;
          numberShop.innerHTML = num;
          shopNum.innerHTML = result -= 1;

          // устгасны дараа элементийг устгана
          e.currentTarget.closest(".list").remove();
        });
      });
    });
  });
  const hrt = document.querySelectorAll(".hrt");
};
