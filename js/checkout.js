/* ===========================
   LuxeHer – checkout.js
   Renders checkout page from localStorage cart
   =========================== */

document.addEventListener('DOMContentLoaded', () => {
  renderCheckout();

  // Payment method toggle
  document.querySelectorAll('.payment-method').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.payment-method').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cardFields = document.getElementById('cardFields');
      if (cardFields) {
        cardFields.style.display = btn.dataset.method === 'card' ? 'block' : 'none';
      }
    });
  });

  // Place order
  document.getElementById('placeOrderBtn')?.addEventListener('click', () => {
    const firstName = document.getElementById('firstName')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const address = document.getElementById('address')?.value.trim();

    if (!firstName || !email || !address) {
      showToast('Please fill in all required fields', '');
      return;
    }

    // Simulate order placement
    const btn = document.getElementById('placeOrderBtn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> PROCESSING...';
    btn.style.pointerEvents = 'none';

    setTimeout(() => {
      localStorage.removeItem('lh_cart');
      updateBadges();
      btn.innerHTML = '<i class="fas fa-check"></i> ORDER PLACED!';
      btn.style.background = '#4caf50';
      showToast('Order placed successfully! 🎉', 'success');

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2500);
    }, 2000);
  });
});

function renderCheckout() {
  const cart = getCart();
  const layout = document.getElementById('checkout-layout');
  const empty = document.getElementById('checkout-empty');
  const itemsEl = document.getElementById('checkout-items');
  const totalsEl = document.getElementById('checkout-totals');

  if (!cart.length) {
    layout.classList.add('hidden');
    empty.classList.remove('hidden');
    return;
  }

  layout.classList.remove('hidden');
  empty.classList.add('hidden');

  // Render items
  itemsEl.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <div class="checkout-item-img">
        <img src="${item.img}" alt="${item.name}" />
      </div>
      <div class="checkout-item-info">
        <div class="checkout-item-name">${item.name}</div>
        <div class="checkout-item-meta">Qty: ${item.qty} · Size: M</div>
      </div>
      <div class="checkout-item-price">$${(item.price * item.qty).toFixed(2)}</div>
    </div>
  `).join('');

  // Render totals
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 100 ? 0 : 12;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  totalsEl.innerHTML = `
    <div class="summary-row">
      <span>Subtotal (${cart.reduce((s, i) => s + i.qty, 0)} items)</span>
      <span>$${subtotal.toFixed(2)}</span>
    </div>
    <div class="summary-row">
      <span>Shipping</span>
      <span>${shipping === 0 ? '<span style="color:#4caf50">FREE</span>' : '$' + shipping.toFixed(2)}</span>
    </div>
    <div class="summary-row">
      <span>Tax (8%)</span>
      <span>$${tax.toFixed(2)}</span>
    </div>
    <div class="summary-row total">
      <span>Total</span>
      <span>$${total.toFixed(2)}</span>
    </div>
  `;
}
