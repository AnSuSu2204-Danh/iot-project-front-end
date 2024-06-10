import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Table() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/data', {
          headers: { Authorization: token }
        });
        setData(response.data.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Data Table</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Temperature 1</th>
            <th>Humidity 1</th>
            <th>Temperature 2</th>
            <th>Humidity 2</th>
            <th>Temperature 3</th>
            <th>Humidity 3</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.temp}</td>
              <td>{row.humi}</td>
              <td>{row.temp1}</td>
              <td>{row.humi1}</td>
              <td>{row.temp2}</td>
              <td>{row.humi2}</td>
              <td>{row.temp3}</td>
              <td>{row.humi3}</td>
              <td>{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
