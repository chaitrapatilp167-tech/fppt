/* STACKLY — shared logic v2.0
   Cart, wishlist, header, search, toast, back-to-top, animations. */

const STORE_KEYS = { cart:"stackly_cart", wishlist:"stackly_wishlist", user:"stackly_user" };

/* ============================================================
   STORAGE
   ============================================================ */
function readStore(key) {
  try { const r = localStorage.getItem(key); return r ? JSON.parse(r) : []; } catch { return []; }
}
function writeStore(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* ignore */ }
}

/* ============================================================
   CART
   ============================================================ */
function getCart()       { return readStore(STORE_KEYS.cart); }
function saveCart(cart)  { writeStore(STORE_KEYS.cart, cart); updateHeaderCounts(); }

function addToCart(productId, size, color, qty) {
  const cart = getCart();
  const existing = cart.find(i => i.id === productId && i.size === size && i.color === color);
  if (existing) { existing.qty += qty; } else { cart.push({ id:productId, size, color, qty }); }
  saveCart(cart);
  const p = getProductById(productId);
  if (p) showToast(`✓ ${p.name} added to cart`, 'success');
}
function removeFromCart(index) {
  const cart = getCart(); cart.splice(index, 1); saveCart(cart);
}
function updateCartQty(index, qty) {
  const cart = getCart(); if (!cart[index]) return; cart[index].qty = Math.max(1, qty); saveCart(cart);
}
function cartLineTotal(line) { const p = getProductById(line.id); return p ? p.price * line.qty : 0; }
function cartSubtotal()      { return getCart().reduce((s, l) => s + cartLineTotal(l), 0); }
function cartItemCount()     { return getCart().reduce((s, l) => s + l.qty, 0); }

/* ============================================================
   WISHLIST
   ============================================================ */
function getWishlist()        { return readStore(STORE_KEYS.wishlist); }
function isWishlisted(id)     { return getWishlist().includes(id); }
function toggleWishlist(id) {
  let list = getWishlist();
  const wasIn = list.includes(id);
  list = wasIn ? list.filter(x => x !== id) : [...list, id];
  writeStore(STORE_KEYS.wishlist, list);
  updateHeaderCounts();
  if (!wasIn) { const p = getProductById(id); if (p) showToast(`♡ ${p.name} saved to wishlist`, 'info'); }
  return !wasIn;
}

/* ============================================================
   HEADER COUNTS
   ============================================================ */
function updateHeaderCounts() {
  const cartN = cartItemCount();
  const wishN = getWishlist().length;
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    el.textContent = cartN; el.style.display = cartN > 0 ? 'inline-flex' : 'none';
  });
  document.querySelectorAll('[data-wishlist-count]').forEach(el => {
    el.textContent = wishN; el.style.display = wishN > 0 ? 'inline-flex' : 'none';
  });

  // Keep the header authentication link consistent for every visitor
  const user = readStore(STORE_KEYS.user);
  if (user && !Array.isArray(user) && user.email) {
    document.querySelectorAll('.header-auth').forEach(authEl => {
      authEl.innerHTML = '<a href="login.html" class="btn-login">Log In</a>';
    });
  }
}

/* ============================================================
   TOAST
   ============================================================ */
function showToast(msg, type = 'success', duration = 3000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = { success:'✓', error:'✕', info:'♡' };
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <span class="toast__icon">${icons[type] || '✓'}</span>
    <span class="toast__msg">${msg}</span>
    <button class="toast__close" aria-label="Dismiss">×</button>`;
  container.appendChild(toast);
  toast.querySelector('.toast__close').addEventListener('click', () => dismissToast(toast));
  setTimeout(() => dismissToast(toast), duration);
}
function dismissToast(toast) {
  if (!toast || !toast.parentNode) return;
  toast.classList.add('is-out');
  toast.addEventListener('animationend', () => toast.remove(), { once: true });
}

/* ============================================================
   SEARCH OVERLAY
   ============================================================ */
function initSearchOverlay() {
  const overlay  = document.getElementById('searchOverlay');
  const input    = document.getElementById('searchInput');
  const results  = document.getElementById('searchResults');
  const triggers = document.querySelectorAll('[data-search-trigger]');
  const closeBtn = document.getElementById('searchClose');
  if (!overlay || !input) return;

  function openSearch() {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 100);
  }
  function closeSearch() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    input.value = '';
    if (results) results.innerHTML = '';
  }

  triggers.forEach(t => t.addEventListener('click', openSearch));
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });

  if (input && results) {
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) { results.innerHTML = ''; return; }
      const matches = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.sub.toLowerCase().includes(q)
      ).slice(0, 6);

      if (matches.length === 0) {
        results.innerHTML = `<p class="search-no-results">No results for "<em>${input.value}</em>"</p>`;
        return;
      }
      results.innerHTML = matches.map(p => `
        <a class="search-result-card" href="product.html?id=${p.id}">
          <img src="${productImage(p.id, 300, 400)}" alt="${p.name}" loading="lazy">
          <div class="search-result-card__body">
            <div class="search-result-card__name">${p.name}</div>
            <div class="search-result-card__price">${formatPrice(p.price)}</div>
          </div>
        </a>`).join('');
    });
  }
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  const onScroll = () => btn.classList.toggle('is-visible', window.scrollY > 400);
  window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   STICKY HEADER
   ============================================================ */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ============================================================
   ACTIVE NAV LINK
   ============================================================ */
function initActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.split('?')[0] === page) a.classList.add('is-current');
  });
}

/* ============================================================
   MOBILE NAV
   ============================================================ */
function initMobileNav() {
  const toggle  = document.querySelector('[data-nav-toggle]');
  const nav     = document.querySelector('[data-nav-menu]');
  const overlay = document.querySelector('.nav-overlay');
  if (!toggle || !nav) return;

  // Keep the full account actions available inside the mobile drawer as well.
  const auth = document.querySelector('.header-auth');
  if (auth && !nav.querySelector('.mobile-nav-actions')) {
    const actions = document.createElement('div');
    actions.className = 'mobile-nav-actions';
    auth.querySelectorAll('a').forEach(link => actions.appendChild(link.cloneNode(true)));
    if (actions.childElementCount) nav.appendChild(actions);
  }

  function setOpen(isOpen) {
    nav.classList.toggle('is-open', isOpen);
    overlay && overlay.classList.toggle('is-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  if (overlay) overlay.addEventListener('click', () => setOpen(false));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && nav.classList.contains('is-open')) setOpen(false);
  }, { passive: true });
}

/* ============================================================
   NEWSLETTER
   ============================================================ */
function initNewsletterForm() {
  document.querySelectorAll('[data-newsletter-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const note = form.querySelector('[data-newsletter-note]');
      if (note) note.textContent = 'You\'re on the list — welcome to Stackly.';
      showToast('Welcome! You\'re now on the list.', 'success');
      form.reset();
    });
  });
}

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-anim]').forEach(el => el.classList.add('is-visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-anim]').forEach(el => obs.observe(el));
}

/* ============================================================
   PRODUCT CARD HTML (home + shop + wishlist)
   Clean structured markup without duplicate alt texts
   ============================================================ */
function productCardHTML(p, extraClass) {
  const wished = isWishlisted(p.id);
  const priceHTML = p.oldPrice
    ? `<span class="price price--sale">${formatPrice(p.price)}</span><span class="price price--old">${formatPrice(p.oldPrice)}</span>`
    : `<span class="price">${formatPrice(p.price)}</span>`;
  const tagClass = p.tag ? `card__tag--${p.tag.toLowerCase().replace(/\s+/g,'-')}` : '';
  const tagHTML  = p.tag ? `<span class="card__tag ${tagClass}">${p.tag}</span>` : '';
  return `
    <article class="card${extraClass ? ' '+extraClass : ''}">
      <div class="card__media">
        <a href="product.html?id=${p.id}">
          <img class="primary-img" src="${productImage(p.id, 500, 650)}" alt="${p.name}" loading="lazy" width="500" height="650">
          <img class="secondary-img" src="${productImage2(p, 500, 650)}" alt="" aria-hidden="true" loading="lazy" width="500" height="650">
        </a>
        ${tagHTML}
        <button class="card__wish ${wished ? 'is-active' : ''}"
          data-wish-toggle="${p.id}" aria-label="Toggle wishlist" aria-pressed="${wished}">
          <svg viewBox="0 0 24 24" width="17" height="17">
            <path d="M12 20.5s-7.5-4.9-10-9.3C.4 8 1.8 4 5.5 3.2 8 2.6 10.4 4 12 6.3 13.6 4 16 2.6 18.5 3.2 22.2 4 23.6 8 22 11.2 19.5 15.6 12 20.5 12 20.5z"
              fill="${wished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.6"/>
          </svg>
        </button>
        <button class="card__quick-add" data-quick-add="${p.id}">Quick Add</button>
      </div>
      <div class="card__body">
        <p class="card__cat">${p.category} — ${p.sub}</p>
        <h3 class="card__name"><a href="product.html?id=${p.id}">${p.name}</a></h3>
        <p class="card__price">${priceHTML}</p>
      </div>
    </article>`;
}

function bindWishButtons(root = document) {
  root.querySelectorAll('[data-wish-toggle]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const id = Number(btn.getAttribute('data-wish-toggle'));
      const now = toggleWishlist(id);
      btn.classList.toggle('is-active', now);
      btn.setAttribute('aria-pressed', now);
      const path = btn.querySelector('path');
      if (path) path.setAttribute('fill', now ? 'currentColor' : 'none');
    });
  });
}

function bindQuickAdd(root = document) {
  root.querySelectorAll('[data-quick-add]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const id  = Number(btn.getAttribute('data-quick-add'));
      const p   = getProductById(id);
      if (!p) return;
      addToCart(id, p.sizes[0], p.colors[0], 1);
    });
  });
}

/* ============================================================
   SKELETON HELPERS
   ============================================================ */
function skeletonCardHTML() {
  return `<div class="skeleton-card">
    <div class="skeleton skeleton-card__img"></div>
    <div class="skeleton skeleton-card__line skeleton-card__line--full"></div>
    <div class="skeleton skeleton-card__line"></div>
    <div class="skeleton skeleton-card__line skeleton-card__line--sm"></div>
  </div>`;
}
function showSkeletons(container, count) {
  container.innerHTML = Array(count).fill(skeletonCardHTML()).join('');
}

/* ============================================================
   TICKER DUPLICATION
   ============================================================ */
function initTicker() {
  const track = document.querySelector('.ticker__track');
  if (!track) return;
  track.innerHTML += track.innerHTML;
}

/* ============================================================
   FORM VALIDATION
   ============================================================ */
function initFormValidation() {
  const emailPattern = /^[^\s@]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/;
  const namePattern = /^\p{L}+(?:\s+\p{L}+)*$/u;
  const fields = [...document.querySelectorAll('form input, form select, form textarea')];
  const labelFor = field => (field.labels?.[0]?.textContent || field.getAttribute('aria-label') || field.name || field.id || 'this field').replace(/[*:]/g, '').trim().toLowerCase();
  const isName = field => /name|first.?name|last.?name/i.test(`${field.id} ${field.name} ${field.autocomplete} ${field.labels?.[0]?.textContent || ''}`);
  const isPhone = field => field.type === 'tel' || /phone|mobile/i.test(`${field.id} ${field.name} ${field.labels?.[0]?.textContent || ''}`);

  function validate(field) {
    if (!field || field.disabled) return;
    const value = field.value.trim();
    let message = '';
    if (field.required && !value) {
      message = isName(field) ? 'Please enter your name.' : `Please enter your ${labelFor(field)}.`;
      if (field.tagName === 'SELECT') message = `Please select your ${labelFor(field)}.`;
    } else if (isName(field) && value && !namePattern.test(value)) {
      message = 'Please use alphabetic characters only.';
    } else if ((field.type === 'email' || /email/i.test(`${field.id} ${field.name}`)) && value && !emailPattern.test(value)) {
      message = 'Please enter a valid email address.';
    } else if (isPhone(field) && value && !/^\d{10}$/.test(value)) {
      message = 'Please enter a valid 10-digit number.';
    } else if (field.type === 'password' && value && (!/^.{8,}$/.test(value) || !/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/\d/.test(value) || !/[^A-Za-z0-9]/.test(value))) {
      message = 'Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character.';
    }
    if (field.id === 'suConfirm' && value && value !== document.getElementById('suPassword')?.value) message = 'Passwords do not match.';
    field.setCustomValidity(message);
  }

  fields.forEach(field => {
    if (isPhone(field)) {
      field.type = 'tel';
      field.inputMode = 'numeric';
      field.maxLength = 10;
      field.addEventListener('input', () => {
        field.value = field.value.replace(/\D/g, '').slice(0, 10);
        validate(field);
      });
    }
    field.addEventListener('input', () => { validate(field); if (field.id === 'suPassword') validate(document.getElementById('suConfirm')); });
    field.addEventListener('change', () => validate(field));
    validate(field);
  });

  document.addEventListener('submit', event => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    const formFields = [...form.querySelectorAll('input, select, textarea')];
    formFields.forEach(validate);
    const invalid = formFields.find(field => !field.checkValidity());
    if (invalid) {
      event.preventDefault();
      event.stopImmediatePropagation();
      invalid.reportValidity();
      invalid.focus();
    }
  }, true);

  // Dashboard profile fields are rendered after page load and save without a form.
  document.addEventListener('click', event => {
    if (!event.target.closest('#saveProfileChanges')) return;
    const profileFields = ['profileName', 'profileEmail', 'profilePhone'].map(id => document.getElementById(id)).filter(Boolean);
    profileFields.forEach(validate);
    const invalid = profileFields.find(field => !field.checkValidity());
    if (invalid) {
      event.preventDefault();
      event.stopImmediatePropagation();
      invalid.reportValidity();
      invalid.focus();
    }
  }, true);
}

/* ============================================================
   PAGE-LEVEL INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  updateHeaderCounts();
  initMobileNav();
  initFormValidation();
  initNewsletterForm();
  initSearchOverlay();
  initBackToTop();
  initStickyHeader();
  initActiveNav();
  initScrollAnimations();
  initTicker();
});
