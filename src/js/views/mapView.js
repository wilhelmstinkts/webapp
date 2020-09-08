class MapView {
    static drawMap(id) {
        map = new OpenLayers.Map(id);
        map.addLayer(new OpenLayers.Layer.OSM());
        map.zoomToMaxExtent();
    }
}