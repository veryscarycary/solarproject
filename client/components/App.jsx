import React from 'react';
import Map from './Map';

class App extends React.Component {
  constructor () {
    super();

  }

  

  render () {
    return (
      <div>
        <h1>Solar Measurement Tool</h1>
        <Map />
        <PerformanceTable />
        <FinancialAnalysis />
      </div>
    );
  }
}

module.exports = App;
