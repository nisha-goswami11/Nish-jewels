

// ==========================================
// PASSWORD TOGGLE
// ==========================================

function togglePassword(inputId, iconId) {

    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    icon.addEventListener("click", () => {

        if (input.type === "password") {

            input.type = "text";
            icon.classList.replace("bi-eye-slash", "bi-eye");

        } else {

            input.type = "password";
            icon.classList.replace("bi-eye", "bi-eye-slash");

        }

    });
}

togglePassword("password", "togglePassword");
togglePassword("confirmPassword", "toggleConfirmPassword");


// ==========================================
// REGISTER FORM
// ==========================================

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;


    // Check password
    if (password !== confirmPassword) {

        showToast("❌ Passwords do not match");
        return;

    }


    // Create user object
    const user = {

        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password

    };


    // Save user
    localStorage.setItem(
        "registeredUser",
        JSON.stringify(user)
    );


    showToast("🎉 Registration Successful");


    // Go to login
    setTimeout(() => {

        window.location.href = "login.html";

    }, 1500);

});


// ==========================================
// TOAST
// ==========================================

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast-box";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);

}