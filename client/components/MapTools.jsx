import React from 'react';

class MapTools extends React.Component {
  constructor (props) {
    super(props);


  }

  addPolygon () {
    var coords = [
        {lat: 37.7750, lng: -122.4190},
        {lat: 37.7750, lng: -122.4189},
    ];

    // Construct a draggable blue triangle with geodesic set to false.
    var polygon = new google.maps.Polygon({
      map: map,
      paths: coords,
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000FF',
      fillOpacity: 0.35,
      draggable: true,
      editable: true,
      geodesic: false
    });

    console.log(this, 'this');

    polygon.addListener('click', showArrays);
  }


  render () {
    return (
      <div>
        <button onClick={this.addPolygon.bind(this)}>Generate Polygon</button>

        <table>
          <tbody>
            <tr>
              <td></td>
              <td>Pitch</td>
              <td>Azimuth</td>
            </tr>

            <tr>
              <td>Point A</td>
              <td><input type="text" id="pitchInput" size="12" value=""/></td>
              <td><input type="text" id="azimuthInput" size="12" value=""/></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default MapTools;
