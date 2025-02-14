
const adminUsername = "shakthavasoon";
const adminPassword = "skvs2025";

const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");


form.addEventListener("submit", function(event) {
    event.preventDefault();

    
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;


    if (enteredUsername === adminUsername && enteredPassword === adminPassword) {
   
        window.location.href = "valen.html";  
    } else {
  
        errorMessage.textContent = "Invalid username or password!";
    }

   
    passwordInput.value = '';
});
