import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [settings, setSettings] = useState({});

  useEffect(() => {
    axios.get('https://my-backend-project-zqps.onrender.com/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    axios.get('https://my-backend-project-zqps.onrender.com/settings')
      .then(response => {
        setSettings(response.data);
      })
      .catch(error => {
        console.error('Error fetching settings:', error);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Render your data and settings here */}
      <div>Data: {JSON.stringify(data)}</div>
      <div>Settings: {JSON.stringify(settings)}</div>
    </div>
  );
};

export default Dashboard;
