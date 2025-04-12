let map;
let markers = [];

function initMap() {
    const copenhagen = { lat: 55.6761, lng: 12.5683 };
    map = new google.maps.Map(document.getElementById("map"), {
        center: copenhagen,
        zoom: 12,
    });
}

function addMarker(position, job) {
    const marker = new google.maps.Marker({
        position: position,
        map: map,
        title: job.title
    });

    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div>
                <h5>${job.title}</h5>
                <p>${job.company}</p>
                <p>${job.description}</p>
                <a href="#">Apply Now</a>
            </div>
        `
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });

    markers.push(marker);
}
