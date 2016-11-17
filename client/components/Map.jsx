import React from 'react';
import MapTools from './MapTools';
import randomColor from 'randomcolor';

class Map extends React.Component {
  constructor () {
    super();

    window.initMap = this.initMap;
    window.showArrays = this.showArrays;
  }

  initMap () {
    // the map is initialized and placed on the window
    window.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 19,
      center: {lat: 37.7749, lng: -122.4194},
      mapTypeId: 'satellite'
    });

    // the pop-up window, when polygon is clicked, is initialized
    window.infoWindow = new google.maps.InfoWindow;
  };

  showArrays(event) {
    // Since this polygon has only one path, we can call getPath() to return the
    // MVCArray of LatLngs.
    var vertices = this.getPath();

    var contentString = '<b>Polygon</b><br>' +
        'Clicked location: <br>' + event.latLng.lat() + ',' + event.latLng.lng() +
        '<br>';

    // Iterate over the vertices.
    for (var i = 0; i < vertices.getLength(); i++) {
      var xy = vertices.getAt(i);
      contentString += '<br>' + 'Coordinate ' + i + ':<br>' + xy.lat() + ',' +
          xy.lng();
    }

    // Replace the info window's content and position.
    infoWindow.setContent(contentString);
    infoWindow.setPosition(event.latLng);

    infoWindow.open(map);
  };



  render () {
    return (
      <div>
        <div id='map'></div>

        <MapTools />
      </div>
    );
  }
}

module.exports = Map;
