(() => {
  const params = new URLSearchParams(location.search);
  const lang = ['es', 'en', 'de'].includes(params.get('lang')) ? params.get('lang') : 'es';
  const mode = document.body.dataset.mode;
  const copy = {
    es: {
      reserve: ['Reserva tu mesa', 'Escríbenos por WhatsApp y dinos qué día vienes, a qué hora y para cuántas personas.', 'Continuar en WhatsApp', 'Volver a la web', 'Hola, quisiera reservar una mesa en Fonoll Marí d\'Artà.', 'Usamos analítica opcional para entender el uso de la web. No se activa sin tu permiso.', 'Aceptar', 'Rechazar'],
      order: ['Haz tu pedido', 'Cuéntanos por WhatsApp qué te apetece y para qué hora quieres recogerlo.', 'Pedir por WhatsApp', 'Volver a la carta', 'Hola, quisiera hacer un pedido para recoger en Fonoll Marí d\'Artà.', 'Usamos analítica opcional para entender el uso de la web. No se activa sin tu permiso.', 'Aceptar', 'Rechazar']
    },
    en: {
      reserve: ['Book your table', 'Message us on WhatsApp with the date, time and number of guests.', 'Continue on WhatsApp', 'Back to the website', 'Hello, I would like to book a table at Fonoll Marí d\'Artà.', 'We use optional analytics to understand how the website is used. It will not load without your permission.', 'Accept', 'Reject'],
      order: ['Place your order', 'Tell us on WhatsApp what you would like and when you want to collect it.', 'Order on WhatsApp', 'Back to the menu', 'Hello, I would like to place an order for collection at Fonoll Marí d\'Artà.', 'We use optional analytics to understand how the website is used. It will not load without your permission.', 'Accept', 'Reject']
    },
    de: {
      reserve: ['Tisch reservieren', 'Schreiben Sie uns per WhatsApp mit Datum, Uhrzeit und Anzahl der Gäste.', 'Weiter zu WhatsApp', 'Zurück zur Website', 'Hallo, ich möchte einen Tisch im Fonoll Marí d\'Artà reservieren.', 'Wir verwenden optionale Analysen, um die Nutzung der Website zu verstehen. Sie werden nicht ohne Ihre Zustimmung geladen.', 'Akzeptieren', 'Ablehnen'],
      order: ['Bestellung aufgeben', 'Schreiben Sie uns per WhatsApp, was Sie bestellen und wann Sie es abholen möchten.', 'Per WhatsApp bestellen', 'Zurück zur Speisekarte', 'Hallo, ich möchte eine Bestellung zur Abholung im Fonoll Marí d\'Artà aufgeben.', 'Wir verwenden optionale Analysen, um die Nutzung der Website zu verstehen. Sie werden nicht ohne Ihre Zustimmung geladen.', 'Akzeptieren', 'Ablehnen']
    }
  };
  const values = copy[lang][mode];
  document.documentElement.lang = lang;
  document.title = `${values[0]} | Fonoll Marí d'Artà`;
  document.querySelector('[data-action-title]').textContent = values[0];
  document.querySelector('[data-action-copy]').textContent = values[1];
  const action = document.querySelector('[data-action-button]');
  action.textContent = values[2];
  action.href = `https://wa.me/34636483141?text=${encodeURIComponent(values[4])}`;
  const back = document.querySelector('[data-action-back]');
  back.textContent = values[3];
  back.href = mode === 'order' ? `../${lang}/#${lang === 'es' ? 'carta' : lang === 'en' ? 'menu' : 'speisekarte'}` : `../${lang}/`;
  document.querySelector('.consent p').textContent = values[5];
  document.querySelector('[data-consent-accept]').textContent = values[6];
  document.querySelector('[data-consent-reject]').textContent = values[7];
})();
