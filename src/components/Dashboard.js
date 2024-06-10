// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [temp1, setTemp1] = useState(0);
  const [temp2, setTemp2] = useState(0);
  const [humi1, setHumi1] = useState(0);
  const [humi2, setHumi2] = useState(0);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        const data = response.data;
        setTemp1(data.temp1);
        setTemp2(data.temp2);
        setHumi1(data.humi1);
        setHumi2(data.humi2);
        setStatus(data.systemstatus);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Temperature 1</h5>
              <p className="card-text">{temp1} °C</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Temperature 2</h5>
              <p className="card-text">{temp2} °C</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Humidity 1</h5>
              <p className="card-text">{humi1} %</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Humidity 2</h5>
              <p className="card-text">{humi2} %</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">System Status</h5>
              <p className="card-text">{status === 1 ? 'ON' : 'OFF'}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {/* Line charts here */}
      </div>
    </div>
  );
};

export default Dashboard;
