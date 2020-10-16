const options = {
  dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}
// Cria o mapa
const map = L.map('mapid', options).setView([-30.0578553,-51.1723984], 15);  

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


//Cria o marcador
L.marker([-30.0578553, -51.1723984], { icon })
  .addTo(map)


  /* galerizinha de imagens */

function selectImage(event) {
  const button = event.currentTarget

 

  const buttons = document.querySelectorAll(".images button") // achar o dito cujo que está clicado
  buttons.forEach(removeActiveClass) //e remover a classe active:


  
  function removeActiveClass(button) {
    button.classList.remove('active');
  }
  // selecionar a imagem que tu clicou 
  
  const image = button.children[0]

  // pega a imagem grande
  const imageContainer = document.querySelector('.orphanage-details > img')
  

  // atualiza a imagem grande
  imageContainer.src = image.src

  button.classList.add('active')//e por um active
}