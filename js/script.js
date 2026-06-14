/* ===========================
   LuxeHer - shared storefront logic
   =========================== */

const LUXE_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'dresses', label: 'Dresses' },
  { id: 'tops', label: 'Tops' },
  { id: 'jeans', label: 'Jeans' },
  { id: 'handbags', label: 'Handbags' },
  { id: 'shoes', label: 'Shoes' },
  { id: 'jackets', label: 'Jackets' }
];

const LUXE_PRODUCTS = [
  {
    id: '1',
    name: 'Floral Maxi Dress',
    category: 'dresses',
    price: 79,
    oldPrice: null,
    rating: 5,
    reviews: 72,
    popular: 98,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85',
    description: 'A fluid floral maxi dress with a cinched waist, soft lining, and a graceful drape for garden dinners and summer events.'
  },
  {
    id: '2',
    name: 'Satin Slip Dress',
    category: 'dresses',
    price: 64,
    oldPrice: 80,
    rating: 4,
    reviews: 38,
    popular: 86,
    badge: 'Sale',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85',
    description: 'Minimal satin with a soft sheen, slim straps, and an easy bias cut that moves beautifully.'
  },
  {
    id: '3',
    name: 'Boho Wrap Dress',
    category: 'dresses',
    price: 72,
    oldPrice: null,
    rating: 5,
    reviews: 42,
    popular: 91,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=85',
    description: 'A romantic wrap silhouette with flutter sleeves and an adjustable waist tie.'
  },
  {
    id: '4',
    name: 'Silk Camisole Top',
    category: 'tops',
    price: 46,
    oldPrice: null,
    rating: 5,
    reviews: 51,
    popular: 79,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=85',
    description: 'A polished layering camisole cut from satin-touch fabric with a refined neckline.'
  },
  {
    id: '5',
    name: 'Ruffle Chiffon Blouse',
    category: 'tops',
    price: 52,
    oldPrice: null,
    rating: 4,
    reviews: 29,
    popular: 73,
    badge: '',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85',
    description: 'Lightweight chiffon, soft ruffle details, and a relaxed shape for elevated daywear.'
  },
  {
    id: '6',
    name: 'Ribbed Knit Tank',
    category: 'tops',
    price: 39,
    oldPrice: null,
    rating: 4,
    reviews: 24,
    popular: 64,
    badge: '',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85',
    description: 'A sculpting ribbed tank with a clean square neckline and smooth stretch.'
  },
  {
    id: '7',
    name: 'High Rise Straight Jeans',
    category: 'jeans',
    price: 68,
    oldPrice: null,
    rating: 5,
    reviews: 63,
    popular: 94,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85',
    description: 'Premium straight-leg denim with a high waist, soft hand feel, and timeless vintage wash.'
  },
  {
    id: '8',
    name: 'Wide Leg Denim Jeans',
    category: 'jeans',
    price: 74,
    oldPrice: null,
    rating: 5,
    reviews: 47,
    popular: 88,
    badge: '',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85',
    description: 'Long, fluid wide-leg jeans designed to elongate the silhouette.'
  },
  {
    id: '9',
    name: 'Soft Blue Denim Trousers',
    category: 'jeans',
    price: 59,
    oldPrice: 76,
    rating: 4,
    reviews: 26,
    popular: 77,
    badge: 'Sale',
    image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&w=900&q=85',
    description: 'A relaxed denim trouser with clean tailoring and an easy weekend feel.'
  },
  {
    id: '10',
    name: 'Sculpted Top-Handle Bag',
    category: 'handbags',
    price: 89,
    oldPrice: null,
    rating: 5,
    reviews: 34,
    popular: 93,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
    description: 'A structured top-handle bag with smooth hardware and a roomy, organized interior.'
  },
  {
    id: '11',
    name: 'Leather Tote Bag',
    category: 'handbags',
    price: 85,
    oldPrice: null,
    rating: 4,
    reviews: 31,
    popular: 82,
    badge: '',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',
    description: 'A supple everyday tote with elegant proportions and a polished finish.'
  },
  {
    id: '12',
    name: 'Mini Crossbody Bag',
    category: 'handbags',
    price: 55,
    oldPrice: null,
    rating: 5,
    reviews: 33,
    popular: 81,
    badge: '',
    image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?auto=format&fit=crop&w=900&q=85',
    description: 'Compact, modern, and hands-free with enough room for daily essentials.'
  },
  {
    id: '13',
    name: 'Strappy Leather Heels',
    category: 'shoes',
    price: 74,
    oldPrice: null,
    rating: 5,
    reviews: 44,
    popular: 89,
    badge: '',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85',
    description: 'Elegant strappy heels with a balanced heel height and soft cushioned insole.'
  },
  {
    id: '14',
    name: 'Pointed Slingback Pumps',
    category: 'shoes',
    price: 82,
    oldPrice: null,
    rating: 4,
    reviews: 27,
    popular: 70,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=900&q=85',
    description: 'A refined pointed slingback for office days, dinners, and elevated everyday styling.'
  },
  {
    id: '15',
    name: 'Polished Ankle Boots',
    category: 'shoes',
    price: 78,
    oldPrice: 95,
    rating: 5,
    reviews: 36,
    popular: 78,
    badge: 'Sale',
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=85',
    description: 'A sleek ankle boot with a softly squared toe and wearable block heel.'
  },
  {
    id: '16',
    name: 'Cropped Boucle Jacket',
    category: 'jackets',
    price: 118,
    oldPrice: null,
    rating: 5,
    reviews: 21,
    popular: 84,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85',
    description: 'A feminine cropped jacket with textured boucle fabric and refined trim.'
  },
  {
    id: '17',
    name: 'Modern Denim Jacket',
    category: 'jackets',
    price: 92,
    oldPrice: null,
    rating: 4,
    reviews: 32,
    popular: 76,
    badge: '',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85',
    description: 'A clean-cut denim jacket with a softly structured fit and premium wash.'
  },
  {
    id: '18',
    name: 'Tailored Longline Blazer',
    category: 'jackets',
    price: 129,
    oldPrice: 156,
    rating: 5,
    reviews: 39,
    popular: 90,
    badge: 'Sale',
    image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=85',
    description: 'A longline blazer with sharp tailoring, feminine shaping, and day-to-night polish.'
  },
  {
    id: '19',
    name: 'Rose Garden Midi Dress',
    category: 'dresses',
    price: 88,
    oldPrice: null,
    rating: 5,
    reviews: 58,
    popular: 92,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85',
    description: 'A softly structured midi dress with a romantic print and polished waist detail.'
  },
  {
    id: '20',
    name: 'Pleated Evening Dress',
    category: 'dresses',
    price: 112,
    oldPrice: 140,
    rating: 5,
    reviews: 37,
    popular: 87,
    badge: 'Sale',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85',
    description: 'Elegant pleats, a fluid skirt, and an occasion-ready silhouette.'
  },
  {
    id: '21',
    name: 'Satin Bow Blouse',
    category: 'tops',
    price: 58,
    oldPrice: null,
    rating: 4,
    reviews: 41,
    popular: 75,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85',
    description: 'A luminous satin blouse finished with a soft bow neckline.'
  },
  {
    id: '22',
    name: 'Soft Tailored Shirt',
    category: 'tops',
    price: 49,
    oldPrice: null,
    rating: 4,
    reviews: 28,
    popular: 66,
    badge: '',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85',
    description: 'A crisp shirt with a relaxed feminine fit and effortless polish.'
  },
  {
    id: '23',
    name: 'Ivory Straight Jeans',
    category: 'jeans',
    price: 79,
    oldPrice: null,
    rating: 5,
    reviews: 46,
    popular: 83,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=85',
    description: 'Clean ivory denim with a straight-leg cut and premium structured feel.'
  },
  {
    id: '24',
    name: 'Vintage Slim Jeans',
    category: 'jeans',
    price: 69,
    oldPrice: 88,
    rating: 4,
    reviews: 52,
    popular: 80,
    badge: 'Sale',
    image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=900&q=85',
    description: 'Slim denim with a vintage blue wash and flattering high-rise fit.'
  },
  {
    id: '25',
    name: 'Quilted Shoulder Bag',
    category: 'handbags',
    price: 96,
    oldPrice: null,
    rating: 5,
    reviews: 44,
    popular: 89,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
    description: 'A quilted shoulder bag with chain detail and a compact luxe finish.'
  },
  {
    id: '26',
    name: 'Pebbled Bucket Bag',
    category: 'handbags',
    price: 78,
    oldPrice: null,
    rating: 4,
    reviews: 23,
    popular: 69,
    badge: '',
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85',
    description: 'A soft pebbled bucket bag with a practical drawstring shape.'
  },
  {
    id: '27',
    name: 'Minimal Court Heels',
    category: 'shoes',
    price: 86,
    oldPrice: null,
    rating: 5,
    reviews: 35,
    popular: 74,
    badge: '',
    image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=900&q=85',
    description: 'A refined court heel with clean lines and a softly cushioned insole.'
  },
  {
    id: '28',
    name: 'Cream Loafer Mules',
    category: 'shoes',
    price: 72,
    oldPrice: null,
    rating: 4,
    reviews: 39,
    popular: 71,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=85',
    description: 'Cream loafer mules designed for polished, comfortable everyday wear.'
  },
  {
    id: '29',
    name: 'Luxe Faux Leather Jacket',
    category: 'jackets',
    price: 132,
    oldPrice: null,
    rating: 5,
    reviews: 48,
    popular: 91,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1520975682031-a83f00926154?auto=format&fit=crop&w=900&q=85',
    description: 'A buttery faux leather jacket with clean hardware and modern shaping.'
  },
  {
    id: '30',
    name: 'Soft Trench Coat',
    category: 'jackets',
    price: 148,
    oldPrice: 178,
    rating: 5,
    reviews: 57,
    popular: 95,
    badge: 'Sale',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85',
    description: 'A fluid trench coat with a tie waist, clean lapel, and seasonless finish.'
  }
];

window.LUXE_CATEGORIES = LUXE_CATEGORIES;
window.LUXE_PRODUCTS = LUXE_PRODUCTS;

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[char]));
}

function categoryLabel(category) {
  return (LUXE_CATEGORIES.find((c) => c.id === category)?.label || category || 'Fashion');
}

function productPlaceholder(product) {
  const title = escapeHTML(product?.name || 'LuxeHer');
  const category = escapeHTML(categoryLabel(product?.category));
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#FAF6F2"/>
          <stop offset="0.55" stop-color="#F0DDD6"/>
          <stop offset="1" stop-color="#EDD5D9"/>
        </linearGradient>
      </defs>
      <rect width="900" height="1200" fill="url(#bg)"/>
      <circle cx="450" cy="420" r="190" fill="#fff" opacity="0.42"/>
      <path d="M330 480c34-110 206-110 240 0l55 330H275l55-330z" fill="#fff" opacity="0.72"/>
      <text x="450" y="930" text-anchor="middle" font-family="Georgia, serif" font-size="58" fill="#2d2d2d">${title}</text>
      <text x="450" y="1005" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" letter-spacing="8" fill="#C9848F">${category.toUpperCase()}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getProductById(id) {
  return LUXE_PRODUCTS.find((product) => product.id === String(id));
}

function resolveProduct(input) {
  const base = typeof input === 'object' ? input : { id: input };
  const product = getProductById(base.id);
  const merged = { ...(product || {}), ...base };
  merged.id = String(merged.id || '');
  merged.name = merged.name || product?.name || 'LuxeHer Piece';
  merged.category = merged.category || product?.category || 'fashion';
  merged.price = parseFloat(merged.price ?? product?.price ?? 0);
  merged.img = merged.img || merged.image || product?.image || productPlaceholder(merged);
  merged.image = merged.image || merged.img;
  return merged;
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('lh_cart') || '[]').map((item) => ({
      ...resolveProduct(item),
      qty: Math.max(1, parseInt(item.qty || 1, 10))
    }));
  } catch {
    return [];
  }
}

function resetCartOnRefresh() {
  if (typeof performance === 'undefined') return;
  const navEntry = performance.getEntriesByType?.('navigation')?.[0];
  const isReload = navEntry?.type === 'reload' || performance.navigation?.type === 1;
  if (isReload) localStorage.removeItem('lh_cart');
}

function saveCart(cart) {
  localStorage.setItem('lh_cart', JSON.stringify(cart));
}

function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem('lh_wishlist') || '[]').map((item) => resolveProduct(item));
  } catch {
    return [];
  }
}

function saveWishlist(wishlist) {
  localStorage.setItem('lh_wishlist', JSON.stringify(wishlist));
}

function showToast(message, type) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="toast-icon"><i class="fas ${type === 'danger' ? 'fa-trash-alt' : type === 'success' ? 'fa-check' : 'fa-heart'}"></i></span>
    <span>${escapeHTML(message)}</span>
  `;
  toast.className = `toast${type ? ` ${type}` : ''}`;
  requestAnimationFrame(() => toast.classList.add('show'));
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

function updateBadges() {
  const cartTotal = getCart().reduce((sum, item) => sum + item.qty, 0);
  const wishlistTotal = getWishlist().length;

  document.querySelectorAll('.cart-count').forEach((badge) => {
    const changed = badge.textContent !== String(cartTotal);
    badge.textContent = cartTotal;
    if (changed && cartTotal > 0) {
      badge.classList.add('bump');
      setTimeout(() => badge.classList.remove('bump'), 320);
    }
  });

  document.querySelectorAll('.wishlist-count').forEach((badge) => {
    const changed = badge.textContent !== String(wishlistTotal);
    badge.textContent = wishlistTotal;
    if (changed && wishlistTotal > 0) {
      badge.classList.add('bump');
      setTimeout(() => badge.classList.remove('bump'), 320);
    }
  });
}

function addToCart(id, name, price, img, qty, category) {
  const product = resolveProduct({ id, name, price, img, category });
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.qty += qty || 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      category: product.category,
      qty: qty || 1
    });
  }

  saveCart(cart);
  updateBadges();
  showToast(`${product.name} added to cart`, 'success');
}

function addToWishlist(id, name, price, img, category) {
  const product = resolveProduct({ id, name, price, img, category });
  const wishlist = getWishlist();
  const existingIndex = wishlist.findIndex((item) => item.id === product.id);

  if (existingIndex >= 0) {
    wishlist.splice(existingIndex, 1);
    saveWishlist(wishlist);
    updateBadges();
    markWishlisted();
    showToast(`${product.name} removed from wishlist`, 'danger');
    return false;
  }

  wishlist.push({
    id: product.id,
    name: product.name,
    price: product.price,
    img: product.img,
    category: product.category
  });
  saveWishlist(wishlist);
  updateBadges();
  markWishlisted();
  showToast(`${product.name} saved to wishlist`, 'success');
  return true;
}

function markWishlisted() {
  const ids = new Set(getWishlist().map((item) => item.id));
  document.querySelectorAll('.wishlist-btn[data-id], .btn-wishlist[data-id]').forEach((button) => {
    const isSaved = ids.has(String(button.dataset.id));
    button.classList.toggle('wishlisted', isSaved);
    button.setAttribute('aria-pressed', String(isSaved));

    if (button.classList.contains('btn-wishlist')) {
      button.innerHTML = isSaved
        ? '<i class="fas fa-heart"></i> SAVED TO WISHLIST'
        : '<i class="far fa-heart"></i> ADD TO WISHLIST';
    }
  });
}

function starsFor(rating) {
  const rounded = Math.round(rating || 0);
  return '★★★★★'.slice(0, rounded) + '☆☆☆☆☆'.slice(0, 5 - rounded);
}

function productCardHTML(product, options = {}) {
  const item = resolveProduct(product);
  const badgeClass = item.badge?.toLowerCase() === 'sale' ? 'sale' : 'new';
  const cardClass = options.fade === false ? 'product-card' : 'product-card fade-in';
  const oldPrice = item.oldPrice
    ? `<span class="old-price">$${Number(item.oldPrice).toFixed(2)}</span>`
    : '';

  return `
    <article class="${cardClass}" data-product-id="${escapeHTML(item.id)}" data-cat="${escapeHTML(item.category)}" data-price="${item.price}" data-popular="${item.popular || 0}">
      <div class="product-img-wrap">
        ${item.badge ? `<span class="product-badge ${badgeClass}">${escapeHTML(item.badge)}</span>` : ''}
        <a href="product.html?id=${encodeURIComponent(item.id)}" class="product-image-link" aria-label="View ${escapeHTML(item.name)}">
          <img src="${escapeHTML(item.img)}" data-fallback="${productPlaceholder(item)}" alt="${escapeHTML(item.name)}" loading="lazy" decoding="async" />
        </a>
        <div class="product-actions">
          <button class="action-btn wishlist-btn" data-id="${escapeHTML(item.id)}" aria-label="Save ${escapeHTML(item.name)} to wishlist" title="Wishlist">
            <i class="far fa-heart"></i>
          </button>
          <button class="action-btn quickview-btn" data-id="${escapeHTML(item.id)}" aria-label="Quick view ${escapeHTML(item.name)}" title="Quick View">
            <i class="far fa-eye"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${escapeHTML(categoryLabel(item.category))}</span>
        <a href="product.html?id=${encodeURIComponent(item.id)}"><h3 class="product-name">${escapeHTML(item.name)}</h3></a>
        <div class="product-rating" aria-label="${item.rating || 5} out of 5 stars">
          <span class="stars" aria-hidden="true">${starsFor(item.rating || 5)}</span>
          <span class="rating-count">(${item.reviews || 0})</span>
        </div>
        <div class="product-price">$${item.price.toFixed(2)} ${oldPrice}</div>
      </div>
      <button class="product-card-atc" data-id="${escapeHTML(item.id)}" aria-label="Add ${escapeHTML(item.name)} to cart">
        <i class="fas fa-shopping-bag"></i>
        <span>Add to Cart</span>
      </button>
    </article>
  `;
}

function skeletonCards(count = 8) {
  return Array.from({ length: count }, () => `
    <div class="product-skeleton" aria-hidden="true">
      <div class="skeleton-img"></div>
      <div class="skeleton-line short"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line mini"></div>
    </div>
  `).join('');
}

function hydrateImages(scope = document) {
  scope.querySelectorAll('img').forEach((img) => {
    if (!img.closest('.hero') && !img.hasAttribute('loading')) img.loading = 'lazy';
    if (!img.hasAttribute('decoding')) img.decoding = 'async';
    img.addEventListener('error', () => {
      const fallback = img.dataset.fallback || productPlaceholder({ name: img.alt || 'LuxeHer', category: 'fashion' });
      if (img.src !== fallback) img.src = fallback;
    }, { once: true });
  });
}

function observeFadeIns(scope = document) {
  const faders = scope.querySelectorAll('.fade-in:not(.visible)');
  if (!('IntersectionObserver' in window)) {
    faders.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  faders.forEach((el) => observer.observe(el));
}

function renderHomeProducts() {
  const grid = document.querySelector('.new-collection .products-grid');
  const tabs = document.querySelector('.new-collection .collection-tabs');
  if (!grid) return;

  let active = 'all';
  const featured = LUXE_PRODUCTS.slice(0, 12);

  if (tabs) {
    tabs.innerHTML = LUXE_CATEGORIES.map((category) => `
      <button class="tab-btn${category.id === 'all' ? ' active' : ''}" data-tab="${category.id}">${category.label}</button>
    `).join('');
  }

  function draw() {
    const products = featured.filter((item) => active === 'all' || item.category === active);
    grid.innerHTML = products.slice(0, active === 'all' ? 12 : 8).map((item) => productCardHTML(item)).join('');
    hydrateImages(grid);
    markWishlisted();
    observeFadeIns(grid);
  }

  grid.innerHTML = skeletonCards(8);
  setTimeout(draw, 180);

  tabs?.addEventListener('click', (event) => {
    const button = event.target.closest('.tab-btn');
    if (!button) return;
    active = button.dataset.tab || 'all';
    tabs.querySelectorAll('.tab-btn').forEach((tab) => tab.classList.toggle('active', tab === button));
    draw();
  });
}

function renderShopProducts() {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;

  const tabsWrap = document.querySelector('.shop-filter-tabs');
  const sortSelect = document.getElementById('sortFilter');
  const countEl = document.getElementById('resultsCount');
  const noResults = document.getElementById('shopNoResults');
  const urlCategory = new URLSearchParams(window.location.search).get('cat');
  let activeCategory = LUXE_CATEGORIES.some((category) => category.id === urlCategory) ? urlCategory : 'all';

  grid.innerHTML = skeletonCards(8);
  if (countEl) countEl.textContent = '...';

  setTimeout(() => {
    if (tabsWrap) {
      tabsWrap.innerHTML = LUXE_CATEGORIES.map((category) => `
        <button class="shop-tab${category.id === activeCategory ? ' active' : ''}" data-filter="${category.id}">${category.label}</button>
      `).join('');
    }

    const filters = document.querySelector('.shop-filters');
    if (filters && !document.getElementById('categoryFilter')) {
      filters.insertAdjacentHTML('afterbegin', `
        <div class="filter-group">
          <span class="filter-label">Category:</span>
          <select class="filter-select" id="categoryFilter" aria-label="Filter by category">
            ${LUXE_CATEGORIES.map((category) => `<option value="${category.id}">${category.label}</option>`).join('')}
          </select>
        </div>
        <div class="filter-divider"></div>
      `);
    }

    const categorySelect = document.getElementById('categoryFilter');
    if (categorySelect) categorySelect.value = activeCategory;

    function applyFilter() {
      const sort = sortSelect?.value || 'default';
      let products = LUXE_PRODUCTS.filter((item) => activeCategory === 'all' || item.category === activeCategory);

      if (sort === 'low') products = products.sort((a, b) => a.price - b.price);
      if (sort === 'high') products = products.sort((a, b) => b.price - a.price);
      if (sort === 'popular') products = products.sort((a, b) => (b.popular || 0) - (a.popular || 0));

      grid.innerHTML = products.map((item) => productCardHTML(item)).join('');
      if (countEl) countEl.textContent = products.length;
      noResults?.classList.toggle('hidden', products.length > 0);
      tabsWrap?.querySelectorAll('.shop-tab').forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.filter === activeCategory);
      });
      if (categorySelect && categorySelect.value !== activeCategory) categorySelect.value = activeCategory;
      hydrateImages(grid);
      markWishlisted();
      observeFadeIns(grid);
    }

    tabsWrap?.addEventListener('click', (event) => {
      const button = event.target.closest('.shop-tab');
      if (!button) return;
      activeCategory = button.dataset.filter || 'all';
      applyFilter();
    });

    categorySelect?.addEventListener('change', () => {
      activeCategory = categorySelect.value;
      applyFilter();
    });

    sortSelect?.addEventListener('change', applyFilter);

    document.querySelectorAll('.shop-cat-link').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        activeCategory = link.dataset.filter || 'all';
        applyFilter();
        document.querySelector('.shop-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    applyFilter();
  }, 220);
}

function ensureQuickViewModal() {
  let modal = document.getElementById('quickViewModal');
  if (modal) return modal;

  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-backdrop quick-view-modal" id="quickViewModal" hidden>
      <div class="quick-view-panel" role="dialog" aria-modal="true" aria-labelledby="quickViewTitle">
        <button class="modal-close" type="button" data-close-modal aria-label="Close quick view"><i class="fas fa-times"></i></button>
        <div class="quick-view-img"><img src="" alt="" loading="lazy" decoding="async" /></div>
        <div class="quick-view-copy">
          <span class="product-category"></span>
          <h2 id="quickViewTitle"></h2>
          <div class="quick-view-price"></div>
          <p></p>
          <div class="quick-view-actions">
            <button class="btn-primary quick-view-add" type="button"><i class="fas fa-shopping-bag"></i> Add to Cart</button>
            <button class="btn-outline quick-view-wishlist" type="button"><i class="far fa-heart"></i> Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  `);

  modal = document.getElementById('quickViewModal');
  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.closest('[data-close-modal]')) closeModal(modal);
  });
  return modal;
}

function openQuickView(id) {
  const product = resolveProduct(id);
  const modal = ensureQuickViewModal();
  const img = modal.querySelector('.quick-view-img img');

  img.src = product.img;
  img.alt = product.name;
  img.dataset.fallback = productPlaceholder(product);
  modal.querySelector('.product-category').textContent = categoryLabel(product.category);
  modal.querySelector('#quickViewTitle').textContent = product.name;
  modal.querySelector('.quick-view-price').textContent = `$${product.price.toFixed(2)}`;
  modal.querySelector('p').textContent = product.description || 'A curated LuxeHer essential for polished everyday styling.';
  modal.querySelector('.quick-view-add').dataset.id = product.id;
  modal.querySelector('.quick-view-wishlist').dataset.id = product.id;

  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add('show'));
  hydrateImages(modal);
}

function closeModal(modal) {
  modal.classList.remove('show');
  setTimeout(() => { modal.hidden = true; }, 180);
}

function ensureConfirmModal() {
  let modal = document.getElementById('confirmModal');
  if (modal) return modal;

  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-backdrop confirm-modal" id="confirmModal" hidden>
      <div class="confirm-panel" role="dialog" aria-modal="true" aria-labelledby="confirmTitle">
        <button class="modal-close" type="button" data-confirm-cancel aria-label="Close confirmation"><i class="fas fa-times"></i></button>
        <div class="confirm-icon"><i class="fas fa-shopping-bag"></i></div>
        <h2 id="confirmTitle">Are you sure?</h2>
        <p id="confirmMessage">This action cannot be undone.</p>
        <div class="confirm-actions">
          <button class="btn-outline" type="button" data-confirm-cancel>Cancel</button>
          <button class="btn-primary" type="button" data-confirm-ok>Confirm</button>
        </div>
      </div>
    </div>
  `);

  return document.getElementById('confirmModal');
}

function openConfirmModal(options = {}) {
  const modal = ensureConfirmModal();
  modal.querySelector('#confirmTitle').textContent = options.title || 'Are you sure?';
  modal.querySelector('#confirmMessage').textContent = options.message || 'This action cannot be undone.';
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add('show'));

  const ok = modal.querySelector('[data-confirm-ok]');
  const cancelButtons = modal.querySelectorAll('[data-confirm-cancel]');
  const close = () => closeModal(modal);
  const confirm = () => {
    options.onConfirm?.();
    close();
  };

  ok.onclick = confirm;
  cancelButtons.forEach((button) => { button.onclick = close; });
  modal.onclick = (event) => {
    if (event.target === modal) close();
  };
}

window.openConfirmModal = openConfirmModal;

function bindProductActions() {
  document.addEventListener('click', (event) => {
    const wishlistButton = event.target.closest('.wishlist-btn[data-id], .btn-wishlist[data-id], .quick-view-wishlist[data-id]');
    if (wishlistButton) {
      event.preventDefault();
      const product = resolveProduct(wishlistButton.dataset.id);
      addToWishlist(product.id, product.name, product.price, product.img, product.category);
      return;
    }

    const cartButton = event.target.closest('.quickadd-btn[data-id], .product-card-atc[data-id], .quick-view-add[data-id]');
    if (cartButton) {
      event.preventDefault();
      const product = resolveProduct(cartButton.dataset.id);
      addToCart(product.id, product.name, product.price, product.img, 1, product.category);
      cartButton.classList.add('is-added');
      const label = cartButton.querySelector('span');
      const original = label?.textContent;
      if (label) label.textContent = 'Added';
      setTimeout(() => {
        cartButton.classList.remove('is-added');
        if (label && original) label.textContent = original;
      }, 1200);
      return;
    }

    const quickViewButton = event.target.closest('.quickview-btn[data-id]');
    if (quickViewButton) {
      event.preventDefault();
      openQuickView(quickViewButton.dataset.id);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('.modal-backdrop.show').forEach(closeModal);
  });
}

function bindPageChrome() {
  updateBadges();
  markWishlisted();
  hydrateImages();

  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');
  const scrollBar = document.createElement('div');
  scrollBar.className = 'scroll-progress';
  document.body.appendChild(scrollBar);
  const updateChrome = () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 10);
    backToTop?.classList.toggle('visible', window.scrollY > 400);
    const max = (document.documentElement?.scrollHeight || 0) - (window.innerHeight || 0);
    const progress = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
    scrollBar.style.width = `${progress}%`;
  };
  updateChrome();
  window.addEventListener('scroll', updateChrome, { passive: true });
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu?.classList.toggle('open');
  });

  document.querySelectorAll('a.smooth-link, a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
      mobileMenu?.classList.remove('open');
      hamburger?.classList.remove('open');
    });
  });

  observeFadeIns();
}

function bindProductPage() {
  document.querySelectorAll('.size-btn').forEach((button) => {
    button.addEventListener('click', () => {
      button.closest('.size-options')?.querySelectorAll('.size-btn').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      const sizeEl = document.getElementById('sizeName');
      if (sizeEl) sizeEl.textContent = button.textContent.trim();
    });
  });

  document.querySelectorAll('.color-swatch').forEach((swatch) => {
    swatch.addEventListener('click', () => {
      swatch.closest('.color-options')?.querySelectorAll('.color-swatch').forEach((item) => item.classList.remove('active'));
      swatch.classList.add('active');
      const colorEl = document.getElementById('colorName');
      if (colorEl) colorEl.textContent = swatch.dataset.name || '';
    });
  });

  const qtyVal = document.querySelector('.qty-val');
  document.querySelector('.qty-minus')?.addEventListener('click', () => {
    if (qtyVal && +qtyVal.textContent > 1) qtyVal.textContent = +qtyVal.textContent - 1;
  });
  document.querySelector('.qty-plus')?.addEventListener('click', () => {
    if (qtyVal) qtyVal.textContent = +qtyVal.textContent + 1;
  });

  document.querySelector('.btn-addtocart[data-id]')?.addEventListener('click', (event) => {
    const button = event.currentTarget;
    const product = resolveProduct(button.dataset.id);
    const qty = parseInt(document.querySelector('.qty-val')?.textContent || '1', 10);
    addToCart(product.id, product.name, product.price, product.img, qty, product.category);
  });

  document.querySelector('.btn-buynow')?.addEventListener('click', (event) => {
    const addButton = document.querySelector('.btn-addtocart[data-id]');
    if (!addButton) return;
    event.preventDefault();
    const product = resolveProduct(addButton.dataset.id);
    const qty = parseInt(document.querySelector('.qty-val')?.textContent || '1', 10);
    addToCart(product.id, product.name, product.price, product.img, qty, product.category);
    window.location.href = 'cart.html';
  });

  const mainImg = document.getElementById('mainProductImg');
  document.querySelectorAll('.thumb-img').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.thumb-img').forEach((item) => item.classList.remove('active'));
      thumb.classList.add('active');
      const next = thumb.querySelector('img')?.src?.replace('w=200', 'w=900');
      if (!mainImg || !next) return;
      mainImg.style.opacity = '0';
      setTimeout(() => {
        mainImg.src = next;
        mainImg.style.opacity = '1';
      }, 180);
    });
  });
  if (mainImg) mainImg.style.transition = 'opacity 0.25s ease';

  document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', () => header.closest('.accordion-item')?.classList.toggle('open'));
  });
}

function bindForms() {
  document.querySelectorAll('.contact-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      if (!button) return;
      const original = button.innerHTML;
      button.innerHTML = '<i class="fas fa-check"></i> Message Sent';
      button.classList.add('is-success');
      showToast("Message sent. We'll reply soon.", 'success');
      setTimeout(() => {
        button.innerHTML = original;
        button.classList.remove('is-success');
        form.reset();
      }, 2600);
    });
  });

  document.getElementById('newsletterForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = event.target.querySelector('button');
    const original = button?.innerHTML || 'SUBSCRIBE';
    if (button) {
      button.innerHTML = '<i class="fas fa-check"></i> SUBSCRIBED';
      button.classList.add('is-success');
    }
    showToast('Thanks for subscribing.', 'success');
    setTimeout(() => {
      if (button) {
        button.innerHTML = original;
        button.classList.remove('is-success');
      }
      event.target.reset();
    }, 2600);
  });
}

function normalizeFooter() {
  document.querySelectorAll('.footer-payments').forEach((section) => section.remove());

  const categoryLinks = LUXE_CATEGORIES
    .filter((category) => category.id !== 'all')
    .map((category) => `
      <li>
        <a href="shop.html?cat=${encodeURIComponent(category.id)}" class="shop-cat-link" data-filter="${category.id}">
          <i class="fas fa-chevron-right"></i> ${category.label}
        </a>
      </li>
    `).join('');

  document.querySelectorAll('.footer-col').forEach((column) => {
    const title = column.querySelector('.footer-col-title');
    if (!title || title.textContent.trim().toLowerCase() !== 'categories') return;
    const list = column.querySelector('.footer-links');
    if (list) list.innerHTML = categoryLinks;
  });

  document.querySelectorAll('.footer-copy').forEach((copy) => {
    copy.innerHTML = 'Copyright 2026 <strong>LuxeHer</strong>. All Rights Reserved.';
  });
}

function initLuxeHer() {
  if (window.__luxeHerInit) return;
  window.__luxeHerInit = true;

  resetCartOnRefresh();
  normalizeFooter();
  bindPageChrome();
  bindProductActions();
  bindProductPage();
  bindForms();
  renderHomeProducts();
  renderShopProducts();
}

initLuxeHer();
