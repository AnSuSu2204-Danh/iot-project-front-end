import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './SignIn.css'; // File CSS cho trang đăng nhập

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signin', { email, password });
            if (response.data.success) {
                localStorage.setItem('token', response.data.token);
                history.push('/dashboard');
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError('Error signing in. Please try again.');
        }
    };

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="row w-100 m-0">
                    <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                        <div className="card col-lg-4 mx-auto">
                            <div className="card-body px-5 py-5">
                                <h3 className="card-title text-left mb-3">Sign In</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Email *</label>
                                        <input 
                                            type="email" 
                                            className="form-control p_input" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password *</label>
                                        <input 
                                            type="password" 
                                            className="form-control p_input" 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group d-flex align-items-center justify-content-between">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" /> Remember me </label>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-block enter-btn">Sign In</button>
                                    </div>
                                    <div className="d-flex">
                                        <button className="btn btn-facebook col mr-2">
                                            <i className="mdi mdi-facebook"></i> Facebook </button>
                                        <button className="btn btn-google col">
                                            <i className="mdi mdi-google-plus"></i> Google plus </button>
                                    </div>
                                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                                    <p className="sign-up">Don't have an Account?<a href="/signup"> Sign Up</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
