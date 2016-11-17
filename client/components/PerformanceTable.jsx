import React from 'react';

class PerformanceTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      energyProdPerMonth: 0
    };

  }

  getPVWatts (systemCapacity) {
    //Need: lat + lng of house,
    const bounds = map.getBounds();
    const sw = bounds.getSouthWest();

    const lat = sw.lat();
    const lng = sw.lng();
    // pitch + azimuth of panels
    const pitchesTotal = this.props.pitches.reduce((acc, pitch)=>{
      return acc + pitch[1];
    }, 0);
    const azimuthTotal = this.props.azimuths.reduce((acc, azimuth)=>{
      return acc + azimuth[1];
    }, 0);

    console.log(this, 'this');
    console.log(JSON.stringify(pitchesTotal), 'pitchesTotal');
    console.log(JSON.stringify(azimuthTotal), 'azimuthTotal');

    // system_capacity of the system (#panels x wattage of each panel)
    // stub of energy production per month based on [system size in kW] x
    // [1,400 kWh / kW / year]
    const energyProdPerMonth = lat + lng + pitchesTotal + azimuthTotal + systemCapacity;

    this.setState({
      energyProdPerMonth
    });

    alert(energyProdPerMonth);
  }

  render () {
    return (
      <div>
        System Capacity
        <input onChange={this.props.setSystemCapacity.bind(this)} type="number" placeholder="# Panels/W per panel" />
        <button onClick={()=>{this.getPVWatts(this.props.systemCapacity)}}>Calculate Energy Production Per Month</button>
        <div>
          Energy Production Per Month: {this.state.energyProdPerMonth}
        </div>
      </div>
    );
  }
}

export default PerformanceTable;
