import React from 'react';
import Map from './Map';

class App extends React.Component {
  constructor () {
    super();

  }



  render () {
    return (
      <div className='flexFlowCenter'>
        <h1>Solar Measurement Tool</h1>
        <Map />
      </div>
    );
  }
}

module.exports = App;
