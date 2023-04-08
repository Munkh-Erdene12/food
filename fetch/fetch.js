const container = document.querySelector(".container");
const con = document.querySelector(".con");
const posts = document.getElementById("post");
const comment = document.getElementById("comment");
posts.addEventListener("click", (e) => {
  let post = async () => {
    const post = await fetch("https://jsonplaceholder.typicode.com/posts");
    const JSONPostData = await post.json();
    JSONPostData.forEach((element) => {
      let postHtml = `
<div class="card" style="width: 18rem; margin:13px" id='${element.id}'>
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
 
    <p class="card-text">${element.body}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
      `;
      con.style.display = "none";
      container.innerHTML += postHtml;
    });
  };
  post();
});
comment.addEventListener("click", (e) => {
  let comment = async () => {
    const comment = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const JSONCommentData = await comment.json();
    JSONCommentData.forEach((el) => {
      let comment = `
          <div class="card" style="width: 18rem; margin:13px" id='${el.id}'>
          <div class="card-body">
              <h5 class="card-title">${el.name}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${el.email}</h6>
              <p class="card-text">${el.body}</p>
              <a href="https://jsonplaceholder.typicode.com/comments" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
          </div>
          </div>
        `;
      con.style.display = "none";
      container.innerHTML += comment;
    });
  };
  comment();
});
