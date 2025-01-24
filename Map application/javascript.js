// Initialize the map
const map = L.map('mapContainer').setView([51.505, -0.09], 13); // Default to London

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Predefined marker with a pop-up
const predefinedMarker = L.marker([51.505, -0.09]).addTo(map);
predefinedMarker.bindPopup('<b>Welcome!</b><br>This is a predefined marker.').openPopup();

// Add marker functionality
map.on('click', (e) => {
  const { lat, lng } = e.latlng;
  const userMarker = L.marker([lat, lng]).addTo(map);
  userMarker.bindPopup(`Custom Marker at:<br>Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`).openPopup();
});

// Add a circle for visualization
const circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);
circle.bindPopup('A circle visualization.');

// Smooth scrolling for navigation
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});