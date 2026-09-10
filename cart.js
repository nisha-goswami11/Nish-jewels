// ==========================================
// NISH Jewels - Cart Page JavaScript
// ==========================================


// ==========================================
// HTML Elements
// ==========================================

const cartItems = document.getElementById("cartItems");
const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("total");
const emptyCart = document.getElementById("emptyCart");


// ==========================================
// Display Cart
// ==========================================

function displayCart() {

    cartItems.innerHTML = "";

    // Check if cart is empty
    if (cart.length === 0) {

        emptyCart.classList.remove("d-none");

        subtotalElement.innerText = "₹0";
        totalElement.innerText = "₹0";

        return;
    }


    // Hide empty cart message
    emptyCart.classList.add("d-none");


    let subtotal = 0;


    // Display each product
    cart.forEach(product => {

        const productTotal =
            product.price * product.quantity;


        subtotal += productTotal;


        cartItems.innerHTML += `

            <div class="cart-card">

                <!-- Product Image -->

                <img
                    src="${product.image}"
                    class="cart-img"
                    alt="${product.name}">


                <!-- Product Information -->

                <div class="cart-info">

                    <h4>${product.name}</h4>

                    <p class="text-muted">
                        ${product.category || ""}
                    </p>

                    <p>
                        ₹${product.price}
                    </p>


                    <!-- Quantity -->

                    <div class="quantity-box">

                        <button
                            class="quantity-btn decrease-btn"
                            data-id="${product.id}">
                            -
                        </button>


                        <span class="quantity">
                            ${product.quantity}
                        </span>


                        <button
                            class="quantity-btn increase-btn"
                            data-id="${product.id}">
                            +
                        </button>

                    </div>


                    <!-- Remove -->

                    <button
                        class="remove-btn"
                        data-id="${product.id}">

                        <i class="bi bi-trash"></i>
                        Remove

                    </button>

                </div>


                <!-- Product Total -->

                <div class="cart-price">

                    <strong>
                        ₹${productTotal}
                    </strong>

                </div>

            </div>

        `;

    });


    // Update totals

    subtotalElement.innerText =
        `₹${subtotal}`;

    totalElement.innerText =
        `₹${subtotal}`;


    // Initialize buttons

    initializeCartButtons();

}


// ==========================================
// Cart Buttons
// ==========================================

function initializeCartButtons() {


    // ==========================================
    // Increase Quantity
    // ==========================================

    const increaseButtons =
        document.querySelectorAll(".increase-btn");


    increaseButtons.forEach(button => {

        button.addEventListener("click", () => {

            const id =
                Number(button.dataset.id);


            increaseQuantity(id);


            displayCart();

        });

    });


    // ==========================================
    // Decrease Quantity
    // ==========================================

    const decreaseButtons =
        document.querySelectorAll(".decrease-btn");


    decreaseButtons.forEach(button => {

        button.addEventListener("click", () => {

            const id =
                Number(button.dataset.id);


            decreaseQuantity(id);


            displayCart();

        });

    });


    // ==========================================
    // Remove Product
    // ==========================================

    const removeButtons =
        document.querySelectorAll(".remove-btn");


    removeButtons.forEach(button => {

        button.addEventListener("click", () => {

            const id =
                Number(button.dataset.id);


            removeFromCart(id);


            displayCart();

        });

    });

}


// ==========================================
// Initial Load
// ==========================================

displayCart();