/* ========================================
   AS. — Luxury Ladies Bags
   Complete App JavaScript
   ======================================== */

'use strict';

/* ======================================
   PRODUCT DATA
   ====================================== */
const PRODUCTS = [
  {
    id: 1,
    name: 'Bordeaux Structured Handbag',
    category: 'shoulder',
    categoryLabel: 'Shoulder Bag',
    price: 289,
    originalPrice: null,
    image: 'images/bag_burgundy.png',
    badge: 'new',
    rating: 5,
    reviews: 38,
    colors: ['#7a1f2e', '#1a1613', '#c9a96e'],
    description: 'A timeless structured handbag in rich bordeaux leather. Finished with gold-tone hardware and a detachable shoulder strap. Perfect for day to evening.',
    features: ['Full-grain Italian leather', 'Gold-tone brass hardware', 'Magnetic closure', 'Interior zip pocket', 'Dust bag included'],
    inStock: true,
  },
  {
    id: 2,
    name: 'The Camel City Tote',
    category: 'tote',
    categoryLabel: 'Tote Bag',
    price: 249,
    originalPrice: 310,
    image: 'images/bag_camel_tote.png',
    badge: 'sale',
    rating: 5,
    reviews: 54,
    colors: ['#c19a6b', '#1a1613', '#8b6e4e'],
    description: 'The ultimate everyday companion. Crafted from soft camel leather with ample space for all your essentials. Effortlessly elegant from commute to weekend.',
    features: ['Premium vegetable-tanned leather', 'Open-top silhouette', 'Two interior compartments', 'Laptop sleeve', 'Adjustable handles'],
    inStock: true,
  },
  {
    id: 3,
    name: 'Noir Quilted Chain Bag',
    category: 'shoulder',
    categoryLabel: 'Shoulder Bag',
    price: 335,
    originalPrice: null,
    image: 'images/bag_black_quilted.png',
    badge: 'new',
    rating: 5,
    reviews: 29,
    colors: ['#0e0c0a', '#7a1f2e', '#c9a96e'],
    description: 'An icon reimagined. Our quilted noir bag features an adjustable gold chain strap and signature diamond quilting. From brunch to black-tie.',
    features: ['Diamond quilted lambskin', 'Gold chain strap', 'Signature CC clasp', 'Interior satin lining', 'Authenticity card included'],
    inStock: true,
  },
  {
    id: 4,
    name: 'Blush Nude Crossbody',
    category: 'crossbody',
    categoryLabel: 'Crossbody Bag',
    price: 195,
    originalPrice: 240,
    image: 'images/bag_nude_crossbody.png',
    badge: 'sale',
    rating: 4,
    reviews: 47,
    colors: ['#e8c4b0', '#c19a6b', '#1a1613'],
    description: 'Compact and incredibly chic. This blush crossbody effortlessly transitions from day to night. Gold hardware adds just the right touch of luxury.',
    features: ['Smooth pebbled leather', 'Adjustable crossbody strap', 'Gold-tone zipper', 'Interior slip pocket', 'Compact yet spacious'],
    inStock: true,
  },
  {
    id: 5,
    name: 'Pearl Evening Clutch',
    category: 'clutch',
    categoryLabel: 'Clutch',
    price: 175,
    originalPrice: null,
    image: 'images/bag_white_clutch.png',
    badge: null,
    rating: 5,
    reviews: 22,
    colors: ['#f5f0e8', '#c9a96e', '#e8c4b0'],
    description: 'The perfect evening companion. This pearl-white clutch features an embellished closure and a satin lining that cradles your essentials in elegance.',
    features: ['Satin exterior', 'Embellished gold clasp', 'Satin interior', 'Wrist strap included', 'Gift box packaging'],
    inStock: true,
  },
  {
    id: 6,
    name: 'Verdant Forest Satchel',
    category: 'shoulder',
    categoryLabel: 'Satchel',
    price: 315,
    originalPrice: null,
    image: 'images/bag_forest_green.png',
    badge: 'new',
    rating: 5,
    reviews: 16,
    colors: ['#2d5a3d', '#1a1613', '#c9a96e'],
    description: 'Make a statement in rich forest green. This structured satchel features silver-tone hardware and a classic silhouette that blends heritage with modernity.',
    features: ['Tumbled leather', 'Silver-tone buckles', 'Top handle & shoulder strap', 'Suede interior', 'Three interior pockets'],
    inStock: true,
  },
  {
    id: 7,
    name: 'Midnight Navy Bucket Bag',
    category: 'bucket',
    categoryLabel: 'Bucket Bag',
    price: 225,
    originalPrice: null,
    image: 'images/bag_navy_bucket.png',
    badge: null,
    rating: 4,
    reviews: 33,
    colors: ['#1a2a4a', '#0e0c0a', '#c9a96e'],
    description: 'A modern take on the classic bucket silhouette. Midnight navy leather with a gold ring drawstring closure — equal parts practical and polished.',
    features: ['Smooth calfskin leather', 'Drawstring closure', 'Gold-tone ring hardware', 'Removable zip pouch', 'Adjustable strap'],
    inStock: true,
  },
  {
    id: 8,
    name: 'Scarlet Patent Handbag',
    category: 'shoulder',
    categoryLabel: 'Shoulder Bag',
    price: 310,
    originalPrice: null,
    image: 'images/bag_red_patent.png',
    badge: 'new',
    rating: 5,
    reviews: 12,
    colors: ['#9b1c1c', '#1a1613', '#c9a96e'],
    description: 'Turn heads with this bold scarlet patent leather handbag. Glossy finish, gold clasp and a structured silhouette that makes a powerful first impression.',
    features: ['Patent leather exterior', 'Gold-tone clasp closure', 'Suede interior lining', 'Detachable wrist strap', 'Dust bag included'],
    inStock: true,
  },
  {
    id: 9,
    name: 'Tan Suede Mini Bag',
    category: 'crossbody',
    categoryLabel: 'Crossbody Bag',
    price: 185,
    originalPrice: 220,
    image: 'images/bag_tan_mini.png',
    badge: 'sale',
    rating: 4,
    reviews: 41,
    colors: ['#c19a6b', '#e8c4b0', '#1a1613'],
    description: 'Compact and irresistibly chic. This tan suede mini bag features a gold chain strap and a surprisingly roomy interior for its petite silhouette.',
    features: ['Soft suede exterior', 'Gold chain strap', 'Zip-top closure', 'Mirror & card slot inside', 'Adjustable strap'],
    inStock: true,
  },
  {
    id: 10,
    name: 'Cobalt Studded Top Handle',
    category: 'shoulder',
    categoryLabel: 'Shoulder Bag',
    price: 345,
    originalPrice: null,
    image: 'images/bag_cobalt_studded.png',
    badge: 'new',
    rating: 5,
    reviews: 8,
    colors: ['#1a3a6a', '#0e0c0a', '#c9a96e'],
    description: 'Make a bold statement in cobalt blue. Gold pyramid studs adorn the trim of this head-turning top-handle bag — designed for women who dare to stand out.',
    features: ['Full-grain leather', 'Gold pyramid stud details', 'Top handle & shoulder strap', 'Suede interior', 'Lock & key closure'],
    inStock: true,
  },
  {
    id: 11,
    name: 'Olive Leather Hobo',
    category: 'hobo',
    categoryLabel: 'Hobo Bag',
    price: 265,
    originalPrice: null,
    image: 'images/bag_olive_hobo.png',
    badge: null,
    rating: 4,
    reviews: 27,
    colors: ['#4a5e3a', '#1a1613', '#c9a96e'],
    description: 'Effortlessly relaxed and endlessly stylish. This olive leather hobo drapes beautifully over the shoulder with a soft slouchy silhouette perfect for everyday wear.',
    features: ['Vegetable-tanned leather', 'Slouchy silhouette', 'Gold zip closure', 'Interior zip pocket', 'Single shoulder strap'],
    inStock: true,
  },
  {
    id: 12,
    name: 'Rose Baguette Bag',
    category: 'clutch',
    categoryLabel: 'Baguette',
    price: 215,
    originalPrice: 260,
    image: 'images/bag_pink_baguette.png',
    badge: 'sale',
    rating: 5,
    reviews: 35,
    colors: ['#e8a0b0', '#f5f0e8', '#c9a96e'],
    description: 'A modern love letter to the iconic baguette. This rose satin bag with delicate floral embroidery and gold hardware is destined to become your most-reached-for piece.',
    features: ['Satin with floral embroidery', 'Gold frame hardware', 'Magnetic snap closure', 'Wrist & shoulder strap', 'Signature dust bag'],
    inStock: true,
  },
  {
    id: 13,
    name: 'Ivory Structured Top Handle',
    category: 'shoulder',
    categoryLabel: 'Top Handle Bag',
    price: 295,
    originalPrice: null,
    image: 'images/bag_ivory_structured.png',
    badge: 'new',
    rating: 5,
    reviews: 19,
    colors: ['#f5f0e8', '#e8e0d5', '#c0b090'],
    description: 'Clean lines, quiet luxury. This ivory structured bag in smooth leather with silver hardware is the epitome of understated elegance for the modern minimalist.',
    features: ['Smooth full-grain leather', 'Silver-tone hardware', 'Top handle & crossbody strap', 'Interior organisation pockets', 'Silk dust bag'],
    inStock: true,
  },
  {
    id: 14,
    name: 'Cognac Woven Tote',
    category: 'tote',
    categoryLabel: 'Tote Bag',
    price: 275,
    originalPrice: null,
    image: 'images/bag_cognac_woven.png',
    badge: null,
    rating: 4,
    reviews: 31,
    colors: ['#8b5e3c', '#c19a6b', '#1a1613'],
    description: 'Artisanal craftsmanship meets everyday practicality. Hand-woven cognac leather with a bamboo top handle — a luxurious nod to summer\'s most enduring trend.',
    features: ['Hand-woven leather strips', 'Bamboo handles', 'Open-top with interior zipper', 'Cotton canvas lining', 'Extra-deep compartment'],
    inStock: true,
  },
  {
    id: 15,
    name: 'Plum Velvet Evening Bag',
    category: 'clutch',
    categoryLabel: 'Evening Bag',
    price: 190,
    originalPrice: null,
    image: 'images/bag_plum_velvet.png',
    badge: 'new',
    rating: 5,
    reviews: 14,
    colors: ['#5a1a6a', '#2d0a3a', '#c9a96e'],
    description: 'For nights that demand drama. This deep plum velvet evening bag features crystal embellishments and a gold frame clasp that catches every light in the room.',
    features: ['Italian velvet exterior', 'Crystal embellishments', 'Gold-tone frame clasp', 'Satin interior', 'Detachable chain strap'],
    inStock: true,
  },
  {
    id: 16,
    name: 'Slate Leather Work Tote',
    category: 'tote',
    categoryLabel: 'Work Tote',
    price: 320,
    originalPrice: 380,
    image: 'images/bag_grey_laptop_tote.png',
    badge: 'sale',
    rating: 5,
    reviews: 52,
    colors: ['#6a6a6a', '#3a3a3a', '#c9a96e'],
    description: 'Where boardroom meets boutique. This slate grey leather work tote fits a 15" laptop, your heels, and a full day\'s ambitions with room to spare.',
    features: ['Pebbled leather', 'Padded laptop sleeve (up to 15")', 'Silver zip closure', 'Three exterior pockets', 'Trolley sleeve on back'],
    inStock: true,
  },
  {
    id: 17,
    name: 'Leopard Print Crossbody',
    category: 'crossbody',
    categoryLabel: 'Crossbody Bag',
    price: 235,
    originalPrice: null,
    image: 'images/bag_leopard_crossbody.png',
    badge: 'new',
    rating: 4,
    reviews: 23,
    colors: ['#c19a6b', '#8b5e3c', '#1a1613'],
    description: 'Wild at heart, polished in execution. This calf-hair leopard print crossbody is compact enough for evenings and bold enough to define an entire outfit.',
    features: ['Calf-hair print leather', 'Gold chain strap', 'Zip-top closure', 'Suede interior', 'Compact structured shape'],
    inStock: true,
  },
];

/* ======================================
   STATE
   ====================================== */
const state = {
  cart: JSON.parse(localStorage.getItem('as_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('as_wishlist') || '[]'),
  filter: 'all',
  sort: 'default',
  searchQuery: '',
  testimonialIndex: 0,
};

/* ======================================
   UTILITIES
   ====================================== */
function $(id) { return document.getElementById(id); }
function $q(sel) { return document.querySelector(sel); }
function $qa(sel) { return document.querySelectorAll(sel); }

function saveState() {
  localStorage.setItem('as_cart', JSON.stringify(state.cart));
  localStorage.setItem('as_wishlist', JSON.stringify(state.wishlist));
}

function formatPrice(n) {
  return '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function renderStars(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

function showToast(message, type = 'default') {
  const toast = $('toast');
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function getProductFilter(product, color) {
  if (!product || !color || !product.colors || product.colors.indexOf(color) === 0) {
    return 'none';
  }
  
  const hex = color.toLowerCase();
  
  // Black/Dark colors
  if (hex === '#1a1613' || hex === '#0e0c0a' || hex === '#3a3a3a' || hex === '#2d0a3a') {
    return 'grayscale(1) brightness(0.4) contrast(1.1)';
  }
  // White/Ivory/Beige/Blush
  if (hex === '#f5f0e8' || hex === '#e8e0d5' || hex === '#e8c4b0') {
    return 'sepia(0.25) saturate(0.3) brightness(1.5) contrast(0.9)';
  }
  // Tan/Camel/Brown/Cognac
  if (hex === '#c9a96e' || hex === '#c19a6b' || hex === '#8b6e4e' || hex === '#8b5e3c' || hex === '#c0b090') {
    return 'sepia(0.65) saturate(1.3) hue-rotate(5deg) brightness(0.85)';
  }
  // Green/Olive
  if (hex === '#2d5a3d' || hex === '#4a5e3a') {
    return 'hue-rotate(90deg) saturate(0.8) brightness(0.8)';
  }
  // Navy/Cobalt Blue
  if (hex === '#1a2a4a' || hex === '#1a3a6a') {
    return 'hue-rotate(200deg) saturate(1.1) brightness(0.7)';
  }
  // Red/Scarlet/Plum/Rose
  if (hex === '#7a1f2e' || hex === '#9b1c1c' || hex === '#5a1a6a' || hex === '#e8a0b0') {
    if (hex === '#e8a0b0') return 'hue-rotate(330deg) saturate(0.8) brightness(1.2)';
    if (hex === '#5a1a6a') return 'hue-rotate(290deg) saturate(0.9) brightness(0.6)';
    return 'hue-rotate(0deg) saturate(1.2) brightness(0.85)';
  }
  
  return 'none';
}

/* ======================================
   LOADER
   ====================================== */
window.addEventListener('load', () => {
  setTimeout(() => {
    $('loader').classList.add('hidden');
    initReveal();
  }, 1400);
});

/* ======================================
   HEADER — SCROLL BEHAVIOUR
   ====================================== */
const header = $('site-header');
const backToTopBtn = $('back-to-top');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Sticky header
  if (scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Back to top
  if (scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }

  // Active nav highlighting
  updateActiveNav();
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function updateActiveNav() {
  const sections = ['home', 'collection', 'about', 'contact'];
  const scrollY = window.scrollY + 120;

  sections.forEach(id => {
    const section = document.getElementById(id);
    const link = $q(`.nav-link[data-section="${id}"]`);
    if (!section || !link) return;

    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollY >= top && scrollY < bottom) {
      $qa('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

/* ======================================
   MOBILE NAV
   ====================================== */
const hamburger = $('hamburger-btn');
const mobileNav = $('mobile-nav');
const mobileNavOverlay = $('mobile-nav-overlay');
const mobileNavClose = $('mobile-nav-close');

function openMobileNav() {
  hamburger.classList.add('open');
  mobileNav.classList.add('open');
  mobileNavOverlay.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeMobileNav() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
  mobileNavOverlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

hamburger.addEventListener('click', openMobileNav);
mobileNavClose.addEventListener('click', closeMobileNav);
mobileNavOverlay.addEventListener('click', closeMobileNav);

$qa('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

/* ======================================
   SEARCH
   ====================================== */
const searchToggle = $('search-toggle-btn');
const searchBar = $('search-bar');
const searchClose = $('search-close');
const searchInput = $('search-input');

searchToggle.addEventListener('click', () => {
  searchBar.classList.toggle('open');
  if (searchBar.classList.contains('open')) {
    setTimeout(() => searchInput.focus(), 100);
  } else {
    searchInput.value = '';
    state.searchQuery = '';
    renderProducts();
  }
});

searchClose.addEventListener('click', () => {
  searchBar.classList.remove('open');
  searchInput.value = '';
  state.searchQuery = '';
  renderProducts();
});

searchInput.addEventListener('input', () => {
  state.searchQuery = searchInput.value.trim().toLowerCase();
  state.filter = 'all';
  $qa('.filter-btn').forEach(b => b.classList.remove('active'));
  $('filter-all').classList.add('active');
  renderProducts();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchBar.classList.remove('open');
    searchInput.value = '';
    state.searchQuery = '';
    renderProducts();
    closeCart();
    closeWishlist();
    closeModal();
  }
});

/* ======================================
   CART
   ====================================== */
const cartToggle = $('cart-toggle-btn');
const cartOverlay = $('cart-overlay');
const cartDrawer = $('cart-drawer');
const cartCloseBtn = $('cart-close-btn');
const continueShoppingBtn = $('continue-shopping-btn');

function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('active');
  cartOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('active');
  cartOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

cartToggle.addEventListener('click', openCart);
cartCloseBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
continueShoppingBtn && continueShoppingBtn.addEventListener('click', closeCart);

$('checkout-btn').addEventListener('click', () => {
  if (state.cart.length === 0) {
    showToast('Your bag is empty! Add some items first.', 'error');
    return;
  }
  closeCart();
  window.location.href = 'checkout.html';
});

function addToCart(productId, quantity = 1, color = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const chosenColor = color || (product.colors ? product.colors[0] : null);

  const existing = state.cart.find(item => item.id === productId && (item.color === chosenColor || (!item.color && chosenColor === product.colors[0])));
  if (existing) {
    existing.quantity += quantity;
    if (!existing.color) existing.color = chosenColor;
  } else {
    state.cart.push({ id: productId, quantity, color: chosenColor });
  }

  saveState();
  renderCart();
  updateCartBadge();
  showToast(`✓ "${product.name}" added to your bag`, 'success');

  // Bump animation on badge
  const badge = $('cart-count');
  badge.classList.remove('bump');
  void badge.offsetWidth;
  badge.classList.add('bump');
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveState();
  renderCart();
  updateCartBadge();
}

function changeQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity = Math.max(1, item.quantity + delta);
  saveState();
  renderCart();
  updateCartBadge();
}

function updateCartBadge() {
  const total = state.cart.reduce((sum, i) => sum + i.quantity, 0);
  $('cart-count').textContent = total;
  $('cart-count-badge').textContent = total;
}

function renderCart() {
  const cartItemsEl = $('cart-items');
  const cartFooter = $('cart-footer');

  if (state.cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛍️</div>
        <p>Your bag is empty</p>
        <span>Add some beautiful pieces</span>
      </div>`;
    cartFooter.style.display = 'none';
    return;
  }

  cartFooter.style.display = 'block';

  let subtotal = 0;
  let html = '';

  state.cart.forEach(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return;
    const lineTotal = p.price * item.quantity;
    subtotal += lineTotal;

    const imgStyle = item.color ? `style="filter: ${getProductFilter(p, item.color)}"` : '';
    const colorCircle = item.color 
      ? `<span class="cart-item-color-dot" style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${item.color};margin-right:6px;border:1px solid rgba(255,255,255,0.2);vertical-align:middle;"></span>`
      : '';

    html += `
      <div class="cart-item" data-id="${p.id}">
        <img class="cart-item-img" src="${p.image}" alt="${p.name}" loading="lazy" ${imgStyle} />
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-color">${colorCircle}${p.categoryLabel}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" data-action="dec" data-id="${p.id}" aria-label="Decrease quantity">−</button>
            <span class="qty-num">${item.quantity}</span>
            <button class="qty-btn" data-action="inc" data-id="${p.id}" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
          <button class="cart-item-remove" data-id="${p.id}" aria-label="Remove ${p.name}">✕</button>
          <span class="cart-item-price">${formatPrice(lineTotal)}</span>
        </div>
      </div>`;
  });

  cartItemsEl.innerHTML = html;
  $('cart-subtotal').textContent = formatPrice(subtotal);

  // Bind cart item buttons
  cartItemsEl.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const delta = btn.dataset.action === 'inc' ? 1 : -1;
      changeQty(id, delta);
    });
  });

  cartItemsEl.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(parseInt(btn.dataset.id));
    });
  });
}

/* ======================================
   WISHLIST
   ====================================== */
const wishlistToggle = $('wishlist-toggle-btn');
const wishlistOverlay = $('wishlist-overlay');
const wishlistDrawer = $('wishlist-drawer');
const wishlistCloseBtn = $('wishlist-close-btn');

function openWishlist() {
  wishlistDrawer.classList.add('open');
  wishlistOverlay.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeWishlist() {
  wishlistDrawer.classList.remove('open');
  wishlistOverlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

wishlistToggle.addEventListener('click', openWishlist);
wishlistCloseBtn.addEventListener('click', closeWishlist);
wishlistOverlay.addEventListener('click', closeWishlist);

function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const idx = state.wishlist.indexOf(productId);
  if (idx === -1) {
    state.wishlist.push(productId);
    showToast(`🤍 "${product.name}" saved to wishlist`);
  } else {
    state.wishlist.splice(idx, 1);
    showToast(`Removed from wishlist`);
  }

  saveState();
  renderWishlist();
  updateWishlistBadge();
  renderProducts(); // update card hearts
}

function updateWishlistBadge() {
  const count = state.wishlist.length;
  $('wishlist-count').textContent = count;
  $('wishlist-count-badge').textContent = count;
}

function renderWishlist() {
  const container = $('wishlist-items');

  if (state.wishlist.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🤍</div>
        <p>Your wishlist is empty</p>
        <span>Save items you love</span>
      </div>`;
    return;
  }

  let html = '';
  state.wishlist.forEach(id => {
    const p = PRODUCTS.find(pr => pr.id === id);
    if (!p) return;
    html += `
      <div class="wishlist-item" data-id="${p.id}">
        <img class="wishlist-item-img" src="${p.image}" alt="${p.name}" loading="lazy" />
        <div>
          <div class="wishlist-item-name">${p.name}</div>
          <div class="wishlist-item-price">${formatPrice(p.price)}</div>
          <button class="wishlist-add-btn" data-id="${p.id}">Add to Bag</button>
        </div>
        <button class="wishlist-remove-btn" data-id="${p.id}" aria-label="Remove from wishlist">✕</button>
      </div>`;
  });

  container.innerHTML = html;

  container.querySelectorAll('.wishlist-add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart(parseInt(btn.dataset.id));
    });
  });

  container.querySelectorAll('.wishlist-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleWishlist(parseInt(btn.dataset.id));
    });
  });
}

/* ======================================
   PRODUCT RENDERING
   ====================================== */
function getFilteredSorted() {
  let products = [...PRODUCTS];

  // Search
  if (state.searchQuery) {
    products = products.filter(p =>
      p.name.toLowerCase().includes(state.searchQuery) ||
      p.category.toLowerCase().includes(state.searchQuery) ||
      p.categoryLabel.toLowerCase().includes(state.searchQuery)
    );
  }

  // Filter by category
  if (state.filter !== 'all') {
    products = products.filter(p => p.category === state.filter);
  }

  // Sort
  switch (state.sort) {
    case 'price-asc':
      products.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      products.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      products.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      break;
  }

  return products;
}

function renderProducts() {
  const grid = $('products-grid');
  const products = getFilteredSorted();

  $('product-count').textContent = `${products.length} product${products.length !== 1 ? 's' : ''}`;

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <h3>No bags found</h3>
        <p>Try a different search or filter.</p>
      </div>`;
    return;
  }

  grid.innerHTML = products.map((p, i) => {
    const isWished = state.wishlist.includes(p.id);
    const badgeHtml = p.badge
      ? `<div class="product-card-badges"><span class="badge-${p.badge}">${p.badge === 'new' ? 'New' : 'Sale'}</span></div>`
      : '';

    const priceHtml = p.originalPrice
      ? `<span class="price-current">${formatPrice(p.price)}</span><span class="price-orig">${formatPrice(p.originalPrice)}</span>`
      : `<span class="price-current">${formatPrice(p.price)}</span>`;

    return `
      <article class="product-card" role="listitem" data-id="${p.id}" id="product-${p.id}" style="animation-delay:${i * 0.07}s">
        <div class="product-card-image">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
          ${badgeHtml}
          <div class="card-actions">
            <button class="card-action-btn wishlist-btn ${isWished ? 'wished' : ''}" data-id="${p.id}" aria-label="${isWished ? 'Remove from wishlist' : 'Add to wishlist'}">
              <svg viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <button class="card-action-btn quick-view-btn" data-id="${p.id}" aria-label="Quick view ${p.name}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="product-card-info">
          <div class="product-card-category">${p.categoryLabel}</div>
          <h3 class="product-card-name">${p.name}</h3>
          <div class="product-card-stars">
            ${renderStars(p.rating)} <span>(${p.reviews})</span>
          </div>
          <div class="product-card-footer">
            <div class="product-card-price">${priceHtml}</div>
            <button class="card-add-btn" data-id="${p.id}" aria-label="Add ${p.name} to cart">Add</button>
          </div>
        </div>
      </article>`;
  }).join('');

  // Bind events
  grid.querySelectorAll('.card-add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id));
    });
  });

  grid.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(parseInt(btn.dataset.id));
    });
  });

  grid.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(parseInt(btn.dataset.id));
    });
  });

  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      openModal(parseInt(card.dataset.id));
    });
  });
}

/* ======================================
   FILTER + SORT
   ====================================== */
$qa('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $qa('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.filter = btn.dataset.filter;
    state.searchQuery = '';
    searchInput.value = '';
    renderProducts();
  });
});

$('sort-select').addEventListener('change', (e) => {
  state.sort = e.target.value;
  renderProducts();
});

// Category cards filter
$qa('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const filter = card.dataset.filter;
    state.filter = filter;
    $qa('.filter-btn').forEach(b => b.classList.remove('active'));
    const filterBtn = $(`filter-${filter}`);
    if (filterBtn) filterBtn.classList.add('active');
    renderProducts();
    document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
  });
});

/* ======================================
   PRODUCT MODAL
   ====================================== */
const modalOverlay = $('modal-overlay');
const productModal = $('product-modal');
const modalCloseBtn = $('modal-close-btn');
const modalContent = $('modal-content');

let selectedColor = null;

function openModal(productId) {
  const p = PRODUCTS.find(pr => pr.id === productId);
  if (!p) return;

  const isWished = state.wishlist.includes(p.id);
  selectedColor = p.colors[0];

  const discountHtml = p.originalPrice
    ? `<span class="modal-orig-price">${formatPrice(p.originalPrice)}</span>
       <span class="modal-discount">${Math.round((1 - p.price/p.originalPrice) * 100)}% off</span>`
    : '';

  const colorsHtml = p.colors.map((c, i) => `
    <div class="color-swatch ${i === 0 ? 'selected' : ''}"
         style="background:${c}"
         data-color="${c}"
         title="Color option ${i+1}"
         tabindex="0"
         role="radio"
         aria-checked="${i === 0}"
         aria-label="Color ${i+1}"></div>
  `).join('');

  const featuresHtml = p.features.map(f => `
    <div class="modal-feature">
      <span>✦</span>
      <span>${f}</span>
    </div>
  `).join('');

  modalContent.innerHTML = `
    <div class="modal-image-section">
      <img src="${p.image}" alt="${p.name}" />
    </div>
    <div class="modal-info-section">
      <span class="modal-badge">${p.categoryLabel}</span>
      <h2 class="modal-name">${p.name}</h2>
      <div class="modal-price-row">
        <span class="modal-price">${formatPrice(p.price)}</span>
        ${discountHtml}
      </div>
      <div class="modal-stars">${'★'.repeat(p.rating)}${'☆'.repeat(5 - p.rating)} <span style="color:var(--color-text-muted);font-size:0.8rem;">(${p.reviews} reviews)</span></div>
      <p class="modal-desc">${p.description}</p>
      <div class="modal-colors">
        <label>Color Options</label>
        <div class="color-swatches" role="radiogroup" aria-label="Color selection">${colorsHtml}</div>
      </div>
      <div class="modal-actions">
        <button class="modal-add-cart" data-id="${p.id}">Add to Bag</button>
        <button class="modal-wishlist-btn ${isWished ? 'active' : ''}" data-id="${p.id}" aria-label="${isWished ? 'Remove from wishlist' : 'Add to wishlist'}">
          <svg viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="modal-features">
        ${featuresHtml}
      </div>
    </div>`;

  // Bind modal buttons
  modalContent.querySelector('.modal-add-cart').addEventListener('click', () => {
    addToCart(p.id, 1, selectedColor);
    closeModal();
    openCart();
  });

  modalContent.querySelector('.modal-wishlist-btn').addEventListener('click', (e) => {
    toggleWishlist(p.id);
    const btn = e.currentTarget;
    const isNowWished = state.wishlist.includes(p.id);
    btn.classList.toggle('active', isNowWished);
    btn.querySelector('svg').setAttribute('fill', isNowWished ? 'currentColor' : 'none');
  });

  modalContent.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      modalContent.querySelectorAll('.color-swatch').forEach(s => {
        s.classList.remove('selected');
        s.setAttribute('aria-checked', 'false');
      });
      swatch.classList.add('selected');
      swatch.setAttribute('aria-checked', 'true');
      selectedColor = swatch.dataset.color;

      // Update image filter
      const img = modalContent.querySelector('.modal-image-section img');
      if (img) {
        img.style.filter = getProductFilter(p, selectedColor);
      }
    });
  });

  modalOverlay.classList.add('active');
  productModal.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  modalOverlay.classList.remove('active');
  productModal.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

/* ======================================
   TESTIMONIALS SLIDER
   ====================================== */
const testimonialCards = $qa('.testimonial-card');
const totalTestimonials = testimonialCards.length;
let testimonialAutoPlay;

function buildDots() {
  const dotsContainer = $('t-dots');
  dotsContainer.innerHTML = '';
  for (let i = 0; i < totalTestimonials; i++) {
    const dot = document.createElement('button');
    dot.classList.add('t-dot');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Testimonial ${i + 1}`);
    dot.addEventListener('click', () => goToTestimonial(i));
    dotsContainer.appendChild(dot);
  }
}

function goToTestimonial(index) {
  state.testimonialIndex = (index + totalTestimonials) % totalTestimonials;
  const track = $('testimonials-track');
  track.style.transform = `translateX(-${state.testimonialIndex * 100}%)`;

  $qa('.t-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === state.testimonialIndex);
  });
}

function startAutoPlay() {
  testimonialAutoPlay = setInterval(() => {
    goToTestimonial(state.testimonialIndex + 1);
  }, 5000);
}

$('t-prev').addEventListener('click', () => {
  clearInterval(testimonialAutoPlay);
  goToTestimonial(state.testimonialIndex - 1);
  startAutoPlay();
});

$('t-next').addEventListener('click', () => {
  clearInterval(testimonialAutoPlay);
  goToTestimonial(state.testimonialIndex + 1);
  startAutoPlay();
});

// Touch swipe
let touchStartX = 0;
const tTrack = $('testimonials-track');

tTrack.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });

tTrack.addEventListener('touchend', (e) => {
  const delta = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(delta) > 40) {
    clearInterval(testimonialAutoPlay);
    goToTestimonial(state.testimonialIndex + (delta > 0 ? 1 : -1));
    startAutoPlay();
  }
}, { passive: true });

/* ======================================
   NEWSLETTER FORM
   ====================================== */
$('newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = $('newsletter-email').value.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('Please enter a valid email address.', 'error');
    return;
  }

  showToast('🎉 Welcome to the AS. Circle!', 'success');
  $('newsletter-email').value = '';
});

/* ======================================
   CONTACT FORM
   ====================================== */
$('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = $('contact-name').value.trim();
  const email = $('contact-email').value.trim();
  const message = $('contact-message').value.trim();

  if (!name || !email || !message) {
    showToast('Please fill in all required fields.', 'error');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('Please enter a valid email address.', 'error');
    return;
  }

  const btn = $('contact-submit-btn');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    showToast('✓ Message sent! We\'ll be in touch soon.', 'success');
    $('contact-form').reset();
    btn.textContent = 'Send Message';
    btn.disabled = false;
  }, 1200);
});

/* ======================================
   SCROLL REVEAL
   ====================================== */
function initReveal() {
  const elements = $qa(
    '.feature-item, .category-card, .about-text, .about-image-stack, .stat-item, .contact-info-item, .testimonial-card'
  );

  elements.forEach((el, i) => {
    el.classList.add('reveal');
    if (i % 4 === 1) el.classList.add('reveal-delay-1');
    if (i % 4 === 2) el.classList.add('reveal-delay-2');
    if (i % 4 === 3) el.classList.add('reveal-delay-3');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ======================================
   SMOOTH ANCHOR SCROLL
   ====================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ======================================
   INIT
   ====================================== */
function init() {
  renderProducts();
  renderCart();
  renderWishlist();
  updateCartBadge();
  updateWishlistBadge();
  buildDots();
  startAutoPlay();
}

init();
