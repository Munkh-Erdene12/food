const table = document.querySelector("tbody");
const userDate = JSON.parse(localStorage.getItem("userList"));

userDate.forEach((el, index) => {
  let user = `
      <tr>
      <th scope="row">${index + 1}</th>
      <td>${el.name}</td>
      <td>${el.email}</td>
      <td>${el.password}</td>
    </tr>
    `;
  table.innerHTML += user;
});
