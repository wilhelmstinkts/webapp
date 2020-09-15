class MapView {

    static wilhelmsruhCenter = { "latitude": 52.5880115, "longitude": 13.3622059 };
    static defaultZoomLevel = 13;
    static detailZoomLevel = 16;

    constructor(id) {
        this.drawMap(id);

        this.flagIcon = new ol.style.Icon({
            anchor: [0.5, 1],
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            src: 'img/mapFlag.png',
        });
    }

    drawMap(id) {
        this.view = new ol.View({
            center: ol.proj.fromLonLat([MapView.wilhelmsruhCenter.longitude, MapView.wilhelmsruhCenter.latitude]),
            zoom: MapView.defaultZoomLevel
        });

        this.map = new ol.Map({
            target: id,
            units: 'meters',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM({
                        crossOrigin: "anonymous"
                    })
                })
            ],
            view: this.view,
            controls: [
                new ol.control.Attribution({
                    target: document.getElementById('mapAttribution'),
                    className: 'mapAttribution'
                }),
                new ol.control.Zoom()
            ]
        });

        this.markers = new ol.source.Vector({
            features: []
        });
        var layerMarkers = new ol.layer.Vector({
            source: this.markers
        });
        this.map.addLayer(layerMarkers);
    }

    displayPosition(coordinates) {
        this.jumpTo(coordinates, MapView.detailZoomLevel);
        this.addMarker(coordinates);
    }

    jumpTo(coordinates, zoom) {
        this.markers.clear();
        this.view.setZoom(zoom);
        this.view.setCenter(ol.proj.fromLonLat([coordinates.longitude, coordinates.latitude]));
    }

    addMarker(coordinates) {
        var feature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([coordinates.longitude, coordinates.latitude]))
        });

        var iconStyle = new ol.style.Style({
            image: this.flagIcon
        });

        feature.setStyle(iconStyle)

        this.markers.addFeatures([feature]);
    }

    reset() {
        this.jumpTo(MapView.wilhelmsruhCenter, MapView.defaultZoomLevel);
        this.markers.clear();
    }
}
