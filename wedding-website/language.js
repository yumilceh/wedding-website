// ===========================
// Language Switcher
// ===========================
const translations = {
    es: {
        // Navigation
        'nav-home': 'Inicio',
        'nav-about': 'Más Sobre Nosotros',
        'nav-why': 'Por Qué Tepoztlán',
        'nav-travel-advice': 'Consejos de viaje',

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
        'about-story-1': 'Si nos dejas un ratito sentados, nos convenceriamos de que nos conocimos hace muchos milenios, Alejandra segura de que la reencarnación existe, Juan dando una teoría quasicientífica \
                        pero que en su corazón es la única teoría que tiene sentido. Juan se sienta la mira, y se conmueve de amor, ella se sienta lo mira y se sabe amada.',
        'about-story-2': 'Nos concimos en 2004, cuando cursabamos la preparatoria, aunque Juan probablemente miro a Alejandra algunas tardes de 2003 en el patío de ese prepa, aun sin conocerla pero atraído, la recuerda en su uniforme azul.  \
                          Fuimos amigos, nos coqueteamos, nos escribimos, nos intentamos, nos besamos, nos despedimos, nos fastidiamos, nos reencontramos. Y así, después de 13 años de conocernos,  \
                          supimos, sospechamos, que sería para siempre.',
        'about-journey': 'Nuestro Viaje Juntos',
        'about-story-3': 'No queremos fastidiarlos con los ires y venires de tres años de relación a distancia, \
                          de viajes juntos, de mensajes, audios, llamadas interminables, de tristezas y nostalgías, \
                          de ganas de converger. Fue por fin 2021 cuando Alejandra se mudo a Amsterdam, y juntos llenamos la casa de plantas, de historia, de amor. \
                          Juntos hemos viajado, hemos crecido, hemos aprendido uno del otro, hemos ido y venido. De nosotros nacieron un hogar, una empresa, la vida.',
        'about-story-4': 'Y la vida necesita una casa, y la casa de nuesta vida es el amor materializado en nuestro matrimonio. Hemos colocado los cimientos, y ahora le pondremos muros y ventanas, y ya veremos que tanto más, \
                         con la certeza de que no importaran los altibajos de la vida, porque en nuestra casa siempre tendremos el refugió amoroso, para construirnos y deconstruirnos, para seguir y trascender juntos.',
        'about-story-5': 'Poríamos decir muchas cosas mas de nuestra historía, pero nuestra historía ahora tambien será contada por todos aquellos que la han tocado, ustedes, nuestra familia y amigos, ustedes son parte. ',                 
        'about-important-dates': 'Nuestras Fechas Importantes',
        'about-when-met': '¿Cuándo Nos Conocimos?',
        'about-when-met-date': 'Agosto, 2004',
        'about-location-context': 'En la preparatoria, con los amigos de la jardinera. Juan jura haber notado a Alejandra mucho antes.',
        'about-first-date': 'Primer Cita',
        'about-first-date-date': 'Diciembre 21, 2017',
        'about-where-did': 'Coyoacán, Ciudad de México. Cenamos y nos bebimos unos mezcales, después fuimos a una fiesta con Ana Clark. Lo demás es historia.',
        'about-moving-together': 'Mudanza Juntos',
        'about-moving-together-date': '22 Julio, 2021',
        'about-moving-together-context': 'Alejandra se mudó a Amsterdam, y juntos llenamos la casa de plantas.',
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

        // Travel Advice
        'travel-advice-meta-title': 'Guía de viaje para invitados - Alejandra y Juan',
        'travel-advice-meta-description': 'Guía para invitados que viajan a México para la boda en Tepoztlán y otros consejos.',
        'travel-advice-title': 'Consejos de viaje',
        'travel-advice-intro': 'Esta guía está pensada para nuestros invitados internacionales, pero también para compartir algunos detalles sobre nuestros días en Tepoztlán.',
        'travel-advice-moving-around-title': 'Información de viaje',
        'travel-advice-general-info-title': 'Información general',
        'travel-advice-mexico-city-title': 'Ciudad de México',
        'travel-advice-cdmx-stay-title': 'Hospedaje en CDMX',
        'travel-advice-cdmx-stay-body': 'Estamos trabajando con un agente para encontrar hospedaje grupal en una zona bonita y bien ubicada. Compartiremos los detalles pronto.',
        'travel-advice-cdmx-free-day-title': 'Tu día libre en CDMX (17 dic)',
        'travel-advice-cdmx-free-day-body': 'El 17 de diciembre es un día libre en Ciudad de México. Una oportunidad perfecta para explorar antes de ir a Tepoztlán: museos, mercados, parques, gastronomía y mucho más.',
        'travel-advice-cdmx-around-title': 'Moverse en la ciudad',
        'travel-advice-cdmx-around-body': 'Uber funciona muy bien en CDMX. Moverse en grupo es cómodo y más económico. Evita taxis de la calle y opta siempre por Uber o transportes de confianza.',
        'travel-advice-cdmx-weather-title': 'Clima en Ciudad de México (diciembre)',
        'travel-advice-cdmx-weather-body': 'Diciembre en CDMX es seco y fresco. Máximas de aprox. 22°C y mínimas de aprox. 8-9°C. Las noches pueden ser bastante frías — lleva siempre una chaqueta.',
        'travel-advice-getting-there-title': 'Cómo llegar',
        'travel-advice-flights-title': 'Vuelos a Ciudad de México',
        'travel-advice-flights-body': 'La mejor opción es volar al Aeropuerto Internacional Benito Juárez de Ciudad de México (MEX).',
        'travel-advice-airport-transfer-title': 'Del aeropuerto a Tepoztlán',
        'travel-advice-airport-transfer-body': 'Ruta recomendada por cuenta propia: Uber a Terminal Central del Sur (Tasqueña) y después autobús ADO a Tepoztlán.',
        'travel-advice-bus-title': 'Autobús y combinaciones',
        'travel-advice-bus-body': 'Compra tus boletos con ADO: https://www.ado.com.mx/. Recomendamos salir con tiempo extra por tráfico, especialmente en fines de semana.',
        'travel-advice-shuttle-title': 'Transporte grupal (ida y vuelta)',
        'travel-advice-shuttle-body': 'También estamos planeando transporte grupal de ida y vuelta entre Ciudad de México y Tepoztlán. Compartiremos horarios y puntos de salida cuando quede confirmado.',
        'travel-advice-in-town-title': 'En Tepoztlán',
        'travel-advice-tepoztlan-title': 'Tepoztlan',
        'travel-advice-weather-title': 'Clima en diciembre',
        'travel-advice-weather-body': 'Diciembre en Tepoztlán es seco y agradable. Espera temperaturas de aprox. 24-26°C de día y 10-13°C de noche. Lleva capas porque al anochecer refresca rápido.',
        'travel-advice-itinerary-title': 'Resumen de semana (provisional)',
        'travel-advice-itinerary-body': '15-16 dic actividades juntos. 17 dic día libre en CDMX. 18 dic viaje a Tepoztlán, hike al Tepozteco y drinks en la tarde. 19 dic la boda. 20 dic plan opcional por confirmar. 21 dic regreso a CDMX.',
        'travel-advice-pack-title': 'Qué llevar',
        'travel-advice-pack-body': 'Ropa por capas, bloqueador, lentes de sol y calzado cómodo. El dress code del día de la boda se publicará pronto.',
        'travel-advice-stay-title': 'Hospedaje',
        'travel-advice-stay-body': 'En Tepoztlan (18-21 dic) estamos organizando habitaciones dobles en 4 o 5 hoteles/departamentos. En CDMX seguimos definiendo una zona oficial para recomendar al grupo.',
        'travel-advice-money-title': 'Dinero y pagos',
        'travel-advice-money-body': 'Trae algo de efectivo (MXN), pero en muchos lugares también podrás pagar con tarjeta. Recomendamos usar Wise para tipo de cambio y pagos directos.',
        'travel-advice-money-link': 'Abrir recomendación de Wise',
        'travel-advice-connectivity-title': 'Internet y celular',
        'travel-advice-connectivity-body': 'Estamos investigando la mejor recomendación de eSIM/SIM y conectividad para compartirla pronto.',
        'travel-advice-safety-title': 'Seguridad y salud',
        'travel-advice-safety-body': 'Moverse en grupo por Uber suele ser cómodo y accesible. Usa protector solar durante el día y mantente hidratado.',
        'travel-advice-hike-title': 'Hike al Tepozteco',
        'travel-advice-hike-body': 'Nivel medio. Con tenis deportivos, una botella de agua y bloqueador debería ser suficiente. Puede hacer más frío arriba: lleva suéter ligero. Si te afecta la altura, mejor evita la caminata. Mapa oficial: pronto.',
        'travel-advice-food-title': 'Comida y fiesta',
        'travel-advice-food-body': 'Disfruta la comida picante con responsabilidad y evita los shots de tequila. Mejor saborear que sufrir.',
        'travel-advice-emergency-title': 'Emergencias',
        'travel-advice-emergency-body': 'En México, el número general de emergencias es 911. Si necesitas apoyo, avisa también al chat del grupo de boda para coordinarnos rápido.',
        'travel-advice-maps-title': 'Ubicación',
        'travel-advice-maps-link': 'Abrir mapa del venue (Rincon Meztitla)',
        'travel-advice-maps-body': 'Guarda este enlace para ubicarte y compartir tu llegada.',

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
        'footer-map-link': 'Ver en Google Maps', // Add this line
        'footer-phone': '+31 683 043 127',
        'footer-email': 'boda.ale.y.juan.2026@gmail.com',
        'footer-copyright': '© 2026 Alejandra & Juan. Todos los derechos reservados.'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-why': 'Why Tepoztlan',
        'nav-travel-advice': 'Travel Advice',

        // Meta
        'page-title': 'Alejandra & Juan - Our Wedding',
        'meta-description': 'Alejandra & Juan\'s Wedding - December 19, 2026 in Tepoztlan, Morelos, Mexico',
        
        // Hero Section
        'hero-names': 'Alejandra & Juan',
        'hero-subtitle': 'We\'re Getting Married!',
        'hero-date': 'December 19, 2026',
        'hero-location': 'Tepoztlán, Morelos, Mexico',
        
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
        'about-story-1': 'If you let us sit together for a moment, we’d convince ourselves we met eons ago; Alejandra is confident reincarnation exists while Juan shares a quasi-scientific theory that, in his heart, is the only one that makes sense. He sits down and looks at her, moved by love; she looks back and knows she is loved.',
        'about-story-2': 'We met in 2004 during high school, although Juan probably saw Alejandra in the campus courtyard some afternoons of 2003 before he truly knew her; he still remembers her in that blue uniform. We were friends, we flirted, we wrote to each other, we tried things, we kissed, we said goodbye, we annoyed each other, and we reunited. After thirteen years of knowing one another, we finally understood this would last forever.',
        'about-journey': 'Our Journey Together',
        'about-story-3': 'We don’t want to bore you with the ups and downs of three years of a long-distance relationship—of the trips, endless messages, audios, calls, sadness, and nostalgia, of the desire to finally be together.',
        'about-story-4': 'Life needs a home, and the home of our life is the love embodied in our marriage. We’ve laid the foundation, and now we’re putting up walls and windows; we’ll discover together what else comes, secure in the knowledge that no matter how life’s highs and lows swing, our home will always be a loving refuge where we can build and rebuild ourselves.',
        'about-story-5': 'We could say so much more about our story, but it is also being written by everyone who has touched it—you, our family and friends, are part of it.',
        'about-important-dates': 'Our Important Dates',
        'about-when-met': 'When We Met',
        'about-when-met-date': 'August, 2004',
        'about-location-context': 'In high school with the garden-class friends; Juan swears he noticed Alejandra long before.',
        'about-first-date': 'First Date',
        'about-first-date-date': 'December 21, 2017',
        'about-where-did': 'Coyoacán, Mexico City. We had dinner, drank mezcal, and then went to a party with Ana Clark. The rest is history.',
        'about-moving-together': 'Moving In Together',
        'about-moving-together-date': 'July 22, 2021',
        'about-moving-together-context': 'Alejandra moved to Amsterdam, and together we filled our home with plants and life.',
        'about-proposal': 'The Proposal',
        'about-proposal-date': 'April 20, 2025',
        'about-how-proposed': 'In Playa del Carmen beside the sea at night, under thousands of stars, in front of the lights of Cozumel, with no one else there but God and the universe witnessing it.',
        'about-wedding-day': 'Our Wedding Day',
        'hero-date-card': 'December 19, 2026',
        'hero-location': 'Tepoztlán, Morelos, Mexico',

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

        // Travel Advice
        'travel-advice-meta-title': 'Travel Guide for Guests - Alejandra and Juan',
        'travel-advice-meta-description': 'Guide for guests traveling to Mexico for our wedding in Tepoztlan.',
        'travel-advice-title': 'Travel Advice',
        'travel-advice-intro': 'This guide is designed for our international guests but also to provide some details on our days in Tepoztlan.',
        'travel-advice-moving-around-title': 'Travel Information',
        'travel-advice-general-info-title': 'General Information',
        'travel-advice-mexico-city-title': 'Mexico City',
        'travel-advice-cdmx-stay-title': 'Accommodation in Mexico City',
        'travel-advice-cdmx-stay-body': 'We are working with an agent to find group accommodation in a nice, well-located area. We will share all the details soon.',
        'travel-advice-cdmx-free-day-title': 'Your free day in Mexico City (Dec 17)',
        'travel-advice-cdmx-free-day-body': 'December 17th is a free day in Mexico City — the perfect chance to explore before heading to Tepoztlan. World-class museums, markets, parks, incredible food and more await.',
        'travel-advice-cdmx-around-title': 'Getting around the city',
        'travel-advice-cdmx-around-body': 'Uber works great in Mexico City. Moving in groups keeps it affordable and easy. Avoid street taxis and always use Uber or trusted transport.',
        'travel-advice-cdmx-weather-title': 'Weather in Mexico City (December)',
        'travel-advice-cdmx-weather-body': 'December in Mexico City is dry and cool. Highs around 22°C and lows around 8-9°C. Evenings can get quite cold — always bring a jacket.',
        'travel-advice-getting-there-title': 'Getting there',
        'travel-advice-flights-title': 'Flights to Mexico City',
        'travel-advice-flights-body': 'Best option: fly into Benito Juarez International Airport in Mexico City (MEX).',
        'travel-advice-airport-transfer-title': 'From the airport to Tepoztlán',
        'travel-advice-airport-transfer-body': 'Recommended self-transfer: Uber to Terminal Central del Sur (Tasqueña), then ADO bus to Tepoztlan.',
        'travel-advice-bus-title': 'Bus connections',
        'travel-advice-bus-body': 'Book tickets on ADO: https://www.ado.com.mx/. Add buffer time for traffic, especially on weekends.',
        'travel-advice-shuttle-title': 'Group transport (roundtrip)',
        'travel-advice-shuttle-body': 'We are also planning roundtrip group transport between Mexico City and Tepoztlan. We will share confirmed pickup points and schedules soon.',
        'travel-advice-in-town-title': 'In Tepoztlán',
        'travel-advice-tepoztlan-title': 'Tepoztlan',
        'travel-advice-weather-title': 'Weather in December',
        'travel-advice-weather-body': 'December in Tepoztlan is dry and pleasant. Expect around 24-26°C during the day and 10-13°C at night. Bring layers as evenings cool down quickly.',
        'travel-advice-itinerary-title': 'Week Snapshot (provisional)',
        'travel-advice-itinerary-body': 'Dec 15-16 activities together. Dec 17 free day in Mexico City. Dec 18 transfer to Tepoztlan, Tepozteco hike, and evening drinks. Dec 19 wedding day. Dec 20 optional plan to be confirmed. Dec 21 return to Mexico City.',
        'travel-advice-pack-title': 'What to pack',
        'travel-advice-pack-body': 'Bring layers, sunscreen, sunglasses, and comfortable shoes. Wedding-day dress code will be shared soon.',
        'travel-advice-stay-title': 'Where to stay',
        'travel-advice-stay-body': 'In Tepoztlan (Dec 18-21), we are organizing double rooms across 4-5 hotels/apartments. In Mexico City, we are still defining the official neighborhood recommendation.',
        'travel-advice-money-title': 'Money and payments',
        'travel-advice-money-body': 'Bring some cash (MXN), and also expect card payments in many places. We recommend Wise for better exchange rates and direct payments.',
        'travel-advice-money-link': 'Open Wise recommendation',
        'travel-advice-connectivity-title': 'Phone and internet',
        'travel-advice-connectivity-body': 'We are checking the best eSIM/SIM and connectivity options and will share recommendations soon.',
        'travel-advice-safety-title': 'Safety and health',
        'travel-advice-safety-body': 'Moving in groups by Uber is usually convenient and affordable. Use sun protection during the day and stay hydrated.',
        'travel-advice-hike-title': 'Tepozteco Hike',
        'travel-advice-hike-body': 'Medium difficulty. Sports shoes, one water bottle, and sunscreen should be enough. It can feel cooler at higher altitude, so bring a light sweater. If altitude affects you, skip the hike. Official map: coming soon.',
        'travel-advice-food-title': 'Food and party tips',
        'travel-advice-food-body': 'Enjoy spicy food responsibly and avoid tequila shots. Better flavor, less chaos.',
        'travel-advice-emergency-title': 'Emergency help',
        'travel-advice-emergency-body': 'In Mexico, the general emergency number is 911. If you need support, also message the wedding group chat so we can coordinate quickly.',
        'travel-advice-maps-title': 'Location',
        'travel-advice-maps-link': 'Open venue map (Rincon Meztitla)',
        'travel-advice-maps-body': 'Save this link to share your ETA and arrival point.',

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
        'footer-email': 'boda.ale.y.juan.2026@gmail.com',
        'footer-date': 'December 19, 2026',
        'footer-map-link': 'View on Google Maps', // Add this line
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
