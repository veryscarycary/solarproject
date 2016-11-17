import React from 'react';

class PerformanceTable extends React.Component {
  constructor(props) {
    super(props);

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

  }
}

export default PerformanceTable;
