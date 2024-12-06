var storeItems = [];
var storeCartItems = [];

function StoreItem(
	id,
	name,
	price,
	qty,
	max,
	category,
	shipping,
	reviews,
	image,
	description
) {
	this.id = id;
	this.name = name;
	this.price = price;
	this.qty = qty;
	this.max = max;
	this.category = category;
	this.shipping = shipping;
	this.reviews = reviews;
	this.image = image;
	this.description = description;
}

function CartItem(id, price, qty, shipping) {
	this.id = id;
	this.price = price;
	this.qty = qty;
	this.shipping = shipping;
}

function ReviewItem(review, rating) {
	this.review = review;
	this.rating = rating;
}

function initialize() {
	var dateElement = document.getElementById("current-time");
	var currentDate = new Date();
	dateElement.textContent = `${currentDate.toString()}`;

	populateStoreItems();

	displayStoreItems();

	displayCartItems();
}

// convertion rate used to display prices in each currency
var conversionRates = {
	cad: 1,
	brl: 5.3,
	tax: 0.13,
};

// Populating the store with items using constructors
function populateStoreItems() {
	storeItems = [
		// action movies
		new StoreItem(
			"PID1",
			"John Wick: Chapter 4",
			25,
			50,
			5,
			"action",
			1.99,
			[
				{
					review: "I love this movie",
					rating: 5,
				},
			],
			"images/john-wick.jpeg",
			"The thrilling continuation of the John Wick saga."
		),
		new StoreItem(
			"PID2",
			"Mad Max: Fury Road",
			22,
			100,
			4,
			"action",
			1.99,
			[
				{
					review: "Boring",
					rating: 2,
				},
			],
			"images/mad-max.jpeg",
			"A high-speed post-apocalyptic chase filled with action."
		),
		new StoreItem(
			"PID3",
			"Die Hard",
			18,
			75,
			5,
			"action",
			1.99,
			[
				{
					review: "One of the best movies i ever seen",
					rating: 4,
				},
			],
			"images/die-hard.jpeg",
			"John McClane fights terrorists in a skyscraper."
		),

		// romance movies
		new StoreItem(
			"PID4",
			"Titanic",
			18,
			60,
			3,
			"romance",
			1.99,
			[
				{
					review: "Lovely movie",
					rating: 5,
				},
			],
			"images/titanic.jpeg",
			"A tragic love story aboard the doomed Titanic ship."
		),
		new StoreItem(
			"PID5",
			"Past Lives",
			15,
			40,
			4,
			"romance",
			1.99,
			[
				{
					review: "Just a normal title",
					rating: 3,
				},
			],
			"images/past-lives.jpeg",
			"A poignant story of missed connections and love."
		),
		new StoreItem(
			"PID6",
			"Pretty Woman",
			17,
			85,
			3,
			"romance",
			1.99,
			[
				{
					review: "Make me Cry a lot loved it!",
					rating: 5,
				},
			],
			"images/pretty-woman.jpeg",
			"A wealthy businessman falls in love with a charming prostitute."
		),

		// comedy movies
		new StoreItem(
			"PID7",
			"Barbie",
			20,
			120,
			5,
			"comedy",
			1.99,
			[
				{
					review: "LMAO excellent!",
					rating: 5,
				},
			],
			"images/barbie.jpeg",
			"A hilarious adventure with Barbie as she explores the real world."
		),
		new StoreItem(
			"PID8",
			"The Hangover",
			18,
			130,
			4,
			"comedy",
			1.99,
			[
				{
					review: "This isn`t funny",
					rating: 1,
				},
			],
			"images/hangover.jpeg",
			"Three friends wake up in a crazy situation after a wild bachelor party."
		),
		new StoreItem(
			"PID9",
			"Dumb and Dumber",
			12,
			140,
			4,
			"comedy",
			1.99,
			[
				{
					review: "This is insane and funny",
					rating: 4,
				},
			],
			"images/dumbanddumber.jpeg",
			"A comedy about two dim-witted friends on a road trip."
		),

		// horror movies
		new StoreItem(
			"PID10",
			"The Shining",
			25,
			40,
			2,
			"horror",
			1.99,
			[
				{
					review: "This is a classic",
					rating: 5,
				},
			],
			"images/shining.jpeg",
			"A writer and his family experience supernatural terror in a hotel."
		),
		new StoreItem(
			"PID11",
			"Scream VI",
			22,
			50,
			3,
			"horror",
			1.99,
			[
				{
					review: "Verry good movie",
					rating: 5,
				},
			],
			"images/scream6.jpeg",
			"The newest chapter in the chilling Scream franchise."
		),
		new StoreItem(
			"PID12",
			"A Nightmare on Elm Street",
			20,
			65,
			3,
			"horror",
			1.99,
			[
				{
					review: "Boring",
					rating: 3,
				},
			],
			"images/nightmareonelmstreet.jpeg",
			"The terrifying Freddy Krueger haunts teens in their dreams."
		),

		//  Sci-Fi movies
		new StoreItem(
			"PID13",
			"Avatar: The Way of Water",
			28,
			140,
			4,
			"sci-fi",
			1.99,
			[
				{
					review: "Crazy movie but i like it",
					rating: 4,
				},
			],
			"images/avatar2.jpeg",
			"The highly anticipated sequel to James Cameron's Avatar."
		),
		new StoreItem(
			"PID14",
			"Blade Runner",
			28,
			60,
			3,
			"sci-fi",
			1.99,
			[
				{
					review: "Amazing Movie",
					rating: 5,
				},
			],
			"images/bladerunner.jpeg",
			"A dystopian future where humans and replicants coexist."
		),
		new StoreItem(
			"PID15",
			"Dune: Part Two",
			30,
			50,
			3,
			"sci-fi",
			1.99,
			[
				{
					review: "Fantastic movie",
					rating: 5,
				},
			],
			"images/dune2.jpeg",
			"The second part of Denis Villeneuve's epic adaptation of Dune."
		),
	];
}

function displayStoreItems() {
	// getting elements from html
	var productContainer = document.getElementById("card-container");
	var currencySelect = document.getElementById("currencySelect");
	var currencyIcon = document.getElementById("currency-icon");
	var selectedCurrency = currencySelect.value;
	var filterSelected = document.getElementById("filterSelect").value;

	// filtering items according to the filter selected on the screen
	var filtredItems = filterSelected !== "all"	? storeItems.filter((item) => item.category === filterSelected) : storeItems;
	// changing flag icon according to the currency selected on the screen
	currencyIcon.src = selectedCurrency === "cad" ? "icons/canada.png" : "icons/brazil.png";

	// cleaning screen before adding movies each for each call
	productContainer.innerHTML = "";

	// loop to insert and display each card on the screen
	for (var i = 0; i < filtredItems.length; i++) {
		var convertedPrice = (filtredItems[i].price * conversionRates[selectedCurrency]).toFixed(2);
		var card = document.createElement("div");
		card.classList.add("product-card");

		// creating cards into HTML with the information of each movie and generating id for each button to add, remove, leave reviews and show reviews
		card.innerHTML = `
         <img src="${filtredItems[i].image}" alt="${filtredItems[i].name}">
         <h3>${filtredItems[i].name}</h3>
         <p class="property">ID: ${filtredItems[i].id}</p>
         <p class="property">Quantity on Hand: ${filtredItems[i].qty}</p>
         <p class="property">Max per Customer: ${filtredItems[i].max}</p>
         <p class="price">${
				selectedCurrency === "cad" ? "$" : "R$"
			} ${convertedPrice}</p>
         <div class="cart-container">
            <button class="icon-button remove-to-cart" id="minus-button-${
				filtredItems[i].id
			}" disabled=true>-</button>
            <input type="text" class="quantity" id="quantity-${
				filtredItems[i].id
			}" value="0" readonly />
            <button class="icon-button add-to-cart" id="plus-button-${
				filtredItems[i].id
			}">+</button>
         </div>

         <div class="review-section">
            <button class="reviews " id="review-${
				filtredItems[i].id
			}">Details</button>          
            <button class="leave-reviews" id="leaveReview-${
				filtredItems[i].id
			}">Leave Review</button>
         </div>
         `;

		productContainer.appendChild(card);

		// adding event listeners to each button on the screen to add, remove, leave reviews and show reviews.
		card.querySelector(".add-to-cart").addEventListener(
			"click",
			(function (i) {
				return function () {
					addProductToCart(filtredItems[i]);
					updateQuantityDisplay(filtredItems[i].id);
				};
			})(i)
		);

		card.querySelector(".remove-to-cart").addEventListener(
			"click",
			(function (i) {
				return function () {
					removeProductToCart(filtredItems[i]);
					updateQuantityDisplay(filtredItems[i].id);
				};
			})(i)
		);

		card.querySelector(".leave-reviews").addEventListener(
			"click",
			(function (i) {
				return function () {
					leaveReview(filtredItems[i].id);
				};
			})(i)
		);

		card.querySelector(".reviews").addEventListener(
			"click",
			(function (i) {
				return function () {
					showReviews(filtredItems[i].id);
				};
			})(i)
		);
	}
}

function addProductToCart(productItem) {
   // boolean to validate if should add to cart or not
	var shouldAddToCart = false;

   // iterating array of cart items to check if the item already exists in the cart
	for (var i = 0; i < storeCartItems.length; i++) {
		var productToAdd = storeCartItems[i];

		// if the item already exists in the cart, I check if the quantity is less than the max quantity allowed per customer
      if (productToAdd.id === productItem.id) {      
			if (productToAdd.qty < productItem.max) {
            // if the quantity is less than the max quantity allowed per customer, I add 1 to the quantity of the item
				productToAdd.qty += 1;
				shouldAddToCart = true;
			} else {
            // if the quantity is equal to the max quantity allowed per customer, I show an alert message and set the boolean to true
				alert("Max limit per customer reached!");
				shouldAddToCart = true;
			}
		}
	}
   // if the item does not exist in the cart, I add the item to the cart
	if (!shouldAddToCart) {
		storeCartItems.push(
			new CartItem(
				productItem.id,
				productItem.price,
				1,
				productItem.shipping
			)
		);
	}
   // update the quantity display on the screen
	displayCartItems();
}

function removeProductToCart(productItem) {	

	for (var i = 0; i < storeCartItems.length; i++) {
		var productToRemove = storeCartItems[i];
      // if the item exists in the cart, I remove 1 from the quantity of the item
		if (productToRemove.id === productItem.id) {
			if (productToRemove.qty > 0) {
				productToRemove.qty -= 1;			
			}
		}
	}
   // update the quantity display on the screen
	displayCartItems();
}

// suport funtion to update the quantity display on the screen into each card
function updateQuantityDisplay(productId) {
   // getting elements from html
	var quantityInput = document.getElementById(`quantity-${productId}`);
	var minusButton = document.getElementById(`minus-button-${productId}`);
	var cartItem = storeCartItems.find((item) => item.id === productId);
	var tr = document.getElementById(`tr-${productId}`);

   // if the item exists in the cart, I update the quantity display on the screen
	if (cartItem) {
		quantityInput.value = cartItem.qty;

		if (cartItem.qty === 0) {
			minusButton.disabled = true;
			if (tr) {
				tr.remove();
			}
		} else {
			minusButton.disabled = false;
		}
	}
}

function displayCartItems() {
   // getting elements from html
	var currencySelect = document.getElementById("currencySelect");
	var selectedCurrency = currencySelect.value;
	var selectedCurrencyValue = conversionRates[selectedCurrency];

	var cardSectionDiv = document.getElementById("cart");
	var cartTableDiv = document.getElementById("cart-table");
	cartTableDiv.classList.remove("hidden");

	var tableBody = document.getElementById("cart-body");

   // variables to calculate the total of the cart
	var itemsSubtotal = 0;
	var stimatedShipping = 0;
	var stimatedSubTotal = 0;
	var stimatedTax = 0;
	var orderTotal = 0;

   // removing the sumary div from the screen
	var existingSumaryDiv = document.getElementById("sumary");
	if (existingSumaryDiv) {
		existingSumaryDiv.remove();
	}

   // creating the sumary div to display the total of the cart
	var sumaryDiv = document.createElement("div");
	sumaryDiv.id = "sumary";
	sumaryDiv.classList.add("sumary");
	tableBody.classList.add("cartTable");

	tableBody.innerHTML = "";

	if (storeCartItems.length) {
		for (let i = 1; i <= storeCartItems.length; i++) {
			var storeCart = storeCartItems[i - 1];
			itemsSubtotal += (storeCart.price * selectedCurrencyValue).toFixed(2) * storeCart.qty;
			stimatedShipping += (storeCart.shipping * selectedCurrencyValue).toFixed(2) * storeCart.qty;
         // creating the table with the items in the cart only if item is greater than 0
			if (storeCart.qty > 0) {
				tableBody.innerHTML += `
            <tr id="tr-${storeCart.id}">
               <td> ${storeCart.id} </td>
               <td> ${storeCart.qty} </td>
               <td> ${(storeCart.price * selectedCurrencyValue).toFixed(2)}</td>
               <td> ${
					(storeCart.price * selectedCurrencyValue).toFixed(2) *
					storeCart.qty
				} </td>
            </tr>
            `;
			}
		}
	} else {
		cartTableDiv.classList.add("hidden");
		sumaryDiv.innerHTML = "<p> No items In Cart! Add Items to Cart </p> <br> ";
	}

   // calculating the total of the cart
	stimatedSubTotal = itemsSubtotal + stimatedShipping;
	stimatedTax = stimatedSubTotal * conversionRates.tax;
	orderTotal = stimatedSubTotal + stimatedTax;

   // displaying the total of the cart on the screen
	sumaryDiv.innerHTML += ` 
      <hr>   
      <p class="property">Items Subtotal: $${itemsSubtotal.toFixed(2)}</p>
      <p class="property">Estimated Shipping: $${stimatedShipping.toFixed(
			2
		)} </p>
      <br>
      <p class="property">Subtotal: $${stimatedSubTotal.toFixed(2)} </p>
      <p class="property">Estimated Tax: $${stimatedTax.toFixed(2)}</p>
      <p class="property">Order Total: $${orderTotal.toFixed(2)}</p> `;

	cardSectionDiv.appendChild(sumaryDiv);
}

function leaveReview(productId) {
   // getting the review and rating from the user
	var review = prompt("Please enter your review");
	var rating = parseInt(prompt("Please enter your rating \nNote: if you don't enter a valid number between 1 and 5, the rating will be set to 4"));

	if (review || rating) {
		// here I createad a business rule, case the rating is not a number or invalid number I seting the rating to 4 to avoid errors.
		if (!rating || rating === NaN || rating < 0 || rating > 5) {
			rating = 4;
		}
		var reviewItem = new ReviewItem(review, rating);
		var product = storeItems.find((item) => item.id === productId);
		product.reviews.push(reviewItem);

		alert(`Thank you for your review of the ${product.name}`);
	} else {
		alert("Please enter a review or a rating!");
	}
}

function showReviews(productId) {
   // getting the product from the storeItems array
	var product = storeItems.find((item) => item.id === productId);
	var reviews = product.reviews;

   // formating the reviews to show on the screen
	var reviewsFormated = [];

   // adding the header of reviews to the array
	reviewsFormated.push(`
         Item details: ${product.id}
         Name: ${product.name}
         Price: ${product.price}
         Quantity on hand: ${product.qty}
         Maximum per customer: ${product.max}
         Category: ${product.category}
         Shipping: ${product.shipping}
         Description: ${product.description}
         `);

   // adding the reviews to the array
	for (var i = 0; i < reviews.length; i++) {
		var review = reviews[i];
		reviewsFormated.push(`
         Reviews:
         Review ${i + 1}: ${review.review} 
         Rating: ${review.rating}
         `);
	}

   // adding the average rating to the array
	reviewsFormated.push(
		`average rating: ${
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
			product.reviews.length
		}`
	);

	confirm(reviewsFormated.join("\n"));
}

// initializing the program
initialize();