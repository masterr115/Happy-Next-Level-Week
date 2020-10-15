const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-27.222633, -49.6455874], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

L.marker([-27.222633, -49.6455874], { icon })
    .addTo(map)

// Image Galery

function selectImage(event) {

    const button = event.currentTarget

    // Get all Buttons

    const buttons = document.querySelectorAll(".images button")

    // Remove 'Active' class for all buttons

    buttons.forEach(button => {
        button.classList.remove("active")
    })

    // Add 'Active' class to especific button

    button.classList.add("active")

    // Select actual image

    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    // Refresh new image

    imageContainer.src = image.src

}