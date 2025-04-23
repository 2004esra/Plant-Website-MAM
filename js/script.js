document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartCount = document.getElementById('cart-count');
    const totalPriceElement = document.getElementById('total-price');
    const cartItemsList = document.getElementById('cart-items');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            cartItems.push({ name, price });
            updateCart();
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            total += item.price;
            cartItemsList.innerHTML += `<li class="list-group-item">${item.name} - $${item.price.toFixed(2)}</li>`;
        });
        cartCount.textContent = cartItems.length;
        totalPriceElement.textContent = total.toFixed(2);
    }
});