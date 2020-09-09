class MapView {


    static drawMap(id) {
        map = new OpenLayers.Map(id, {
            projection: new OpenLayers.Projection("EPSG:900913"),
            units: 'meters'
        });
        map.addLayer(new OpenLayers.Layer.OSM());
        jumpTo(map, 13.3622059, 52.5880115, 13);
    }

}

function jumpTo(map, lon, lat, zoom) {
    var x = Lon2Merc(lon);
    var y = Lat2Merc(lat);
    map.setCenter(new OpenLayers.LonLat(x, y), zoom);
    return false;
}

function Lon2Merc(lon) {
    return 20037508.34 * lon / 180;
}

function Lat2Merc(lat) {
    var PI = 3.14159265358979323846;
    lat = Math.log(Math.tan((90 + lat) * PI / 360)) / (PI / 180);
    return 20037508.34 * lat / 180;
}
