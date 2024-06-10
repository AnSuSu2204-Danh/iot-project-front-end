import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://my-backend-project-zqps.onrender.com/data');
      setData(response.data.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Data Table</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Temp</th>
            <th>Humi</th>
            <th>Temp1</th>
            <th>Humi1</th>
            <th>Temp2</th>
            <th>Humi2</th>
            <th>Temp3</th>
            <th>Humi3</th>
            <th>System Status</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.temp}</td>
              <td>{item.humi}</td>
              <td>{item.temp1}</td>
              <td>{item.humi1}</td>
              <td>{item.temp2}</td>
              <td>{item.humi2}</td>
              <td>{item.temp3}</td>
              <td>{item.humi3}</td>
              <td style={{ color: item.systemstatus ? 'red' : 'gray' }}>
                {item.systemstatus ? 'System On' : 'System Off'}
              </td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
