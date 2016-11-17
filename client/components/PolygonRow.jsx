import React from 'react';
// this is the row that is added the table when a polygon is generated

const PolygonRow = ({area, calculateArea, polygonCounter, polygon, setAzimuth, setPitch}) => (
  <tr>
      <td style={{backgroundColor:polygon[1]}}></td>
      <td><input type="text" onChange={(e)=>{setAzimuth(e)}} id={`azimuth${polygonCounter}`} size="12" /></td>
      <td><input type="text" onChange={(e)=>{setPitch(e)}} id={`pitch${polygonCounter}`} size="12" /></td>
  </tr>
);

export default PolygonRow;
