const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const cities = [
  { name: "London", lat: 51.505, lng: -0.09 },
  { name: "Paris", lat: 48.8566, lng: 2.3522 },
  { name: "New York", lat: 40.7128, lng: -74.0060 },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Sydney", lat: -33.8688, lng: 151.2093 }
];

cities.forEach(city => {
  L.marker([city.lat, city.lng])
    .addTo(map)
    .bindPopup(`<b>${city.name}</b>`);
});