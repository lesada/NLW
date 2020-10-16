// const { orphanage } = require("../../src/pages");

// Cria o mapa
const map = L.map('mapid').setView([-30.0578553,-51.1723984], 15);  

// Cria o tittleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);

//cria o icone
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29,68],
  popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}){


// criar o benedito popup
const popup = L.popup({
  closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent(`${name}CA Fabiana Anjo de Luz <a href="/orphanage?id=${id}"> 
<img src="/images/arrow-white.svg"> </a>`)

//Cria o marcador
L.marker([lat, lng], { icon })
  .addTo(map)
  .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span=> {
  const orphanage = {
    id:span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }

  addMarker(orphanage)
})
