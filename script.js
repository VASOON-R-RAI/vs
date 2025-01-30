// Define the admin credentials
const adminUsername = "shakthavasoon";
const adminPassword = "skvs2025";

// Get form elements
const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");

// Event listener for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the entered values
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Validate the credentials
    if (enteredUsername === adminUsername && enteredPassword === adminPassword) {
        // Redirect to the dashboard page
        window.location.href = "love.html";  // Ensure this file exists
    } else {
        // Show error message
        errorMessage.textContent = "Invalid username or password!";
    }

    // Clear the password field after submission
    passwordInput.value = '';
});
