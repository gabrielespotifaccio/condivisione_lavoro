// Inizializzare la mappa
const map = new ol.Map({
    target: 'map', // Collegamento al contenitore con id="map"
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM() // Utilizziamo OpenStreetMap come base
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([12.5683, 55.6761]), // Coordinate di Copenhagen
        zoom: 12
    })
});

// Funzione per aggiungere un marcatore sulla mappa
function addMarker(longitude, latitude, job) {
    const marker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([longitude, latitude])),
        jobDetails: job
    });

    const layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [marker]
        }),
        style: new ol.style.Style({
            image: new ol.style.Icon({
                src: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
                scale: 0.05
            })
        })
    });

    map.addLayer(layer);

    // Evento click per mostrare i dettagli del lavoro
    map.on('singleclick', (evt) => {
        map.forEachFeatureAtPixel(evt.pixel, (feature) => {
            alert(`Job: ${feature.get('jobDetails').title}\nCompany: ${feature.get('jobDetails').company}`);
        });
    });
}
