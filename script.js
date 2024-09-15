document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get the email and password values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Placeholder validation logic
    if (email === "test@example.com" && password === "password123") {
        alert("Login successful!");
        // Redirect to another page or perform any other logic here
    } else {
        alert("Invalid email or password.");
    }
});
