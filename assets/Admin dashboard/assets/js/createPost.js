if (localStorage.getItem("updateId")) {
    let id = localStorage.getItem("updateId");

    document.getElementById("cover").style.display = "none";
    document.getElementById("submitBtn").value = "Update Post";

    var posts = JSON.parse(localStorage.getItem("posts"));
    var articleToUpdate = posts.filter((item) => item.id == id);
    posts = posts.filter((item) => item.id != id);

    document.getElementById("title").value = articleToUpdate[0].title;
    document.getElementById("body").value = articleToUpdate[0].body;
    document.getElementById("category").value = articleToUpdate[0].category;

    document
      .getElementById("new-post-form")
      .addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const body = document.getElementById("body").value;
        const category = document.getElementById("category").value;
        const Article = {
          id,
          title,
          body,
          image: articleToUpdate[0].image,
          category,
          publishDate: articleToUpdate[0].publishDate,
        };

        posts.push(Article);
        localStorage.setItem("posts", JSON.stringify(posts));

        location.reload();
      });
  } else {
    document.getElementById("file").required = "";
    var image;
    document.getElementById("file").addEventListener("change", (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result
          .replace("data:", "")
          .replace(/^.+,/, "");
        image = base64String;
        // document.body.style.background = `url(data:image/png;base64,${base64String})`;
      };
      reader.readAsDataURL(file);
    });

    document
      .getElementById("new-post-form")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const body = document.getElementById("body").value;
        const category = document.getElementById("category").value;

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + "/" + mm + "/" + yyyy;

        const publishDate = today;
        const Article = {
          id: Math.floor(Math.random() * 1000),
          title,
          body,
          image: image,
          category,
          publishDate,
        };
        var posts = JSON.parse(localStorage.getItem("posts") || "[]");
        // Put the object into storage
        posts.push(Article);
        localStorage.setItem("posts", JSON.stringify(posts));
        location.reload();
      });
  }