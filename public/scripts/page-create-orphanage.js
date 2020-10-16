//create map
const map = L.map('mapid').setView([-27.2109325,-49.6448719], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);

// Cria o icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
})

let marker;

//Criar o marcador

map.on('click', (event) => {
    const lat = event.latlng.lat //latitude
    const lng = event.latlng.lng //longitude

    
    //pega os valores
    
    
    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng
    
    marker && map.removeLayer(marker) // remove o icone ja clicado

    marker = L.marker([lat, lng], { icon }).addTo(map)     //Adiciona a camada do ícone
})

//Adicionar o campo de fotos

function addPhotoField() {

    //pegar o container das imagens
    const container = document.querySelector('#images');
    // pegar o container e duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima img
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //colocar o clone na parte de imagens
    const input = newFieldContainer.children[0]

    //ver se o benedito campo ta vazio 

    if(input.value == "") {
        return
    }

    input.value = ""

    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = ""
        return 
    }

    span.parentNode.remove()
}

function toggleSelect(event) {
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))


    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}