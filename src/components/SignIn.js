// src/components/SignIn.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signin', { email, password });
      localStorage.setItem('token', response.data.token);
      history.push('/dashboard');
    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Đăng Nhập</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu" required />
        <button type="submit">Đăng Nhập</button>
      </form>
    </div>
  );
};

export default SignIn;
