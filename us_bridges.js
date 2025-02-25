let usBridgeCenterCoordinates = [39.8283, -98.5795]
let zoomLevel = 4

let map = L.map('us-bridges').setView(usBridgeCenterCoordinates, zoomLevel)


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

var bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize:     [45, 45], // size of the icon
    iconAnchor:   [22, 42], // point of the icon which will correspond to marker's location
    popupAnchor:  [-1, -40] // point from which the popup should open relative to the iconAnchor
});

var blueIcon = L.icon({
    iconUrl: 'blue-bridge.png',
    iconSize:     [45, 45], // size of the icon
    iconAnchor:   [22, 42], // point of the icon which will correspond to marker's location
    popupAnchor:  [-1, -40] // point from which the popup should open relative to the iconAnchor
});

L.marker([40.6066, -74.0447], {icon: blueIcon}).addTo(map)
    .bindPopup('Verrazzano-Narrows Bridge<br>New York, NY<br>1298.4 meters long')

bridges =  [
    {"name": "Verrazzano-Narrows Bridge", "location": "New York, NY", "span": "1298.4", "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "location": "San Francisco and Marin, CA", "span": "1280.2", "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "location": "Mackinaw and St Ignace, MI", "span": "1158", "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "location": "New York, NY and New Jersey, NJ", "span": "1067", "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "location": "Tacoma and Kitsap, WA", "span": "853.44", "coordinates": [47.2690, -122.5517] }
]

bridges.forEach(function(bridge) {
    let marker = L.marker(bridge.coordinates, {icon: bridgeIcon})
        .bindPopup(`${bridge.name}<br>${bridge.city}<br>${bridge.span} meters long</a>`)
        .addTo(map)
})

