
// Cria o mapa
const map = L.map('mapid').setView([-30.0578553,-51.1723984], 15);  

// Cria o tittleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);

//cria o icone
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29,68],
  popupAnchor: [170, 2]
})

// criar o benedito popup
const popup = L.popup({
  closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('CA Fabiana Anjo de Luz <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

//Cria o marcador
L.marker([-30.0578553, -51.1723984], { icon })
  .addTo(map)
  .bindPopup(popup)
