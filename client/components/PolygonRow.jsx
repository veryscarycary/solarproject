import React from 'react';

const PolygonRow = ({area, calculateArea, polygonCounter, polygon}) => (
  <tr>
      <td style={{backgroundColor:polygon[1]}}></td>
      <td><input type="text" id={`pitchInput${polygonCounter}`} size="12" value=""/></td>
      <td><input type="text" id={`azimuthInput${polygonCounter}`} size="12" value=""/></td>
      <td>{area}</td>
      <td><button onClick={calculateArea}>Calculate Area</button></td>
  </tr>
);

export default PolygonRow;
