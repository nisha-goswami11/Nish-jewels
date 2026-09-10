// ===============================
// sticky navbar
// ===============================

const navbar = document.querySelector(".navbar");

if (navbar) {
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("shadow", window.scrollY > 50);
    });
}


// ===============================
// smooth scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// Wishlist Counter
// ===============================


// Select all wishlist buttons
const wishlistButtons = document.querySelectorAll(".wishlist-btn");

// Add click event to every button
wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        wishlist++;

        // Save to localStorage
        localStorage.setItem("wishlist", wishlist);

        // Update counter
        if (wishlistCounter) {
            wishlistCounter.innerText = wishlist;
        }

        showToast("❤️ Added to Wishlist");

    });

});


// ===============================
// cart counter
// ===============================


// Load saved cart count
// let cart = Number(localStorage.getItem("cart")) || 0;

// Select cart counter
// const cartCounter = document.getElementById("cartCount");

// // Show saved value
// if (cartCounter) {

//     cartCounter.innerText = cart;

// }

// Select all cart buttons
const cartButtons = document.querySelectorAll(".cart-btn");

// Add click event
cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Increase count
        cart++;

        // Save in browser
        localStorage.setItem("cart", cart);

        // Update navbar
        if (cartCounter) {

            cartCounter.innerText = cart;

        }

        // Show message
        showToast("🛒 Product Added to Cart");

    });

});

// ===============================
// search bar toggle
// ===============================

const searchInput =
document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value =
        searchInput.value.toLowerCase();

        document.querySelectorAll(".product-card")
        .forEach(card => {

            const name =
            card.querySelector("h5").innerText.toLowerCase();

            card.style.display =
            name.includes(value) ? "block" : "none";

        });

    });

}

// ===============================
// contact form validation
// ===============================

const contactForm =
document.querySelector(".contact-form");

if (contactForm) {

contactForm.addEventListener("submit",function(e){

e.preventDefault();

let name =
this.querySelector("input[type='text']").value;

let email =
this.querySelector("input[type='email']").value;

let message =
this.querySelector("textarea").value;

if(name=="" || email=="" || message==""){

showToast("Please fill all fields");

return;

}

showToast("Message Sent Successfully");

this.reset();

});

}

// ===============================
// newsletter form validation
// ===============================

const newsletter =
document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",function(e){

e.preventDefault();

const email =
this.querySelector("input").value;

if(email==""){

showToast("Enter Email");

return;

}

showToast("Subscribed Successfully");

this.reset();

});

}

// ===============================
// toast notification
// ===============================

function showToast(message){

const toast =
document.createElement("div");

toast.className="toast-box";

toast.innerText=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.remove();

},3000);

}

// ===============================
// back to top button
// ===============================

const topBtn = document.querySelector(".top-btn");

if (topBtn) {
    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 400 ? "block" : "none";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ===============================
// loader
// ===============================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});