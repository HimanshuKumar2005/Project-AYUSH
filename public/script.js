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

    // Get form values
    const formData = {
        firstname: document.getElementById("reg-firstname").value,
        lastname: document.getElementById("reg-lastname").value,
        username: document.getElementById("reg-username").value,
        email: document.getElementById("reg-email").value,
        phone: document.getElementById("reg-phone").value,
        address: document.getElementById("reg-address").value,
        gender: document.getElementById("reg-gender").value,
        dob: document.getElementById("reg-dob").value,
        password: document.getElementById("reg-password").value,
    };

    // Send POST request to the backend
    fetch('/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Inform the server we're sending JSON
        },
        body: JSON.stringify(formData) // Convert formData object to JSON string
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error in registration");
        }
        return response.json(); // Parse JSON response
    })
    .then(data => alert(data.message)) // Handle the response data
    .catch(error => console.error('Error:', error)); // Error handling
});
