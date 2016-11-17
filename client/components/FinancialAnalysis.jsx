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

  // Need:
  // total system size (in kW) >>>>> DONE
  // annual and monthly energy production >>>> API CALL
  // system cost ($3.50/Watt)
  // total energy savings per year ([kWh produced during the period] x [utility rate])
    // default utility rate = $0.14/kWh
  // cashflow and payback period(cum ulative cashflow for year i = (cumulative cashflow of year i-1) + bill savings in year i, and the
  // cumulative cashflow of year 0 is equal to the initial investment,
  // meaning the system cost.)
  // The monthly energy production and cumulative cashflow table displayed using bar charts.
  // The annual and monthly energy production will be outputs from the PVWatts API call. See the
  // following for definitions on other terms.

  render () {
    return (
      <div className='marginTop'>
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
        <CashFlowGraph />
        <EnergyProductionGraph />
      </div>
    );
  }
}

export default FinancialAnalysis;
