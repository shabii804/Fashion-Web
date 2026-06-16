/* ===========================
   LuxeHer - wishlist page
   =========================== */

document.addEventListener('DOMContentLoaded', renderWishlist);

function renderWishlist() {
  const wishlist = getWishlist();
  const grid     = document.getElementById('wishlist-grid');
  const empty    = document.getElementById('wishlist-empty');
  if (!grid || !empty) return;

  if (!wishlist.length) {
    grid.classList.add('hidden');
    empty.classList.remove('hidden');
    return;
  }

  grid.classList.remove('hidden');
  empty.classList.add('hidden');

  grid.innerHTML = wishlist.map((item) => {
    const product = resolveProduct(item);
    return `
      <article class="wishlist-row fade-in" data-id="${escapeHTML(product.id)}">
        <a href="product.html?id=${encodeURIComponent(product.id)}" class="wishlist-row-img">
          <img
            src="${escapeHTML(product.img)}"
            data-fallback="${productPlaceholder(product)}"
            alt="${escapeHTML(product.name)}"
            loading="lazy"
            decoding="async"
          />
        </a>
        <div class="wishlist-row-info">
          <span class="product-category">${escapeHTML(categoryLabel(product.category))}</span>
          <a href="product.html?id=${encodeURIComponent(product.id)}" class="wishlist-row-name">
            ${escapeHTML(product.name)}
          </a>
          <div class="wishlist-row-price">${fmt(product.price)}</div>
        </div>
        <div class="wishlist-row-actions">
          <button class="btn-primary wl-add-to-cart" data-id="${escapeHTML(product.id)}" type="button">
            <i class="fas fa-shopping-bag"></i> Add to Cart
          </button>
          <button class="wl-remove" data-id="${escapeHTML(product.id)}" type="button"
            aria-label="Remove ${escapeHTML(product.name)} from wishlist">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </article>
    `;
  }).join('');

  hydrateImages(grid);
  observeFadeIns(grid);

  grid.querySelectorAll('.wl-remove').forEach((btn) => {
    btn.addEventListener('click', () => removeFromWishlist(btn.dataset.id));
  });

  grid.querySelectorAll('.wl-add-to-cart').forEach((btn) => {
    btn.addEventListener('click', () => {
      const product = resolveProduct(btn.dataset.id);
      addToCart(product.id, product.name, product.price, product.img, 1, product.category);
    });
  });
}

function removeFromWishlist(id) {
  const product = resolveProduct(id);
  saveWishlist(getWishlist().filter((item) => item.id !== String(id)));
  updateBadges();
  markWishlisted();
  showToast(`${product.name} removed from wishlist`, 'danger');
  renderWishlist();
}
