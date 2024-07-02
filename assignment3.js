// Initialize the map
const map = L.map('map').setView([0.0236, 37.9062], 6); // Coordinates for Kenya

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker with a custom popup
const marker = L.marker([1.2921, 36.8219]).addTo(map); // Coordinates for Nairobi

const popupContent = `
    <div>
        <h3>Nairobi</h3>
        <p>The capital city of Kenya.</p>
        <img src="https://example.com/image.jpg" alt="Nairobi" style="width:100%; height:auto;">
    </div>
`;

marker.bindPopup(popupContent);

// Add more markers with custom popups as needed
const marker2 = L.marker([-1.286389, 36.817223]).addTo(map); // Coordinates for another location

const popupContent2 = `
    <div>
        <h3>Location 2</h3>
        <p>Description for location 2.</p>
        <img src="https://example.com/image2.jpg" alt="Location 2" style="width:100%; height:auto;">
    </div>
`;

marker2.bindPopup(popupContent2);
