/* Send page-content buttons and button-style links to the custom 404 page. */
document.addEventListener('click', event => {
  if (window.location.pathname.toLowerCase().endsWith('/404.html')) return;
  const backToTop = event.target.closest('#backToTop');
  if (backToTop) {
    event.preventDefault();
    event.stopImmediatePropagation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  // Dashboard controls switch views and perform account actions in both roles.
  if (window.location.pathname.toLowerCase().endsWith('/dashboard.html')) return;

  const control = event.target.closest(
    'button:not(.back-to-top), input[type="button"], input[type="submit"], input[type="reset"], [role="button"], main a, a.btn, [class*="btn--"], .btn-sm, .card-action, .quick-add, .icon-btn'
  );

  if (!control || control.closest('header')) return;
  // Close controls, the back-to-top control, and category cards keep their own behavior.
  if (control.matches('#searchClose, #closeSizeGuide, #backToTop, .search-overlay__close, .modal__close') || control.closest('.cat-tile')) return;
  // Keep direct image clicks on their existing image or product destination.
  if (control.matches('a') && event.target.closest('img')) return;
  // Preserve direct email and phone actions in contact details.
  if (control.matches('a[href^="mailto:"], a[href^="tel:"]')) return;
  // Forms must submit so validation and page-specific handlers can run.
  if (control.closest('form')) return;
  // Auth panel tabs and switch links change panels instead of navigating away.
  if (control.closest('.auth-tabs, [data-switch]')) return;

  event.preventDefault();
  event.stopImmediatePropagation();
  window.location.assign('404.html');
}, true);
