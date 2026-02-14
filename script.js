const products = [
    { id: 1, name: "Laptop", price: 800, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Phone", price: 500, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Headphones", price: 100, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Smart Watch", price: 150, image: "https://via.placeholder.com/200" }
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("total");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price;
        cartItems.innerHTML += `
            <li>
                ${item.name} - $${item.price}
                <button onclick="removeFromCart(${index})">X</button>
            </li>
        `;
    });

    total.textContent = totalPrice;
    cartCount.textContent = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("active");
}

function checkout() {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
}

displayProducts();

