/* =====================================================================
   BPATCSC — REDESIGN SCRIPT
   Modules:
     1. Header scroll state
     2. Mega-menu / dropdown controller (desktop click+hover, mobile accordion)
     3. Mobile nav drawer toggle
     4. Hero vector "draw-in" animation (Lottie-style, no library)
     5. Scroll-reveal for content sections
     6. Misc (footer year)
===================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScrollState();
  initMegaMenu();
  initMobileNav();
  initHeroAnimation();
  initScrollReveal();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ---------------------------------------------------------------------
   1. HEADER SCROLL STATE
   Adds a subtle shadow once the page has scrolled, so the sticky
   header reads as "lifted" above content instead of always floating.
--------------------------------------------------------------------- */
function initHeaderScrollState() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------------------------------------------------------------------
   2. MEGA-MENU / DROPDOWN CONTROLLER
   Desktop relies on CSS :hover for the "quick glance" case, but every
   panel is ALSO click-toggleable and keyboard-operable via the
   [aria-expanded] button + [data-open] attribute on the parent <li>.
   This is what mobile uses exclusively (no hover on touch devices).
--------------------------------------------------------------------- */
function initMegaMenu() {
  const items = document.querySelectorAll('.primary-nav__item.has-dropdown, .primary-nav__item.has-megamenu');
  const scrim = document.getElementById('nav-scrim');

  const closeAll = () => {
    items.forEach((item) => {
      item.dataset.open = 'false';
      item.querySelector('.primary-nav__trigger')?.setAttribute('aria-expanded', 'false');
    });
    scrim?.classList.remove('is-active');
  };

  items.forEach((item) => {
    const trigger = item.querySelector('.primary-nav__trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.dataset.open === 'true';
      closeAll(); // only one panel open at a time
      if (!isOpen) {
        item.dataset.open = 'true';
        trigger.setAttribute('aria-expanded', 'true');
        // Scrim is only meaningful on desktop; mobile handles its own accordion layout
        if (window.matchMedia('(min-width: 721px)').matches) {
          scrim?.classList.add('is-active');
        }
      }
    });
  });

  // Click outside any nav item -> close everything
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.primary-nav__item')) closeAll();
  });

  // Escape key -> close everything (accessibility)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });

  // Clicking the scrim itself also closes the open panel
  scrim?.addEventListener('click', closeAll);
}

/* ---------------------------------------------------------------------
   3. MOBILE NAV DRAWER
   Hamburger toggles a full-height accordion drawer (see CSS §9).
--------------------------------------------------------------------- */
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  });

  // Close the drawer when a real link (not a dropdown trigger) is tapped
  nav.querySelectorAll('.primary-nav__item > a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
}

/* ---------------------------------------------------------------------
   4. HERO VECTOR "DRAW-IN" ANIMATION
   Technique: for every path/line flagged .draw-path we read its real
   length with getTotalLength(), store it as a CSS custom property
   (--len), and stagger a small --delay per element. The CSS keyframe
   then animates stroke-dashoffset from that length down to 0, which
   reads as the illustration being hand-drawn — a common, dependency-
   free stand-in for a Lottie vector build-in.
   Once drawing finishes, .is-ambient is added so a couple of elements
   (the sun rings, the small leaf/accent stroke) drift gently forever.
--------------------------------------------------------------------- */
function initHeroAnimation() {
  const svg = document.getElementById('hero-svg');
  if (!svg) return;

  const paths = svg.querySelectorAll('.draw-path');
  let maxDuration = 0;

  paths.forEach((path, index) => {
    // getTotalLength() works for <path>, <line>, <polyline>, <circle>, <rect>
    const length = typeof path.getTotalLength === 'function' ? path.getTotalLength() : 400;
    const delay = index * 0.09; // gentle stagger, building left-to-right
    path.style.setProperty('--len', length);
    path.style.setProperty('--delay', `${delay}s`);
    maxDuration = Math.max(maxDuration, delay + 1.4); // 1.4s matches the CSS animation duration
  });

  // Trigger the draw-in once the hero scrolls into view (or immediately if already visible)
  const start = () => {
    svg.classList.add('is-drawn');
    window.setTimeout(() => svg.classList.add('is-ambient'), maxDuration * 1000);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(svg);
  } else {
    start();
  }
}

/* ---------------------------------------------------------------------
   5. SCROLL-REVEAL
   Fades + lifts any .reveal element into place the first time it
   crosses into the viewport. Cheap, low-noise alternative to a full
   animation library, and fully skipped under prefers-reduced-motion
   via the CSS rule that removes the transition entirely.
--------------------------------------------------------------------- */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach((el) => observer.observe(el));
}
