import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://my-backend-project-zqps.onrender.com/login', {
        admin_email: email,
        admin_pwd: password,
      });
      console.log('Login success:', response.data);
      // Bạn có thể thêm logic để lưu thông tin đăng nhập vào state hoặc local storage ở đây
    } catch (err) {
      console.error('Login error:', err.message);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  );
}

export default Login;
