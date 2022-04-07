
// RETRIEVE POSTS FROM LOCAL STORAGE AND DISPLAY IN DASHBOARD
// Get posts from local storage

let posts;

const displayPosts = () => {
posts = JSON.parse(localStorage.getItem('posts'));
let postElement;
posts.forEach(element => {
  postElement = `
 
  <div class="blog-card">

  <div class="blog-card-banner">
    <img src="data:image/png;base64,${element.image}" alt="" width="250" class="blog-banner-img">
  </div>

  <div class="blog-content-wrapper">

    <button class="btn">${element.category}</button>

    <h3>
      <a href="./assets/html/post.html" class="h3">${element.title}</a>
    </h3>

    <p class="blog-text"> ${element.body} </p>

    <div class="wrapper-flex">
      <div class="wrapper">
        <p class="text-sm">
          <time datetime="2021-09-13">Published ${element.publishDate}</time>
        </p>
      </div>

    </div>
    <div class="wrapper-flex">
         <button class="btn btn-edit">Edit</button>
         <button class="btn btn-delete" onclick="deletePost('${element.id}')">Delete</button>
      </div>
  </div>
  </div>
`;

let blogPost = document.createElement('div');
//  postCard.className = 'post-card';
blogPost.classList.add('blog__post');
blogPost.innerHTML = postElement;

document.querySelector('.blog-card-group').appendChild(blogPost);
});
  
}

displayPosts();

const deletePost = id => {
console.log(id)
posts = posts.filter((item) => item.id != id);
localStorage.setItem('posts', JSON.stringify(posts));
location.reload();
}