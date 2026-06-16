/* ===========================
   LuxeHer - shared storefront logic
   =========================== */

const LUXE_CATEGORIES = [
  { id: 'all',          label: 'All' },
  { id: 'desi-dress',   label: 'Desi Dress' },
  { id: 'floral-frock', label: 'Floral Frock' },
  { id: 'tops',         label: 'Tops' },
  { id: 'jackets',      label: 'Jackets' },
  { id: 'long-coat',    label: 'Long Coat' },
  { id: 'bags',         label: 'Bags' },
  { id: 'heels',        label: 'Heels' },
  { id: 'sneakers',     label: 'Sneakers' }
];

const LUXE_PRODUCTS = [

  /* ── DESI DRESS ── */
  { id:'1',  name:'Embroidered Desi Dress',    category:'desi-dress',   price:2800, oldPrice:null, rating:5, reviews:48, popular:97, badge:'New',  image:'Assets/Desi Dress/1.jpeg', description:'A stunning hand-embroidered desi dress featuring intricate thread work and vibrant colours, perfect for festive occasions and formal gatherings.' },
  { id:'2',  name:'Classic Lawn Suit',         category:'desi-dress',   price:1800, oldPrice:2200, rating:5, reviews:62, popular:94, badge:'Sale', image:'Assets/Desi Dress/2.jpeg', description:'Soft premium lawn fabric in a timeless silhouette with delicate printed motifs — effortlessly elegant for everyday and special events.' },
  { id:'3',  name:'Printed Khaddar Dress',     category:'desi-dress',   price:2200, oldPrice:null, rating:4, reviews:35, popular:88, badge:'New',  image:'Assets/Desi Dress/3.jpeg', description:'Warm khaddar fabric with an artful block-print pattern and a relaxed straight cut — ideal for cool evenings and casual occasions.' },
  { id:'4',  name:'Chiffon Formal Dress',      category:'desi-dress',   price:3500, oldPrice:null, rating:5, reviews:41, popular:92, badge:'New',  image:'Assets/Desi Dress/4.jpeg', description:'Flowing chiffon in a rich jewel tone with a gracefully draped dupatta — crafted for weddings, dinners, and upscale events.' },
  { id:'5',  name:'Organza Party Dress',       category:'desi-dress',   price:4200, oldPrice:5000, rating:5, reviews:29, popular:90, badge:'Sale', image:'Assets/Desi Dress/5.jpeg', description:'Shimmering organza with hand-stitched gota detailing and a flared skirt — a showstopper for parties and mehndi ceremonies.' },
  { id:'6',  name:'Linen Casual Kurta',        category:'desi-dress',   price:1400, oldPrice:null, rating:4, reviews:54, popular:82, badge:'',     image:'Assets/Desi Dress/6.jpeg', description:'Breathable linen in a relaxed straight-cut kurta style — cool, comfortable, and effortlessly stylish for day-to-day wear.' },
  { id:'7',  name:'Velvet Festive Dress',      category:'desi-dress',   price:5200, oldPrice:null, rating:5, reviews:38, popular:95, badge:'New',  image:'Assets/Desi Dress/7.jpeg', description:'Luxurious velvet with deep embossed patterns and an A-line silhouette — the perfect statement piece for Eid and festive celebrations.' },

  /* ── FLORAL FROCK ── */
  { id:'8',  name:'Garden Bloom Frock',        category:'floral-frock', price:1900, oldPrice:null, rating:5, reviews:67, popular:96, badge:'New',  image:'Assets/folral froxk/2.jpeg', description:'A whimsical floral frock with a fitted bodice and flared skirt, adorned with soft pastel blooms on a lightweight cotton base.' },
  { id:'9',  name:'Rose Petal Midi Frock',     category:'floral-frock', price:2100, oldPrice:2500, rating:4, reviews:44, popular:87, badge:'Sale', image:'Assets/folral froxk/3.jpeg', description:'A romantic midi-length frock featuring a delicate rose-petal print, cinched waist, and soft flutter sleeves — ideal for brunches and garden parties.' },
  { id:'10', name:'Wildflower Shift Frock',    category:'floral-frock', price:1700, oldPrice:null, rating:5, reviews:51, popular:91, badge:'New',  image:'Assets/folral froxk/4.jpeg', description:'A breezy wildflower-print shift frock in a relaxed silhouette — effortless summer dressing from morning coffee to evening strolls.' },
  { id:'11', name:'Buttercup Ruffle Frock',    category:'floral-frock', price:2400, oldPrice:null, rating:4, reviews:33, popular:83, badge:'',     image:'Assets/folral froxk/5.jpeg', description:'Cascading ruffle tiers in a sunny buttercup floral print — playful, feminine, and perfect for casual days out.' },
  { id:'12', name:'Daisy Chain Wrap Frock',    category:'floral-frock', price:2000, oldPrice:null, rating:5, reviews:58, popular:89, badge:'New',  image:'Assets/folral froxk/6.jpeg', description:'A wrap-style frock in a sweet daisy-chain print with adjustable tie waist — flattering on every figure, versatile for all-day wear.' },
  { id:'13', name:'Blossom Maxi Frock',        category:'floral-frock', price:2800, oldPrice:3200, rating:5, reviews:72, popular:93, badge:'Sale', image:'Assets/folral froxk/WhatsApp Image 2026-06-15 at 12.34.57 PM.jpeg', description:'A floor-length blossom-print maxi frock in flowy chiffon — made for summer evenings, outdoor weddings, and every romantic occasion.' },

  /* ── TOPS ── */
  { id:'14', name:'Ruffle Chiffon Top',        category:'tops',         price:950,  oldPrice:null, rating:5, reviews:43, popular:88, badge:'New',  image:'Assets/Tops/1.jpeg', description:'A lightweight chiffon top with soft ruffle detailing at the neckline — pairs beautifully with trousers, skirts, or denim for an elevated everyday look.' },
  { id:'15', name:'Embroidered Linen Top',     category:'tops',         price:1200, oldPrice:null, rating:4, reviews:37, popular:84, badge:'New',  image:'Assets/Tops/2.jpeg', description:'Breathable linen with intricate embroidery along the hemline — relaxed, refined, and perfect for both casual and semi-formal occasions.' },
  { id:'16', name:'Satin Tie-Neck Blouse',     category:'tops',         price:1100, oldPrice:1400, rating:5, reviews:61, popular:91, badge:'Sale', image:'Assets/Tops/3.jpeg', description:'A polished satin blouse with a self-tie neck bow — luxurious drape and a sleek silhouette that transitions seamlessly from desk to dinner.' },
  { id:'17', name:'Printed Lawn Shirt',        category:'tops',         price:850,  oldPrice:null, rating:4, reviews:55, popular:79, badge:'',     image:'Assets/Tops/4.jpeg', description:'A fresh printed lawn shirt in a relaxed fit — soft on skin, vibrant in colour, and perfect for warm-weather days and casual outings.' },

  /* ── JACKETS ── */
  { id:'18', name:'Structured Puffer Jacket',  category:'jackets',      price:4500, oldPrice:null, rating:5, reviews:39, popular:92, badge:'New',  image:'Assets/Jackets/1.jpeg', description:'A sleek structured puffer jacket with a slim profile, quilted detailing, and a zip-up front — warm, chic, and built for the modern woman.' },
  { id:'19', name:'Cropped Denim Jacket',      category:'jackets',      price:3200, oldPrice:3800, rating:4, reviews:52, popular:86, badge:'Sale', image:'Assets/Jackets/2.jpeg', description:'A cropped denim jacket with a vintage-wash finish and classic button front — the ultimate layering piece for casual and smart-casual looks.' },
  { id:'20', name:'Boucle Tweed Jacket',       category:'jackets',      price:5800, oldPrice:null, rating:5, reviews:28, popular:90, badge:'New',  image:'Assets/Jackets/3.jpeg', description:'A refined boucle tweed jacket with contrast trim and gold-tone buttons — timeless elegance for formal meetings, events, and polished everyday dressing.' },

  /* ── LONG COAT ── */
  { id:'21', name:'Camel Wool Long Coat',      category:'long-coat',    price:8500, oldPrice:null, rating:5, reviews:34, popular:95, badge:'New',  image:'Assets/Long coat/1.jpeg', description:"A luxurious camel-tone wool-blend long coat with clean lapels and a belted waist — the season's most sophisticated outerwear investment." },
  { id:'22', name:'Oversized Check Coat',      category:'long-coat',    price:7200, oldPrice:9000, rating:4, reviews:47, popular:89, badge:'Sale', image:'Assets/Long coat/2.jpeg', description:'An oversized double-check long coat in rich earth tones — bold yet refined, with a relaxed drape and deep pockets for effortless style.' },
  { id:'23', name:'Belted Trench Coat',        category:'long-coat',    price:7800, oldPrice:null, rating:5, reviews:61, popular:93, badge:'New',  image:'Assets/Long coat/3.jpeg', description:'A classic belted trench coat in a neutral tone with storm flaps and structured shoulders — seasonless, polished, and endlessly wearable.' },

  /* ── BAGS ── */
  { id:'24', name:'Structured Tote Bag',       category:'bags',         price:3800, oldPrice:null, rating:5, reviews:58, popular:94, badge:'New',  image:'Assets/Bag/1.jpeg', description:'A spacious structured tote in smooth vegan leather — roomy enough for daily essentials, polished enough for every occasion.' },
  { id:'25', name:'Chain-Strap Shoulder Bag',  category:'bags',         price:4200, oldPrice:5000, rating:5, reviews:72, popular:97, badge:'Sale', image:'Assets/Bag/2.jpeg', description:'A sleek shoulder bag with a gold chain strap and quilted exterior — compact, luxurious, and perfect for evenings out.' },
  { id:'26', name:'Woven Rattan Clutch',       category:'bags',         price:2200, oldPrice:null, rating:4, reviews:41, popular:82, badge:'New',  image:'Assets/Bag/3.jpeg', description:'A handcrafted woven rattan clutch with a satin lining — bohemian charm meets structured elegance for summer events.' },
  { id:'27', name:'Mini Crossbody Bag',        category:'bags',         price:2900, oldPrice:null, rating:5, reviews:65, popular:90, badge:'',     image:'Assets/Bag/4.jpeg', description:'A compact mini crossbody in smooth leather with an adjustable strap — hands-free, stylish, and just the right size for your daily must-haves.' },
  { id:'28', name:'Oversized Bucket Bag',      category:'bags',         price:3400, oldPrice:null, rating:4, reviews:36, popular:85, badge:'',     image:'Assets/Bag/5.jpeg', description:'A relaxed oversized bucket bag in pebbled vegan leather — effortlessly cool with drawstring closure and generous interior compartments.' },

  /* ── HEELS ── */
  { id:'29', name:'Strappy Block Heels',       category:'heels',        price:3200, oldPrice:null, rating:5, reviews:54, popular:93, badge:'New',  image:'Assets/Heels/1.jpeg', description:'Elegant strappy block heels in nude leather with an ankle buckle — comfortable enough for all-day wear, stunning enough for any occasion.' },
  { id:'30', name:'Pointed Stiletto Heels',    category:'heels',        price:3800, oldPrice:4500, rating:5, reviews:68, popular:96, badge:'Sale', image:'Assets/Heels/2.jpeg', description:'Sleek pointed-toe stilettos in smooth patent leather — the ultimate power heel for formal events, dinners, and nights when you mean business.' },
  { id:'31', name:'Platform Pump Heels',       category:'heels',        price:4100, oldPrice:null, rating:4, reviews:39, popular:87, badge:'New',  image:'Assets/Heels/3.jpeg', description:'Bold platform pumps with a chunky heel and rounded toe — extra height, extra confidence, and a retro-modern edge that turns heads.' },
  { id:'32', name:'Embellished Kitten Heels',  category:'heels',        price:2800, oldPrice:null, rating:5, reviews:47, popular:88, badge:'',     image:'Assets/Heels/4.jpeg', description:'Delicate kitten heels with rhinestone embellishment and a pointed toe — understated glamour pairing perfectly with western and eastern ensembles.' },
  { id:'33', name:'Ankle-Strap Cone Heels',    category:'heels',        price:3500, oldPrice:null, rating:4, reviews:31, popular:84, badge:'',     image:'Assets/Heels/5.jpeg', description:'Cone-heeled sandals with a secure ankle strap and open toe — sculptural silhouette, effortless style, from office to evening events.' },
  { id:'34', name:'Mule Slide Heels',          category:'heels',        price:2600, oldPrice:3000, rating:5, reviews:76, popular:91, badge:'Sale', image:'Assets/Heels/6.jpeg', description:'Slip-on mule heels in a square-toe silhouette with a mid-height block heel — minimal, modern, and endlessly versatile.' },
  { id:'35', name:'Slingback Court Heels',     category:'heels',        price:3300, oldPrice:null, rating:5, reviews:59, popular:89, badge:'New',  image:'Assets/Heels/7.jpeg', description:'Classic slingback court heels with a tapered heel and pointed toe — timeless sophistication for boardrooms, events, and every polished occasion.' },

  /* ── SNEAKERS ── */
  { id:'36', name:'Chunky Platform Sneakers',  category:'sneakers',     price:4500, oldPrice:null, rating:5, reviews:83, popular:97, badge:'New',  image:'Assets/Sneekers/1.jpeg', description:'Trendy chunky platform sneakers with a thick sole, padded collar, and clean white upper — the streetwear staple that goes with everything.' },
  { id:'37', name:'Classic White Sneakers',    category:'sneakers',     price:3200, oldPrice:3800, rating:5, reviews:94, popular:98, badge:'Sale', image:'Assets/Sneekers/2.jpeg', description:'Clean white leather sneakers in a minimalist low-top design — the wardrobe essential that elevates every casual outfit from denim to dresses.' },
  { id:'38', name:'Colourblock Runner Sneakers',category:'sneakers',    price:3900, oldPrice:null, rating:4, reviews:57, popular:86, badge:'New',  image:'Assets/Sneekers/3.jpeg', description:'Bold colourblock runner sneakers with lightweight mesh upper and cushioned sole — sporty meets street-style for gym runs and casual days.' }
];

window.LUXE_CATEGORIES = LUXE_CATEGORIES;
window.LUXE_PRODUCTS   = LUXE_PRODUCTS;


function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[char]));
}

/* ── PKR currency formatter ── */
function fmt(amount) {
  return 'PKR\u00a0' + Math.round(Number(amount)).toLocaleString('en-PK');
}

function categoryLabel(category) {
  return (LUXE_CATEGORIES.find((c) => c.id === category)?.label || category || 'Fashion');
}

function productPlaceholder(product) {
  const title    = escapeHTML(product?.name || 'LuxeHer');
  const category = escapeHTML(categoryLabel(product?.category));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200">
    <defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#FAF6F2"/><stop offset="0.55" stop-color="#F0DDD6"/><stop offset="1" stop-color="#EDD5D9"/>
    </linearGradient></defs>
    <rect width="900" height="1200" fill="url(#bg)"/>
    <circle cx="450" cy="420" r="190" fill="#fff" opacity="0.42"/>
    <path d="M330 480c34-110 206-110 240 0l55 330H275l55-330z" fill="#fff" opacity="0.72"/>
    <text x="450" y="930" text-anchor="middle" font-family="Georgia,serif" font-size="58" fill="#2d2d2d">${title}</text>
    <text x="450" y="1005" text-anchor="middle" font-family="Arial,sans-serif" font-size="28" letter-spacing="8" fill="#C9848F">${category.toUpperCase()}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getProductById(id) {
  return LUXE_PRODUCTS.find((p) => p.id === String(id));
}

function resolveProduct(input) {
  const base    = typeof input === 'object' ? input : { id: input };
  const product = getProductById(base.id);
  const merged  = { ...(product || {}), ...base };
  merged.id       = String(merged.id || '');
  merged.name     = merged.name     || product?.name     || 'LuxeHer Piece';
  merged.category = merged.category || product?.category || 'fashion';
  merged.price    = parseFloat(merged.price ?? product?.price ?? 0);
  merged.img      = merged.img   || merged.image  || product?.image || productPlaceholder(merged);
  merged.image    = merged.image || merged.img;
  return merged;
}

function getCart() {
  try { return JSON.parse(localStorage.getItem('lh_cart') || '[]').map((item) => ({ ...resolveProduct(item), qty: Math.max(1, parseInt(item.qty || 1, 10)) })); }
  catch { return []; }
}
function resetCartOnRefresh() {
  if (typeof performance === 'undefined') return;
  const nav = performance.getEntriesByType?.('navigation')?.[0];
  const isReload = nav?.type === 'reload' || performance.navigation?.type === 1;
  if (isReload) localStorage.removeItem('lh_cart');
}
function saveCart(cart) { localStorage.setItem('lh_cart', JSON.stringify(cart)); }

function getWishlist() {
  try { return JSON.parse(localStorage.getItem('lh_wishlist') || '[]').map((item) => resolveProduct(item)); }
  catch { return []; }
}
function saveWishlist(wishlist) { localStorage.setItem('lh_wishlist', JSON.stringify(wishlist)); }

function showToast(message, type) {
  let toast = document.getElementById('toast');
  if (!toast) { toast = document.createElement('div'); toast.id = 'toast'; toast.className = 'toast'; document.body.appendChild(toast); }
  toast.innerHTML = `<span class="toast-icon"><i class="fas ${type === 'danger' ? 'fa-trash-alt' : type === 'success' ? 'fa-check' : 'fa-heart'}"></i></span><span>${escapeHTML(message)}</span>`;
  toast.className = `toast${type ? ` ${type}` : ''}`;
  requestAnimationFrame(() => toast.classList.add('show'));
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

function updateBadges() {
  const cartTotal     = getCart().reduce((s, i) => s + i.qty, 0);
  const wishlistTotal = getWishlist().length;
  document.querySelectorAll('.cart-count').forEach((b) => { const changed = b.textContent !== String(cartTotal); b.textContent = cartTotal; if (changed && cartTotal > 0) { b.classList.add('bump'); setTimeout(() => b.classList.remove('bump'), 320); } });
  document.querySelectorAll('.wishlist-count').forEach((b) => { const changed = b.textContent !== String(wishlistTotal); b.textContent = wishlistTotal; if (changed && wishlistTotal > 0) { b.classList.add('bump'); setTimeout(() => b.classList.remove('bump'), 320); } });
}

function addToCart(id, name, price, img, qty, category) {
  const product = resolveProduct({ id, name, price, img, category });
  const cart    = getCart();
  const existing = cart.find((item) => item.id === product.id);
  if (existing) { existing.qty += qty || 1; } else { cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, category: product.category, qty: qty || 1 }); }
  saveCart(cart); updateBadges(); showToast(`${product.name} added to cart`, 'success');
}

function addToWishlist(id, name, price, img, category) {
  const product = resolveProduct({ id, name, price, img, category });
  const wishlist = getWishlist();
  const idx = wishlist.findIndex((item) => item.id === product.id);
  if (idx >= 0) { wishlist.splice(idx, 1); saveWishlist(wishlist); updateBadges(); markWishlisted(); showToast(`${product.name} removed from wishlist`, 'danger'); return false; }
  wishlist.push({ id: product.id, name: product.name, price: product.price, img: product.img, category: product.category });
  saveWishlist(wishlist); updateBadges(); markWishlisted(); showToast(`${product.name} saved to wishlist`, 'success'); return true;
}

function markWishlisted() {
  const ids = new Set(getWishlist().map((item) => item.id));
  document.querySelectorAll('.wishlist-btn[data-id], .btn-wishlist[data-id]').forEach((btn) => {
    const saved = ids.has(String(btn.dataset.id));
    btn.classList.toggle('wishlisted', saved);
    btn.setAttribute('aria-pressed', String(saved));
    if (btn.classList.contains('btn-wishlist')) {
      btn.innerHTML = saved ? '<i class="fas fa-heart"></i> SAVED TO WISHLIST' : '<i class="far fa-heart"></i> ADD TO WISHLIST';
    }
  });
}

function starsFor(rating) {
  const r = Math.round(rating || 0);
  return '★★★★★'.slice(0, r) + '☆☆☆☆☆'.slice(0, 5 - r);
}

function productCardHTML(product, options = {}) {
  const item       = resolveProduct(product);
  const badgeClass = item.badge?.toLowerCase() === 'sale' ? 'sale' : 'new';
  const cardClass  = options.fade === false ? 'product-card' : 'product-card fade-in';
  const oldPrice   = item.oldPrice ? `<span class="old-price">${fmt(item.oldPrice)}</span>` : '';
  return `
    <article class="${cardClass}" data-product-id="${escapeHTML(item.id)}" data-cat="${escapeHTML(item.category)}" data-price="${item.price}" data-popular="${item.popular || 0}">
      <div class="product-img-wrap">
        ${item.badge ? `<span class="product-badge ${badgeClass}">${escapeHTML(item.badge)}</span>` : ''}
        <a href="product.html?id=${encodeURIComponent(item.id)}" class="product-image-link" aria-label="View ${escapeHTML(item.name)}">
          <img src="${escapeHTML(item.img)}" data-fallback="${productPlaceholder(item)}" alt="${escapeHTML(item.name)}" loading="lazy" decoding="async" />
        </a>
        <div class="product-actions">
          <button class="action-btn wishlist-btn" data-id="${escapeHTML(item.id)}" aria-label="Save ${escapeHTML(item.name)} to wishlist" title="Wishlist"><i class="far fa-heart"></i></button>
          <button class="action-btn quickview-btn" data-id="${escapeHTML(item.id)}" aria-label="Quick view ${escapeHTML(item.name)}" title="Quick View"><i class="far fa-eye"></i></button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${escapeHTML(categoryLabel(item.category))}</span>
        <a href="product.html?id=${encodeURIComponent(item.id)}"><h3 class="product-name">${escapeHTML(item.name)}</h3></a>
        <div class="product-rating" aria-label="${item.rating || 5} out of 5 stars">
          <span class="stars" aria-hidden="true">${starsFor(item.rating || 5)}</span>
          <span class="rating-count">(${item.reviews || 0})</span>
        </div>
        <div class="product-price">${fmt(item.price)} ${oldPrice}</div>
      </div>
      <button class="product-card-atc" data-id="${escapeHTML(item.id)}" aria-label="Add ${escapeHTML(item.name)} to cart">
        <i class="fas fa-shopping-bag"></i><span>Add to Cart</span>
      </button>
    </article>`;
}

function skeletonCards(count = 8) {
  return Array.from({ length: count }, () => `<div class="product-skeleton" aria-hidden="true"><div class="skeleton-img"></div><div class="skeleton-line short"></div><div class="skeleton-line"></div><div class="skeleton-line mini"></div></div>`).join('');
}

function hydrateImages(scope = document) {
  scope.querySelectorAll('img').forEach((img) => {
    if (!img.closest('.hero') && !img.hasAttribute('loading')) img.loading = 'lazy';
    if (!img.hasAttribute('decoding')) img.decoding = 'async';
    img.addEventListener('error', () => { const fb = img.dataset.fallback || productPlaceholder({ name: img.alt || 'LuxeHer', category: 'fashion' }); if (img.src !== fb) img.src = fb; }, { once: true });
  });
}

function observeFadeIns(scope = document) {
  const faders = scope.querySelectorAll('.fade-in:not(.visible)');
  if (!('IntersectionObserver' in window)) { faders.forEach((el) => el.classList.add('visible')); return; }
  const observer = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }); }, { threshold: 0.08 });
  faders.forEach((el) => observer.observe(el));
}


function renderHomeProducts() {
  const grid = document.querySelector('.new-collection .products-grid');
  const tabs = document.querySelector('.new-collection .collection-tabs');
  if (!grid) return;
  let active = 'all';

  /* Build tabs from LUXE_CATEGORIES */
  if (tabs) {
    tabs.innerHTML = LUXE_CATEGORIES.map((c) =>
      `<button class="tab-btn${c.id === 'all' ? ' active' : ''}" data-tab="${c.id}">${c.label}</button>`
    ).join('');
  }

  function draw() {
    const pool = active === 'all'
      ? LUXE_PRODUCTS.slice(0, 16)
      : LUXE_PRODUCTS.filter((p) => p.category === active).slice(0, 12);

    if (pool.length === 0) {
      grid.innerHTML = '<p style="color:var(--light-text);text-align:center;padding:40px;grid-column:1/-1;">No products in this category.</p>';
      return;
    }
    grid.innerHTML = pool.map((item) => productCardHTML(item)).join('');
    hydrateImages(grid);
    markWishlisted();
    observeFadeIns(grid);
  }

  grid.innerHTML = skeletonCards(8);
  setTimeout(draw, 180);

  tabs?.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    active = btn.dataset.tab || 'all';
    tabs.querySelectorAll('.tab-btn').forEach((t) => t.classList.toggle('active', t === btn));
    grid.innerHTML = skeletonCards(4);
    setTimeout(draw, 120);
  });
}

function renderShopProducts() {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
  const tabsWrap   = document.querySelector('.shop-filter-tabs');
  const sortSelect = document.getElementById('sortFilter');
  const countEl    = document.getElementById('resultsCount');
  const noResults  = document.getElementById('shopNoResults');
  const urlCat     = new URLSearchParams(window.location.search).get('cat');
  let activeCat    = LUXE_CATEGORIES.some((c) => c.id === urlCat) ? urlCat : 'all';

  grid.innerHTML = skeletonCards(8);
  if (countEl) countEl.textContent = '...';

  setTimeout(() => {
    /* Build tabs */
    if (tabsWrap) {
      tabsWrap.innerHTML = LUXE_CATEGORIES.map((c) =>
        `<button class="shop-tab${c.id === activeCat ? ' active' : ''}" data-filter="${c.id}">${c.label}</button>`
      ).join('');
    }

    /* Build inline category dropdown if missing */
    const filters = document.querySelector('.shop-filters');
    if (filters && !document.getElementById('categoryFilter')) {
      filters.insertAdjacentHTML('afterbegin',
        `<div class="filter-group"><span class="filter-label">Category:</span>
         <select class="filter-select" id="categoryFilter" aria-label="Filter by category">
           ${LUXE_CATEGORIES.map((c) => `<option value="${c.id}">${c.label}</option>`).join('')}
         </select></div><div class="filter-divider"></div>`
      );
    }
    const catSelect = document.getElementById('categoryFilter');
    if (catSelect) catSelect.value = activeCat;

    function applyFilter() {
      const sort = sortSelect?.value || 'default';
      let products = activeCat === 'all'
        ? LUXE_PRODUCTS.slice()
        : LUXE_PRODUCTS.filter((p) => p.category === activeCat);

      if (sort === 'low')     products.sort((a, b) => a.price - b.price);
      if (sort === 'high')    products.sort((a, b) => b.price - a.price);
      if (sort === 'popular') products.sort((a, b) => (b.popular || 0) - (a.popular || 0));

      grid.innerHTML = products.length
        ? products.map((p) => productCardHTML(p)).join('')
        : '<p style="color:var(--light-text);text-align:center;padding:40px;grid-column:1/-1;">No products found.</p>';

      if (countEl) countEl.textContent = products.length;
      noResults?.classList.toggle('hidden', products.length > 0);

      tabsWrap?.querySelectorAll('.shop-tab').forEach((t) =>
        t.classList.toggle('active', t.dataset.filter === activeCat)
      );
      if (catSelect && catSelect.value !== activeCat) catSelect.value = activeCat;

      hydrateImages(grid);
      markWishlisted();
      observeFadeIns(grid);
    }

    tabsWrap?.addEventListener('click', (e) => {
      const btn = e.target.closest('.shop-tab');
      if (!btn) return;
      activeCat = btn.dataset.filter || 'all';
      applyFilter();
    });
    catSelect?.addEventListener('change', () => { activeCat = catSelect.value; applyFilter(); });
    sortSelect?.addEventListener('change', applyFilter);

    document.querySelectorAll('.shop-cat-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        activeCat = link.dataset.filter || 'all';
        applyFilter();
        document.querySelector('.shop-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    applyFilter();
  }, 220);
}


function ensureQuickViewModal() {
  let modal = document.getElementById('quickViewModal'); if (modal) return modal;
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
    </div>`);
  modal = document.getElementById('quickViewModal');
  modal.addEventListener('click', (e) => { if (e.target === modal || e.target.closest('[data-close-modal]')) closeModal(modal); });
  return modal;
}

function openQuickView(id) {
  const product = resolveProduct(id);
  const modal   = ensureQuickViewModal();
  const img     = modal.querySelector('.quick-view-img img');
  img.src = product.img; img.alt = product.name; img.dataset.fallback = productPlaceholder(product);
  modal.querySelector('.product-category').textContent  = categoryLabel(product.category);
  modal.querySelector('#quickViewTitle').textContent    = product.name;
  modal.querySelector('.quick-view-price').textContent  = fmt(product.price);
  modal.querySelector('p').textContent                  = product.description || 'A curated LuxeHer essential for polished everyday styling.';
  modal.querySelector('.quick-view-add').dataset.id     = product.id;
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
  let modal = document.getElementById('confirmModal'); if (modal) return modal;
  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-backdrop confirm-modal" id="confirmModal" hidden>
      <div class="confirm-panel" role="dialog" aria-modal="true" aria-labelledby="confirmTitle">
        <button class="modal-close" type="button" data-confirm-cancel aria-label="Close"><i class="fas fa-times"></i></button>
        <div class="confirm-icon"><i class="fas fa-shopping-bag"></i></div>
        <h2 id="confirmTitle">Are you sure?</h2>
        <p id="confirmMessage">This action cannot be undone.</p>
        <div class="confirm-actions">
          <button class="btn-outline" type="button" data-confirm-cancel>Cancel</button>
          <button class="btn-primary" type="button" data-confirm-ok>Confirm</button>
        </div>
      </div>
    </div>`);
  modal = document.getElementById('confirmModal');
  modal.addEventListener('click', (e) => { if (e.target === modal || e.target.closest('[data-confirm-cancel]')) { closeModal(modal); modal._resolve?.(false); } });
  return modal;
}

function showConfirm(title, message) {
  return new Promise((resolve) => {
    const modal = ensureConfirmModal();
    document.getElementById('confirmTitle').textContent   = title;
    document.getElementById('confirmMessage').textContent = message;
    modal._resolve = resolve;
    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add('show'));
    const okBtn = modal.querySelector('[data-confirm-ok]');
    const handler = () => { closeModal(modal); resolve(true); okBtn.removeEventListener('click', handler); };
    okBtn.addEventListener('click', handler);
  });
}

/* ── Global delegated event handler ── */
document.addEventListener('click', (e) => {
  /* Quick-view add to cart */
  const qvAdd = e.target.closest('.quick-view-add');
  if (qvAdd) { const p = resolveProduct(qvAdd.dataset.id); addToCart(p.id, p.name, p.price, p.img, 1, p.category); return; }
  /* Quick-view wishlist */
  const qvWl = e.target.closest('.quick-view-wishlist');
  if (qvWl) { const p = resolveProduct(qvWl.dataset.id); addToWishlist(p.id, p.name, p.price, p.img, p.category); return; }
  /* Card ATC */
  const atcBtn = e.target.closest('.product-card-atc');
  if (atcBtn) { const p = resolveProduct(atcBtn.dataset.id); addToCart(p.id, p.name, p.price, p.img, 1, p.category); return; }
  /* Quick-add */
  const qaBtn = e.target.closest('.quickadd-btn');
  if (qaBtn) { const p = resolveProduct({ id: qaBtn.dataset.id, name: qaBtn.dataset.name, price: qaBtn.dataset.price, img: qaBtn.dataset.img }); addToCart(p.id, p.name, p.price, p.img, 1, p.category); return; }
  /* Wishlist */
  const wlBtn = e.target.closest('.wishlist-btn');
  if (wlBtn) { const p = resolveProduct({ id: wlBtn.dataset.id, name: wlBtn.dataset.name, price: wlBtn.dataset.price, img: wlBtn.dataset.img }); addToWishlist(p.id, p.name, p.price, p.img, p.category); return; }
  /* Quick-view open */
  const qvBtn = e.target.closest('.quickview-btn');
  if (qvBtn) { openQuickView(qvBtn.dataset.id); return; }
});

/* ── Navbar scroll + back-to-top ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 40);
  document.querySelector('.back-to-top')?.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });
document.querySelector('.back-to-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── Hamburger ── */
(function () {
  const hamburger  = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => { hamburger.classList.toggle('open'); mobileMenu.classList.toggle('open'); });
  document.addEventListener('click', (e) => { if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) { hamburger.classList.remove('open'); mobileMenu.classList.remove('open'); } });
})();

/* ── Smooth nav links ── */
document.querySelectorAll('.smooth-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

/* ── Home collection tabs (index.html) ── */
(function () {
  const tabs = document.querySelector('.new-collection .collection-tabs');
  if (!tabs) return;
  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn'); if (!btn) return;
    tabs.querySelectorAll('.tab-btn').forEach((t) => t.classList.remove('active'));
    btn.classList.add('active');
  });
})();

/* ── Init on DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', () => {
  resetCartOnRefresh();
  updateBadges();
  renderHomeProducts();
  renderShopProducts();
  observeFadeIns();
  hydrateImages();
  markWishlisted();

  /* Accordion on product page */
  document.querySelectorAll('.accordion-header').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item.open').forEach((i) => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* Color & size selectors on product page */
  document.querySelectorAll('.color-swatch').forEach((sw) => sw.addEventListener('click', () => { document.querySelectorAll('.color-swatch').forEach((s) => s.classList.remove('active')); sw.classList.add('active'); }));
  document.querySelectorAll('.size-btn').forEach((btn) => btn.addEventListener('click', () => { document.querySelectorAll('.size-btn').forEach((b) => b.classList.remove('active')); btn.classList.add('active'); }));

  /* Qty control */
  document.querySelector('.qty-btn.qty-minus')?.addEventListener('click', () => { const v = document.querySelector('.qty-val'); if (v && parseInt(v.textContent) > 1) v.textContent = parseInt(v.textContent) - 1; });
  document.querySelector('.qty-btn.qty-plus')?.addEventListener('click', () => { const v = document.querySelector('.qty-val'); if (v) v.textContent = parseInt(v.textContent) + 1; });

  /* Contact form */
  document.querySelector('.contact-form')?.addEventListener('submit', (e) => { e.preventDefault(); showToast('Message sent! We\'ll be in touch soon.', 'success'); e.target.reset(); });
});
