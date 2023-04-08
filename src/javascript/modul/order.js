const container = document.querySelector(".container");
const zahialga = JSON.parse(localStorage.getItem("orderList"));
console.log(zahialga);
zahialga.forEach((el) => {
  console.log(el);
  let newOrder = `
  <div class="card" style="width: 18rem; margin:12px">
  <div class="card-body">
    <h5 class="card-title">Захиалсан хүний нэр: ${el.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Захиалсан хоол: ${el.order} нэмэлт захиалсан зүйл: ${el.food}</h6>
    <p class="card-text">Хүний тоо: ${el.nemelt}, гэрийн хаяг: ${el.address}, нэмэлт мессеж: ${el.msg}, холбоо барих дугаар: ${el.number}, захиалсан он сар: ${el.date}</p>
  </div>
</div>
    `;
  container.innerHTML += newOrder;
});
