import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import email_icon from "../assets/all-images/email.png";
import password_icon from "../assets/all-images/password.png";
import "../styles/Login.css";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); 
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5028/login', {
                email: email,
                password: password
            });
            console.log(response.data);
            login({ email: email });
            setMessage("Login successful!"); 
            window.scrollTo(0, 0);  // Sayfanın en üstüne git
            navigate('/home');  // Home sayfasına yönlendir
        } catch (error) {
            console.error(error);
            setMessage("Login failed. Please try again."); 
        }
    };

    return (
        <div className='contain'>
            <div className="head">
                <div className="tex">Login</div>
                <div className="underlin"></div>
            </div>
            <div className="inputss">
                <div className="inpu">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="User Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inpu">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="submit-contain">
                <button className="submi" onClick={handleLogin}>Login</button>
            </div>
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default LoginPage;
