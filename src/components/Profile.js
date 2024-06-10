// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/admin', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy thông tin cá nhân:', error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="container">
      <h2>Thông Tin Cá Nhân</h2>
      <p>Tên: {profile.name}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
};

export default Profile;
