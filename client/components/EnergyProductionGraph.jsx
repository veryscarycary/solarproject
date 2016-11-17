var React = require('react');
import rd3 from 'rd3';

var BarChart2 = rd3.BarChart
var barData2 = [
  {
    "name": "Cash Flows",
    "values": []
  },
  {
    "name": "Years",
    "values": []
  }
];

// dummy data to represent daily KWH production
var daysKWH = [256,254,274,244,300,267,257,264,234,243];

class EnergyProductionGraph extends React.Component {
  constructor(props) {
    super(props);

  }


  render () {
    for (var i = 0; i < 10; i++) {
      barData2[0].values.push({ "x": i*3, "y": daysKWH[i]});
      barData2[1].values.push({ "x": i*3, "y": 0});
    }

    return  (
    	<BarChart2
      data={barData2}
      width={400}
      height={400}
      title="Monthly Energy Production"
      xAxisLabel="Month"
      yAxisLabel="Energy Produced(KWh)"
      />
    );
  }
};

export default EnergyProductionGraph;
