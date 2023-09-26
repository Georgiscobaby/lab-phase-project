document.addEventListener('DOMContentLoaded', function () {
    const shoppingCart = []; // Array to store cart items
    const discountThreshold = 5; // Define the threshold for the discount
    const discountPercentage = 10; // Define the discount percentage (e.g., 10%)

    // Function to calculate the total price of items in the cart
    function calculateTotalPrice() {
        const totalPriceElement = document.querySelector('.total-price h3');
        let totalPrice = shoppingCart.reduce((total, item) => total + item.price * item.quantity, 0);

        // Apply a discount if the quantity threshold is met
        if (totalQuantityInCart() >= discountThreshold) {
            const discountAmount = (totalPrice * discountPercentage) / 100;
            totalPrice -= discountAmount;
        }

        totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    }

    // Function to get the total quantity of items in the cart
    function totalQuantityInCart() {
        return shoppingCart.reduce((total, item) => total + item.quantity, 0);
    }

    // Function to update the cart display
    function displayCart() {
        const cartContainer = document.getElementById('cart');
        const totalPriceElement = document.querySelector('.total-price h3');

        // Clear the cart display
        cartContainer.innerHTML = '';

        // Display each item in the cart
        shoppingCart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn btn btn-secondary minus">-</button>
                    <input type="text" class="quantity-input form-control" value="${item.quantity}">
                    <button class="quantity-btn btn btn-secondary plus">+</button>
                </div>
                <button class="removeButton btn btn-danger" data-product="${item.name}">Remove</button>
            `;

            // Add a click event listener to the Remove button
            const removeButton = cartItem.querySelector('.removeButton');
            removeButton.addEventListener('click', () => {
                removeFromCart(item.name);
            });

            // Add event listeners for the quantity controls
            const minusBtn = cartItem.querySelector('.minus');
            const plusBtn = cartItem.querySelector('.plus');
            const quantityInput = cartItem.querySelector('.quantity-input');

            minusBtn.addEventListener('click', () => {
                let currentValue = parseInt(quantityInput.value);
                if (currentValue > 1) {
                    quantityInput.value = currentValue - 1;
                    item.quantity = parseInt(quantityInput.value);
                    calculateTotalPrice();
                }
            });

            plusBtn.addEventListener('click', () => {
                let currentValue = parseInt(quantityInput.value);
                quantityInput.value = currentValue + 1;
                item.quantity = parseInt(quantityInput.value);
                calculateTotalPrice();
            });

            cartContainer.appendChild(cartItem);
        });

        // Calculate and display the total price
        calculateTotalPrice();
    }

    // Function to add items to the cart
    function addToCart(productName, productPrice, quantity) {
        // Check if the product is already in the cart
        const existingItem = shoppingCart.find(item => item.name === productName);

        if (existingItem) {
            // If the product is already in the cart, increase its quantity
            existingItem.quantity += quantity;
        } else {
            // If it's not in the cart, add it as a new item
            shoppingCart.push({ name: productName, price: productPrice, quantity });
        }

        // Update the cart display
        displayCart();
    }

    // Function to remove items from the cart
    function removeFromCart(productName) {
        // Find the index of the item to remove
        const indexToRemove = shoppingCart.findIndex(item => item.name === productName);

        if (indexToRemove !== -1) {
            // Remove the item from the cart
            shoppingCart.splice(indexToRemove, 1);
        }

        // Update the cart display
        displayCart();
    }

    // Add event listeners for the "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productDiv = button.closest('.product');
            const productName = productDiv.querySelector('h3').textContent;
            const productPrice = parseFloat(productDiv.querySelector('p').textContent.split('$')[1]);
            const quantity = parseInt(productDiv.querySelector('.quantity-input').value);

            // Add the selected product to the cart
            addToCart(productName, productPrice, quantity);
        });
    });

    // Initialize the cart display
    displayCart();

  // Sample ratings data
  let averageRating = 3.5; // You can calculate this dynamically
  let totalRatings = 10;  // You can calculate this dynamically
  let reviews = [];

  // Function to display ratings
  function displayRatings() {
      const ratingContainer = document.querySelector('.rating');
      ratingContainer.innerHTML = '';

      for (let i = 1; i <= 5; i++) {
          const star = document.createElement('span');
          star.classList.add('star', i <= averageRating ? 'rated' : 'unrated');
          star.innerHTML = '&#9733;'; // Filled star
          ratingContainer.appendChild(star);
      }
  }

  // Function to display reviews
  function displayReviews() {
      const reviewsContainer = document.getElementById('reviews');
      reviewsContainer.innerHTML = '';

      reviews.forEach(review => {
          const reviewElement = document.createElement('div');
          reviewElement.classList.add('review');
          reviewElement.innerHTML = `
              <p><strong>${review.username}:</strong></p>
              <p>${review.text}</p>
          `;
          reviewsContainer.appendChild(reviewElement);
      });
  }

  // Event listener for submitting a review
  const reviewForm = document.getElementById('review-form');
  reviewForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const reviewText = document.getElementById('user-review').value;

      if (username && reviewText) {
          // Add the review to the reviews array
          reviews.push({ username, text: reviewText });

          // Clear the form
          document.getElementById('username').value = '';
          document.getElementById('user-review').value = '';

          // Display updated reviews
          displayReviews();
      }
  });

  // Initial display of ratings and reviews
  displayRatings();
  displayReviews();
});



