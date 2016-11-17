import React from 'react';
import MapTools from './MapTools';

class Map extends React.Component {
  constructor () {
    super();

    window.initMap = this.initMap;
    window.showArrays = this.showArrays;
  }

  initMap () {
    window.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 19,
      center: {lat: 37.7749, lng: -122.4194},
      mapTypeId: 'satellite'
    });

    var redCoords = [
      {lat: 37.7750, lng: -122.4190},
      {lat: 37.7750, lng: -122.4189},
    ];


    // Construct a draggable red triangle with geodesic set to true.
    var polygon1 = new google.maps.Polygon({
      map: map,
      paths: redCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      draggable: true,
      editable: true,
      geodesic: false
    });

    // Add a listener for the click event.
    polygon1.addListener('click', this.showArrays);

    window.infoWindow = new google.maps.InfoWindow;

  };

  showArrays(event) {
    // Since this polygon has only one path, we can call getPath() to return the
    // MVCArray of LatLngs.
    console.log(this, 'polygon this');
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
