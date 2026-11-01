let cart = [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart))
}

cart.push({ name: "T-Shirt", price: 24.99 })
saveCart()

function renderCart() {
    const cartHTML = cart.map(item => `
        <li>${item.name} - $${item.price}</li>
    `).join("");

    document.querySelector(".cart-list").innerHTML = `<ul>${cartHTML}</ul>`;
}

function addToCart(item) {
    cart.push(item)
    renderCart()
}

addToCart({ name: "T-Shirt", price: 24.99 });
console.log(cart)