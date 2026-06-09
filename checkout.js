/* ========================================
   AS. Checkout — Complete JavaScript
   ======================================== */
'use strict';

/* ======================================
   PRODUCT DATA (shared with main store)
   ====================================== */
const PRODUCTS = [
  { id: 1,  name: 'Bordeaux Structured Handbag',  categoryLabel: 'Shoulder Bag',   price: 289, image: 'images/bag_burgundy.png' },
  { id: 2,  name: 'The Camel City Tote',           categoryLabel: 'Tote Bag',       price: 249, originalPrice: 310, image: 'images/bag_camel_tote.png' },
  { id: 3,  name: 'Noir Quilted Chain Bag',        categoryLabel: 'Shoulder Bag',   price: 335, image: 'images/bag_black_quilted.png' },
  { id: 4,  name: 'Blush Nude Crossbody',          categoryLabel: 'Crossbody Bag',  price: 195, originalPrice: 240, image: 'images/bag_nude_crossbody.png' },
  { id: 5,  name: 'Pearl Evening Clutch',          categoryLabel: 'Clutch',         price: 175, image: 'images/bag_white_clutch.png' },
  { id: 6,  name: 'Verdant Forest Satchel',        categoryLabel: 'Satchel',        price: 315, image: 'images/bag_forest_green.png' },
  { id: 7,  name: 'Midnight Navy Bucket Bag',      categoryLabel: 'Bucket Bag',     price: 225, image: 'images/bag_navy_bucket.png' },
  { id: 8,  name: 'Scarlet Patent Handbag',        categoryLabel: 'Shoulder Bag',   price: 310, image: 'images/bag_red_patent.png' },
  { id: 9,  name: 'Tan Suede Mini Bag',            categoryLabel: 'Crossbody Bag',  price: 185, originalPrice: 220, image: 'images/bag_tan_mini.png' },
  { id: 10, name: 'Cobalt Studded Top Handle',     categoryLabel: 'Shoulder Bag',   price: 345, image: 'images/bag_cobalt_studded.png' },
  { id: 11, name: 'Olive Leather Hobo',            categoryLabel: 'Hobo Bag',       price: 265, image: 'images/bag_olive_hobo.png' },
  { id: 12, name: 'Rose Baguette Bag',             categoryLabel: 'Baguette',       price: 215, originalPrice: 260, image: 'images/bag_pink_baguette.png' },
  { id: 13, name: 'Ivory Structured Top Handle',   categoryLabel: 'Top Handle Bag', price: 295, image: 'images/bag_ivory_structured.png' },
  { id: 14, name: 'Cognac Woven Tote',             categoryLabel: 'Tote Bag',       price: 275, image: 'images/bag_cognac_woven.png' },
  { id: 15, name: 'Plum Velvet Evening Bag',       categoryLabel: 'Evening Bag',    price: 190, image: 'images/bag_plum_velvet.png' },
  { id: 16, name: 'Slate Leather Work Tote',       categoryLabel: 'Work Tote',      price: 320, originalPrice: 380, image: 'images/bag_grey_laptop_tote.png' },
  { id: 17, name: 'Leopard Print Crossbody',       categoryLabel: 'Crossbody Bag',  price: 235, image: 'images/bag_leopard_crossbody.png' },
];

/* ======================================
   VOUCHER CODES
   ====================================== */
const VOUCHERS = {
  'SAVE10':    { type: 'percent',  value: 10,  label: '10% Off',           minOrder: 0   },
  'GOLD20':    { type: 'percent',  value: 20,  label: '20% Off',           minOrder: 300 },
  'NEWUSER':   { type: 'percent',  value: 15,  label: '15% Off for New Users', minOrder: 0 },
  'FREESHIP':  { type: 'shipping', value: 0,   label: 'Free Shipping',     minOrder: 0   },
  'SAVE50':    { type: 'fixed',    value: 50,  label: '$50 Off',           minOrder: 250 },
  'AS10':      { type: 'fixed',    value: 10,  label: '$10 Off',           minOrder: 0   },
};

/* ======================================
   STATE
   ====================================== */
const state = {
  cart: JSON.parse(localStorage.getItem('as_cart') || '[]'),
  currentStep: 1,
  appliedVoucher: null,
  giftWrap: false,
  orderNotes: '',
  shippingMethod: 'standard',
  shippingCost: 0,
  paymentMethod: 'card',
  address: null,
  orderPlaced: false,
};

/* ======================================
   UTILS
   ====================================== */
function $(id) { return document.getElementById(id); }
function $q(s) { return document.querySelector(s); }
function $qa(s) { return document.querySelectorAll(s); }

function fmt(n) {
  return '$' + parseFloat(n).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function showToast(msg, type = 'default') {
  const t = $('co-toast');
  t.textContent = msg;
  t.className = `co-toast ${type} show`;
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 3200);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getProductFilter(productId, color) {
  const defaultColors = {
    1: '#7a1f2e', 2: '#c19a6b', 3: '#0e0c0a', 4: '#e8c4b0', 5: '#f5f0e8',
    6: '#2d5a3d', 7: '#1a2a4a', 8: '#9b1c1c', 9: '#c19a6b', 10: '#1a3a6a',
    11: '#4a5e3a', 12: '#e8a0b0', 13: '#f5f0e8', 14: '#8b5e3c', 15: '#5a1a6a',
    16: '#6a6a6a', 17: '#c19a6b'
  };

  if (!color || color.toLowerCase() === defaultColors[productId]?.toLowerCase()) {
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
   CALCULATIONS
   ====================================== */
function calcSubtotal() {
  return state.cart.reduce((sum, item) => {
    const p = getProductById(item.id);
    return sum + (p ? p.price * item.quantity : 0);
  }, 0);
}

function calcDiscount(subtotal) {
  if (!state.appliedVoucher) return 0;
  const v = state.appliedVoucher;
  if (v.type === 'percent') return (subtotal * v.value) / 100;
  if (v.type === 'fixed') return Math.min(v.value, subtotal);
  return 0;
}

function calcShipping(subtotal, discount) {
  if (state.appliedVoucher && state.appliedVoucher.type === 'shipping') return 0;
  if (state.shippingMethod === 'express') return 12;
  if (state.shippingMethod === 'overnight') return 24;
  return subtotal - discount >= 150 ? 0 : 9; // free over $150
}

function calcTotals() {
  const subtotal = calcSubtotal();
  const discount = calcDiscount(subtotal);
  const shipping = calcShipping(subtotal, discount);
  const giftWrap = state.giftWrap ? 8 : 0;
  const taxable = subtotal - discount + shipping + giftWrap;
  const tax = taxable * 0.10;
  const total = taxable + tax;
  return { subtotal, discount, shipping, giftWrap, tax, total };
}

/* ======================================
   RENDER CART ITEMS (Step 1)
   ====================================== */
function renderCartItems() {
  const el = $('co-cart-items');

  if (state.cart.length === 0) {
    el.innerHTML = `
      <div style="text-align:center;padding:60px 0;color:var(--color-text-muted);">
        <div style="font-size:3rem;margin-bottom:12px;">🛍️</div>
        <p style="font-size:1rem;margin-bottom:8px;">Your bag is empty</p>
        <a href="index.html" style="color:var(--color-gold);font-size:0.85rem;">← Go back shopping</a>
      </div>`;
    return;
  }

  el.innerHTML = state.cart.map(item => {
    const p = getProductById(item.id);
    if (!p) return '';
    const imgStyle = item.color ? `style="filter: ${getProductFilter(p.id, item.color)}"` : '';
    const colorCircle = item.color 
      ? `<span class="co-item-color-dot" style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${item.color};margin-right:6px;border:1px solid rgba(255,255,255,0.2);vertical-align:middle;"></span>`
      : '';
    return `
      <div class="co-cart-item" data-id="${p.id}">
        <img class="co-cart-item-img" src="${p.image}" alt="${p.name}" loading="lazy" ${imgStyle} />
        <div>
          <div class="co-item-name">${p.name}</div>
          <div class="co-item-cat">${colorCircle}${p.categoryLabel}</div>
          <div class="co-item-qty-row">
            <button class="co-qty-btn" data-action="dec" data-id="${p.id}" aria-label="Decrease">−</button>
            <span class="co-qty-num">${item.quantity}</span>
            <button class="co-qty-btn" data-action="inc" data-id="${p.id}" aria-label="Increase">+</button>
          </div>
        </div>
        <div class="co-item-right">
          <button class="co-item-remove" data-id="${p.id}" aria-label="Remove">✕ Remove</button>
          <span class="co-item-price">${fmt(p.price * item.quantity)}</span>
        </div>
      </div>`;
  }).join('');

  // Bind qty & remove
  el.querySelectorAll('.co-qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const item = state.cart.find(i => i.id === id);
      if (!item) return;
      const delta = btn.dataset.action === 'inc' ? 1 : -1;
      item.quantity = Math.max(1, item.quantity + delta);
      localStorage.setItem('as_cart', JSON.stringify(state.cart));
      renderCartItems();
      renderSummary();
    });
  });

  el.querySelectorAll('.co-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      state.cart = state.cart.filter(i => i.id !== id);
      localStorage.setItem('as_cart', JSON.stringify(state.cart));
      renderCartItems();
      renderSummary();
      showToast('Item removed', 'default');
    });
  });
}

/* ======================================
   RENDER ORDER SUMMARY (Right Sidebar)
   ====================================== */
function renderSummary() {
  const { subtotal, discount, shipping, giftWrap, tax, total } = calcTotals();

  // Items
  const itemsEl = $('summary-items');
  itemsEl.innerHTML = state.cart.map(item => {
    const p = getProductById(item.id);
    if (!p) return '';
    const imgStyle = item.color ? `style="filter: ${getProductFilter(p.id, item.color)}"` : '';
    const colorCircle = item.color 
      ? `<span class="co-item-color-dot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${item.color};margin-right:6px;border:1px solid rgba(255,255,255,0.2);vertical-align:middle;"></span>`
      : '';
    return `
      <div class="summary-item">
        <div class="summary-item-img-wrap">
          <img class="summary-item-img" src="${p.image}" alt="${p.name}" loading="lazy" ${imgStyle} />
          <span class="summary-item-qty-badge">${item.quantity}</span>
        </div>
        <span class="summary-item-name">${colorCircle}${p.name}</span>
        <span class="summary-item-price">${fmt(p.price * item.quantity)}</span>
      </div>`;
  }).join('');

  $('sum-subtotal').textContent = fmt(subtotal);

  // Discount row
  const discRow = $('sum-discount-row');
  if (discount > 0) {
    discRow.style.display = 'flex';
    $('sum-discount-label').textContent = state.appliedVoucher ? `Voucher (${state.appliedVoucher.label})` : 'Discount';
    $('sum-discount').textContent = '-' + fmt(discount);
  } else {
    discRow.style.display = 'none';
  }

  // Gift wrap row
  const giftRow = $('sum-gift-row');
  if (giftWrap > 0) {
    giftRow.style.display = 'flex';
    $('sum-gift').textContent = fmt(giftWrap);
  } else {
    giftRow.style.display = 'none';
  }

  // Shipping
  const shipEl = $('sum-shipping');
  shipEl.textContent = shipping === 0 ? 'Free' : fmt(shipping);

  $('sum-tax').textContent = fmt(tax);
  $('sum-total').textContent = fmt(total);

  // Free shipping promo
  const freeShipNote = $('free-ship-note');
  const subtotalAfterDiscount = subtotal - discount;
  if (shipping > 0 && subtotalAfterDiscount < 150 && state.shippingMethod === 'standard') {
    const diff = 150 - subtotalAfterDiscount;
    freeShipNote.textContent = `Add ${fmt(diff)} more for free shipping!`;
  } else if (shipping === 0) {
    freeShipNote.textContent = '✓ You\'ve unlocked free shipping!';
    freeShipNote.style.color = 'var(--color-success)';
  } else {
    freeShipNote.textContent = '';
  }
}

/* ======================================
   VOUCHER
   ====================================== */
$('voucher-apply-btn').addEventListener('click', applyVoucher);
$('voucher-input').addEventListener('keydown', e => { if (e.key === 'Enter') applyVoucher(); });

// Hint clicks
$qa('.voucher-hint').forEach(hint => {
  hint.addEventListener('click', () => {
    $('voucher-input').value = hint.textContent.trim();
    applyVoucher();
  });
});

function applyVoucher() {
  const code = $('voucher-input').value.trim().toUpperCase();
  const fb = $('voucher-feedback');
  const subtotal = calcSubtotal();

  if (!code) {
    fb.textContent = 'Please enter a voucher code.';
    fb.className = 'voucher-feedback error';
    return;
  }

  const voucher = VOUCHERS[code];
  if (!voucher) {
    fb.textContent = '✗ Invalid voucher code. Try: SAVE10, GOLD20, NEWUSER, FREESHIP';
    fb.className = 'voucher-feedback error';
    state.appliedVoucher = null;
  } else if (subtotal < voucher.minOrder) {
    fb.textContent = `✗ This voucher requires a minimum order of ${fmt(voucher.minOrder)}.`;
    fb.className = 'voucher-feedback error';
    state.appliedVoucher = null;
  } else {
    state.appliedVoucher = { ...voucher, code };
    fb.textContent = `✓ Voucher "${code}" applied — ${voucher.label}!`;
    fb.className = 'voucher-feedback success';
    showToast(`🎉 Voucher applied: ${voucher.label}`, 'success');
  }

  renderSummary();
}

/* ======================================
   GIFT WRAP
   ====================================== */
$('gift-wrap-chk').addEventListener('change', e => {
  state.giftWrap = e.target.checked;
  renderSummary();
});

/* ======================================
   ORDER NOTES
   ====================================== */
$('order-notes').addEventListener('input', e => {
  state.orderNotes = e.target.value;
});

/* ======================================
   SHIPPING OPTIONS
   ====================================== */
$qa('.shipping-option').forEach(opt => {
  opt.addEventListener('click', () => {
    $qa('.shipping-option').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    const radio = opt.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = true;
      state.shippingMethod = radio.value;
    }
    renderSummary();
  });
});

/* ======================================
   PAYMENT TABS
   ====================================== */
$qa('.pay-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    $qa('.pay-tab').forEach(t => t.classList.remove('active'));
    $qa('.pay-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    state.paymentMethod = tab.dataset.method;
    const panel = $(`pay-${tab.dataset.method}`);
    if (panel) panel.classList.add('active');
  });
});

/* ======================================
   LIVE CARD PREVIEW
   ====================================== */
const cardNumber = $('card-number');
const cardHolder = $('card-holder');
const cardExpiry = $('card-expiry');
const cardCvv = $('card-cvv');

cardNumber.addEventListener('input', e => {
  let val = e.target.value.replace(/\D/g, '').substring(0, 16);
  val = val.replace(/(.{4})/g, '$1 ').trim();
  e.target.value = val;

  const display = val || '•••• •••• •••• ••••';
  const padded = display.replace(/(\d{4})/g, '$1 ').trim();
  $('card-number-display').textContent = padded.padEnd(19, '•').replace(/(\w{4})/g, '$1 ').trim();

  // Detect card type
  const raw = val.replace(/\s/g, '');
  let network = 'VISA';
  if (/^4/.test(raw)) network = 'VISA';
  else if (/^5[1-5]/.test(raw)) network = 'MC';
  else if (/^3[47]/.test(raw)) network = 'AMEX';
  else if (/^6/.test(raw)) network = 'Discover';
  $('card-network-logo').textContent = network;
  $('card-type-icon').textContent = network;
});

cardHolder.addEventListener('input', e => {
  $('card-holder-display').textContent = e.target.value.toUpperCase() || 'YOUR NAME';
});

cardExpiry.addEventListener('input', e => {
  let val = e.target.value.replace(/\D/g, '').substring(0, 4);
  if (val.length > 2) val = val.slice(0, 2) + ' / ' + val.slice(2);
  e.target.value = val;
  $('card-expiry-display').textContent = val || 'MM/YY';
});

cardCvv.addEventListener('focus', () => {
  $('credit-card-visual').style.transform = 'rotateY(180deg)';
});
cardCvv.addEventListener('blur', () => {
  $('credit-card-visual').style.transform = 'rotateY(0deg)';
});

// CVV visibility toggle
$('cvv-toggle').addEventListener('click', () => {
  const inp = $('card-cvv');
  inp.type = inp.type === 'password' ? 'text' : 'password';
});

/* ======================================
   BILLING ADDRESS TOGGLE
   ====================================== */
$qa('input[name="billing"]').forEach(radio => {
  radio.addEventListener('change', () => {
    const billingForm = $('billing-form');
    if (radio.value === 'different' && radio.checked) {
      billingForm.classList.remove('hidden');
    } else {
      billingForm.classList.add('hidden');
    }
  });
});


/* ======================================
   FORM VALIDATION
   ====================================== */
function validateField(input) {
  if (!input) return true;
  const val = input.value.trim();

  if (input.required && !val) {
    input.classList.add('error');
    input.classList.remove('valid');
    return false;
  }

  if (input.type === 'email' && val) {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    input.classList.toggle('error', !ok);
    input.classList.toggle('valid', ok);
    return ok;
  }

  if (input.type === 'tel' && val) {
    const ok = /[\d\s\-+()]{7,}/.test(val);
    input.classList.toggle('error', !ok);
    input.classList.toggle('valid', ok);
    return ok;
  }

  if (val) {
    input.classList.remove('error');
    input.classList.add('valid');
  }

  return true;
}

// Real-time validation
document.querySelectorAll('.co-form-group input, .co-form-group select, .co-form-group textarea').forEach(inp => {
  inp.addEventListener('blur', () => validateField(inp));
  inp.addEventListener('input', () => {
    if (inp.classList.contains('error')) validateField(inp);
  });
});

function validateAddressForm() {
  const required = ['addr-first','addr-last','addr-email','addr-phone','addr-line1','addr-city','addr-zip','addr-country'];
  let valid = true;
  required.forEach(id => {
    const el = $(id);
    if (!validateField(el)) valid = false;
  });
  return valid;
}

function validateCardForm() {
  if (state.paymentMethod !== 'card') return true;
  const required = ['card-holder','card-number','card-expiry','card-cvv'];
  let valid = true;
  required.forEach(id => {
    const el = $(id);
    if (!el || !el.value.trim()) {
      if (el) el.classList.add('error');
      valid = false;
    }
  });

  // Luhn-check card number
  const rawNum = $('card-number').value.replace(/\s/g, '');
  if (rawNum.length < 13) {
    $('card-number').classList.add('error');
    valid = false;
  }

  return valid;
}

/* ======================================
   STEP NAVIGATION
   ====================================== */
function goToStep(step) {
  // Hide all panels
  $qa('.co-panel').forEach(p => p.classList.remove('active'));
  $(`panel-${step}`).classList.add('active');

  // Update step indicators
  $qa('.co-step').forEach((s, i) => {
    const n = i + 1; // steps go 1,2,3,4 but there are step-lines between
  });

  const stepEls = $qa('.co-step');
  const lineEls = $qa('.co-step-line');

  stepEls.forEach((el, i) => {
    const n = parseInt(el.dataset.step);
    el.classList.remove('active', 'done');
    if (n === step) el.classList.add('active');
    if (n < step) el.classList.add('done');
  });

  lineEls.forEach((el, i) => {
    el.classList.toggle('done', i < step - 1);
  });

  state.currentStep = step;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Step 1 → 2 */
$('step1-next-btn').addEventListener('click', () => {
  if (state.cart.length === 0) {
    showToast('Your bag is empty! Please add items first.', 'error');
    return;
  }
  goToStep(2);
});

/* Step 2 → 3 */
$('step2-next-btn').addEventListener('click', () => {
  if (!validateAddressForm()) {
    showToast('Please fill in all required address fields.', 'error');
    return;
  }
  // Save address state
  state.address = {
    firstName: $('addr-first').value.trim(),
    lastName: $('addr-last').value.trim(),
    email: $('addr-email').value.trim(),
    phone: $('addr-phone').value.trim(),
    line1: $('addr-line1').value.trim(),
    line2: $('addr-line2').value.trim(),
    city: $('addr-city').value.trim(),
    state: $('addr-state').value.trim(),
    zip: $('addr-zip').value.trim(),
    country: $('addr-country').value,
  };
  goToStep(3);
});

/* Step 3 → 4 */
$('step3-next-btn').addEventListener('click', () => {
  if (state.paymentMethod === 'card' && !validateCardForm()) {
    showToast('Please complete your card details.', 'error');
    return;
  }
  if (state.paymentMethod === 'paypal' && !$('paypal-email').value.trim()) {
    showToast('Please enter your PayPal email.', 'error');
    return;
  }
  if (state.paymentMethod === 'easypaisa' && !$('wallet-number').value.trim()) {
    showToast('Please enter your mobile wallet number.', 'error');
    return;
  }
  buildReview();
  goToStep(4);
});

/* Back buttons */
$('back-to-1').addEventListener('click', () => goToStep(1));
$('back-to-1-btn').addEventListener('click', () => goToStep(1));
$('back-to-2').addEventListener('click', () => goToStep(2));
$('back-to-2-btn').addEventListener('click', () => goToStep(2));
$('back-to-3').addEventListener('click', () => goToStep(3));
$('back-to-3-btn').addEventListener('click', () => goToStep(3));

/* ======================================
   BUILD REVIEW (Step 4)
   ====================================== */
function buildReview() {
  const { subtotal, discount, shipping, giftWrap, tax, total } = calcTotals();

  // Items
  $('review-items').innerHTML = state.cart.map(item => {
    const p = getProductById(item.id);
    if (!p) return '';
    const imgStyle = item.color ? `style="filter: ${getProductFilter(p.id, item.color)}"` : '';
    const colorCircle = item.color 
      ? `<span class="co-item-color-dot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${item.color};margin-right:6px;border:1px solid rgba(255,255,255,0.2);vertical-align:middle;"></span>`
      : '';
    return `
      <div class="review-item">
        <img src="${p.image}" alt="${p.name}" loading="lazy" ${imgStyle} />
        <span class="review-item-name">${colorCircle}${p.name}</span>
        <span class="review-item-qty">×${item.quantity}</span>
        <span class="review-item-price">${fmt(p.price * item.quantity)}</span>
      </div>`;
  }).join('');

  // Address
  const addr = state.address;
  $('review-address').innerHTML = addr ? `
    <p>
      <strong style="color:var(--color-cream)">${addr.firstName} ${addr.lastName}</strong><br/>
      ${addr.line1}${addr.line2 ? ', ' + addr.line2 : ''}<br/>
      ${addr.city}${addr.state ? ', ' + addr.state : ''} ${addr.zip}<br/>
      ${addr.country}<br/>
      <span style="color:var(--color-gold)">${addr.phone}</span>
    </p>` : '<p>No address entered.</p>';

  // Payment
  const payIcons = { card: '💳', paypal: '🅿️', easypaisa: '📱', cod: '💵' };
  const payLabels = {
    card: 'Credit / Debit Card' + (cardNumber.value ? ` ****${cardNumber.value.replace(/\s/g,'').slice(-4)}` : ''),
    paypal: 'PayPal' + ($('paypal-email').value ? ` (${$('paypal-email').value})` : ''),
    easypaisa: ($q('input[name="wallet-provider"]:checked')?.value || 'EasyPaisa') + ($('wallet-number').value ? ` (${$('wallet-number').value})` : ''),
    cod: 'Cash on Delivery'
  };
  $('review-payment').innerHTML = `
    <span class="pay-method-icon">${payIcons[state.paymentMethod]}</span>
    <span>${payLabels[state.paymentMethod]}</span>`;

  // Shipping
  const shipLabels = { standard: 'Standard Delivery (5–7 days)', express: 'Express Delivery (2–3 days)', overnight: 'Overnight Delivery (Next day)' };
  $('review-shipping').innerHTML = `<p>${shipLabels[state.shippingMethod] || 'Standard Delivery'} — <span style="color:var(--color-gold)">${shipping === 0 ? 'Free' : fmt(shipping)}</span></p>`;

  // Totals
  let totalsHtml = `
    <div class="review-total-line"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>`;
  if (discount > 0) {
    totalsHtml += `<div class="review-total-line" style="color:var(--color-success)"><span>Discount (${state.appliedVoucher?.code})</span><span>-${fmt(discount)}</span></div>`;
  }
  if (giftWrap > 0) {
    totalsHtml += `<div class="review-total-line"><span>Gift Wrapping</span><span>${fmt(giftWrap)}</span></div>`;
  }
  totalsHtml += `
    <div class="review-total-line"><span>Shipping</span><span>${shipping === 0 ? 'Free' : fmt(shipping)}</span></div>
    <div class="review-total-line"><span>Tax (10%)</span><span>${fmt(tax)}</span></div>
    <div class="review-total-line grand"><span>Total</span><span>${fmt(total)}</span></div>`;

  if (state.orderNotes) {
    totalsHtml += `<div class="review-total-line" style="margin-top:12px;flex-direction:column;gap:4px;align-items:flex-start;"><span style="font-weight:600;">Order Notes:</span><span style="color:var(--color-text-muted);font-size:0.82rem;">${state.orderNotes}</span></div>`;
  }

  $('review-totals').innerHTML = totalsHtml;
}

/* ======================================
   PLACE ORDER
   ====================================== */
$('place-order-btn').addEventListener('click', () => {
  if (!$('terms-chk').checked) {
    showToast('Please accept the Terms of Service to continue.', 'error');
    return;
  }

  const btn = $('place-order-btn');
  btn.classList.add('loading');
  btn.innerHTML = `<span class="spinner"></span> Processing Order...`;

  // Simulate payment processing
  setTimeout(() => {
    placeOrder();
  }, 2200);
});

function placeOrder() {
  // Generate order ID
  const orderId = 'AS-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();

  const { total, shipping } = calcTotals();
  const addr = state.address;
  const etaDays = state.shippingMethod === 'overnight' ? '1' : state.shippingMethod === 'express' ? '2-3' : '5-7';
  const today = new Date();
  const etaDate = new Date(today.setDate(today.getDate() + (state.shippingMethod === 'overnight' ? 1 : state.shippingMethod === 'express' ? 3 : 7)));
  const etaStr = etaDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  // Show success overlay
  $('success-order-id').textContent = `Order ID: ${orderId}`;
  $('success-details').innerHTML = `
    ${addr ? `Delivering to <strong style="color:var(--color-cream)">${addr.firstName} ${addr.lastName}</strong>, ${addr.city}, ${addr.country}<br/>` : ''}
    ${addr?.email ? `Confirmation sent to <strong style="color:var(--color-cream)">${addr.email}</strong><br/>` : ''}
    Total charged: <strong style="color:var(--color-gold)">${fmt(total)}</strong>
  `;
  $('success-eta').innerHTML = `📦 Estimated delivery: <strong style="color:var(--color-gold)">${etaStr}</strong>`;

  const overlay = $('success-overlay');
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');

  // Clear cart
  state.cart = [];
  localStorage.setItem('as_cart', JSON.stringify([]));

  // Store order in localStorage
  const orders = JSON.parse(localStorage.getItem('as_orders') || '[]');
  orders.push({
    id: orderId,
    date: new Date().toISOString(),
    items: state.cart,
    total,
    address: state.address,
    paymentMethod: state.paymentMethod,
    shipping: state.shippingMethod,
    voucher: state.appliedVoucher?.code || null,
  });
  localStorage.setItem('as_orders', JSON.stringify(orders));
}

/* ======================================
   INIT
   ====================================== */
function init() {
  // If cart is empty and we're on checkout, redirect
  if (state.cart.length === 0) {
    // Don't redirect — show empty state
  }


  renderCartItems();
  renderSummary();
  goToStep(1);

  // Update standard shipping label to show free or cost
  const subtotal = calcSubtotal();
  const standardPriceEl = $('ship-standard-price');
  if (standardPriceEl) {
    standardPriceEl.textContent = subtotal >= 150 ? 'Free' : '$9.00';
  }
}

init();
