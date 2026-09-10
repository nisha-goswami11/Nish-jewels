// ==========================================
// NISH Jewels - Checkout Page JavaScript
// ==========================================


// ==========================================
// HTML Elements
// ==========================================

const checkoutItems = document.getElementById("checkoutItems");
const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("total");

const placeOrderBtn = document.getElementById("placeOrder");
const checkoutForm = document.getElementById("checkoutForm");


// ==========================================
// Display Order Summary
// ==========================================

function displayOrder() {

    checkoutItems.innerHTML = "";

    let subtotal = 0;


    // ==========================================
    // Check Empty Cart
    // ==========================================

    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <p class="text-center text-muted">
                Your cart is empty.
            </p>
        `;

        subtotalElement.innerText = "₹0";
        totalElement.innerText = "₹0";

        return;
    }


    // ==========================================
    // Display Cart Products
    // ==========================================

    cart.forEach(product => {

        const productTotal =
            product.price * product.quantity;

        subtotal += productTotal;


        checkoutItems.innerHTML += `

            <div class="checkout-item">

                <img
                    src="${product.image}"
                    alt="${product.name}">


                <div class="checkout-info">

                    <h6>
                        ${product.name}
                    </h6>

                    <p>
                        Quantity : ${product.quantity}
                    </p>

                </div>


                <strong>
                    ₹${productTotal}
                </strong>

            </div>

        `;

    });


    // ==========================================
    // Update Price
    // ==========================================

    subtotalElement.innerText =
        `₹${subtotal}`;

    totalElement.innerText =
        `₹${subtotal}`;

}


// ==========================================
// Place Order
// ==========================================

placeOrderBtn.addEventListener("click", () => {


    // ==========================================
    // Validate Form
    // ==========================================

    if (!checkoutForm.checkValidity()) {

        checkoutForm.reportValidity();

        return;
    }


    // ==========================================
    // Check Cart
    // ==========================================

    if (cart.length === 0) {

        showToast("🛒 Your cart is empty.");

        return;
    }


    // ==========================================
    // Order Successful
    // ==========================================

    showToast("🎉 Order Placed Successfully!");


    // Clear cart
    cart = [];

    saveCart();

    updateCartCounter();


    // ==========================================
    // Redirect
    // ==========================================

    setTimeout(() => {

        window.location.href = "order.html";

    }, 2000);

});


// ==========================================
// Initialize
// ==========================================

displayOrder();