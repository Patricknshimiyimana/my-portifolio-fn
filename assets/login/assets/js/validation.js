
// Targetting all classes & id from HTML

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error")

// Adding the submit event Listener

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate(email, 0, "Email cannot be blank");
  validate(password, 1, "Password cannot be blank");
});

// validate function which will do all the works

let validate = (inputField, serial, message) => {
  if (inputField.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    inputField.parentNode.style.border = "2px solid #af4444";
 
  } else {
    errorMsg[serial].innerHTML = "";
    inputField.parentNode.style.border = "2px solid green";
    
  }
};
