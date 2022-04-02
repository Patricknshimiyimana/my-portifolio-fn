// SAVE A MESSAGE IN LOCAL STORAGE
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

    messages.unshift(message);

    localStorage.setItem("messages", JSON.stringify(messages))
    
    location.href = "../../index.html"
})



// RETRIEVE A MESSAGE FROM LOCAL STORAGE AND DISPLAY IN DASHBOARD

let messages;

const displayMessages = () => {
    // get messages from local storage
    messages = JSON.parse(localStorage.getItem('messages'));
    let messageElement;
    messages.forEach(element => {
        messageElement = `
        <div class="message-card">
            <div class="message-content">
                <h2>${element.username}</h2>
                <h4>${element.email}</h4>
                <p>${element.messageInput}</p>
            </div>
     </div> `;

        // let messageCard = document.createElement('div');
        // messageCard.className('message-card');

        // let messageContent = document.createElement('div');
        // messageContent.className('message-content');

        // let username = document.createElement('h2');
        // let email = document.createElement('h4');
        // let messageInput = document.createElement('p');
        

        // username.innerText = element.username;
        // email.innerText = element.email;
        // messageInput.innerText = element.messageInput;

        // let messagesContainer = document.querySelector('.messages-container');

        // messagesContainer.appendChild(messageCard);
        // messageCard.appendChild(messageContent);
        // messageContent.appendChild(username);
        // messageContent.appendChild(email);
        // messageContent.appendChild(messageInput);
    });

    let messagesContainer = document.querySelector('.messages-container');
    messagesContainer.innerHTML = messageElement;
}

displayMessages();
