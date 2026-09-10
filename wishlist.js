// ==========================================
// NISH Jewels - Wishlist Page JavaScript
// ==========================================


// ==========================================
// HTML Elements
// ==========================================

const wishlistItems =
    document.getElementById("wishlistItems");

const emptyWishlist =
    document.getElementById("emptyWishlist");


// ==========================================
// Display Wishlist
// ==========================================

function displayWishlist() {

    wishlistItems.innerHTML = "";


    // ==========================================
    // Check Empty Wishlist
    // ==========================================

    if (wishlist.length === 0) {

        emptyWishlist.classList.remove("d-none");

        return;

    }


    // Hide Empty Wishlist

    emptyWishlist.classList.add("d-none");


    // ==========================================
    // Display Products
    // ==========================================

    wishlist.forEach(product => {

        wishlistItems.innerHTML += `

            <div class="col-lg-3 col-md-6">

                <div class="wishlist-card">


                    <!-- Product Image -->

                    <div class="wishlist-image">

                        <img
                            src="${product.image}"
                            alt="${product.name}">


                        <!-- Remove Wishlist -->

                        <button
                            class="remove-wishlist"
                            data-id="${product.id}"
                            aria-label="Remove from wishlist">

                            <i class="bi bi-heart-fill"></i>

                        </button>

                    </div>


                    <!-- Product Details -->

                    <div class="wishlist-info">

                        <h4>
                            ${product.name}
                        </h4>


                        <p class="category">
                            ${product.category || ""}
                        </p>


                        <div class="rating">

                            ${createStars(product.rating || 5)}

                        </div>


                        <h5 class="price">
                            ₹${product.price}
                        </h5>


                        <!-- Buttons -->

                        <div class="wishlist-buttons">


                            <button
                                class="cart-btn"
                                data-id="${product.id}">

                                <i class="bi bi-cart3"></i>
                                Add To Cart

                            </button>


                            <button
                                class="view-btn"
                                data-id="${product.id}">

                                View

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        `;

    });


    // ==========================================
    // Initialize Buttons
    // ==========================================

    initializeWishlistButtons();

}


// ==========================================
// Star Rating
// ==========================================

function createStars(rating) {

    let stars = "";

    for (let i = 1; i <= 5; i++) {

        if (i <= rating) {

            stars += `
                <i class="bi bi-star-fill"></i>
            `;

        } else {

            stars += `
                <i class="bi bi-star"></i>
            `;

        }

    }

    return stars;

}


// ==========================================
// Wishlist Buttons
// ==========================================

function initializeWishlistButtons() {


    // ==========================================
    // Remove From Wishlist
    // ==========================================

    const removeButtons =
        document.querySelectorAll(".remove-wishlist");


    removeButtons.forEach(button => {

        button.addEventListener("click", () => {

            const id =
                Number(button.dataset.id);


            removeFromWishlist(id);


            displayWishlist();

        });

    });


    // ==========================================
    // Add To Cart
    // ==========================================

    const cartButtons =
        document.querySelectorAll(".cart-btn");


    cartButtons.forEach(button => {

        button.addEventListener("click", () => {

            const id =
                Number(button.dataset.id);


            const product =
                wishlist.find(item => item.id === id);


            if (!product) return;


            // Use common.js cart function

            addToCart(product);

        });

    });


    // ==========================================
    // View Product
    // ==========================================

    const viewButtons =
        document.querySelectorAll(".view-btn");


    viewButtons.forEach(button => {

        button.addEventListener("click", () => {

            const id =
                button.dataset.id;


            window.location.href =
                `product.html?id=${id}`;

        });

    });

}


// ==========================================
// Initialize Wishlist
// ==========================================

displayWishlist();