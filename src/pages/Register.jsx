import React, { useState} from 'react';
import email_icon from "../assets/all-images/email.png";
import password_icon from "../assets/all-images/password.png";
import "../styles/Register.css"

import { Link } from 'react-router-dom';
import axios from 'axios';


const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); // Başarı veya hata mesajı için state

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5028/register', {
                email: email,
                password: password
            });
            console.log(response.data);
            setMessage("Register successful!"); // Başarılı yanıt durumunda mesaj
        } catch (error) {
            console.error(error);
            setMessage("Register failed. Please try again."); // Hata durumunda mesaj
        }
    };

    return (
        <div className='containerr'>
            <div className="headerr">
                <div className="textt">Register</div>
                <div className="underlinee"></div>
            </div>
            <div className="inputsss">
                
                <div className="inputt">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="User Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inputt">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="submitt-containerr">
                <Link to="/login" className="submitt" onClick={handleRegister}>Register</Link>
            </div>
            {message && <div className="message">{message}</div>} {/* Mesajı göster */}
        </div>
    )
}

export default RegisterPage;
