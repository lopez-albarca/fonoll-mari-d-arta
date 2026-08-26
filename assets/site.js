(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const config = window.FONOLL_CONFIG || {};

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  toggle?.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    toggle?.setAttribute('aria-expanded', 'false');
  }));

  document.querySelectorAll('[data-track]').forEach(link => link.addEventListener('click', () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', link.dataset.track, {
        link_url: link.href,
        language: document.documentElement.lang
      });
    }
  }));

  const consent = document.querySelector('.consent');
  const measurementId = config.gaMeasurementId;
  if (!measurementId || config.preview) {
    consent?.setAttribute('hidden', '');
    return;
  }

  const loadAnalytics = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  };

  const choice = localStorage.getItem('fonoll-analytics-consent');
  if (choice === 'accepted') loadAnalytics();
  if (!choice) consent?.removeAttribute('hidden');

  document.querySelector('[data-consent-accept]')?.addEventListener('click', () => {
    localStorage.setItem('fonoll-analytics-consent', 'accepted');
    consent?.setAttribute('hidden', '');
    loadAnalytics();
  });
  document.querySelector('[data-consent-reject]')?.addEventListener('click', () => {
    localStorage.setItem('fonoll-analytics-consent', 'rejected');
    consent?.setAttribute('hidden', '');
  });
})();
