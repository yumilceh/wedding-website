// ===========================
// Mexico Explore Map (Travel Advice page)
// ===========================
document.addEventListener('DOMContentLoaded', function () {
    var mapEl = document.getElementById('mexico-map');
    if (!mapEl || typeof L === 'undefined') return;

    var destinations = [
        { name: 'Cancún', lat: 21.1619, lng: -86.8515 },
        { name: 'Playa del Carmen', lat: 20.6296, lng: -87.0739 },
        { name: 'Tulum', lat: 20.2114, lng: -87.4654 },
        { name: 'Holbox', lat: 21.5211, lng: -87.3794 },
        { name: 'Valladolid', lat: 20.6896, lng: -88.2016 },
        { name: 'Chichén Itzá', lat: 20.6843, lng: -88.5678 },
        { name: 'Uxmal', lat: 20.3597, lng: -89.7702 },
        { name: 'Mérida', lat: 20.9674, lng: -89.5926 },
        { name: 'Cañón del Sumidero', lat: 16.8676, lng: -93.1329 },
        { name: 'San Cristóbal de las Casas', lat: 16.7370, lng: -92.6376 },
        { name: 'Mazunte', lat: 15.6667, lng: -96.5500 },
        { name: 'Zipolite', lat: 15.6675, lng: -96.5230 },
        { name: 'Puerto Escondido', lat: 15.8720, lng: -97.0767 },
        { name: 'Oaxaca', lat: 17.0732, lng: -96.7266 },
        { name: 'Puebla', lat: 19.0414, lng: -98.2063 },
        { name: 'Ciudad de México', lat: 19.4326, lng: -99.1332 },
        { name: 'Tepoztlán', lat: 18.9847, lng: -99.0940, isVenue: true }
    ];

    var map = L.map('mexico-map', { scrollWheelZoom: false });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
        maxZoom: 17
    }).addTo(map);

    var venueLabel = (typeof currentLanguage !== 'undefined' && currentLanguage === 'en') ? ' — wedding venue' : ' — sede de la boda';
    var bounds = [];

    destinations.forEach(function (d) {
        var marker = L.circleMarker([d.lat, d.lng], {
            radius: d.isVenue ? 9 : 6,
            color: '#fff',
            weight: 2,
            fillColor: '#000',
            fillOpacity: 1
        }).addTo(map);
        marker.bindPopup('<strong>' + d.name + '</strong>' + (d.isVenue ? venueLabel : ''));
        bounds.push([d.lat, d.lng]);
    });

    map.fitBounds(bounds, { padding: [24, 24] });
});
