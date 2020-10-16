const map = L.map('mapid').setView([-27.222633, -49.6455874], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// Create marker

map.on('click', (event) => {

    const lat = event.latlng.lat
    const lng = event.latlng.lng

    // Add to HTML document (lat and lng)

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng


    // Remove icon

    marker && map.removeLayer(marker)

    // Add icon Layer
    marker = L.marker([lat, lng], { icon }).addTo(map)

})

// Add photos and upload

function addPhotoField() {
    // Get photos container (#images)
    const container = document.querySelector('#images')

    // Get duplicate container (.new-upload)
    const fieldContainer = document.querySelectorAll('.new-upload')

    // Clone the last image added
    const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)

    // Check if field is blank

    if (!newFieldContainer.children[0].value == "") {

        // Clear the field before add to images container
        newFieldContainer.children[0].value = ''

        // Add clone to image container (#images)
        container.appendChild(newFieldContainer)

    } else {

        return

    }


}

// Delete photo

function deleteField(event) {

    // Get the span tag
    const span = event.currentTarget

    // Get all fields
    const fieldContainer = document.querySelectorAll('.new-upload')

    if (fieldContainer.length <= 1) {
        //clear field value  
        span.parentNode.children[0].value = ''
        return
    }

    // Delete field
    span.parentNode.remove()
}



// Select yes or no

function toggleSelect(event) {

    // Get actual button target
    const button = event.currentTarget

    // Refresh the hidden input with select value
    const input = document.querySelector('[name="open_on_weekends"]')

    // Check if yes or no
    input.value = button.dataset.value

    // Remove actual ".active" class from buttons

    document.querySelectorAll('.button-select button').forEach(button =>
        button.classList.remove('active')
    )

    // Add ".active" class to target button

    button.classList.add('active')
}