let cart = [];

function updateCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartText = document.querySelector(".cart-text");
  cartText.textContent = `Cart (${totalItems})`;
}

function addToCart(name, price, id) {
  const quantity = parseInt(document.getElementById(`quantity${id}`).value);
  if (quantity <= 0 || isNaN(quantity)) {
    showCartMessage("Please enter a valid quantity.");
    return;
  }

  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id, name, price, quantity });
  }

  updateCart();
  renderCartItems();
  showCartMessage(`${name} has been added to the cart!`, "green");
}

function toggleCartDropdown(event) {
  const dropdown = document.getElementById("cart-dropdown");
  const isDropdownVisible = dropdown.style.display === "block";
  
  // Toggle the dropdown visibility
  dropdown.style.display = isDropdownVisible ? "none" : "block";

  if (!isDropdownVisible) {
    renderCartItems(); // Refresh the cart when opening
  }

  if (event) event.stopPropagation();  // Prevent event propagation to avoid accidental closing
}

function showCartMessage(message, color = "red") {
  const msgBox = document.getElementById("cart-message");
  msgBox.textContent = message;
  msgBox.style.color = color;
}

function goToCheckout(event) {
  if (cart.length === 0) {
    if (event) event.stopPropagation(); // Prevent closing if cart is empty
    showCartMessage("Your cart is empty. Please add items before proceeding to checkout.");
    return;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "checkout.html";
}

function renderCartItems() {
  const list = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("cart-total");
  list.innerHTML = "";  // Clear the previous items

  if (cart.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Your cart is empty";
    list.appendChild(li);
    totalDisplay.textContent = "Total: $0";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.quantity}`;
    list.appendChild(li);
    total += item.price * item.quantity;
  });

  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

document.addEventListener("click", function(event) {
  const dropdown = document.getElementById("cart-dropdown");
  const cartButton = document.querySelector(".cart-text");

  if (!cartButton.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none"; // Close dropdown if click is outside
  }
});
