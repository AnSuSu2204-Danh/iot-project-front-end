import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

function Dashboard() {
  const [data, setData] = useState([]);
  const [settings, setSettings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const dataResponse = await axios.get('/api/data', {
          headers: { Authorization: token }
        });
        const settingResponse = await axios.get('/api/setting', {
          headers: { Authorization: token }
        });

        setData(dataResponse.data.data);
        setSettings(settingResponse.data.settings);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Dashboard</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {settings.map((setting, index) => (
          <div key={index} className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Set Temperature: {setting.settemp}</h5>
                <h5 className="card-title">Set Humidity: {setting.sethumi}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-md-12">
          <canvas id="temperatureChart"></canvas>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <canvas id="humidityChart"></canvas>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
