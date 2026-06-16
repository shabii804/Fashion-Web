/* ===========================
   LuxeHer – checkout.js
   =========================== */

const CO_FREE_SHIPPING = 5000;   // PKR
const CO_SHIPPING_COST = 250;    // PKR flat

document.addEventListener('DOMContentLoaded', () => {
  renderCheckout();

  /* Payment method toggle */
  document.querySelectorAll('.payment-method').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.payment-method').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const cardFields = document.getElementById('cardFields');
      if (cardFields) cardFields.style.display = btn.dataset.method === 'card' ? 'block' : 'none';
    });
  });

  /* Place order */
  document.getElementById('placeOrderBtn')?.addEventListener('click', () => {
    const firstName = document.getElementById('firstName')?.value.trim();
    const email     = document.getElementById('email')?.value.trim();
    const address   = document.getElementById('address')?.value.trim();

    if (!firstName || !email || !address) {
      showToast('Please fill in all required fields', '');
      return;
    }

    const btn = document.getElementById('placeOrderBtn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> PROCESSING...';
    btn.style.pointerEvents = 'none';

    setTimeout(() => {
      localStorage.removeItem('lh_cart');
      updateBadges();
      btn.innerHTML = '<i class="fas fa-check"></i> ORDER PLACED!';
      btn.style.background = '#4caf50';
      showToast('Order placed successfully! 🎉', 'success');
      setTimeout(() => { window.location.href = 'index.html'; }, 2500);
    }, 2000);
  });
});

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

  /* ── Items ── */
  if (itemsEl) {
    itemsEl.innerHTML = cart.map((item) => `
      <div class="checkout-item">
        <div class="checkout-item-img">
          <img src="${escapeHTML(item.img)}" alt="${escapeHTML(item.name)}" loading="lazy" />
        </div>
        <div class="checkout-item-info">
          <div class="checkout-item-name">${escapeHTML(item.name)}</div>
          <div class="checkout-item-meta">Qty: ${item.qty} &nbsp;·&nbsp; Size: M</div>
        </div>
        <div class="checkout-item-price">${fmt(item.price * item.qty)}</div>
      </div>
    `).join('');
  }

  /* ── Totals ── */
  if (totalsEl) {
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const shipping = subtotal >= CO_FREE_SHIPPING ? 0 : CO_SHIPPING_COST;
    const total    = subtotal + shipping;
    const itemQty  = cart.reduce((s, i) => s + i.qty, 0);

    totalsEl.innerHTML = `
      <div class="summary-row">
        <span>Subtotal (${itemQty} ${itemQty === 1 ? 'item' : 'items'})</span>
        <span>${fmt(subtotal)}</span>
      </div>
      <div class="summary-row">
        <span>Shipping</span>
        <span>${shipping === 0
          ? '<span style="color:#4caf50;font-weight:600;">FREE</span>'
          : fmt(shipping)}</span>
      </div>
      ${shipping > 0
        ? `<div class="shipping-note" style="font-size:0.75rem;color:var(--light-text);margin-bottom:10px;">Add ${fmt(CO_FREE_SHIPPING - subtotal)} more for free shipping.</div>`
        : '<div class="shipping-note success" style="font-size:0.75rem;color:#4caf50;margin-bottom:10px;">🎉 You unlocked free shipping!</div>'}
      <div class="summary-row total">
        <span>Total</span>
        <span>${fmt(total)}</span>
      </div>
    `;
  }
}
