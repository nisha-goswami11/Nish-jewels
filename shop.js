// ==========================================
// NISH Jewels - Shop Page JavaScript
// ==========================================


// ==========================================
// PRODUCT DATA
// ==========================================

const products = [

    {
        id: 1,
        name: "Diamond Ring",
        category: "Ring",
        price: 2999,
        discount: "20%",
        rating: 5,
        image: "WhatsApp Image 2026-06-22 at 1.51.59 PM (1).jpeg"
    },

    

    {
        id: 2,
        name: "Gold Necklace",
        category: "Necklace",
        price: 4599,
        discount: "15%",
        rating: 5,
        image: "gold necklace.jpeg"
    },

    {
        id: 3,
        name: "Pearl Earrings",
        category: "Earrings",
        price: 1999,
        discount: "25%",
        rating: 5,
        image: "pearl earing.jpeg"
    },

    {
        id: 4,
        name: "Silver Bracelet",
        category: "Bracelet",
        price: 2499,
        discount: "10%",
        rating: 5,
        image: "silver bracelets.jpeg"
    },

    {
        id: 5,
        name: "Rose Gold Ring",
        category: "Ring",
        price: 3499,
        discount: "30%",
        rating: 5,
        image: "Rose gold ring.jpeg"
    },

    {
        id: 6,
        name: "Luxury Necklace",
        category: "Necklace",
        price: 5999,
        discount: "18%",
        rating: 5,
        image: "luxury necklace.jpeg"
    },

    {
        id: 7,
        name: "Diamond Earrings",
        category: "Earrings",
        price: 2799,
        discount: "22%",
        rating: 5,
        image: "WhatsApp Image 2026-06-22 at 1.52.02 PM (10).jpeg"
    },

    {
        id: 8,
        name: "Gold Bracelet",
        category: "Bracelet",
        price: 3199,
        discount: "12%",
        rating: 5,
        image: "gold bracelet.jpeg"
    }

];


// ==========================================
// HTML ELEMENTS
// ==========================================

const productContainer = document.getElementById("productContainer");

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const sortProducts = document.getElementById("sortProducts");


// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function displayProducts(productList) {

    productContainer.innerHTML = "";

    // No products found
    if (productList.length === 0) {

        productContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <h3>No Products Found 😔</h3>
                <p>Try another search or category.</p>
            </div>
        `;

        return;
    }


    // Create product cards
    productList.forEach(product => {

        productContainer.innerHTML += `

            <div class="col-lg-3 col-md-6">

                <div class="product-card">

                    <!-- Discount -->
                    <span class="discount">
                        -${product.discount}
                    </span>


                    <!-- Wishlist -->
                    <button
                        class="wishlist-btn"
                        data-id="${product.id}"
                        aria-label="Add to wishlist">

                        <i class="bi bi-heart"></i>

                    </button>


                    <!-- Product Image -->
                    <img
                        src="${product.image}"
                        class="product-img"
                        alt="${product.name}">


                    <div class="product-body">

                        <!-- Product Name -->
                        <h4>${product.name}</h4>


                        <!-- Category -->
                        <p>${product.category}</p>


                        <!-- Rating -->
                        <div class="rating">

                            ${createStars(product.rating)}

                        </div>


                        <!-- Price -->
                        <div class="price">

                            ₹${product.price}

                        </div>


                        <!-- Buttons -->
                        <div class="product-buttons">

                            <button
                                class="cart-btn"
                                data-id="${product.id}">

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


    // Add button events
    initializeButtons();

}


// ==========================================
// CREATE STAR RATING
// ==========================================

function createStars(rating) {

    let stars = "";

    for (let i = 1; i <= 5; i++) {

        if (i <= rating) {

            stars += `
                <i class="bi bi-star-fill text-warning"></i>
            `;

        } else {

            stars += `
                <i class="bi bi-star text-warning"></i>
            `;

        }

    }

    return stars;

}


// ==========================================
// BUTTON EVENTS
// ==========================================

function initializeButtons() {


    // ==========================================
    // ADD TO CART
    // ==========================================

    const cartButtons =
        document.querySelectorAll(".cart-btn");


    cartButtons.forEach(button => {

        button.addEventListener("click", () => {

            const productId =
                Number(button.dataset.id);


            const product =
                products.find(item => item.id === productId);


            if (!product) return;


            // common.js handles cart
            addToCart(product);


            // Change button temporarily
            button.innerHTML = "✓ Added";

            button.disabled = true;


            setTimeout(() => {

                button.innerHTML = "Add To Cart";

                button.disabled = false;

            }, 1500);

        });

    });


    // ==========================================
    // ADD TO WISHLIST
    // ==========================================

    const wishlistButtons =
        document.querySelectorAll(".wishlist-btn");


    wishlistButtons.forEach(button => {

        button.addEventListener("click", () => {

            const productId =
                Number(button.dataset.id);


            const product =
                products.find(item => item.id === productId);


            if (!product) return;


            // common.js handles wishlist
            addToWishlist(product);


            // Change heart icon
            button.innerHTML = `
                <i class="bi bi-heart-fill text-danger"></i>
            `;

        });

    });


    // ==========================================
    // VIEW PRODUCT
    // ==========================================

    const viewButtons =
        document.querySelectorAll(".view-btn");


    viewButtons.forEach(button => {

        button.addEventListener("click", () => {

            const productId =
                button.dataset.id;


            window.location.href =
                `product.html?id=${productId}`;

        });

    });

}


// ==========================================
// FILTER PRODUCTS
// ==========================================

function filterProducts() {

    const searchValue =
        searchInput.value.toLowerCase().trim();


    const categoryValue =
        categoryFilter.value;


    let filteredProducts =
        products.filter(product => {


            // Search filter
            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchValue);


            // Category filter
            const matchesCategory =
                categoryValue === "all" ||
                product.category === categoryValue;


            return matchesSearch && matchesCategory;

        });


    // ==========================================
    // SORT
    // ==========================================

    const sortValue =
        sortProducts.value;


    if (sortValue === "low") {

        filteredProducts.sort(
            (a, b) => a.price - b.price
        );

    }


    else if (sortValue === "high") {

        filteredProducts.sort(
            (a, b) => b.price - a.price
        );

    }


    displayProducts(filteredProducts);

}


// ==========================================
// SEARCH
// ==========================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterProducts
    );

}


// ==========================================
// CATEGORY FILTER
// ==========================================

if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterProducts
    );

}


// ==========================================
// SORT PRODUCTS
// ==========================================

if (sortProducts) {

    sortProducts.addEventListener(
        "change",
        filterProducts
    );

}


// ==========================================
// INITIAL LOAD
// ==========================================

displayProducts(products);