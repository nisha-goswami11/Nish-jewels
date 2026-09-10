
// ==========================================
// PASSWORD SHOW / HIDE
// ==========================================

const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        toggle.classList.replace("bi-eye-slash", "bi-eye");

    } else {

        password.type = "password";
        toggle.classList.replace("bi-eye", "bi-eye-slash");

    }

});


// ==========================================
// LOGIN FORM
// ==========================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const passwordValue = document.getElementById("password").value;


    // Get registered user
    const savedUser = JSON.parse(
        localStorage.getItem("registeredUser")
    );


    // No user registered
    if (!savedUser) {

        showToast("❌ Please register first");
        return;

    }


    // Check email and password
    if (
        email === savedUser.email &&
        passwordValue === savedUser.password
    ) {

        // Save login status
        localStorage.setItem("isLoggedIn", "true");

        // Save username
        localStorage.setItem(
            "userName",
            savedUser.firstName
        );


        showToast("✅ Login Successful");


        setTimeout(() => {

            window.location.href = "index.html";

        }, 1500);

    } else {

        showToast("❌ Invalid email or password");

    }

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

    }, 2000);

}