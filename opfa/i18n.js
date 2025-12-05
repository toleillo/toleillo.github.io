// Internationalization for Landing Page
const translations = {
  es: {
    // App Name
    'appName': 'Finanzas Personales',

    // Navigation
    'nav.features': 'Características',
    'nav.download': 'Descargar',
    'nav.about': 'Acerca de',

    // Hero Section
    'hero.title': 'Gestiona tus finanzas',
    'hero.titleGradient': 'de forma privada',
    'hero.subtitle': 'Una aplicación de escritorio potente y fácil de usar para controlar tus ingresos, gastos, inversiones y objetivos financieros. 100% offline, tus datos nunca salen de tu ordenador.',
    'hero.downloadBtn': 'Descargar Gratis',
    'hero.featuresBtn': 'Ver Características',
    'hero.badge.private': '🔒 100% Privado',
    'hero.badge.offline': '💻 Offline',
    'hero.badge.free': '🆓 Gratis',

    // Preview Cards
    'preview.totalBalance': 'Balance Total',
    'preview.income': 'Ingresos',
    'preview.expenses': 'Gastos',

    // Features Section
    'features.title': 'Características Principales',
    'features.subtitle': 'Todo lo que necesitas para gestionar tus finanzas personales',

    'feature.control.title': 'Control Total',
    'feature.control.desc': 'Gestiona ingresos, gastos, inversiones y deudas desde una única aplicación intuitiva.',

    'feature.reports.title': 'Reportes Visuales',
    'feature.reports.desc': 'Gráficas interactivas y reportes detallados para entender tu situación financiera de un vistazo.',

    'feature.goals.title': 'Objetivos Financieros',
    'feature.goals.desc': 'Define metas de ahorro y sigue tu progreso para alcanzar tus objetivos.',

    'feature.private.title': '100% Privado',
    'feature.private.desc': 'Tus datos se almacenan localmente. Sin servidores externos, sin cuentas, sin seguimiento.',

    'feature.offline.title': 'Funciona Offline',
    'feature.offline.desc': 'No necesitas conexión a internet. Accede a tus finanzas en cualquier momento.',

    'feature.multilang.title': 'Multi-idioma',
    'feature.multilang.desc': 'Disponible en español e inglés con soporte para múltiples monedas.',

    'feature.theme.title': 'Tema Oscuro/Claro',
    'feature.theme.desc': 'Cambia entre modo oscuro y claro según tu preferencia.',

    'feature.interface.title': 'Interfaz Moderna',
    'feature.interface.desc': 'Diseño elegante e intuitivo inspirado en las mejores aplicaciones financieras.',

    // Download Section
    'download.title': 'Descarga Gratis',
    'download.subtitle': 'Disponible para Windows y macOS',

    'download.windows.title': 'Windows',
    'download.windows.desc': 'Compatible con Windows 10 y superior',
    'download.windows.installer': 'Instalador (.exe)',
    'download.windows.portable': 'Portable (.exe)',

    'download.mac.title': 'macOS',
    'download.mac.desc': 'Compatible con macOS 10.13 y superior',
    'download.mac.intel': 'Intel (.dmg)',
    'download.mac.arm': 'Apple Silicon (.dmg)',

    'download.version': 'Versión 1.0.0',

    // About Section
    'about.title': 'Por qué elegir Finanzas Personales',
    'about.p1': '<strong>Finanzas Personales</strong> es una aplicación de escritorio diseñada para personas que valoran su privacidad y quieren tener control total sobre sus datos financieros.',
    'about.p2': 'A diferencia de otras aplicaciones que requieren cuentas en línea y almacenan tus datos en servidores externos, nuestra aplicación funciona completamente offline. Tus transacciones, ingresos, gastos e inversiones se guardan únicamente en tu ordenador.',

    'about.feature1': 'Sin suscripciones mensuales',
    'about.feature2': 'Sin publicidad',
    'about.feature3': 'Sin recopilación de datos',
    'about.feature4': 'Código abierto',

    // Footer
    'footer.description': 'Gestiona tus finanzas de forma privada y segura.',
    'footer.links': 'Enlaces',
    'footer.platforms': 'Plataformas',
    'footer.support': 'Apóyanos',
    'footer.supportDesc': 'Si te gusta esta aplicación, considera apoyarnos',
    'footer.kofi': 'Ko-fi',
    'footer.buymeacoffee': 'Buy Me a Coffee',
    'footer.copyright': '© 2024 Finanzas Personales. Todos los derechos reservados.'
  },

  en: {
    // App Name
    'appName': 'Personal Finance',

    // Navigation
    'nav.features': 'Features',
    'nav.download': 'Download',
    'nav.about': 'About',

    // Hero Section
    'hero.title': 'Manage your finances',
    'hero.titleGradient': 'privately',
    'hero.subtitle': 'A powerful and easy-to-use desktop application to track your income, expenses, investments, and financial goals. 100% offline, your data never leaves your computer.',
    'hero.downloadBtn': 'Download Free',
    'hero.featuresBtn': 'View Features',
    'hero.badge.private': '🔒 100% Private',
    'hero.badge.offline': '💻 Offline',
    'hero.badge.free': '🆓 Free',

    // Preview Cards
    'preview.totalBalance': 'Total Balance',
    'preview.income': 'Income',
    'preview.expenses': 'Expenses',

    // Features Section
    'features.title': 'Key Features',
    'features.subtitle': 'Everything you need to manage your personal finances',

    'feature.control.title': 'Total Control',
    'feature.control.desc': 'Manage income, expenses, investments, and debts from a single intuitive application.',

    'feature.reports.title': 'Visual Reports',
    'feature.reports.desc': 'Interactive charts and detailed reports to understand your financial situation at a glance.',

    'feature.goals.title': 'Financial Goals',
    'feature.goals.desc': 'Set savings goals and track your progress to achieve your objectives.',

    'feature.private.title': '100% Private',
    'feature.private.desc': 'Your data is stored locally. No external servers, no accounts, no tracking.',

    'feature.offline.title': 'Works Offline',
    'feature.offline.desc': 'No internet connection required. Access your finances anytime.',

    'feature.multilang.title': 'Multi-language',
    'feature.multilang.desc': 'Available in Spanish and English with support for multiple currencies.',

    'feature.theme.title': 'Dark/Light Theme',
    'feature.theme.desc': 'Switch between dark and light mode according to your preference.',

    'feature.interface.title': 'Modern Interface',
    'feature.interface.desc': 'Elegant and intuitive design inspired by the best financial applications.',

    // Download Section
    'download.title': 'Download Free',
    'download.subtitle': 'Available for Windows and macOS',

    'download.windows.title': 'Windows',
    'download.windows.desc': 'Compatible with Windows 10 and above',
    'download.windows.installer': 'Installer (.exe)',
    'download.windows.portable': 'Portable (.exe)',

    'download.mac.title': 'macOS',
    'download.mac.desc': 'Compatible with macOS 10.13 and above',
    'download.mac.intel': 'Intel (.dmg)',
    'download.mac.arm': 'Apple Silicon (.dmg)',

    'download.version': 'Version 1.0.0',

    // About Section
    'about.title': 'Why choose Personal Finance',
    'about.p1': '<strong>Personal Finance</strong> is a desktop application designed for people who value their privacy and want total control over their financial data.',
    'about.p2': 'Unlike other applications that require online accounts and store your data on external servers, our application works completely offline. Your transactions, income, expenses, and investments are saved only on your computer.',

    'about.feature1': 'No monthly subscriptions',
    'about.feature2': 'No advertising',
    'about.feature3': 'No data collection',
    'about.feature4': 'Open source',

    // Footer
    'footer.description': 'Manage your finances privately and securely.',
    'footer.links': 'Links',
    'footer.platforms': 'Platforms',
    'footer.support': 'Support Us',
    'footer.supportDesc': 'If you like this app, consider supporting us',
    'footer.kofi': 'Ko-fi',
    'footer.buymeacoffee': 'Buy Me a Coffee',
    'footer.copyright': '© 2024 Personal Finance. All rights reserved.'
  }
};

class LandingI18n {
  constructor() {
    this.currentLanguage = this.detectLanguage();
    this.init();
  }

  detectLanguage() {
    // Check if language is saved in localStorage
    const savedLang = localStorage.getItem('landing-language');
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      return savedLang;
    }

    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;

    // Check if browser language starts with 'es'
    if (browserLang.toLowerCase().startsWith('es')) {
      return 'es';
    }

    // Default to English for all other languages
    return 'en';
  }

  init() {
    this.updateUI();
    this.setupLanguageSelector();
  }

  setLanguage(lang) {
    if (lang === 'es' || lang === 'en') {
      this.currentLanguage = lang;
      localStorage.setItem('landing-language', lang);
      this.updateUI();
    }
  }

  t(key) {
    return translations[this.currentLanguage][key] || key;
  }

  updateUI() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);

      // Check if element should use innerHTML (for HTML content)
      if (element.hasAttribute('data-i18n-html')) {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    });

    // Update document language
    document.documentElement.lang = this.currentLanguage;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      if (this.currentLanguage === 'es') {
        metaDesc.content = 'Aplicación de escritorio para gestionar tus finanzas personales de forma offline, privada y segura. Sin suscripciones, sin anuncios.';
      } else {
        metaDesc.content = 'Desktop application to manage your personal finances offline, privately and securely. No subscriptions, no ads.';
      }
    }

    // Update page title
    if (this.currentLanguage === 'es') {
      document.title = 'Finanzas Personales - Gestiona tu dinero de forma privada y segura';
    } else {
      document.title = 'Personal Finance - Manage your money privately and securely';
    }

    // Update language selector
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
      langSelect.value = this.currentLanguage;
    }
  }

  setupLanguageSelector() {
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
      langSelect.value = this.currentLanguage;
      langSelect.addEventListener('change', (e) => {
        this.setLanguage(e.target.value);
      });
    }
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }
}

// Initialize i18n when DOM is ready
let landingI18n;
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    landingI18n = new LandingI18n();
  });
} else {
  landingI18n = new LandingI18n();
}
