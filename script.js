const cartBtn = document.querySelector(".cart-btn");
const cartModal = document.querySelector(".cart-modal");
const bookContainers = document.querySelectorAll(".book-container");
const addToCartBtns = document.querySelectorAll(".add-to-cart");
const cartItemsList = document.querySelector(".cart-items ul");
const cartTotal = document.querySelector(".cart-total");

let cartItems = [];
let totalAmount = 0;

cartBtn.addEventListener("click", () => {
  cartModal.style.display = "block";
});

bookContainers.forEach((container) => {
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const book = e.target.closest(".book");
      const bookTitle = book.querySelector("h3").textContent;
      const bookPrice = parseFloat(
        book.querySelector("p:nth-child(3)").textContent.replace("$", "")
      );

      cartItems.push({ title: bookTitle, price: bookPrice });
      updateCartItems();
    }
  });
});

function updateCartItems() {
  cartItemsList.innerHTML = "";
  totalAmount = 0;

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.title} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);

    totalAmount += item.price;
  });

  cartTotal.textContent = `$${totalAmount.toFixed(2)}`;
  document.querySelector(".cart-item-count").textContent = cartItems.length;
}

document.querySelector(".checkout-btn").addEventListener("click", () => {
  alert("Thank you for your purchase!");
  cartItems = [];
  updateCartItems();
  cartModal.style.display = "none";
});
