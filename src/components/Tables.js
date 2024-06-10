// src/components/Tables.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tables = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.date.includes(filter) || item.temp.toString().includes(filter) || item.humi.toString().includes(filter)
  );

  return (
    <div className="container">
      <h2>Data Table</h2>
      <input type="text" value={filter} onChange={handleFilterChange} placeholder="Lọc theo ngày, nhiệt độ hoặc độ ẩm" />
      <table className="table">
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Nhiệt Độ</th>
            <th>Độ Ẩm</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.temp}</td>
              <td>{item.humi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
