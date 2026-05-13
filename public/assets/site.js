// Seyko Studios — shared interactions
(function() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nav = document.querySelector('.nav');
  const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
  const navOffset = () => (nav ? nav.offsetHeight : 0) + 18;

  // Smooth in-page navigation
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      if (!href || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      if (href === '#') {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
        history.replaceState(null, '', window.location.pathname + window.location.search);
        return;
      }

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - navOffset();
      window.scrollTo({ top, behavior: reducedMotion ? 'auto' : 'smooth' });
      history.pushState(null, '', href);
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      window.setTimeout(() => target.focus({ preventScroll: true }), reducedMotion ? 0 : 420);
    });
  });

  // Active nav state and elevated sticky header
  const updateNavState = () => {
    if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 8);

    let activeId = '';
    navLinks.forEach(link => {
      const section = document.getElementById(link.hash.slice(1));
      if (!section) return;
      if (section.getBoundingClientRect().top <= navOffset() + 80) activeId = section.id;
    });

    navLinks.forEach(link => link.classList.toggle('active', link.hash === `#${activeId}`));
  };

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateNavState();
      ticking = false;
    });
  }, { passive: true });
  updateNavState();

  // Scroll reveal
  const revealTargets = [
    '.section .section-num',
    '.section h2',
    '.section .lead',
    '.soft-card',
    '.card',
    '.price-card',
    '.upsell-card',
    '.work-card',
    '.system',
    '.faq-item',
    '.footer-col'
  ].join(',');

  const revealEls = Array.from(document.querySelectorAll(revealTargets));
  revealEls.forEach((el, index) => {
    el.classList.add('motion-reveal');
    el.style.setProperty('--reveal-delay', `${Math.min((index % 6) * 45, 225)}ms`);
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) el.classList.add('in');
  });

  document.body.classList.add('motion-ready');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.reveal, .motion-reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal, .motion-reveal').forEach(el => el.classList.add('in'));
  }

  // FAQ toggles use delegation so they survive dev refreshes and dynamic renders.
  const syncFaqToggle = item => {
    const toggle = item && item.querySelector('.faq-toggle');
    if (toggle) toggle.textContent = item.classList.contains('open') ? '−' : '+';
  };

  document.querySelectorAll('.faq-item').forEach(syncFaqToggle);

  document.addEventListener('click', event => {
    const item = event.target.closest('.faq-item');
    if (!item) return;
    item.classList.toggle('open');
    syncFaqToggle(item);
  });

  // Module switcher (home product system)
  document.querySelectorAll('[data-module-group]').forEach(group => {
    const modules = group.querySelectorAll('.module');
    const inspectors = document.querySelectorAll(`[data-inspector="${group.dataset.moduleGroup}"] .inspector-panel`);
    modules.forEach((m, i) => {
      m.addEventListener('click', () => {
        modules.forEach(x => x.classList.remove('active'));
        m.classList.add('active');
        inspectors.forEach((p, j) => p.style.display = i === j ? 'block' : 'none');
      });
    });
  });

  // Animated counter
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const decimals = (el.dataset.count.split('.')[1] || '').length;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    let start = null;
    const dur = 1400;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = (target * eased).toFixed(decimals);
      el.textContent = prefix + v + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    const ob = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { requestAnimationFrame(step); ob.unobserve(el); }});
    });
    ob.observe(el);
  });
})();
