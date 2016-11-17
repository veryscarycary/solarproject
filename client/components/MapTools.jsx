import React from 'react';
import randomColor from 'randomcolor';

import PolygonRow from './PolygonRow';
import PerformanceTable from './PerformanceTable';
import FinancialAnalysis from './FinancialAnalysis';


class MapTools extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      polygons:[],
      polygonCounter: 0,
      area: 0,
      totalArea: 0,
      wattage: 0,
      systemSize: 'uncalculated',
      systemCapacity: 0,
      azimuths: [],
      pitches: []
    };

    this.calculateArea = this.calculateArea.bind(this);
  }



  addPolygon () {
    var bounds = map.getBounds();
    var ne = bounds.getNorthEast(); // LatLng of the north-east corner
    var sw = bounds.getSouthWest(); // LatLng of the south-west corder

    var latThird = (Math.abs(ne.lat() - sw.lat()) / 3);
    var lngThird = (Math.abs(ne.lng() - sw.lng()) / 3);
    // (sw.lat + latThird), lng:(sw.lng + third)

    var coords = [
        {lat: (ne.lat() - latThird), lng: (ne.lng() - lngThird)},
        {lat: (ne.lat() - (2*latThird)), lng: (ne.lng() - lngThird)},
        {lat: (sw.lat() + latThird), lng: (sw.lng() + lngThird)},
        {lat: (sw.lat() + (2*latThird)), lng: (sw.lng() + lngThird)},
    ];


    // Construct a draggable blue triangle with geodesic set to false.
    var color = randomColor();
    var polygon = new google.maps.Polygon({
      map: map,
      paths: coords,
      strokeColor: color,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: color,
      fillOpacity: 0.35,
      draggable: true,
      editable: true,
      geodesic: false
    });

    console.log(this, 'this');
    polygon.addListener('click', showArrays);
    var temp = this.state.polygons;
    temp.push([polygon, color]);
    this.polygonCounter++;

    this.setState({
      polygons: temp
    });

    console.log(this.state.polygons);
  };

  calculateArea(polygon) {
    var area = google.maps.geometry.spherical.computeArea(polygon.getPath());
    this.setState({
      area
    });
    return area;
  };

  calculateTotalArea() {
    var totalArea = this.state.polygons.reduce((acc, polygonTuple) => {
      return acc + this.calculateArea(polygonTuple[0]);
    }, 0);

    this.setState({
      totalArea
    });
  }

  calculateSystemSize() {
    this.setState({
      systemSize: this.state.totalArea/this.state.wattage
    });

    console.log(this.state.totalArea, this.state.wattage);
  }

  setWattage(event) {
    this.setState({
      wattage: event.target.value
    });
  }

  setAzimuth(event) {
    var temp = this.state.azimuths;
    temp.push([this.polygonCounter, Number(event.target.value)]);

    this.setState({
      azimiths: temp
    });
  }

  setPitch(event) {
    var temp = this.state.pitches;
    temp.push([this.polygonCounter, Number(event.target.value)]);

    this.setState({
      pitches: temp
    });
  }

  setSystemCapacity(event) {
    this.setState({
      systemCapacity: Number(event.target.value)
    });
  }

  render () {
    return (
      <div>
        <button className='btn btn-primary' onClick={this.addPolygon.bind(this)}>Generate Polygon</button>
        <br />
        <br />

        <table className='table table-hover table-bordered'>
          <thead>
            <tr>
              <td>Polygons</td>
              <td>Azimuth</td>
              <td>Pitch</td>
            </tr>
          </thead>
          <tbody>
            {this.state.polygons.map((polygon)=>(
              <PolygonRow
              area={this.state.area}
              calculateArea={this.calculateArea}
              polygonCounter={this.polygonCounter}
              polygon={polygon}
              setAzimuth={this.setAzimuth.bind(this)}
              setPitch={this.setPitch.bind(this)}
              />
            ))}
          </tbody>
        </table>

        <ul className='centerWidth marginBottom'>
          <li>Click on the Generate Polygon button to add a new polygon to map. You may add as many polygons as you like and keep track of them in the table above.</li>
        </ul>

        <button className='btn btn-primary' onClick={this.calculateTotalArea.bind(this)}>Calculate Total Area</button>
        <button className='btn btn-primary' onClick={this.calculateSystemSize.bind(this)}>Calculate System Size</button>
        <table className='table table-hover table-bordered marginBottom'>
          <thead>
            <tr>
              <th>Total Area</th>
              <th>Wattage/m<sup>2</sup></th>
              <th>System Size(kW)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.totalArea}</td>
              <td><input onChange={this.setWattage.bind(this)} type="number" placeholder="Wattage/sq meter" /></td>
              <td>{this.state.systemSize}</td>
            </tr>
          </tbody>
        </table>


        <PerformanceTable
          setSystemCapacity={this.setSystemCapacity.bind(this)}
          systemCapacity={this.state.systemCapacity}
          azimuths={this.state.azimuths}
          pitches={this.state.pitches}
        />
        <FinancialAnalysis />
      </div>
    );
  }
};

export default MapTools;
