var map = L.map('map', {
    zoomControl:false, maxZoom:28, minZoom:1
}).fitBounds([[41.056519474645654,1.1029288765830914],[41.09130463862786,1.194986449216472]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
// remove popup's row if "visible-with-data"
function removeEmptyRowsFromPopupContent(content, feature) {
 var tempDiv = document.createElement('div');
 tempDiv.innerHTML = content;
 var rows = tempDiv.querySelectorAll('tr');
 for (var i = 0; i < rows.length; i++) {
     var td = rows[i].querySelector('td.visible-with-data');
     var key = td ? td.id : '';
     if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
         rows[i].parentNode.removeChild(rows[i]);
     }
 }
 return tempDiv.innerHTML;
}
// add class to format popup if it contains media
function addClassToPopupIfMedia(content, popup) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    if (tempDiv.querySelector('td img')) {
        popup._contentNode.classList.add('media');
            // Delay to force the redraw
            setTimeout(function() {
                popup.update();
            }, 10);
    } else {
        popup._contentNode.classList.remove('media');
    }
}
var zoomControl = L.control.zoom({
    position: 'topleft'
}).addTo(map);
var measureControl = new L.Control.Measure({
    position: 'topleft',
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: 'hectares'
});
measureControl.addTo(map);
document.getElementsByClassName('leaflet-control-measure-toggle')[0].innerHTML = '';
document.getElementsByClassName('leaflet-control-measure-toggle')[0].className += ' fas fa-ruler';
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
map.createPane('pane_ESRISatlit_0');
map.getPane('pane_ESRISatlit_0').style.zIndex = 400;
var layer_ESRISatlit_0 = L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    pane: 'pane_ESRISatlit_0',
    opacity: 1.0,
    attribution: '<a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 22
});
layer_ESRISatlit_0;
map.addLayer(layer_ESRISatlit_0);
map.createPane('pane_ESRITopogrfic_1');
map.getPane('pane_ESRITopogrfic_1').style.zIndex = 401;
var layer_ESRITopogrfic_1 = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    pane: 'pane_ESRITopogrfic_1',
    opacity: 1.0,
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 20
});
layer_ESRITopogrfic_1;
map.addLayer(layer_ESRITopogrfic_1);
function pop_Establimentshotelers_2(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Nom'] !== null ? autolinker.link(feature.properties['Nom'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Qualitat'] !== null ? autolinker.link(feature.properties['Qualitat'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_Establimentshotelers_2_0() {
    return {
        pane: 'pane_Establimentshotelers_2',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'map/markers/Establimentshotelers_2.svg',
    iconSize: [20.52, 20.52]
}),
        interactive: true,
    }
}
map.createPane('pane_Establimentshotelers_2');
map.getPane('pane_Establimentshotelers_2').style.zIndex = 402;
map.getPane('pane_Establimentshotelers_2').style['mix-blend-mode'] = 'normal';
var layer_Establimentshotelers_2 = new L.geoJson(json_Establimentshotelers_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Establimentshotelers_2',
    layerName: 'layer_Establimentshotelers_2',
    pane: 'pane_Establimentshotelers_2',
    onEachFeature: pop_Establimentshotelers_2,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Establimentshotelers_2_0(feature));
    },
});
bounds_group.addLayer(layer_Establimentshotelers_2);
map.addLayer(layer_Establimentshotelers_2);
function pop_Cmpings_3(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Nom'] !== null ? autolinker.link(feature.properties['Nom'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_Cmpings_3_0() {
    return {
        pane: 'pane_Cmpings_3',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'map/markers/Cmpings_3.svg',
    iconSize: [20.52, 20.52]
}),
        interactive: true,
    }
}
map.createPane('pane_Cmpings_3');
map.getPane('pane_Cmpings_3').style.zIndex = 403;
map.getPane('pane_Cmpings_3').style['mix-blend-mode'] = 'normal';
var layer_Cmpings_3 = new L.geoJson(json_Cmpings_3, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Cmpings_3',
    layerName: 'layer_Cmpings_3',
    pane: 'pane_Cmpings_3',
    onEachFeature: pop_Cmpings_3,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Cmpings_3_0(feature));
    },
});
bounds_group.addLayer(layer_Cmpings_3);
map.addLayer(layer_Cmpings_3);
var baseMaps = {};
var overlaysTree = [
    {label: '<img src="map/legend/Cmpings_3.png" /> Càmpings', layer: layer_Cmpings_3},
    {label: '<img src="map/legend/Establimentshotelers_2.png" /> Establiments hotelers', layer: layer_Establimentshotelers_2},
    {label: "ESRI Topogràfic", layer: layer_ESRITopogrfic_1},
    {label: "ESRI Satèlit", layer: layer_ESRISatlit_0},]
var lay = L.control.layers.tree(null, overlaysTree,{
    //namedToggle: true,
    //selectorBack: false,
    //closedSymbol: '&#8862; &#x1f5c0;',
    //openedSymbol: '&#8863; &#x1f5c1;',
    //collapseAll: 'Collapse all',
    //expandAll: 'Expand all',
    collapsed: true,
});
lay.addTo(map);
setBounds();