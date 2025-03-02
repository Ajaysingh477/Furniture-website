// Login Form Handling
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic validation
        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate login (replace with actual API call)
        alert(`Logged in as ${email}`);
        window.location.href = 'index.html'; // Redirect to homepage
    });
}

// Signup Form Handling
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Basic validation
        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Simulate signup (replace with actual API call)
        alert(`Signed up as ${email}`);
        window.location.href = 'login.html'; // Redirect to login page
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scroll-btn");

    // Show the button when user scrolls 100px down
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            scrollBtn.style.display = "block";
            scrollBtn.innerHTML = "⬆"; // Change icon to up arrow
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // Scroll to bottom or top when clicked
    scrollBtn.addEventListener("click", () => {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            scrollBtn.innerHTML = "⬇"; // Change icon to down arrow
        } else {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            scrollBtn.innerHTML = "⬆"; // Change icon to up arrow
        }
    });
});
