// ===========================
// Language Switcher
// ===========================
const translations = {
    es: {
        // Navigation
        'nav-home': 'Inicio',
        'nav-about': 'Sobre Nosotros',
        'nav-why': 'Por Qué Tepoztlán',
        
        // Hero Section
        'hero-names': 'Alejandra & Juan',
        'hero-subtitle': '¡Nos Casamos!',
        'hero-date': '19 de Diciembre de 2026',
        'hero-location': 'Tepoztlán, Morelos, México',
        
        // Countdown
        'countdown-days': 'Días',
        'countdown-hours': 'Horas',
        'countdown-minutes': 'Minutos',
        'countdown-seconds': 'Segundos',
        
        // About Section
        'about-title': '¡Nos Casamos!',
        'about-link': 'Lee Más Sobre Nosotros',
        'about-heading': 'Un Mensaje Para Nuestros Invitados',
        'about-paragraph-1': 'Estamos muy emocionados de compartir este día especial con todos ustedes! Como todo gran amor nuestra historia es única, y no podemos esperar a celebrarla rodeados de personas que han acompañado nuestro amor y son tan importantes para nosotros.',
        'about-paragraph-2': 'Hemos pasado innumerables momentos maravillosos juntos, y ahora estamos listos para dar el siguiente paso en nuestro viaje. ¡Gracias por ser parte de nuestras vidas!',
        
        // Why Tepoztlan Section
        'why-title': '¿Por Qué Tepoztlán?',
        'why-intro': 'Un Lugar Especial para un Momento Especial',
        'why-heading': 'Un Lugar Místico Desde Siempre',
        'why-paragraph-1': 'Tepoztlán ocupa un lugar especial en nuestros corazones. Este encantador pueblo mágico en Morelos, México, combina una belleza natural impresionante con un patrimonio cultural rico. El dramático telón de fondo de montañas, la vibrante escena de arte local, y la comunidad acogedora lo hicieron el lugar perfecto para nuestra celebración.',
        'why-paragraph-2': 'Desde el día en que comenzamos nuestra historia juntos, hemos visitado Tepoztlán en cuatro ocasiones, y en cada una de ellas nos a envuelto un espiritú mágico. Subir a la icónica pirámide del Tepozteco se ha convertido un un ritual en que la majestuosidad se convierte en poder interior. Descender por las calles de colorida arquitectura colonial, disfrutarla comida, objetos y el espiritú mexicano en los locales es en sí suficiente para traerlos aquí. Cada elemento de Tepoztlán resuena con nuestra visión de un día de boda significativo y memorable.',
        'why-paragraph-3': 'Queríamos un destino que refleje quiénes somos - aventureros, culturales, y profundamente conectados con la belleza de México. Tepoztlán ofrece todo esto y más, lo que lo hace el telón de fondo ideal para decir Sí, Acepto.',
        'gallery-pyramid': '2019',
        'gallery-square': '2020',
        'gallery-mountains': '2024',
        'gallery-culture': '2025',
        'gallery-link': 'Ver Más Fotos',
        
        // Photo placeholders
        'photo-alejandra': 'Foto de Alejandra',
        'photo-juan': 'Foto de Juan',
        
        // About page
        'about-title': 'Nuestra Historia',
        'about-how-met': '¿Cómo Nos Conocimos?',
        'about-story-1': 'Compartan su historia de amor aquí. Digan a sus invitados cómo se conocieron, los momentos especiales que llevaron a este día, y qué hace que su relación sea única.',
        'about-story-2': 'Incluyan detalles sobre la propuesta, fechas memorables, y por qué están emocionados de celebrar con sus seres queridos.',
        'about-journey': 'Nuestro Viaje Juntos',
        'about-story-3': 'Agreguen más detalles sobre los hitos de su relación, las aventuras que han compartido, y los momentos que los hicieron darse cuenta que querían pasar el resto de sus vidas juntos.',
        'about-important-dates': 'Nuestras Fechas Importantes',
        'about-when-met': '¿Cuándo Nos Conocimos?',
        'about-location-context': '[Ubicación o contexto]',
        'about-first-date': 'Primer Cita',
        'about-where-did': '[Dónde o qué hicieron]',
        'about-proposal': 'La Propuesta',
        'about-how-proposed': '[Cómo y dónde Juan propuso]',
        'about-wedding-day': 'Nuestro Día de Boda',
        
        // Footer
        'footer-contact': 'Contáctanos',
        'footer-location': 'Ubicación',
        'footer-location-details': 'Tepoztlán, Morelos, México',
        'footer-date': '19 de Diciembre de 2026',
        'footer-copyright': '© 2026 Alejandra & Juan. Todos los derechos reservados.'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-why': 'Why Tepoztlan',
        
        // Hero Section
        'hero-names': 'Alejandra & Juan',
        'hero-subtitle': 'We\'re Getting Married!',
        'hero-date': 'December 19, 2026',
        'hero-location': 'Tepoztlan, Morelos, Mexico',
        
        // Countdown
        'countdown-days': 'Days',
        'countdown-hours': 'Hours',
        'countdown-minutes': 'Minutes',
        'countdown-seconds': 'Seconds',
        
        // About Section
        'about-title': 'We Are Getting Married!',
        'about-link': 'Read More About Our Story',
        'about-heading': 'A Message To Our Guests',
        'about-paragraph-1': 'We\'re so excited to share this special day with all of you! Our love story is unique, and we can\'t wait to celebrate it surrounded by the people we care about most.',
        'about-paragraph-2': 'We\'ve spent countless wonderful moments together, and now we\'re ready to take the next step in our journey. Thank you for being a part of our lives!',
        
        // Why Tepoztlan Section
        'why-title': 'Why Tepoztlan?',
        'why-intro': 'Discover the magic of our wedding destination',
        'why-heading': 'A Special Place for a Special Moment',
        'why-paragraph-1': 'Tepoztlan holds a special place in our hearts. This charming pueblo magico in Morelos, Mexico, combines breathtaking natural beauty with rich cultural heritage. The dramatic mountain backdrop, vibrant local art scene, and warm community made it the perfect setting for our celebration.',
        'why-paragraph-2': 'From the iconic Tepozteco pyramid standing majestically over the town to the colorful colonial architecture and welcoming spirit of the locals, every element of Tepoztlan resonates with our vision for a meaningful and memorable wedding day.',
        'why-paragraph-3': 'We wanted a destination that reflects who we are - adventurous, cultural, and deeply connected to Mexico\'s beauty. Tepoztlan offers all of this and more, making it the ideal backdrop for saying "I do."',
        'gallery-pyramid': 'Tepozteco Pyramid',
        'gallery-square': 'Town Square',
        'gallery-mountains': 'Mountain Views',
        'gallery-culture': 'Local Culture',
        'gallery-link': 'View More Photos',
        
        // Photo placeholders
        'photo-alejandra': 'Alejandra\'s Photo',
        'photo-juan': 'Juan\'s Photo',
        
        // About page
        'about-title': 'Our Story',
        'about-how-met': 'How We Met',
        'about-story-1': 'Share your love story here. Tell your guests how you met, the special moments that led to this day, and what makes your relationship unique.',
        'about-story-2': 'Include details about the proposal, memorable dates, and why you\'re excited to celebrate with your loved ones.',
        'about-journey': 'Our Journey Together',
        'about-story-3': 'Add more details about your relationship milestones, adventures you\'ve shared, and the moments that made you realize you wanted to spend forever together.',
        'about-important-dates': 'Our Important Dates',
        'about-when-met': 'When We Met',
        'about-location-context': '[Location or context]',
        'about-first-date': 'First Date',
        'about-where-did': '[Where or what you did]',
        'about-proposal': 'The Proposal',
        'about-how-proposed': '[How and where Juan proposed]',
        'about-wedding-day': 'Our Wedding Day',
        
        // Footer
        'footer-contact': 'Contact Us',
        'footer-location': 'Location',
        'footer-location-details': 'Tepoztlan, Morelos, Mexico',
        'footer-date': 'December 19, 2026',
        'footer-copyright': '© 2026 Alejandra & Juan. All rights reserved.'
    }
};

// Set default language to Spanish
let currentLanguage = localStorage.getItem('language') || 'es';

// Function to set language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
    updateLanguageButtons();
}

// Function to get translated text
function t(key) {
    return translations[currentLanguage][key] || translations['es'][key];
}

// Function to update all text on the page
function updatePageLanguage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update page language attribute
    document.documentElement.lang = currentLanguage;
    
    // Update meta description
    const description = currentLanguage === 'es' 
        ? 'Boda de Alejandra & Juan - 19 de Diciembre de 2026 en Tepoztlán, Morelos, Mexico'
        : 'Alejandra & Juan\'s Wedding - December 19, 2026 in Tepoztlan, Morelos, Mexico';
    document.querySelector('meta[name="description"]').setAttribute('content', description);
}

// Function to update language button states
function updateLanguageButtons() {
    const esBtn = document.getElementById('lang-es');
    const enBtn = document.getElementById('lang-en');
    
    if (esBtn && enBtn) {
        if (currentLanguage === 'es') {
            esBtn.classList.add('active');
            enBtn.classList.remove('active');
        } else {
            esBtn.classList.remove('active');
            enBtn.classList.add('active');
        }
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    updatePageLanguage();
    updateLanguageButtons();
    
    // Add event listeners to language buttons
    const esBtn = document.getElementById('lang-es');
    const enBtn = document.getElementById('lang-en');
    
    if (esBtn) esBtn.addEventListener('click', () => setLanguage('es'));
    if (enBtn) enBtn.addEventListener('click', () => setLanguage('en'));
});
