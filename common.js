// ==========================================
// NISH Jewels - Common JavaScript
// ==========================================


// ==========================================
// Local Storage
// ==========================================

// Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Wishlist
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


// ==========================================
// Save Cart
// ==========================================

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}


// ==========================================
// Save Wishlist
// ==========================================

function saveWishlist() {

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

}


// ==========================================
// Update Cart Counter
// ==========================================

function updateCartCounter() {

    const cartCount = document.getElementById("cartCount");

    if (!cartCount) return;

    let total = 0;

    cart.forEach(item => {

        total += item.quantity;

    });

    cartCount.innerText = total;

}


// ==========================================
// Update Wishlist Counter
// ==========================================

function updateWishlistCounter() {

    const wishlistCount = document.getElementById("wishlistCount");

    if (!wishlistCount) return;

    wishlistCount.innerText = wishlist.length;

}


// ==========================================
// Toast Notification
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


// ==========================================
// Add To Cart
// ==========================================

function addToCart(product, quantity = 1) {

    const existing = cart.find(item => item.id === product.id);

    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            ...product,

            quantity: quantity

        });

    }

    saveCart();

    updateCartCounter();

    showToast("🛒 Product Added To Cart");

}


// ==========================================
// Remove From Cart
// ==========================================

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

    updateCartCounter();

    showToast("🗑 Product Removed");

}


// ==========================================
// Increase Quantity
// ==========================================

function increaseQuantity(id) {

    const product = cart.find(item => item.id === id);

    if (!product) return;

    product.quantity++;

    saveCart();

    updateCartCounter();

}


// ==========================================
// Decrease Quantity
// ==========================================

function decreaseQuantity(id) {

    const product = cart.find(item => item.id === id);

    if (!product) return;

    if (product.quantity > 1) {

        product.quantity--;

        saveCart();

        updateCartCounter();

    } else {

        removeFromCart(id);

    }

}


// ==========================================
// Add To Wishlist
// ==========================================

function addToWishlist(product) {

    const exists = wishlist.find(item => item.id === product.id);

    if (exists) {

        showToast("❤️ Already In Wishlist");

        return;

    }

    wishlist.push(product);

    saveWishlist();

    updateWishlistCounter();

    showToast("❤️ Added To Wishlist");

}


// ==========================================
// Remove From Wishlist
// ==========================================

function removeFromWishlist(id) {

    wishlist = wishlist.filter(item => item.id !== id);

    saveWishlist();

    updateWishlistCounter();

    showToast("💔 Removed From Wishlist");

}


// ==========================================
// Initialize
// ==========================================

updateCartCounter();

updateWishlistCounter();


// ==========================================
// Update User Area
// ==========================================

function updateUserArea() {

    const userArea =
        document.getElementById("userArea");

    if (!userArea) return;


    const userName =
        localStorage.getItem("userName");


    if (userName) {

        userArea.innerHTML = `

            <div class="dropdown">

                <button
                    class="btn btn-primary rounded-pill px-4 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown">

                    Hi, ${userName} 👋

                </button>


                <ul class="dropdown-menu dropdown-menu-end">

                    <li>
                        <button
                            class="dropdown-item"
                            id="logoutBtn">

                            Logout

                        </button>
                    </li>

                </ul>

            </div>

        `;


        // Logout

        const logoutBtn =
            document.getElementById("logoutBtn");


        logoutBtn.addEventListener("click", () => {

            localStorage.removeItem("userName");

            showToast("👋 Logged out successfully");

            setTimeout(() => {

                window.location.href = "index.html";

            }, 1000);

        });

    }

}


// ==========================================
// Initialize User Area
// ==========================================

updateUserArea();