/* ===========================
   LuxeHer - cart page
   =========================== */

document.addEventListener('DOMContentLoaded', renderCart);

function cartImageHTML(item) {
  const product = resolveProduct(item);
  return `
    <img src="${escapeHTML(product.img)}" data-fallback="${productPlaceholder(product)}" alt="${escapeHTML(product.name)}" loading="lazy" decoding="async" />
  `;
}

function renderCart() {
  const cart = getCart();
  const layout = document.getElementById('cart-layout');
  const empty = document.getElementById('cart-empty');
  if (!layout || !empty) return;

  if (!cart.length) {
    layout.classList.add('hidden');
    empty.classList.remove('hidden');
    return;
  }

  layout.classList.remove('hidden');
  empty.classList.add('hidden');

  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 100 ? 0 : 12;
  const total = subtotal + shipping;

  layout.innerHTML = `
    <div class="cart-items">
      <div class="cart-items-top">
        <div>
          <span class="cart-eyebrow">Your Selection</span>
          <h2>${itemCount} ${itemCount === 1 ? 'item' : 'items'} in cart</h2>
        </div>
        <button class="clear-cart-btn" id="clearCartBtn" type="button">
          <i class="fas fa-trash-alt"></i>
          Clear Cart
        </button>
      </div>
      <div class="cart-items-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
        <span></span>
      </div>
      ${cart.map((item) => `
        <article class="cart-item" data-id="${escapeHTML(item.id)}">
          <div class="cart-item-info">
            <a href="product.html?id=${encodeURIComponent(item.id)}" class="cart-item-img">
              ${cartImageHTML(item)}
            </a>
            <div>
              <div class="cart-item-category">${escapeHTML(categoryLabel(item.category))}</div>
              <a href="product.html?id=${encodeURIComponent(item.id)}" class="cart-item-name">${escapeHTML(item.name)}</a>
              <div class="cart-item-meta">Size: M | Color: Signature</div>
            </div>
          </div>
          <div class="cart-item-price">$${item.price.toFixed(2)}</div>
          <div class="cart-item-qty" aria-label="Quantity for ${escapeHTML(item.name)}">
            <button class="cart-qty-btn cart-minus" data-id="${escapeHTML(item.id)}" aria-label="Decrease quantity">-</button>
            <div class="cart-qty-val">${item.qty}</div>
            <button class="cart-qty-btn cart-plus" data-id="${escapeHTML(item.id)}" aria-label="Increase quantity">+</button>
          </div>
          <div class="cart-item-total">$${(item.price * item.qty).toFixed(2)}</div>
          <button class="cart-remove-btn" data-id="${escapeHTML(item.id)}" aria-label="Remove ${escapeHTML(item.name)}">
            <i class="fas fa-times"></i>
          </button>
        </article>
      `).join('')}
    </div>

    <aside class="cart-summary">
      <h3>Order Summary</h3>
      <div class="summary-row">
        <span>Subtotal (${itemCount} ${itemCount === 1 ? 'item' : 'items'})</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Shipping</span>
        <span>${shipping === 0 ? '<span style="color:#4caf50">FREE</span>' : '$' + shipping.toFixed(2)}</span>
      </div>
      ${shipping > 0 ? `<div class="shipping-note">Add $${(100 - subtotal).toFixed(2)} more for free shipping.</div>` : '<div class="shipping-note success">You unlocked free shipping.</div>'}
      <div class="coupon-row">
        <input type="text" class="coupon-input" placeholder="Coupon code" id="couponInput" aria-label="Coupon code" />
        <button class="coupon-btn" id="couponBtn" type="button">Apply</button>
      </div>
      <div class="summary-row total">
        <span>Total</span>
        <span>$${total.toFixed(2)}</span>
      </div>
      <button class="btn-checkout" id="checkoutBtn" type="button">
        <i class="fas fa-lock"></i> Secure Checkout
      </button>
      <a href="shop.html" class="cart-continue">Continue Shopping</a>
    </aside>
  `;

  hydrateImages(layout);

  layout.querySelectorAll('.cart-minus').forEach((button) => {
    button.addEventListener('click', () => changeQty(button.dataset.id, -1));
  });
  layout.querySelectorAll('.cart-plus').forEach((button) => {
    button.addEventListener('click', () => changeQty(button.dataset.id, 1));
  });
  layout.querySelectorAll('.cart-remove-btn').forEach((button) => {
    button.addEventListener('click', () => removeItem(button.dataset.id));
  });

  document.getElementById('clearCartBtn')?.addEventListener('click', clearCartWithConfirm);
  document.getElementById('couponBtn')?.addEventListener('click', () => {
    const code = document.getElementById('couponInput')?.value.trim().toUpperCase();
    showToast(code === 'LUXE10' ? 'Coupon applied. 10% off' : 'Invalid coupon code', code === 'LUXE10' ? 'success' : '');
  });
  document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    window.location.href = 'checkout.html';
  });
}

function changeQty(id, delta) {
  const cart = getCart();
  const index = cart.findIndex((item) => item.id === String(id));
  if (index < 0) return;

  cart[index].qty += delta;
  const productName = cart[index].name;

  if (cart[index].qty < 1) {
    cart.splice(index, 1);
    showToast(`${productName} removed from cart`, 'danger');
  } else {
    showToast('Quantity updated', 'success');
  }

  saveCart(cart);
  updateBadges();
  renderCart();
}

function removeItem(id) {
  const item = getCart().find((cartItem) => cartItem.id === String(id));
  const cart = getCart().filter((cartItem) => cartItem.id !== String(id));
  saveCart(cart);
  updateBadges();
  showToast(`${item?.name || 'Item'} removed from cart`, 'danger');
  renderCart();
}

function clearCartWithConfirm() {
  openConfirmModal({
    title: 'Clear your cart?',
    message: 'All selected items will be removed from your shopping cart.',
    onConfirm: () => {
      saveCart([]);
      updateBadges();
      showToast('Cart cleared', 'danger');
      renderCart();
    }
  });
}
