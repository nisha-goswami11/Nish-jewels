
// ==========================================
// NISH Jewels - Product Page JavaScript
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
        rating: 5,
        material: "Sterling Silver",
        image: "WhatsApp Image 2026-06-22 at 1.51.59 PM (1).jpeg",
        description:
            "Elegant handcrafted diamond ring made with premium quality materials. Perfect for weddings, anniversaries and special occasions."
    },

    {
        id: 2,
        name: "Gold Necklace",
        category: "Necklace",
        price: 4599,
        rating: 5,
        material: "Gold Plated",
        image: "gold necklace.jpeg",
        description:
            "Elegant gold necklace designed to add a touch of luxury and sophistication to every occasion."
    },

    {
        id: 3,
        name: "Pearl Earrings",
        category: "Earrings",
        price: 1999,
        rating: 5,
        material: "Pearl",
        image: "pearl earing.jpeg",
        description:
            "Beautiful pearl earrings with a timeless design, perfect for both everyday wear and special occasions."
    },

    {
        id: 4,
        name: "Silver Bracelet",
        category: "Bracelet",
        price: 2499,
        rating: 5,
        material: "Sterling Silver",
        image: "silver bracelets.jpeg",
        description:
            "Elegant silver bracelet crafted for a graceful and sophisticated look."
    },

    {
        id: 5,
        name: "Rose Gold Ring",
        category: "Ring",
        price: 3499,
        rating: 5,
        material: "Rose Gold",
        image: "Rose gold ring.jpeg",
        description:
            "A beautiful rose gold ring designed with elegance and a modern touch."
    },

    {
        id: 6,
        name: "Luxury Necklace",
        category: "Necklace",
        price: 5999,
        rating: 5,
        material: "Premium Gold",
        image: "luxury necklace.jpeg",
        description:
            "A luxurious necklace designed to make every special occasion memorable."
    },

    {
        id: 7,
        name: "Diamond Earrings",
        category: "Earrings",
        price: 2799,
        rating: 5,
        material: "Sterling Silver",
        image: "WhatsApp Image 2026-06-22 at 1.52.02 PM (10).jpeg",
        description:
            "Elegant diamond earrings crafted to add sparkle and sophistication to your look."
    },

    {
        id: 8,
        name: "Gold Bracelet",
        category: "Bracelet",
        price: 3199,
        rating: 5,
        material: "Gold Plated",
        image: "gold bracelet.jpeg",
        description:
            "A stylish gold bracelet that combines elegance, comfort and timeless beauty."
    }

];


// ==========================================
// GET PRODUCT ID FROM URL
// ==========================================

const urlParams = new URLSearchParams(window.location.search);

let productId = Number(urlParams.get("id"));

// If no ID is provided, show first product
if (!productId) {
    productId = 1;
}

const product = products.find(item => item.id === productId);


// ==========================================
// CHECK PRODUCT
// ==========================================

if (!product) {

    alert("Product not found.");

} else {

    // ==========================================
    // DISPLAY PRODUCT INFORMATION
    // ==========================================

    const productTitle = document.querySelector(".product-title");
    const productPrice = document.querySelector(".price");
    const productCategory = document.querySelector(".product-category");
    const productMaterial = document.querySelector(".product-material");
    const productDescription = document.querySelector(".description");
    const breadcrumbProduct = document.querySelector(".breadcrumb-item.active");

    if (productTitle) {
        productTitle.innerText = product.name;
    }

    if (productPrice) {
        productPrice.innerText = `₹${product.price}`;
    }

    if (productCategory) {
        productCategory.innerText = product.category;
    }

    if (productMaterial) {
        productMaterial.innerText = product.material;
    }

    if (productDescription) {
        productDescription.innerText = product.description;
    }

    if (breadcrumbProduct) {
        breadcrumbProduct.innerText = product.name;
    }


    // ==========================================
    // MAIN PRODUCT IMAGE
    // ==========================================

    const mainImage = document.getElementById("mainProductImage");

    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.name;
    }


    // ==========================================
    // QUANTITY
    // ==========================================

    let quantity = 1;

    const quantityText = document.getElementById("quantity");
    const plusBtn = document.getElementById("plusBtn");
    const minusBtn = document.getElementById("minusBtn");


    // Increase Quantity
    if (plusBtn) {

        plusBtn.addEventListener("click", () => {

            quantity++;

            quantityText.innerText = quantity;

        });

    }


    // Decrease Quantity
    if (minusBtn) {

        minusBtn.addEventListener("click", () => {

            if (quantity > 1) {

                quantity--;

                quantityText.innerText = quantity;

            }

        });

    }


    // ==========================================
    // ADD TO CART
    // ==========================================

    const cartBtn = document.querySelector(".cart-btn");

    if (cartBtn) {

        cartBtn.addEventListener("click", () => {

            // common.js handles the cart
            // Add the selected quantity
            for (let i = 0; i < quantity; i++) {

                addToCart(product);

            }

        });

    }


    // ==========================================
    // ADD TO WISHLIST
    // ==========================================

    const wishlistBtn = document.querySelector(".wishlist-btn");

    if (wishlistBtn) {

        wishlistBtn.addEventListener("click", () => {

            // common.js handles wishlist
            addToWishlist(product);

        });

    }


    // ==========================================
    // IMAGE GALLERY
    // ==========================================

    const thumbnails = document.querySelectorAll(".thumb");

    thumbnails.forEach(thumbnail => {

        thumbnail.addEventListener("click", () => {

            if (mainImage) {

                mainImage.src = thumbnail.src;

                mainImage.alt = product.name;

            }

            // Remove active class from all thumbnails
            thumbnails.forEach(img => {

                img.classList.remove("active-thumb");

            });

            // Add active class to clicked thumbnail
            thumbnail.classList.add("active-thumb");

        });

    });

}



