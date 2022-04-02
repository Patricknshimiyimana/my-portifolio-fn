const form = document.getElementById('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const messageInput = document.getElementById('message').value;

    const message = {
        username,
        email,
        messageInput
    }

    let messages = JSON.parse(localStorage.getItem("messages") || "[]");

    messages.push(message);

    localStorage.setItem("messages", JSON.stringify(messages))
    
    location.href = "../../index.html"
})

