// Function to show User Login form
function showLoginForm() {
    document.getElementById('title').innerText = 'User Login';
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('admin-login-form').classList.add('hidden');
    document.getElementById('register-form').classList.add('hidden');
}

// Function to show Admin Login form
function showAdminLoginForm() {
    document.getElementById('title').innerText = 'Admin Login';
    document.getElementById('admin-login-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.add('hidden');
}

// Function to show Registration form
function showRegistrationForm() {
    document.getElementById('title').innerText = 'Register';
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('admin-login-form').classList.add('hidden');
}

// Handling User Login Form Submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get the username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Placeholder validation logic for user login
    if (username === "user@example.com" && password === "user123") {
        alert("User login successful!");
    } else {
        alert("Invalid username or password.");
    }
});

// Handling Admin Login Form Submission
document.getElementById("admin-login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get the admin username and password values
    const adminUsername = document.getElementById("admin-username").value;
    const adminPassword = document.getElementById("admin-password").value;

    // Placeholder validation logic for admin login
    if (adminUsername === "admin@example.com" && adminPassword === "admin123") {
        alert("Admin login successful!");
    } else {
        alert("Invalid admin credentials.");
    }
});

// Handling Registration Form Submission
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get registration form values
    const regUsername = document.getElementById("reg-username").value;
    const regEmail = document.getElementById("reg-email").value;
    const regPassword = document.getElementById("reg-password").value;

    // Placeholder logic for registration
    alert(`Registration successful for ${regUsername} with email: ${regEmail}`);
});
