let cart = JSON.parse(localStorage.getItem("cart")) || [];

function populateOrder() {
    const body = document.getElementById("order-body");
    body.innerHTML = "";
    cart.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        `;
        body.appendChild(row);
    });
}

function showError(id, message) {
    document.getElementById(id).innerText = message;
}

function clearErrors() {
    showError("name-error", "");
    showError("address-error", "");
    showError("payment-error", "");
}

function validateForm(name, address, payment) {
    clearErrors();
    let isValid = true;

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        showError("name-error", "Only letters are allowed in the name.");
        isValid = false;
    }

    if (address.trim() === "") {
        showError("address-error", "Address cannot be empty.");
        isValid = false;
    }

    if (!/^\d{12,19}$/.test(payment)) {
        showError("payment-error", "Card number must be 12–19 digits.");
        isValid = false;
    }

    return isValid;
}

function completePurchase() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const payment = document.getElementById("payment").value;

    if (validateForm(name, address, payment)) {
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 7); // Set delivery date to 7 days from now
        const deliveryDateString = deliveryDate.toDateString(); // Convert to string for display

        // Clear the cart
        localStorage.removeItem("cart");
        cart = [];
        populateOrder();

        // Clear form inputs
        document.getElementById("name").value = "";
        document.getElementById("address").value = "";
        document.getElementById("payment").value = "";

        // Show the custom popup with delivery date
        const successModal = document.getElementById("success-modal");
        successModal.querySelector(".delivery-date").textContent = `Your order will be delivered by: ${deliveryDateString}`;
        successModal.style.display = "block";
    }
}


function closeModal() {
    document.getElementById("success-modal").style.display = "none";
}

function addToFavorites() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const payment = document.getElementById("payment").value;

    const favorite = {
        cart,
        name,
        address,
        payment
    };

    localStorage.setItem("favoriteOrder", JSON.stringify(favorite));
    alert("Order and form data added to favourites.");
}

function applyFavorites() {
    const favorite = JSON.parse(localStorage.getItem("favoriteOrder"));
    if (favorite) {
        cart = favorite.cart;
        localStorage.setItem("cart", JSON.stringify(cart));
        populateOrder();

        document.getElementById("name").value = favorite.name;
        document.getElementById("address").value = favorite.address;
        document.getElementById("payment").value = favorite.payment;

        alert("Favourites applied.");
    } else {
        alert("No favourites found.");
    }
}

populateOrder();
