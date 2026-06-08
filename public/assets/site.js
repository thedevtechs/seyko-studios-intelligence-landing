// Seyko Studios — shared interactions
(function() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nav = document.querySelector('.nav');
  const navLinks = Array.from(document.querySelectorAll('.nav-link[href], .nav-dropdown-link[href]'));
  const hashNavLinks = navLinks.filter(link => {
    const href = link.getAttribute('href') || '';
    return href.startsWith('#') || href.startsWith('/#');
  });
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navMenus = Array.from(document.querySelectorAll('[data-nav-menu]'));
  const navOffset = () => (nav ? nav.offsetHeight : 0) + 18;

  const normalizedPath = path => {
    if (!path) return '/';
    return path.length > 1 ? path.replace(/\/$/, '') : path;
  };

  const pathForLink = link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return null;
    try {
      return normalizedPath(new URL(href, window.location.origin).pathname);
    } catch (_) {
      return null;
    }
  };

  const setMenuOpen = (menu, isOpen) => {
    const trigger = menu && menu.querySelector('.nav-menu-trigger');
    if (!menu || !trigger) return;
    menu.classList.toggle('open', isOpen);
    trigger.setAttribute('aria-expanded', String(isOpen));
  };

  const closeMenus = except => {
    navMenus.forEach(menu => {
      if (menu !== except) setMenuOpen(menu, false);
    });
  };

  const setNavOpen = isOpen => {
    if (!nav || !navToggle || !primaryNav) return;
    nav.classList.toggle('nav-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    if (!isOpen) closeMenus();
  };

  const cleanText = value => (value || '').replace(/\s+/g, ' ').trim().slice(0, 120);

  const pushAnalyticsEvent = (eventName, payload = {}) => {
    const eventPayload = {
      ...payload,
      source_path: window.location.pathname
    };

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventPayload);
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventPayload
    });
  };

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link) return;

    const destination = pathForLink(link);
    if (destination !== '/request-snapshot') return;

    pushAnalyticsEvent('request_snapshot_cta_click', {
      event_category: 'engagement',
      event_label: 'request_snapshot_cta',
      link_text: cleanText(link.textContent),
      destination_path: destination
    });
  });

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', event => {
      event.stopPropagation();
      setNavOpen(!nav.classList.contains('nav-open'));
    });

    document.addEventListener('click', event => {
      if (event.target.closest('.nav-menu')) return;
      if (event.target.closest('.nav')) {
        closeMenus(event.target.closest('[data-nav-menu]'));
        return;
      }
      closeMenus();
      if (nav && nav.classList.contains('nav-open')) setNavOpen(false);
    });

    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      const openMenu = navMenus.find(menu => menu.classList.contains('open'));
      if (openMenu) {
        setMenuOpen(openMenu, false);
        openMenu.querySelector('.nav-menu-trigger')?.focus();
        return;
      }
      if (!nav.classList.contains('nav-open')) return;
      setNavOpen(false);
      navToggle.focus();
    });
  }

  navMenus.forEach(menu => {
    const trigger = menu.querySelector('.nav-menu-trigger');
    const firstLink = menu.querySelector('.nav-dropdown-link');
    if (!trigger) return;

    trigger.addEventListener('click', event => {
      event.stopPropagation();
      const willOpen = !menu.classList.contains('open');
      closeMenus(menu);
      setMenuOpen(menu, willOpen);
    });

    trigger.addEventListener('keydown', event => {
      if (event.key !== 'ArrowDown') return;
      event.preventDefault();
      closeMenus(menu);
      setMenuOpen(menu, true);
      firstLink?.focus();
    });
  });

  if (primaryNav) {
    primaryNav.addEventListener('click', event => {
      const link = event.target.closest('a[href]');
      if (!link) return;
      closeMenus();
      setNavOpen(false);
    });
  }

  // Smooth in-page navigation
  document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      if (!href || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const url = new URL(href, window.location.origin);
      if (url.pathname !== window.location.pathname) return;

      if (url.hash === '#') {
        event.preventDefault();
        setNavOpen(false);
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
        history.replaceState(null, '', window.location.pathname + window.location.search);
        return;
      }

      const target = document.getElementById(url.hash.slice(1));
      if (!target) return;

      event.preventDefault();
      setNavOpen(false);
      const top = target.getBoundingClientRect().top + window.scrollY - navOffset();
      window.scrollTo({ top, behavior: reducedMotion ? 'auto' : 'smooth' });
      history.pushState(null, '', url.hash);
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      window.setTimeout(() => target.focus({ preventScroll: true }), reducedMotion ? 0 : 420);
    });
  });

  // Active nav state and elevated sticky header
  const updateRouteState = () => {
    const currentPath = normalizedPath(window.location.pathname);
    navLinks.forEach(link => {
      const linkPath = pathForLink(link);
      if (!linkPath) return;
      link.classList.toggle('active', linkPath === currentPath);
    });

    navMenus.forEach(menu => {
      const trigger = menu.querySelector('.nav-menu-trigger');
      const childActive = Array.from(menu.querySelectorAll('.nav-dropdown-link')).some(link => pathForLink(link) === currentPath);
      trigger?.classList.toggle('active', childActive);
    });
  };

  const updateNavState = () => {
    if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 8);
    updateRouteState();

    let activeId = '';
    hashNavLinks.forEach(link => {
      const section = document.getElementById(link.hash.slice(1));
      if (!section) return;
      if (section.getBoundingClientRect().top <= navOffset() + 80) activeId = section.id;
    });

    hashNavLinks.forEach(link => link.classList.toggle('active', Boolean(activeId) && link.hash === `#${activeId}`));
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
    '.faq-item'
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

  // Subtle pointer light for premium product surfaces.
  if (!reducedMotion) {
    document.addEventListener('pointermove', event => {
      const el = event.target.closest('[data-spotlight]');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      el.style.setProperty('--my', `${event.clientY - rect.top}px`);
    });
  }

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

  // Request form validation and HubSpot submission.
  const requestForm = document.querySelector('[data-request-form]');
  if (requestForm) {
    const fields = Array.from(requestForm.querySelectorAll('[data-required]'));
    const status = requestForm.querySelector('[data-form-status]');
    const successPanel = requestForm.querySelector('[data-form-success]');
    const submitButton = requestForm.querySelector('button[type="submit"]');
    const originalButtonHtml = submitButton ? submitButton.innerHTML : '';
    const recaptchaSiteKey = requestForm.dataset.recaptchaSiteKey || '';

    const messages = {
      firstname: 'Add your first name.',
      lastname: 'Add your last name.',
      email: 'Add a valid email.',
      website: 'Add the company website.',
      industry: 'Choose an industry.',
      city: 'Add the city or market.',
      service_procedure_project: 'Add the service, procedure, project, or buyer segment to inspect.'
    };

    const getCookie = name => {
      const cookie = document.cookie.split('; ').find(row => row.startsWith(`${name}=`));
      return cookie ? decodeURIComponent(cookie.split('=').slice(1).join('=')) : '';
    };

    const getRecaptchaToken = () => {
      if (!recaptchaSiteKey) return Promise.resolve('');
      if (!window.grecaptcha?.ready || !window.grecaptcha?.execute) {
        return Promise.reject(new Error('The security check is still loading. Please try again in a moment.'));
      }

      return new Promise((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(recaptchaSiteKey, { action: 'request_snapshot' })
            .then(resolve)
            .catch(() => reject(new Error('The security check failed. Please refresh and try again.')));
        });
      });
    };

    const setControlsDisabled = disabled => {
      fields.forEach(input => { input.disabled = disabled; });
      if (submitButton) submitButton.disabled = disabled;
    };

    const trackFormSubmission = () => {
      const eventPayload = {
        event_category: 'lead',
        event_label: 'request_snapshot',
        method: 'hubspot_form',
        currency: 'USD',
        value: 2500
      };

      pushAnalyticsEvent('generate_lead', eventPayload);
      pushAnalyticsEvent('request_snapshot_submitted', {
        form_id: 'd07e922f-2b09-48ef-b8b0-ac9be2ee8551',
        lead_value: 2500
      });
    };

    const setFieldState = (input, message = '') => {
      const field = input.closest('.field');
      const error = field && field.querySelector('.field-error');
      if (!field || !error) return;

      field.classList.toggle('has-error', Boolean(message));
      field.classList.toggle('has-success', !message && Boolean(input.value.trim()));
      input.setAttribute('aria-invalid', String(Boolean(message)));
      error.textContent = message;
    };

    const validateField = input => {
      const value = input.value.trim();
      let message = '';

      if (!value) {
        message = messages[input.name] || 'This field is required.';
      } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = messages.email;
      }

      setFieldState(input, message);
      return !message;
    };

    fields.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (submitButton && originalButtonHtml) submitButton.innerHTML = originalButtonHtml;
        if (status) {
          status.textContent = '';
          status.classList.remove('success', 'error');
        }
        if (successPanel) successPanel.hidden = true;
        if (requestForm.dataset.submitted === 'true' || input.closest('.field')?.classList.contains('has-error')) {
          validateField(input);
        }
      });
    });

    requestForm.addEventListener('submit', async event => {
      event.preventDefault();
      requestForm.dataset.submitted = 'true';

      const firstInvalid = fields.find(input => !validateField(input));
      fields.filter(input => input !== firstInvalid).forEach(validateField);

      if (firstInvalid) {
        if (status) {
          status.textContent = 'Please complete the required fields above.';
          status.classList.remove('success');
          status.classList.add('error');
        }
        firstInvalid.focus();
        return;
      }

      const formData = new FormData(requestForm);
      const payload = Object.fromEntries(formData.entries());
      let submittedOk = false;
      payload.hutk = getCookie('hubspotutk');
      payload.pageUri = window.location.href;

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }
      if (status) {
        status.textContent = '';
        status.classList.remove('success', 'error');
      }

      try {
        payload.recaptchaToken = await getRecaptchaToken();

        const response = await fetch('/api/hubspot/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        const result = await response.json().catch(() => ({}));

        if (!response.ok || result.ok === false) {
          throw new Error(result.message || 'The request did not send.');
        }

        if (status) {
          status.textContent = 'Snapshot request sent.';
          status.classList.add('success');
          status.classList.remove('error');
        }
        if (successPanel) {
          successPanel.hidden = false;
          successPanel.focus({ preventScroll: true });
          successPanel.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest' });
        }
        submittedOk = true;
        setControlsDisabled(true);
        if (submitButton) submitButton.textContent = 'Request received';
        fields.forEach(input => setFieldState(input, ''));
        trackFormSubmission();
      } catch (error) {
        if (status) {
          status.textContent = error.message || 'The request did not send. Email partners@seykostudios.com and we will take it from there.';
          status.classList.remove('success');
          status.classList.add('error');
        }
        if (submitButton && originalButtonHtml) submitButton.innerHTML = originalButtonHtml;
      } finally {
        if (!submittedOk) setControlsDisabled(false);
      }
    });
  }
})();
