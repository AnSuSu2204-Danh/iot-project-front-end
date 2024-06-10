// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setData(response.data);
        setStatus(response.data.systemStatus ? 'On' : 'Off');
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };
    fetchData();
  }, []);

  const tempData = {
    labels: data.map(d => d.time),
    datasets: [
      {
        label: 'Nhiệt độ 1',
        data: data.map(d => d.temp1),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Nhiệt độ 2',
        data: data.map(d => d.temp2),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div>Trạng thái: {status}</div>
      <Line data={tempData} />
    </div>
  );
};

export default Dashboard;
