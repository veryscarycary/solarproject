import React from 'react';
import CashFlowGraph from './CashFlowGraph';
import EnergyProductionGraph from './EnergyProductionGraph';

class FinancialAnalysis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      costPerWatt: 3.50,
      systemPower: 335,
      utilityRate: 0.14,
      kwhProduced: 800
    };
  }

  render () {
    return (
      <div className='marginTop'>

      // begin table that shows costs and savings
        <table className='table table-hover table-bordered'>
          <thead>
            <tr>
              <td>Cost Per Watt</td>
              <td>System Power(Watts)</td>
              <td>Total Cost</td>
              <td>Energy Savings</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${this.state.costPerWatt}</td>
              <td>{this.state.systemPower}W</td>
              <td>${this.state.costPerWatt*this.state.systemPower}</td>
              <td>{this.state.kwhProduced}KWh</td>
            </tr>
          </tbody>
        </table>

        // Here is where we insert our two graphs
        <CashFlowGraph />
        <EnergyProductionGraph />
      </div>
    );
  }
}

export default FinancialAnalysis;
