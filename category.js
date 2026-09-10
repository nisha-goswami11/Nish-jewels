// ==========================================
// CATEGORY PAGE JAVASCRIPT
// ==========================================

// Get category from the HTML body
const selectedCategory = document.body.dataset.category;

// Product container
const categoryProducts = document.getElementById("categoryProducts");

// No products message
const noProducts = document.getElementById("noProducts");


// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function displayCategoryProducts() {

    // Filter products according to category
    const filteredProducts = products.filter(product => {

        return product.category.toLowerCase() === selectedCategory.toLowerCase();

    });


    // If no products found
    if (filteredProducts.length === 0) {

        categoryProducts.innerHTML = "";

        if (noProducts) {
            noProducts.style.display = "block";
        }

        return;
    }


    // Hide no products message
    if (noProducts) {
        noProducts.style.display = "none";
    }


    // Create product cards
    categoryProducts.innerHTML = filteredProducts.map(product => {

        return `
            <div class="col-lg-3 col-md-4 col-sm-6">

                <div class="product-card">

                    <!-- Wishlist -->
                    <button
                        class="wishlist-btn"
                        onclick="addToWishlist(products.find(p => p.id === ${product.id}))">

                        <i class="bi bi-heart"></i>

                    </button>


                    <!-- Product Image -->
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="product-image">


                    <!-- Product Information -->
                    <div class="product-info">

                        <h5>${product.name}</h5>

                        <div class="rating">
                            ${"★".repeat(product.rating || 5)}
                            ${"☆".repeat(5 - (product.rating || 5))}
                        </div>

                        <p class="price">
                            ₹${product.price}
                        </p>


                        <!-- Buttons -->
                        <div class="product-buttons">

                            <button
                                class="btn btn-outline-dark"
                                onclick="viewProduct(${product.id})">

                                View

                            </button>


                            <button
                                class="btn btn-dark"
                                onclick="addProductToCart(${product.id})">

                                Add to Cart

                            </button>

                        </div>

                    </div>

                </div>

            </div>
        `;

    }).join("");
}


// ==========================================
// VIEW PRODUCT
// ==========================================

function viewProduct(id) {

    window.location.href = `product.html?id=${id}`;

}


// ==========================================
// ADD TO CART
// ==========================================

function addProductToCart(id) {

    const product = products.find(product => product.id === id);

    if (!product) return;

    addToCart(product);

}


// ==========================================
// LOAD PRODUCTS
// ==========================================

displayCategoryProducts();