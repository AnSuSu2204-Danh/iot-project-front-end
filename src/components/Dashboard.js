import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function Dashboard() {
  const [data, setData] = useState([]);
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axios.get('/api/data', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        const responseSettings = await axios.get('/api/setting', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });

        setData(responseData.data.data || []);
        setSettings(responseSettings.data.settings || {});
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>
      <div className="row">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Temperature {index + 1}</h5>
                  <p className="card-text">{item.temperature}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3>Temperature Line Chart</h3>
          <Line data={{
            labels: data.map((item, index) => `Temp ${index + 1}`),
            datasets: [
              {
                label: 'Temperature',
                data: data.map(item => item.temperature),
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
              },
            ],
          }} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
