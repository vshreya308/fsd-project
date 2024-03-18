let cart = []; // This array will store the items added to the cart

// Function to add a product to the cart
function addToCart(productName, price) {
  let product = {
    name: productName,
    price: price
  };

  cart.push(product);

  // Optional: Show an alert to notify the user
   alert(productName + " added to cart!");


  // For testing purposes, log the cart to the console
  console.log("Cart:", cart);
}

// Function to handle the "Buy Now" action
function buyNow(productName, price) {
  let product = {
    name: productName,
    price: price
  };

  cart.push(product);

  // Optional: Show an alert to notify the user
  alert("Buying " + productName + " now!");

  // For testing purposes, log the cart to the console
//   console.log("Cart:", cart);

  // For example, you can redirect to a checkout page
  // window.location.href = "checkout.html";
}

// Adding event listener to the "Add to Cart" button
document.querySelector(".add-to-cart-btn").addEventListener("click", function() {
  addToCart("Product 1", 19.99); // Calling addToCart function with sample product details
});

// Adding event listener to the "Buy Now" button
document.querySelector(".buy-now-btn").addEventListener("click", function() {
  buyNow("Product 1", 19.99); // Calling buyNow function with sample product details
});
