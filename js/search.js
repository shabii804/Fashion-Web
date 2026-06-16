/* ===========================
   LuxeHer – search.js  v2
   Enhanced client-side search
   =========================== */
(function () {
  'use strict';

  /* ── DOM ── */
  const searchForm     = document.getElementById('searchForm');
  const searchInput    = document.getElementById('searchInput');
  const clearBtn       = document.getElementById('clearBtn');
  const catPills       = document.getElementById('catPills');
  const recentEl       = document.getElementById('recentSearches');
  const searchControls = document.getElementById('searchControls');
  const resultsGrid    = document.getElementById('searchResultsGrid');
  const resultsCount   = document.getElementById('resultsCount');
  const resultsInfo    = document.getElementById('resultsInfo');
  const searchSort     = document.getElementById('searchSort');
  const priceSlider    = document.getElementById('priceSlider');
  const priceVal       = document.getElementById('priceVal');
  const skeletonGrid   = document.getElementById('skeletonGrid');
  const gridViewBtn    = document.getElementById('gridViewBtn');
  const listViewBtn    = document.getElementById('listViewBtn');
  const stateInitial   = document.getElementById('stateInitial');
  const stateNoResults = document.getElementById('stateNoResults');
  const trendingGrid   = document.getElementById('trendingGrid');
  const newArrivalsGrid = document.getElementById('newArrivalsGrid');
  const saleGrid       = document.getElementById('saleGrid');
  const noResultsMsg   = document.getElementById('noResultsMsg');

  /* ── State ── */
  let query       = '';
  let category    = 'all';
  let sort        = 'default';
  let maxPrice    = 10000; // PKR — no filter by default (above all product prices)
  let isListView  = false;
  let debouncer   = null;
  const MAX_RECENT = 6;

  /* ────────────────────────────────────────
     RECENT SEARCHES (localStorage)
  ──────────────────────────────────────── */
  function getRecent() {
    try { return JSON.parse(localStorage.getItem('lh_recent_searches') || '[]'); }
    catch { return []; }
  }
  function saveRecent(arr) {
    localStorage.setItem('lh_recent_searches', JSON.stringify(arr.slice(0, MAX_RECENT)));
  }
  function addRecent(term) {
    if (!term || term.length < 2) return;
    const arr = getRecent().filter(function (t) { return t.toLowerCase() !== term.toLowerCase(); });
    arr.unshift(term);
    saveRecent(arr);
  }
  function removeRecent(term) {
    saveRecent(getRecent().filter(function (t) { return t !== term; }));
  }
  function renderRecent() {
    if (!recentEl) return;
    const arr = getRecent();
    if (!arr.length) { recentEl.innerHTML = ''; return; }
    recentEl.innerHTML = '<span class="search-recent-label">Recent:</span>' +
      arr.map(function (t) {
        return '<button class="recent-tag" data-recent="' + escapeHTML(t) + '">' +
          '<i class="fas fa-clock" style="font-size:0.6rem;opacity:0.6;"></i>' +
          escapeHTML(t) +
          '<span class="recent-tag-remove" data-remove="' + escapeHTML(t) + '" title="Remove">✕</span>' +
          '</button>';
      }).join('');
  }

  /* ────────────────────────────────────────
     PRICE SLIDER
  ──────────────────────────────────────── */
  function updateSliderTrack() {
    if (!priceSlider) return;
    const min = 500, max = 10000;
    const pct = ((maxPrice - min) / (max - min)) * 100;
    priceSlider.style.background =
      'linear-gradient(to right, var(--rose) 0%, var(--rose) ' + pct + '%, var(--border) ' + pct + '%, var(--border) 100%)';
  }

  /* ────────────────────────────────────────
     SEARCH ENGINE
  ──────────────────────────────────────── */

  /* Keyword → category map: covers common user queries */
  var KEYWORD_MAP = {
    'bag':        'bags',
    'bags':       'bags',
    'handbag':    'bags',
    'handbags':   'bags',
    'purse':      'bags',
    'tote':       'bags',
    'clutch':     'bags',
    'crossbody':  'bags',
    'shoulder':   'bags',
    'bucket':     'bags',
    'rattan':     'bags',

    'heel':       'heels',
    'heels':      'heels',
    'stiletto':   'heels',
    'pump':       'heels',
    'mule':       'heels',
    'kitten':     'heels',
    'slingback':  'heels',
    'cone heel':  'heels',

    'sneaker':    'sneakers',
    'sneakers':   'sneakers',
    'trainer':    'sneakers',
    'runner':     'sneakers',
    'platform shoe': 'sneakers',

    'jacket':     'jackets',
    'jackets':    'jackets',
    'denim jacket': 'jackets',
    'tweed':      'jackets',
    'puffer':     'jackets',

    'coat':       'long-coat',
    'long coat':  'long-coat',
    'trench':     'long-coat',
    'overcoat':   'long-coat',
    'check coat': 'long-coat',

    'top':        'tops',
    'tops':       'tops',
    'blouse':     'tops',
    'shirt':      'tops',
    'chiffon top': 'tops',
    'linen top':  'tops',

    'desi':       'desi-dress',
    'desi dress': 'desi-dress',
    'lawn':       'desi-dress',
    'kurta':      'desi-dress',
    'khaddar':    'desi-dress',
    'chiffon':    'desi-dress',
    'organza':    'desi-dress',
    'velvet':     'desi-dress',
    'eid':        'desi-dress',
    'formal dress': 'desi-dress',
    'party dress': 'desi-dress',

    'frock':      'floral-frock',
    'frocks':     'floral-frock',
    'floral':     'floral-frock',
    'floral frock': 'floral-frock',
    'maxi frock': 'floral-frock',
    'midi frock': 'floral-frock',
    'bloom':      'floral-frock',
    'ruffle':     'floral-frock',
    'wrap frock': 'floral-frock',

    'sale':       '__badge_sale__',
    'new':        '__badge_new__',
    'new arrival': '__badge_new__',
    'on sale':    '__badge_sale__',
    'discount':   '__badge_sale__'
  };

  function resolveKeyword(q) {
    /* Direct full match */
    if (KEYWORD_MAP[q]) return KEYWORD_MAP[q];
    /* Partial — find longest key that query contains or is contained by */
    var best = null;
    Object.keys(KEYWORD_MAP).forEach(function (key) {
      if (q.includes(key) || key.includes(q)) {
        if (!best || key.length > best.length) best = key;
      }
    });
    return best ? KEYWORD_MAP[best] : null;
  }

  function runSearch(immediate) {
    clearTimeout(debouncer);
    var delay = immediate ? 0 : 260;
    debouncer = setTimeout(function () {
      _doSearch();
    }, delay);
  }

  function _doSearch() {
    const products = window.LUXE_PRODUCTS || [];
    const q = query.toLowerCase().trim();

    if (!q && category === 'all') {
      showState('initial');
      return;
    }

    showState('loading');

    setTimeout(function () {
      /* ── Resolve keyword to category or badge ── */
      var mappedCat   = q ? resolveKeyword(q) : null;
      var badgeFilter = null;
      if (mappedCat === '__badge_sale__') { badgeFilter = 'Sale'; mappedCat = null; }
      if (mappedCat === '__badge_new__')  { badgeFilter = 'New';  mappedCat = null; }

      var results = products.filter(function (p) {
        /* Category filter from pill */
        if (category !== 'all' && p.category !== category) return false;

        /* Price filter */
        if (maxPrice < 10000 && p.price > maxPrice) return false;

        /* No text query — just category/price filter */
        if (!q) return true;

        /* Badge filter (sale / new) */
        if (badgeFilter) return (p.badge || '').toLowerCase() === badgeFilter.toLowerCase();

        /* Keyword mapped to a category */
        if (mappedCat && category === 'all') {
          if (p.category === mappedCat) return true;
        }

        /* Full-text search across name, category label, description, badge */
        var catLabel = categoryLabel(p.category).toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          catLabel.includes(q) ||
          (p.description || '').toLowerCase().includes(q) ||
          (p.badge || '').toLowerCase().includes(q)
        );
      });

      /* Score: exact name match first, then category match, then rest */
      results.sort(function (a, b) {
        var aName = a.name.toLowerCase();
        var bName = b.name.toLowerCase();
        var aScore = aName.startsWith(q) ? 3 : aName.includes(q) ? 2 : 1;
        var bScore = bName.startsWith(q) ? 3 : bName.includes(q) ? 2 : 1;
        return bScore - aScore;
      });

      results = sortArr(results, sort);

      if (results.length === 0) {
        showState('noResults');
        if (noResultsMsg) {
          noResultsMsg.textContent = 'No results for "' + query + '". Try another keyword or browse a category below.';
        }
      } else {
        showState('results');
        resultsGrid.innerHTML = results.map(function (p) {
          return productCardHTML(p);
        }).join('');
        if (q) highlightText(resultsGrid, q);
        resultsCount.textContent = results.length;
        resultsInfo.innerHTML =
          'Showing <strong>' + results.length + '</strong> result' +
          (results.length !== 1 ? 's' : '') +
          ' for "<strong>' + escapeHTML(query) + '</strong>"';
        hydrateImages(resultsGrid);
        markWishlisted();
        observeFadeIns(resultsGrid);
      }
    }, 180);
  }

  /* ── Highlight query term inside rendered product names ── */
  function highlightText(scope, q) {
    if (!q) return;
    scope.querySelectorAll('.product-name').forEach(function (el) {
      var orig = el.textContent;
      var idx  = orig.toLowerCase().indexOf(q.toLowerCase());
      if (idx === -1) return;
      el.innerHTML =
        escapeHTML(orig.slice(0, idx)) +
        '<mark class="hl">' + escapeHTML(orig.slice(idx, idx + q.length)) + '</mark>' +
        escapeHTML(orig.slice(idx + q.length));
    });
  }

  /* ── Sort ── */
  function sortArr(arr, s) {
    var a = arr.slice();
    if (s === 'low')    return a.sort(function (x, y) { return x.price - y.price; });
    if (s === 'high')   return a.sort(function (x, y) { return y.price - x.price; });
    if (s === 'popular') return a.sort(function (x, y) { return (y.popular || 0) - (x.popular || 0); });
    if (s === 'newest') return a.sort(function (x, y) { return (y.badge === 'New' ? 1 : 0) - (x.badge === 'New' ? 1 : 0); });
    return a;
  }

  /* ────────────────────────────────────────
     DEFAULT STATE SECTIONS
  ──────────────────────────────────────── */
  function renderDefaults() {
    var products = window.LUXE_PRODUCTS || [];
    var pool = category === 'all' ? products : products.filter(function (p) { return p.category === category; });

    /* Trending */
    if (trendingGrid) {
      var trending = pool.slice().sort(function (a, b) { return (b.popular || 0) - (a.popular || 0); }).slice(0, 4);
      trendingGrid.innerHTML = trending.map(function (p) { return productCardHTML(p); }).join('');
      hydrateImages(trendingGrid); markWishlisted(); observeFadeIns(trendingGrid);
    }
    /* New arrivals */
    if (newArrivalsGrid) {
      var newItems = pool.filter(function (p) { return p.badge === 'New'; }).slice(0, 4);
      newArrivalsGrid.innerHTML = newItems.map(function (p) { return productCardHTML(p); }).join('');
      hydrateImages(newArrivalsGrid); markWishlisted(); observeFadeIns(newArrivalsGrid);
    }
    /* Sale */
    if (saleGrid) {
      var sale = pool.filter(function (p) { return p.badge === 'Sale'; }).slice(0, 4);
      saleGrid.innerHTML = sale.map(function (p) { return productCardHTML(p); }).join('');
      hydrateImages(saleGrid); markWishlisted(); observeFadeIns(saleGrid);
    }
  }

  /* ────────────────────────────────────────
     SHOW / HIDE STATES
  ──────────────────────────────────────── */
  function showState(state) {
    stateInitial.style.display   = state === 'initial'  ? ''     : 'none';
    stateNoResults.style.display = state === 'noResults'? ''     : 'none';
    resultsGrid.style.display    = state === 'results'  ? 'grid' : 'none';
    searchControls.style.display = state === 'results'  ? ''     : 'none';
    skeletonGrid.style.display   = state === 'loading'  ? 'grid' : 'none';
    if (state === 'initial') renderDefaults();
  }

  /* ────────────────────────────────────────
     CATEGORY PILLS
  ──────────────────────────────────────── */
  function setCategory(cat) {
    category = cat || 'all';
    catPills.querySelectorAll('.cat-pill').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.cat === category);
    });
    if (query) { runSearch(true); } else { showState('initial'); }
    updateURL();
  }

  /* ────────────────────────────────────────
     URL SYNC
  ──────────────────────────────────────── */
  function updateURL() {
    var params = new URLSearchParams();
    if (query)             params.set('q',   query);
    if (category !== 'all') params.set('cat', category);
    var newURL = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
    history.replaceState(null, '', newURL);
  }

  /* ────────────────────────────────────────
     HELPERS
  ──────────────────────────────────────── */
  function toggleClear(val) {
    clearBtn.classList.toggle('visible', val.length > 0);
  }

  /* ────────────────────────────────────────
     EVENTS
  ──────────────────────────────────────── */
  function bindEvents() {
    /* Search form submit */
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      query = searchInput.value.trim();
      if (query) addRecent(query);
      renderRecent();
      toggleClear(query);
      runSearch(true);
      updateURL();
    });

    /* Live typing */
    searchInput.addEventListener('input', function () {
      var val = this.value.trim();
      toggleClear(val);
      query = val;
      runSearch(false);
      updateURL();
    });

    /* Clear button */
    clearBtn.addEventListener('click', function () {
      searchInput.value = '';
      query = '';
      toggleClear('');
      searchInput.focus();
      showState('initial');
      updateURL();
    });

    /* Recent searches clicks */
    recentEl.addEventListener('click', function (e) {
      var removeBtn = e.target.closest('[data-remove]');
      if (removeBtn) {
        e.stopPropagation();
        removeRecent(removeBtn.dataset.remove);
        renderRecent();
        return;
      }
      var tag = e.target.closest('[data-recent]');
      if (!tag) return;
      searchInput.value = tag.dataset.recent;
      query = tag.dataset.recent;
      toggleClear(query);
      runSearch(true);
      updateURL();
    });

    /* Category pills */
    catPills.addEventListener('click', function (e) {
      var btn = e.target.closest('.cat-pill');
      if (btn) setCategory(btn.dataset.cat);
    });

    /* Sort */
    searchSort.addEventListener('change', function () {
      sort = this.value;
      if (query || category !== 'all') runSearch(true);
    });

    /* Price slider */
    if (priceSlider) {
      priceSlider.addEventListener('input', function () {
        maxPrice = parseInt(this.value, 10);
        if (priceVal) priceVal.textContent = maxPrice >= 10000 ? 'Any' : 'PKR ' + maxPrice.toLocaleString();
        updateSliderTrack();
        if (query || category !== 'all') runSearch(false);
      });
    }

    /* Grid / List view toggle */
    if (gridViewBtn) {
      gridViewBtn.addEventListener('click', function () {
        isListView = false;
        resultsGrid.classList.remove('list-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
      });
    }
    if (listViewBtn) {
      listViewBtn.addEventListener('click', function () {
        isListView = true;
        resultsGrid.classList.add('list-view');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
      });
    }

    /* Popular search tags */
    document.getElementById('popularTags').addEventListener('click', function (e) {
      var btn = e.target.closest('[data-search]');
      if (!btn) return;
      searchInput.value = btn.dataset.search;
      query = btn.dataset.search;
      toggleClear(query);
      addRecent(query);
      renderRecent();
      runSearch(true);
      updateURL();
    });

    /* No-results suggestion chips */
    stateNoResults.addEventListener('click', function (e) {
      var chip = e.target.closest('[data-suggest]');
      if (!chip) return;
      searchInput.value = chip.dataset.suggest;
      query = chip.dataset.suggest;
      toggleClear(query);
      runSearch(true);
      updateURL();
    });

    /* Cart / Wishlist / QuickView from delegated clicks */
    document.addEventListener('click', function (e) {
      var atc = e.target.closest('.product-card-atc');
      if (atc) {
        var p = resolveProduct(atc.dataset.id);
        addToCart(p.id, p.name, p.price, p.img, 1, p.category);
        return;
      }
      var wl = e.target.closest('.wishlist-btn');
      if (wl) {
        var pw = resolveProduct(wl.dataset.id);
        addToWishlist(pw.id, pw.name, pw.price, pw.img, pw.category);
        return;
      }
      var qv = e.target.closest('.quickview-btn');
      if (qv) { openQuickView(qv.dataset.id); return; }
    });

    /* Navbar scroll */
    window.addEventListener('scroll', function () {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
      document.querySelector('.back-to-top').classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });

    /* Back to top */
    document.querySelector('.back-to-top').addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* Hamburger */
    var hamburger = document.querySelector('.hamburger');
    var mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
      });
    }
  }

  /* ────────────────────────────────────────
     INIT
  ──────────────────────────────────────── */
  function init() {
    var params = new URLSearchParams(window.location.search);
    var qParam   = (params.get('q') || '').trim();
    var catParam = params.get('cat') || 'all';

    if (qParam) {
      searchInput.value = qParam;
      query = qParam;
      toggleClear(qParam);
    }

    /* Set active category pill */
    category = catParam;
    catPills.querySelectorAll('.cat-pill').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.cat === category);
    });

    updateSliderTrack();
    renderRecent();
    bindEvents();
    updateBadges();

    if (qParam) {
      addRecent(qParam);
      runSearch(true);
    } else {
      showState('initial');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
