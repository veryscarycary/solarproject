var React = require('react');
import rd3 from 'rd3';

var BarChart1 = rd3.BarChart
var barData1 = [
  {
    "name": "Cash Flows",
    "values": []
  },
  {
    "name": "Years",
    "values": []
  }
];

var yearsSavings = [-20000,3345,4355,2333,4322,2311,1111,3232,3434,3434];

class CashFlowGraph extends React.Component {
  constructor(props) {
    super(props);

  }


  render () {
    var savings = 0;
    for (var i = 0; i < 10; i++) {
      savings += yearsSavings[i];
      barData1[0].values.push({ "x": i, "y": savings});
      barData1[1].values.push({ "x": i-1, "y": 0});
    }

    return  (
    	<BarChart1
      data={barData1}
      width={400}
      height={400}
      title="Cash Flows over Time"
      xAxisLabel="Years"
      yAxisLabel="CashFlow"
      />
    );
  }
};

export default CashFlowGraph;
