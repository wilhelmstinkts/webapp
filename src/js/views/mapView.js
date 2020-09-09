class MapView {
    map;
    layerMarkers;
    icon;

    static wilhelmsruhCenter = { "latitude": 52.5880115, "longitude": 13.3622059 };
    static defaultZoomLevel = 13;
    static detailZoomLevel = 16;

    drawMap(id) {
        map = new OpenLayers.Map(id, {
            projection: new OpenLayers.Projection("EPSG:900913"),
            units: 'meters'
        });
        map.addLayer(new OpenLayers.Layer.OSM());
        this.jumpTo(MapView.wilhelmsruhCenter, MapView.defaultZoomLevel);

        this.layerMarkers = new OpenLayers.Layer.Markers("Position", {
            projection: new OpenLayers.Projection("EPSG:4326"),
            visibility: true, displayInLayerSwitcher: false
        });

        map.addLayer(this.layerMarkers);

        this.icon = new OpenLayers.Icon("img/mapFlag.png", { "w": 20, "h": 20 }, { "x": 0, "y": 0 });
    }

    displayPosition(coordinates) {
        this.jumpTo(coordinates, MapView.detailZoomLevel);
        this.addMarker(coordinates);
    }

    jumpTo(coordinates, zoom) {
        var x = Lon2Merc(coordinates.longitude);
        var y = Lat2Merc(coordinates.latitude);
        map.setCenter(new OpenLayers.LonLat(x, y), zoom);
        return false;
    }

    addMarker(coordinates) {
        var ll = new OpenLayers.LonLat(Lon2Merc(coordinates.longitude), Lat2Merc(coordinates.latitude));
        var marker = new OpenLayers.Marker(ll, this.icon);
        this.layerMarkers.addMarker(marker);
    }

    reset() {
        this.jumpTo(MapView.wilhelmsruhCenter, MapView.defaultZoomLevel);
        this.layerMarkers.clearMarkers();
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
