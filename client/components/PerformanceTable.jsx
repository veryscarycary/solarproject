import React from 'react';

class PerformanceTable extends React.Component {
  constructor(props) {
    super(props);

  }

  getPVWatts () {
    //Need: lat + lng of house,
    // tilt + azimuth of panels
    // system_capacity of the system (#panels x wattage of each panel)

    // stub of energy production per month based on [system size in kW] x
    // [1,400 kWh / kW / year]

  }

  render () {

  }
}

export default PerformanceTable;
