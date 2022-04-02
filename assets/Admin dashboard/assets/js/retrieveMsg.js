
 // RETRIEVE A MESSAGE FROM LOCAL STORAGE AND DISPLAY IN DASHBOARD

let messages;

const displayMessages = () => {
    // get messages from local storage
    messages = JSON.parse(localStorage.getItem('messages'));
    let messageElement;
    messages.forEach(element => {
        messageElement = `
       
            <div class="message-content">
                <h2>${element.username}</h2>
                <h4>${element.email}</h4>
                <p>${element.messageInput}</p>
            </div>
      `;

     let messageCard = document.createElement('div');
    //  messageCard.className = 'message-card';
     messageCard.classList.add('message-card');
     messageCard.innerHTML = messageElement;

     document.querySelector('.messages-container').appendChild(messageCard)

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
        // messagesContainer.innerHTML = messageElement;
        
}

displayMessages();