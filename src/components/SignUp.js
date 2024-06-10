// src/components/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/signup', { name, email, password });
      alert('Đăng ký thành công, vui lòng đăng nhập.');
    } catch (error) {
      console.error('Lỗi đăng ký:', error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Đăng Ký</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tên" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu" required />
        <button type="submit">Đăng Ký</button>
      </form>
    </div>
  );
};

export default SignUp;
