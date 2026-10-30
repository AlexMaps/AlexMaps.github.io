var wms_layers = [];


        var lyr_OpenCycleMaps_0 = new ol.layer.Tile({
            'title': 'Open Cycle Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.cyclosm.org">CyclOSM | Map data © OpenStreetMap contributors</a>',
                url: 'https://a.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png'
            })
        });

        var lyr_WaymarkedTrailsCycling_1 = new ol.layer.Tile({
            'title': 'Waymarked Trails: Cycling',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png'
            })
        });
var format_CityofGuelphBoundary_2 = new ol.format.GeoJSON();
var features_CityofGuelphBoundary_2 = format_CityofGuelphBoundary_2.readFeatures(json_CityofGuelphBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityofGuelphBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityofGuelphBoundary_2.addFeatures(features_CityofGuelphBoundary_2);
var lyr_CityofGuelphBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CityofGuelphBoundary_2, 
                style: style_CityofGuelphBoundary_2,
                popuplayertitle: 'City of Guelph Boundary',
                interactive: false,
                title: '<img src="styles/legend/CityofGuelphBoundary_2.png" /> City of Guelph Boundary'
            });
var format_CityofGuelphBikeRacks_3 = new ol.format.GeoJSON();
var features_CityofGuelphBikeRacks_3 = format_CityofGuelphBikeRacks_3.readFeatures(json_CityofGuelphBikeRacks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityofGuelphBikeRacks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityofGuelphBikeRacks_3.addFeatures(features_CityofGuelphBikeRacks_3);
var lyr_CityofGuelphBikeRacks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CityofGuelphBikeRacks_3, 
                style: style_CityofGuelphBikeRacks_3,
                popuplayertitle: 'City of Guelph Bike Racks',
                interactive: true,
    title: 'City of Guelph Bike Racks<br />\
    <img src="styles/legend/CityofGuelphBikeRacks_3_0.png" /> No<br />\
    <img src="styles/legend/CityofGuelphBikeRacks_3_1.png" /> Yes<br />' });

lyr_OpenCycleMaps_0.setVisible(true);lyr_WaymarkedTrailsCycling_1.setVisible(true);lyr_CityofGuelphBoundary_2.setVisible(true);lyr_CityofGuelphBikeRacks_3.setVisible(true);
var layersList = [lyr_OpenCycleMaps_0,lyr_WaymarkedTrailsCycling_1,lyr_CityofGuelphBoundary_2,lyr_CityofGuelphBikeRacks_3];
lyr_CityofGuelphBoundary_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'BOUNDARY': 'BOUNDARY', 'AREA_': 'AREA_', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'GlobalID': 'GlobalID', });
lyr_CityofGuelphBikeRacks_3.set('fieldAliases', {'fid': 'fid', 'OSM URL': 'OSM URL', 'Name of Location': 'Name of Location', 'Civic Address': 'Civic Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type of Rack': 'Type of Rack', 'Number of Spots': 'Number of Spots', 'Covered': 'Covered', 'Ownership': 'Ownership', 'Notes': 'Notes', 'Existing OSM Node Value': 'Existing OSM Node Value', });
lyr_CityofGuelphBoundary_2.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'Range', 'BOUNDARY': 'TextEdit', 'AREA_': 'TextEdit', 'PERIMETER': 'TextEdit', 'ACRES': 'TextEdit', 'HECTARES': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_CityofGuelphBikeRacks_3.set('fieldImages', {'fid': 'Hidden', 'OSM URL': 'Hidden', 'Name of Location': 'TextEdit', 'Civic Address': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Type of Rack': 'ValueMap', 'Number of Spots': 'TextEdit', 'Covered': 'ValueMap', 'Ownership': 'TextEdit', 'Notes': 'TextEdit', 'Existing OSM Node Value': 'Hidden', });
lyr_CityofGuelphBoundary_2.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'BOUNDARY': 'no label', 'AREA_': 'no label', 'PERIMETER': 'no label', 'ACRES': 'no label', 'HECTARES': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'GlobalID': 'no label', });
lyr_CityofGuelphBikeRacks_3.set('fieldLabels', {'Name of Location': 'inline label - visible with data', 'Civic Address': 'inline label - visible with data', 'Type of Rack': 'inline label - visible with data', 'Number of Spots': 'inline label - visible with data', 'Covered': 'inline label - visible with data', 'Ownership': 'inline label - visible with data', 'Notes': 'inline label - visible with data', });
lyr_CityofGuelphBikeRacks_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});