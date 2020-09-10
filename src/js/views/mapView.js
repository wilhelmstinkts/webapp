class MapView {
    map;
    markers;
    view;
    icon;

    static wilhelmsruhCenter = { "latitude": 52.5880115, "longitude": 13.3622059 };
    static defaultZoomLevel = 13;
    static detailZoomLevel = 16;

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
                    source: new ol.source.OSM()
                })
            ],
            view: this.view,
            controls: ol.control.defaults({
                attributionOptions: {
                    target: document.getElementById('mapAttribution'),
                    className: 'mapAttribution'
                }
            })
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
            image: new ol.style.Icon({
                anchor: [0.5, 1],
                anchorXUnits: 'fraction',
                anchorYUnits: 'fraction',
                src: 'img/mapFlag.png',
            }),
        });

        feature.setStyle(iconStyle)

        this.markers.addFeatures([feature]);
    }

    reset() {
        this.jumpTo(MapView.wilhelmsruhCenter, MapView.defaultZoomLevel);
        this.markers.clear();
    }
}

function Lon2Merc(lon) {
    return 20037508.34 * lon / 180;
}

function Lat2Merc(lat) {
    var PI = 3.14159265358979323846;
    lat = Math.log(Math.tan((90 + lat) * PI / 360)) / (PI / 180);
    return 20037508.34 * lat / 180;
}
