import React from 'react';

const PolygonRow = ({area, calculateArea, polygonCounter, polygon, setAzimuth, setPitch}) => (
  <tr>
      <td style={{backgroundColor:polygon[1]}}></td>
      <td><input type="text" onChange={(e)=>{setAzimuth(e)}} id={`azimuth${polygonCounter}`} size="12" /></td>
      <td><input type="text" onChange={(e)=>{setPitch(e)}} id={`pitch${polygonCounter}`} size="12" /></td>
      <td>{area}</td>
  </tr>
);

export default PolygonRow;
