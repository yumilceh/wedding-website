// ===========================
// Language Switcher
// ===========================
const translations = {
    es: {
        // Navigation
        'nav-home': 'Inicio',
        'nav-about': 'Más Sobre Nosotros',
        'nav-why': 'Por Qué Tepoztlán',

        // Meta
        'page-title': 'Alejandra & Juan - Nuestra Boda',
        'meta-description': 'Boda de Alejandra & Juan - 19 de Diciembre de 2026 en Tepoztlán, Morelos, Mexico',
        
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
        'about-paragraph-1': 'Estamos muy emocionados de compartir este día especial con todos ustedes! Como todo gran amor nuestra historia es única, y no podemos esperar a celebrarla rodeados de personas que han acompañado en este viaje llamado vida y son tan importantes para nosotros.',
        'about-paragraph-2': 'Juntos hemos pasado innumerables momentos maravillosos, y ahora estamos listos para dar el siguiente paso en nuestro viaje. ¡Gracias por ser parte de nuestras vidas y nos vemos en Diciembre!',
        
        // Why Tepoztlan Section
        'why-title': '¿Por Qué Tepoztlán?',
        'why-heading': 'Un Lugar Místico Desde Siempre',
        'why-paragraph-1': 'Tepoztlán ocupa un lugar especial en nuestros corazones. Este encantador pueblo mágico en Morelos,\
                            México, combina una belleza natural impresionante con un patrimonio  \
                            cultural rico. El dramático telón de fondo dominado por montañas, la vibrante escena de arte local, y \
                             la comunidad acogedora lo hicieron el lugar perfecto para nuestra celebración.',
        'why-paragraph-2': 'Desde el día en que comenzamos nuestro caminar juntos, hemos visitado Tepoztlán en cuatro ocasiones, \
                            en cada una de ellas nos a envuelto un espiritú mágico. Subir a la icónica pirámide del Tepozteco se ha convertido \
                             un un ritual en que la majestuosidad se convierte en poder interior. Descender por las calles de colorida arquitectura colonial, \
                              disfrutarla comida, objetos y el espiritú mexicano en los locales es en sí suficiente para invitarles a venir. Cada elemento de Tepoztlán \
                               resuena con nuestra visión de un día de boda significativo y memorable.',
        'why-paragraph-3': 'Queríamos un destino que refleje quiénes somos: aventureros, espirituales, y profundamente conectados con la belleza de México. \
                             Tepoztlán ofrece todo eso y más, lo que lo hace el telón de fondo ideal para decir: "Sí, Acepto". ',
        'alt-tepoztlan-2019': 'Tepoztlán 2019',
        'alt-tepoztlan-2020': 'Tepoztlán 2020',
        'alt-tepoztlan-2024': 'Tepoztlán 2024',
        'alt-tepoztlan-2025': 'Tepoztlán 2025',
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
        'about-when-met-date': 'Agosto, 2004',
        'about-location-context': 'En la preparatoria, con los amigos de la jardinera. Juan jura haber notado a Alejandra mucho antes.',
        'about-first-date': 'Primer Cita',
        'about-first-date-date': 'Diciembre 21, 2017',
        'about-where-did': 'Coyoacán, Ciudad de México. Cenamos y nos bebimos unos mezcales, después fuimos a una fiesta con Ana Clark. Lo demás es historia.',
        'about-moving-together': 'Mudanza Juntos',
        'about-moving-together-date': '22 Julio, 2021',
        'about-moving-together-context': 'Alejandra se mudó a Amsterdam, y junstos llenamos la casa de plantas.',
        'about-proposal': 'La Propuesta',
        'about-proposal-date': '20 Abril, 2025',
        'about-how-proposed': 'En Playa del Carmen, junto al mar de noche, bajo miles de estrellas, frente a las luces de Cozumel, y ninguna otro ser mas que Dios universo atestiguandolo. ',
        'about-wedding-day': 'Nuestro Día de Boda',
        "hero-date-card": '19 Diciembre, 2026',

        // Events
        'events-welcome-dinner': 'Welcome Dinner',
        'events-welcome-dinner-date': 'June 13, 2026',
        'events-welcome-dinner-time': '6:00 PM',
        'events-welcome-dinner-location': 'Restaurant Name & Address',
        'events-welcome-dinner-description': 'Join us for an informal dinner to kick off the celebration!',
        'events-rehearsal-dinner': 'Rehearsal Dinner',
        'events-rehearsal-dinner-date': 'June 14, 2026',
        'events-rehearsal-dinner-time': '7:00 PM',
        'events-rehearsal-dinner-location': 'Venue Name & Address',
        'events-rehearsal-dinner-description': 'A special evening with the wedding party.',
        'events-wedding-ceremony': 'Wedding Ceremony',
        'events-wedding-ceremony-date': 'December 19, 2026',
        'events-wedding-ceremony-time': '4:00 PM',
        'events-wedding-ceremony-location': 'Tepoztlán, Morelos, México',
        'events-wedding-ceremony-description': 'The main event! Ceremony duration: ~45 minutes',
        'events-view-details': 'View Details',
        'events-title': 'Eventos',
        'events-ceremony': 'Ceremonia',
        'events-reception': 'Recepción',
        'events-dresscode': 'Código de Vestimenta',
        'welcome-dinner': 'Cena de Bienvenida',
        'welcome-dinner-date': '17 de Diciembre de 2026',
        'welcome-dinner-time': '6:00 PM',
        'welcome-dinner-location': 'Tepoztlán, Morelos, México',
        'welcome-dinner-description': '¡Acompáñanos a una cena informal para empezar la celebración!',
        'welcome-dinner-dress-code': 'Código de Vestimenta: Casual Elegante',
        'welcome-dinner-duration': 'Duración: 2-3 horas',
        'rehearsal-dinner': 'Cena de Ensayo',
        'rehearsal-dinner-date': '18 de Diciembre de 2026',
        'rehearsal-dinner-time': '7:00 PM',
        'rehearsal-dinner-location': 'Tepoztlán, Morelos, México',
        'rehearsal-dinner-description': 'Una noche especial con el cortejo nupcial.',
        'rehearsal-dinner-dress-code': 'Código de Vestimenta: Atuendo de Cóctel',
        'rehearsal-dinner-duration': 'Duración: 3 horas',
        'wedding-ceremony': 'Ceremonia de Boda',
        'wedding-ceremony-date': '19 de Diciembre de 2026',
        'wedding-ceremony-time': '4:00 PM',
        'wedding-ceremony-location': 'Tepoztlán, Morelos, México',
        'wedding-ceremony-description': '¡El evento principal! Duración de la ceremonia: ~45 minutos',
        'wedding-ceremony-dress-code': 'Código de Vestimenta: Etiqueta Opcional',
        'wedding-ceremony-arrive-by': 'Llegar antes de: 3:30 PM',
        'wedding-ceremony-doors-open': 'Puertas abren: 2:00 PM',
        'reception-celebration': 'Recepción y Celebración',
        'reception-celebration-date': '19 de Diciembre de 2026',
        'reception-celebration-time': '6:00 PM - 11:00 PM',
        'reception-celebration-location': 'Tepoztlán, Morelos, México',
        'reception-celebration-description': '¡Baile, cena y celebración! Hora del cóctel de 5:00 a 6:00 PM',
        'reception-celebration-dress-code': 'Código de Vestimenta: Etiqueta Opcional',
        'reception-celebration-activities': 'Actividades: Cena, Baile, Pastel',
        'reception-celebration-bar': 'Bar: Barra libre completa',
        'farewell-brunch': 'Brunch de Despedida',
        'farewell-brunch-date': '20 de Diciembre de 2026',
        'farewell-brunch-time': '10:00 AM',
        'farewell-brunch-location': 'Tepoztlán, Morelos, México',
        'farewell-brunch-description': 'Un adiós casual antes de que los invitados partan.',
        'farewell-brunch-dress-code': 'Código de Vestimenta: Casual',
        'farewell-brunch-duration': 'Duración: 2 horas',
        'day-of-timeline': 'Itinerario del Día',
        'timeline-arrivals': 'Llegadas y Asientos',
        'timeline-arrivals-desc': 'Las puertas del lugar de la ceremonia se abren para los invitados',
        'timeline-ceremony-begins': 'Comienza la Ceremonia',
        'timeline-ceremony-begins-desc': 'El momento en que decimos "Sí, acepto"',
        'timeline-ceremony-ends': 'Finaliza la Ceremonia y Fotos',
        'timeline-ceremony-ends-desc': 'Fotos familiares y grupales',
        'timeline-cocktail-hour': 'Hora del Cóctel',
        'timeline-cocktail-hour-desc': 'Aperitivos, bebidas y socialización en el lugar de la recepción',
        'timeline-grand-entrance': 'Gran Entrada',
        'timeline-grand-entrance-desc': 'Los recién casados entran al salón de recepción',
        'timeline-dinner-service': 'Servicio de Cena',
        'timeline-dinner-service-desc': 'Palabras de bienvenida y comienza la cena',
        'timeline-toasts-first-dance': 'Brindis y Primer Baile',
        'timeline-toasts-first-dance-desc': 'Momentos especiales y celebración',
        'timeline-dancing-cake': 'Baile y Pastel',
        'timeline-dancing-cake-desc': 'Música y ceremonia de corte de pastel',

        // Timeline
        'timeline-title': 'Itinerario',

        // Accommodations
        'accommodations-title': 'Alojamiento',
        'accommodations-details': 'Detalles de Hoteles y Viaje',
        'accommodations-intro': '¡Estamos muy contentos de que puedas celebrar con nosotros! Aquí hay algunas opciones de alojamiento para huéspedes de fuera de la ciudad en el hermoso Tepoztlán, Morelos.',
        'hotel-name-1': 'Nombre del Hotel 1',
        'hotel-address-1': '123 Calle Principal, Ciudad, Estado 12345',
        'hotel-distance-1': 'a 5 kilometros de la ceremonia',
        'hotel-price-1': '$120-150/noche',
        'hotel-phone-1': '(555) 123-4567',
        'hotel-note-1': 'Tarifa especial disponible con el código: ALEJUAN2026',
        'hotel-amenities-1': 'Servicios:',
        'hotel-amenity-1-1': '✓ WiFi Gratis',
        'hotel-amenity-1-2': '✓ Gimnasio',
        'hotel-amenity-1-3': '✓ Restaurante y Bar',
        'book-now': 'Reservar Ahora',
        'hotel-name-2': 'Nombre del Hotel 2',
        'hotel-address-2': '456 Avenida del Roble, Ciudad, Estado 12345',
        'hotel-distance-2': 'a 8 kilometros de la ceremonia',
        'hotel-price-2': '$100-130/noche',
        'hotel-phone-2': '(555) 987-6543',
        'hotel-note-2': 'Desayuno gratis incluido',
        'hotel-amenities-2': 'Servicios:',
        'hotel-amenity-2-1': '✓ Desayuno Gratis',
        'hotel-amenity-2-2': '✓ WiFi Gratis',
        'hotel-amenity-2-3': '✓ Piscina',
        'airbnb-options': 'Opciones de Airbnb',
        'airbnb-address': 'Varias ubicaciones en la ciudad',
        'airbnb-distance': 'A poca distancia del centro',
        'airbnb-price': '$80-200/noche',
        'airbnb-note': 'Ideal para grupos o estancias más largas',
        'airbnb-options-list': 'Opciones:',
        'airbnb-option-1': '✓ Apartamentos Privados',
        'airbnb-option-2': '✓ Casas Completas',
        'airbnb-option-3': '✓ Habitaciones Compartidas',
        'browse-options': 'Ver Opciones',
        'travel-info': 'Información de Viaje',
        'by-air': 'Por Aire',
        'nearest-airport': 'Aeropuerto Más Cercano: [Nombre del Aeropuerto]',
        'distance-from-airport': 'Distancia: [X kilometros]',
        'flight-duration': 'Duración del Vuelo: [desde tu ubicación]',
        'flight-recommendation': 'Recomendamos reservar vuelos para el 13-16 de junio para máxima flexibilidad.',
        'by-car': 'Por Carro',
        'parking-info': 'Estacionamiento: Disponible en todos los lugares',
        'valet-service': 'Servicio de Valet: Gratuito en la recepción',
        'driving-time': 'Tiempo de Conducción: 20 minutos del centro',
        'gps-coordinates': 'Coordenadas GPS: [Agregar coordenadas]',
        'transportation': 'Transporte',
        'shuttle-service': 'Servicio de Transporte: Provisto desde los hoteles',
        'pickup-times': 'Horarios de Recogida: 3:00 PM y 5:00 PM',
        'return-service': 'Servicio de Regreso: Después de la recepción',
        'shuttle-signup': 'Regístrese en el RSVP para la disponibilidad del transporte.',
        'things-to-do': 'Cosas que Hacer en [Ciudad]',
        'museums-culture': '🏛️ Museos y Cultura',
        'museum-name': '[Nombre del Museo] - [Breve descripción]',
        'museum-hours': 'Horario: [horario de apertura]',
        'museum-distance': 'Distancia: [distancia del lugar]',
        'dining': '🍽️ Restaurantes',
        'restaurant-name': '[Nombre del Restaurante] - [Tipo de cocina]',
        'restaurant-specialty': 'Especialidad: [por lo que son conocidos]',
        'restaurant-reservations': 'Reservas: Recomendado',
        'parks-outdoors': '🌳 Parques y Aire Libre',
        'park-name': '[Nombre del Parque] - [Actividad]',
        'park-best-for': 'Ideal para: [qué hacer allí]',
        'park-entry-fee': 'Costo de Entrada: [Gratis/Pagado]',
        'footer-follow-us': 'Síguenos',

        // RSVP
        'rsvp-title': 'Confirmar Asistencia',
        'rsvp-intro': '¡Por favor, haznos saber si puedes celebrar con nosotros!',
        'rsvp-form-name': 'Tu Nombre Completo *',
        'rsvp-form-email': 'Correo Electrónico *',
        'rsvp-form-phone': 'Número de Teléfono',
        'rsvp-form-guests': 'Número de Invitados *',
        'rsvp-form-guests-select': 'Seleccionar...',
        'rsvp-form-guests-1': '1 Invitado',
        'rsvp-form-guests-2': '2 Invitados',
        'rsvp-form-guests-3': '3 Invitados',
        'rsvp-form-guests-4': '4 Invitados',
        'rsvp-form-guests-5': '5+ Invitados',
        'rsvp-form-attendance': '¿Asistirás? *',
        'rsvp-form-attendance-yes': '¡Sí, con gran alegría!',
        'rsvp-form-attendance-no': 'Lamentablemente, no puedo asistir',
        'rsvp-form-dietary': 'Restricciones Alimenticias',
        'rsvp-form-dietary-placeholder': 'Por favor, infórmanos de cualquier restricción alimenticia o alergia...',
        'rsvp-form-song': 'Solicitud de Canción para la Recepción',
        'rsvp-form-song-placeholder': '¡Dinos tu canción favorita!',
        'rsvp-form-message': 'Mensaje para la Pareja',
        'rsvp-form-message-placeholder': 'Comparte tus buenos deseos o un recuerdo especial...',
        'rsvp-form-submit': 'Enviar RSVP',
        'rsvp-deadline': 'Fecha Límite para RSVP: 15 de Noviembre de 2026',
        'how-to-rsvp': 'Cómo Confirmar Asistencia',
        'how-to-rsvp-step-1': '<strong>Completa el formulario de arriba</strong> con tu información',
        'how-to-rsvp-step-2': '<strong>Indica tu estado de asistencia</strong> (sí o no)',
        'how-to-rsvp-step-3': '<strong>Infórmanos de tus necesidades dietéticas</strong> si las tienes',
        'how-to-rsvp-step-4': '<strong>Añade cualquier solicitud especial</strong> como preferencias de canciones',
        'how-to-rsvp-step-5': '<strong>Envía el formulario</strong> antes de la fecha límite',
        'rsvp-questions': '¿Preguntas?',
        'rsvp-questions-intro': 'Si tienes alguna pregunta o inquietud sobre tu RSVP, no dudes en contactarnos:',
        'rsvp-questions-email': '<strong>Correo Electrónico:</strong> alejandra.juan.2026@email.com',
        'rsvp-questions-phone': '<strong>Teléfono:</strong> +31 683 043 127 ',

        // FAQ
        'faq-title': 'Preguntas Frecuentes',
        'faq-wear-q': '¿Qué debo ponerme?',
        'faq-wear-a': 'El código de vestimenta es <strong>Etiqueta Opcional</strong>. ¡Siéntete libre de vestirte para impresionar! Las mujeres suelen llevar vestidos o trajes de pantalón elegantes, y los hombres esmoquin o trajes oscuros. Para la cena de bienvenida y el brunch, la vestimenta casual elegante es apropiada.',
        'faq-guest-q': '¿Puedo llevar un invitado?',
        'faq-guest-a': 'Todas las invitaciones especifican el número de invitados que puedes traer. Si tienes preguntas, por favor contáctanos directamente. Los acompañantes son limitados debido a la capacidad del lugar.',
        'faq-gift-q': '¿Hay una lista de regalos?',
        'faq-gift-a': 'Estamos registrados en <strong>[Sitio de Registro 1]</strong> y <strong>[Sitio de Registro 2]</strong>. Sin embargo, tu presencia es el mejor regalo. ¡No es necesario ningún regalo!',
        'faq-weather-q': '¿Cómo es el clima en diciembre?',
        'faq-weather-a': 'Diciembre en Tepoztlán, Morelos es hermoso con un clima agradable y temperaturas de alrededor de 21-26°C. ¡Es el momento perfecto para celebrar en México! El clima es templado y cómodo para celebraciones al aire libre.',
        'faq-alcohol-q': '¿Habrá alcohol?',
        'faq-alcohol-a': 'Sí, tendremos una barra libre completa en la recepción con cerveza, vino y cócteles. También habrá bebidas sin alcohol disponibles en todos los eventos.',
        'faq-photos-q': '¿Puedo tomar fotos?',
        'faq-photos-a': '¡Siéntete libre de tomar fotos durante la ceremonia y la recepción! Por favor, etiquétanos en las redes sociales usando <strong>#AlejandraYJuan2026</strong>. También tenemos un fotógrafo profesional.',
        'faq-arrive-q': '¿A qué hora debo llegar?',
        'faq-arrive-a': 'Por favor, planea llegar 30 minutos antes de que comience la ceremonia a las 4:00 PM. Las puertas se abren a las 2:00 PM para sentarse. ¡Llegar temprano asegura un buen asiento!',
        'faq-parking-q': '¿Hay estacionamiento disponible?',
        'faq-parking-a': 'Sí, hay estacionamiento de cortesía disponible tanto en el lugar de la ceremonia como en el de la recepción. Se proporcionará servicio de valet en la recepción para tu comodidad.',
        'faq-contact-q': '¿A quién debo contactar si tengo preguntas?',
        'faq-contact-a': '¡No dudes en contactarnos en cualquier momento! <strong>Correo electrónico:</strong> alejandra.juan.2026@email.com o <strong>Llamar:</strong> +31 683 043 127 ',
        'faq-children-q': '¿Serán bienvenidos los niños?',
        'faq-children-a': '¡Los niños son bienvenidos en todos los eventos! Si traes niños, por favor indícalo en tu confirmación de asistencia para que podamos planificar en consecuencia los asientos y las actividades.',
        'faq-dietary-q': '¿Qué pasa si tengo una restricción alimenticia?',
        'faq-dietary-a': 'Por favor, infórmanos en tu confirmación de asistencia sobre cualquier restricción dietética o alergia. Queremos asegurarnos de que todos tengan deliciosas opciones de comida disponibles.',
        'faq-travel-q': '¿Cuál es la mejor manera de viajar desde otro estado?',
        'faq-travel-a': 'El aeropuerto principal más cercano es <strong>[Nombre del Aeropuerto]</strong>. Recomendamos reservar vuelos para el 13-16 de junio. Hemos negociado tarifas especiales de hotel y tendremos servicio de transporte disponible.',
        'faq-still-questions': '¿Todavía tienes preguntas?',
        'faq-general-inquiries': 'Consultas Generales:',
        'faq-accommodation-assistance': 'Asistencia con el Alojamiento:',
        'faq-rsvp-questions': 'Preguntas sobre la Confirmación de Asistencia:',
        'faq-rsvp-response': 'Correo electrónico o llamada - Normalmente respondemos en 24 horas',

        // Footer
        'footer-contact': 'Contáctanos',
        'footer-location': 'Ubicación',
        'footer-location-details': 'Tepoztlán, Morelos, México',
        'footer-date': '19 de Diciembre de 2026',
        'footer-phone': '+31 683 043 127',
        'footer-email': 'boda.ale.y.juan.2026@gmail.com',
        'footer-copyright': '© 2026 Alejandra & Juan. Todos los derechos reservados.'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-why': 'Why Tepoztlan',

        // Meta
        'page-title': 'Alejandra & Juan - Our Wedding',
        'meta-description': 'Alejandra & Juan\'s Wedding - December 19, 2026 in Tepoztlan, Morelos, Mexico',
        
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
        'about-heading': 'A Message for Our Guests',
        'about-paragraph-1': 'We are thrilled to share this special day with all of you! Like every great love, our story is unique, and we cannot wait to celebrate it surrounded by the people who have accompanied us on this journey called life and are so important to us.',
        'about-paragraph-2': 'Together, we have shared countless wonderful moments, and now we are ready to take the next step in our journey. Thank you for being part of our lives, and we\'ll see you in December!',
        
        // Why Tepoztlan Section
        'why-title': 'Why Tepoztlán?',
        'why-heading': 'An Ever-Mystical Place',
        'why-paragraph-1': 'Tepoztlán holds a special place in our hearts. This charming magical town in Morelos, Mexico, combines stunning natural beauty with a rich cultural heritage. The dramatic mountain backdrop, the vibrant local art scene, and the welcoming community made it the perfect place for our celebration.',
        'why-paragraph-2': 'Since the day we began our journey together, we have visited Tepoztlán on four occasions, and each time a magical spirit has enveloped us. Climbing the iconic Tepozteco pyramid has become a ritual in which majesty turns into inner power. To descend through the streets of colorful colonial architecture, to enjoy the food, objects and the Mexican spirit in the locals is in itself enough to invite you to come. Every element of Tepoztlán resonates with our vision of a meaningful and memorable wedding day.',
        'why-paragraph-3': 'We wanted a destination that reflects who we are: adventurous, spiritual, and deeply connected to the beauty of Mexico. Tepoztlán offers all that and more, making it the ideal backdrop to say: "Sí, Acepto".',
        'alt-tepoztlan-2019': 'Tepoztlán 2019',
        'alt-tepoztlan-2020': 'Tepoztlán 2020',
        'alt-tepoztlan-2024': 'Tepoztlán 2024',
        'alt-tepoztlan-2025': 'Tepoztlán 2025',
        'gallery-link': 'See More Photos',
        
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

        // Events
        'events-welcome-dinner': 'Welcome Dinner',
        'events-welcome-dinner-date': 'June 13, 2026',
        'events-welcome-dinner-time': '6:00 PM',
        'events-welcome-dinner-location': 'Restaurant Name & Address',
        'events-welcome-dinner-description': 'Join us for an informal dinner to kick off the celebration!',
        'events-rehearsal-dinner': 'Rehearsal Dinner',
        'events-rehearsal-dinner-date': 'June 14, 2026',
        'events-rehearsal-dinner-time': '7:00 PM',
        'events-rehearsal-dinner-location': 'Venue Name & Address',
        'events-rehearsal-dinner-description': 'A special evening with the wedding party.',
        'events-wedding-ceremony': 'Wedding Ceremony',
        'events-wedding-ceremony-date': 'December 19, 2026',
        'events-wedding-ceremony-time': '4:00 PM',
        'events-wedding-ceremony-location': 'Tepoztlán, Morelos, México',
        'events-wedding-ceremony-description': 'The main event! Ceremony duration: ~45 minutes',
        'events-view-details': 'View Details',
        'events-title': 'Wedding Events',
        'events-ceremony': 'Ceremony',
        'events-reception': 'Reception',
        'events-dresscode': 'Dress Code',
        'welcome-dinner': 'Welcome Dinner',
        'welcome-dinner-date': 'December 17, 2026',
        'welcome-dinner-time': '6:00 PM',
        'welcome-dinner-location': 'Tepoztlán, Morelos, México',
        'welcome-dinner-description': 'Join us for an informal dinner to kick off the celebration!',
        'welcome-dinner-dress-code': 'Dress Code: Smart Casual',
        'welcome-dinner-duration': 'Duration: 2-3 hours',
        'rehearsal-dinner': 'Rehearsal Dinner',
        'rehearsal-dinner-date': 'December 18, 2026',
        'rehearsal-dinner-time': '7:00 PM',
        'rehearsal-dinner-location': 'Tepoztlán, Morelos, México',
        'rehearsal-dinner-description': 'A special evening with the wedding party.',
        'rehearsal-dinner-dress-code': 'Dress Code: Cocktail Attire',
        'rehearsal-dinner-duration': 'Duration: 3 hours',
        'wedding-ceremony': 'Wedding Ceremony',
        'wedding-ceremony-date': 'December 19, 2026',
        'wedding-ceremony-time': '4:00 PM',
        'wedding-ceremony-location': 'Tepoztlán, Morelos, México',
        'wedding-ceremony-description': 'The main event! Ceremony duration: ~45 minutes',
        'wedding-ceremony-dress-code': 'Dress Code: Black Tie Optional',
        'wedding-ceremony-arrive-by': 'Arrive By: 3:30 PM',
        'wedding-ceremony-doors-open': 'Doors Open: 2:00 PM',
        'reception-celebration': 'Reception & Celebration',
        'reception-celebration-date': 'December 19, 2026',
        'reception-celebration-time': '6:00 PM - 11:00 PM',
        'reception-celebration-location': 'Tepoztlán, Morelos, México',
        'reception-celebration-description': 'Dancing, dining, and celebration! Cocktail hour from 5:00-6:00 PM',
        'reception-celebration-dress-code': 'Dress Code: Black Tie Optional',
        'reception-celebration-activities': 'Activities: Dinner, Dancing, Cake',
        'reception-celebration-bar': 'Bar: Full open bar',
        'farewell-brunch': 'Farewell Brunch',
        'farewell-brunch-date': 'December 20, 2026',
        'farewell-brunch-time': '10:00 AM',
        'farewell-brunch-location': 'Tepoztlán, Morelos, México',
        'farewell-brunch-description': 'A casual goodbye before guests depart.',
        'farewell-brunch-dress-code': 'Dress Code: Casual',
        'farewell-brunch-duration': 'Duration: 2 hours',
        'day-of-timeline': 'Day-Of Timeline',
        'timeline-arrivals': 'Arrivals & Seating',
        'timeline-arrivals-desc': 'Ceremony venue doors open for guests',
        'timeline-ceremony-begins': 'Ceremony Begins',
        'timeline-ceremony-begins-desc': 'The moment we say "I do"',
        'timeline-ceremony-ends': 'Ceremony Ends & Photos',
        'timeline-ceremony-ends-desc': 'Family and group photos',
        'timeline-cocktail-hour': 'Cocktail Hour',
        'timeline-cocktail-hour-desc': 'Appetizers, drinks, and mingling at the reception venue',
        'timeline-grand-entrance': 'Grand Entrance',
        'timeline-grand-entrance-desc': 'Newlyweds enter the reception hall',
        'timeline-dinner-service': 'Dinner Service',
        'timeline-dinner-service-desc': 'Welcome remarks and dinner begins',
        'timeline-toasts-first-dance': 'Toasts & First Dance',
        'timeline-toasts-first-dance-desc': 'Special moments and celebration',
        'timeline-dancing-cake': 'Dancing & Cake',
        'timeline-dancing-cake-desc': 'Music and cake cutting ceremony',

        // Timeline
        'timeline-title': 'Timeline',

        // Accommodations
        'accommodations-title': 'Accommodations',
        'accommodations-details': 'Hotel and Travel Details',
        'accommodations-intro': 'We\'re so glad you can celebrate with us! Here are some lodging options for out-of-town guests in beautiful Tepoztlán, Morelos.',
        'hotel-name-1': 'Hotel Name 1',
        'hotel-address-1': '123 Main Street, City, State 12345',
        'hotel-distance-1': '3 miles from ceremony venue',
        'hotel-price-1': '$120-150/night',
        'hotel-phone-1': '(555) 123-4567',
        'hotel-note-1': 'Special rate available with code: ALEJUAN2026',
        'hotel-amenities-1': 'Amenities:',
        'hotel-amenity-1-1': '✓ Free WiFi',
        'hotel-amenity-1-2': '✓ Fitness Center',
        'hotel-amenity-1-3': '✓ Restaurant & Bar',
        'book-now': 'Book Now',
        'hotel-name-2': 'Hotel Name 2',
        'hotel-address-2': '456 Oak Avenue, City, State 12345',
        'hotel-distance-2': '5 miles from ceremony venue',
        'hotel-price-2': '$100-130/night',
        'hotel-phone-2': '(555) 987-6543',
        'hotel-note-2': 'Free breakfast included',
        'hotel-amenities-2': 'Amenities:',
        'hotel-amenity-2-1': '✓ Free Breakfast',
        'hotel-amenity-2-2': '✓ Free WiFi',
        'hotel-amenity-2-3': '✓ Pool',
        'airbnb-options': 'Airbnb Options',
        'airbnb-address': 'Various locations in City',
        'airbnb-distance': 'Within walking distance to downtown',
        'airbnb-price': '$80-200/night',
        'airbnb-note': 'Great for groups or longer stays',
        'airbnb-options-list': 'Options:',
        'airbnb-option-1': '✓ Private Apartments',
        'airbnb-option-2': '✓ Full Houses',
        'airbnb-option-3': '✓ Shared Rooms',
        'browse-options': 'Browse Options',
        'travel-info': 'Travel Information',
        'by-air': 'By Air',
        'nearest-airport': 'Nearest Airport: [Airport Name]',
        'distance-from-airport': 'Distance: [X miles]',
        'flight-duration': 'Flight Duration: [from your location]',
        'flight-recommendation': 'We recommend booking flights for June 13-16 for maximum flexibility.',
        'by-car': 'By Car',
        'parking-info': 'Parking: Available at all venues',
        'valet-service': 'Valet Service: Complimentary at reception',
        'driving-time': 'Driving Time: 20 minutes from downtown',
        'gps-coordinates': 'GPS Coordinates: [Add coordinates]',
        'transportation': 'Transportation',
        'shuttle-service': 'Shuttle Service: Provided from hotels',
        'pickup-times': 'Pick-up Times: 3:00 PM and 5:00 PM',
        'return-service': 'Return Service: After reception',
        'shuttle-signup': 'Sign up at RSVP for shuttle availability.',
        'things-to-do': 'Things to Do in [City]',
        'museums-culture': '🏛️ Museums & Culture',
        'museum-name': '[Museum Name] - [Brief description]',
        'museum-hours': 'Hours: [Operating hours]',
        'museum-distance': 'Distance: [Distance from venue]',
        'dining': '🍽️ Dining',
        'restaurant-name': '[Restaurant Name] - [Cuisine type]',
        'restaurant-specialty': 'Specialty: [What they\'re known for]',
        'restaurant-reservations': 'Reservations: Recommended',
        'parks-outdoors': '🌳 Parks & Outdoor',
        'park-name': '[Park Name] - [Activity]',
        'park-best-for': 'Best For: [What to do there]',
        'park-entry-fee': 'Entry Fee: [Free/Paid]',
        'footer-follow-us': 'Follow Us',

        // RSVP
        'rsvp-title': 'RSVP',
        'rsvp-intro': 'Please let us know if you can celebrate with us!',
        'rsvp-form-name': 'Your Full Name *',
        'rsvp-form-email': 'Email Address *',
        'rsvp-form-phone': 'Phone Number',
        'rsvp-form-guests': 'Number of Guests *',
        'rsvp-form-guests-select': 'Select...',
        'rsvp-form-guests-1': '1 Guest',
        'rsvp-form-guests-2': '2 Guests',
        'rsvp-form-guests-3': '3 Guests',
        'rsvp-form-guests-4': '4 Guests',
        'rsvp-form-guests-5': '5+ Guests',
        'rsvp-form-attendance': 'Will You Attend? *',
        'rsvp-form-attendance-yes': 'Yes, with great joy!',
        'rsvp-form-attendance-no': 'Regretfully, I cannot attend',
        'rsvp-form-dietary': 'Dietary Restrictions',
        'rsvp-form-dietary-placeholder': 'Please let us know of any dietary restrictions or allergies...',
        'rsvp-form-song': 'Song Request for Reception',
        'rsvp-form-song-placeholder': 'Let us know your favorite song!',
        'rsvp-form-message': 'Message to the Couple',
        'rsvp-form-message-placeholder': 'Share your well wishes or a special memory...',
        'rsvp-form-submit': 'Submit RSVP',
        'rsvp-deadline': 'RSVP Deadline: November 15, 2026',
        'how-to-rsvp': 'How to RSVP',
        'how-to-rsvp-step-1': '<strong>Fill out the form above</strong> with your information',
        'how-to-rsvp-step-2': '<strong>Indicate your attendance</strong> status (yes or no)',
        'how-to-rsvp-step-3': '<strong>Let us know your dietary needs</strong> if any',
        'how-to-rsvp-step-4': '<strong>Add any special requests</strong> like song preferences',
        'how-to-rsvp-step-5': '<strong>Submit the form</strong> before the deadline',
        'rsvp-questions': 'Questions?',
        'rsvp-questions-intro': 'If you have any questions or concerns about your RSVP, please don\'t hesitate to contact us:',
        'rsvp-questions-email': '<strong>Email:</strong> alejandra.juan.2026@email.com',
        'rsvp-questions-phone': '<strong>Phone:</strong> +31 683 043 127 ',

        // FAQ
        'faq-title': 'Frequently Asked Questions',
        'faq-wear-q': 'What should I wear?',
        'faq-wear-a': 'The dress code is <strong>Black Tie Optional</strong>. Feel free to dress to impress! Women typically wear dresses or elegant pantsuits, and men wear tuxedos or dark suits. For the welcome dinner and brunch, smart casual attire is appropriate.',
        'faq-guest-q': 'Can I bring a guest?',
        'faq-guest-a': 'All invitations specify the number of guests you\'re invited to bring. If you have questions, please contact us directly. Plus-ones are limited due to venue capacity.',
        'faq-gift-q': 'Is there a gift registry?',
        'faq-gift-a': 'We\'re registered at <strong>[Registry Site 1]</strong> and <strong>[Registry Site 2]</strong>. However, your presence is the greatest gift. No gift is necessary!',
        'faq-weather-q': 'What is the weather like in December?',
        'faq-weather-a': 'December in Tepoztlán, Morelos is beautiful with pleasant weather and temperatures around 70-80°F. It\'s the perfect time to celebrate in Mexico! The climate is mild and comfortable for outdoor celebrations.',
        'faq-alcohol-q': 'Will there be alcohol?',
        'faq-alcohol-a': 'Yes, we\'ll have a full bar at the reception with beer, wine, and cocktails. Non-alcoholic beverages will also be available throughout all events.',
        'faq-photos-q': 'Can I take photos?',
        'faq-photos-a': 'Feel free to take photos during the ceremony and reception! Please tag us on social media using <strong>#AlejandraAndJuan2026</strong>. We also have a professional photographer.',
        'faq-arrive-q': 'What time should I arrive?',
        'faq-arrive-a': 'Please plan to arrive 30 minutes before the ceremony begins at 4:00 PM. Doors open at 2:00 PM for seating. Arriving early ensures you get a good seat!',
        'faq-parking-q': 'Is parking available?',
        'faq-parking-a': 'Yes, complimentary parking is available at both the ceremony and reception venues. Valet service will be provided at the reception for your convenience.',
        'faq-contact-q': 'Who should I contact with questions?',
        'faq-contact-a': 'Feel free to reach out to us anytime! <strong>Email:</strong> alejandra.juan.2026@email.com or <strong>Call:</strong> +31 683 043 127 ',
        'faq-children-q': 'Will children be welcome?',
        'faq-children-a': 'Children are welcome at all events! If you\'re bringing children, please indicate this in your RSVP so we can plan accordingly for seating and activities.',
        'faq-dietary-q': 'What if I have a dietary restriction?',
        'faq-dietary-a': 'Please let us know in your RSVP about any dietary restrictions or allergies. We want to ensure everyone has delicious food options available.',
        'faq-travel-q': 'What\'s the best way to travel from out of state?',
        'faq-travel-a': 'The nearest major airport is <strong>[Airport Name]</strong>. We recommend booking flights for June 13-16. We\'ve negotiated special hotel rates and will have shuttle service available.',
        'faq-still-questions': 'Still have questions?',
        'faq-general-inquiries': 'General Inquiries:',
        'faq-accommodation-assistance': 'Accommodation Assistance:',
        'faq-rsvp-questions': 'RSVP Questions:',
        'faq-rsvp-response': 'Email or call - We typically respond within 24 hours',
        
        // Footer
        'footer-contact': 'Contact Us',
        'footer-location': 'Location',
        'footer-location-details': 'Tepoztlan, Morelos, Mexico',
        'footer-date': 'December 19, 2026',
        'footer-phone': '+31 683 043 127',
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

    // Update all elements with data-i18n-content attribute
    document.querySelectorAll('[data-i18n-content]').forEach(element => {
        const key = element.getAttribute('data-i18n-content');
        if (translations[currentLanguage][key]) {
            element.setAttribute('content', translations[currentLanguage][key]);
        }
    });

    // Update all elements with data-i18n-alt attribute
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[currentLanguage][key]) {
            element.setAttribute('alt', translations[currentLanguage][key]);
        }
    });
    
    // Update page language attribute
    document.documentElement.lang = currentLanguage;
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
