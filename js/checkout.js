/* ===========================
   LuxeHer – checkout.js (Pakistan)
   =========================== */

const CO_FREE_SHIPPING = 5000;
const CO_SHIPPING_COST = 250;

document.addEventListener('DOMContentLoaded', () => {
  renderCheckout();

  /* Payment method toggle */
  document.querySelectorAll('.payment-method').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.payment-method').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const method = btn.dataset.method;
      const codInfo       = document.getElementById('codInfo');
      const epInfo        = document.getElementById('easypaisaInfo');
      if (codInfo)  codInfo.style.display       = method === 'cod'       ? 'flex' : 'none';
      if (epInfo)   epInfo.style.display         = method === 'easypaisa' ? 'flex' : 'none';
    });
  });

  /* Set COD as default active */
  document.getElementById('pm-cod')?.classList.add('active');

  /* Place Order */
  document.getElementById('placeOrderBtn')?.addEventListener('click', placeOrder);
});

function placeOrder() {
  const firstName = document.getElementById('firstName')?.value.trim();
  const lastName  = document.getElementById('lastName')?.value.trim();
  const email     = document.getElementById('email')?.value.trim();
  const phone     = document.getElementById('phone')?.value.trim();
  const address   = document.getElementById('address')?.value.trim();
  const city      = document.getElementById('city')?.value;
  const province  = document.getElementById('province')?.value;
  const method    = document.querySelector('.payment-method.active')?.dataset.method || 'cod';

  if (!firstName || !email || !phone || !address || !city || !province) {
    showToast('Please fill in all required fields', '');
    /* Highlight empty fields */
    ['firstName','email','phone','address','city','province'].forEach((id) => {
      const el = document.getElementById(id);
      if (el && !el.value.trim()) el.style.borderColor = 'var(--rose-dark)';
    });
    return;
  }

  if (method === 'easypaisa') {
    const txn = document.getElementById('transactionId')?.value.trim();
    if (!txn) { showToast('Please enter your Easypaisa Transaction ID', ''); return; }
  }

  const cart     = getCart();
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= CO_FREE_SHIPPING ? 0 : CO_SHIPPING_COST;
  const total    = subtotal + shipping;

  /* Build order object */
  const orderId = 'LH-' + Date.now().toString().slice(-8);
  const order = {
    id:        orderId,
    date:      new Date().toISOString(),
    customer:  { firstName, lastName, email, phone },
    address:   { address, city, province, country: 'Pakistan' },
    items:     cart,
    subtotal,
    shipping,
    total,
    payment:   method === 'cod' ? 'Cash on Delivery' : 'Easypaisa',
    status:    'pending',   /* pending → confirmed → shipped → delivered */
    statusHistory: [
      { status: 'pending', label: 'Order Placed', time: new Date().toISOString(), done: true }
    ]
  };

  /* Save to localStorage */
  try {
    const orders = JSON.parse(localStorage.getItem('lh_orders') || '[]');
    orders.unshift(order);
    localStorage.setItem('lh_orders', JSON.stringify(orders));
  } catch(e) {}

  /* UI feedback */
  const btn = document.getElementById('placeOrderBtn');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> PROCESSING...';
  btn.style.pointerEvents = 'none';

  setTimeout(() => {
    localStorage.removeItem('lh_cart');
    updateBadges();
    btn.innerHTML = '<i class="fas fa-check"></i> ORDER PLACED!';
    btn.style.background = '#4caf50';
    showToast('Order placed! 🎉 Order ID: ' + orderId, 'success');
    setTimeout(() => { window.location.href = 'track-order.html'; }, 2200);
  }, 1800);
}

function renderCheckout() {
  const cart     = getCart();
  const layout   = document.getElementById('checkout-layout');
  const empty    = document.getElementById('checkout-empty');
  const itemsEl  = document.getElementById('checkout-items');
  const totalsEl = document.getElementById('checkout-totals');

  if (!cart.length) {
    layout?.classList.add('hidden');
    empty?.classList.remove('hidden');
    return;
  }
  layout?.classList.remove('hidden');
  empty?.classList.add('hidden');

  /* Items */
  if (itemsEl) {
    itemsEl.innerHTML = cart.map((item) => `
      <div class="checkout-item">
        <div class="checkout-item-img">
          <img src="${escapeHTML(item.img)}" alt="${escapeHTML(item.name)}" loading="lazy" />
        </div>
        <div class="checkout-item-info">
          <div class="checkout-item-name">${escapeHTML(item.name)}</div>
          <div class="checkout-item-meta">Qty: ${item.qty}</div>
        </div>
        <div class="checkout-item-price">${fmt(item.price * item.qty)}</div>
      </div>`).join('');
  }

  /* Totals */
  if (totalsEl) {
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const shipping = subtotal >= CO_FREE_SHIPPING ? 0 : CO_SHIPPING_COST;
    const total    = subtotal + shipping;
    const itemQty  = cart.reduce((s, i) => s + i.qty, 0);

    totalsEl.innerHTML = `
      <div class="summary-row">
        <span>Subtotal (${itemQty} item${itemQty !== 1 ? 's' : ''})</span>
        <span>${fmt(subtotal)}</span>
      </div>
      <div class="summary-row">
        <span>Delivery</span>
        <span>${shipping === 0 ? '<span style="color:#4caf50;font-weight:600;">FREE</span>' : fmt(shipping)}</span>
      </div>
      ${shipping > 0 ? `<div style="font-size:0.72rem;color:var(--light-text);margin-bottom:8px;">Add ${fmt(CO_FREE_SHIPPING - subtotal)} more for free delivery.</div>` : ''}
      <div class="summary-row total">
        <span>Total</span>
        <span>${fmt(total)}</span>
      </div>`;
  }
}
