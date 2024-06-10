import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function Dashboard() {
  const [data, setData] = useState([]);
  const [settings, setSettings] = useState({ settemp: '', sethumi: '' });

  useEffect(() => {
    fetchData();
    fetchSettings();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://my-backend-project-zqps.onrender.com/data');
      setData(response.data.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  const fetchSettings = async () => {
    try {
      const response = await axios.get('https://my-backend-project-zqps.onrender.com/settings');
      setSettings(response.data.data[0]);
    } catch (err) {
      console.error('Error fetching settings:', err);
    }
  };

  const chartData = {
    labels: data.map(item => item.time),
    datasets: [
      {
        label: 'Temp',
        data: data.map(item => item.temp),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Humi',
        data: data.map(item => item.humi),
        borderColor: 'rgba(153,102,255,1)',
        fill: false,
      }
    ]
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Settings</h2>
          <p>Temperature Set: {settings.settemp}</p>
          <p>Humidity Set: {settings.sethumi}</p>
        </div>
        <div className="col-md-6">
          <h2>System Status</h2>
          <p style={{ color: settings.systemstatus ? 'red' : 'gray' }}>
            {settings.systemstatus ? 'System On' : 'System Off'}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Charts</h2>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
