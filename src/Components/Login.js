import React, { useState, useEffect } from 'react';
import './Login.css';
import logo from '../assets/Log.png';
import { UserOutlined, LockOutlined , FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import { Input } from 'antd';



const Login = ({ onLogin }) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admina@admin.com' && password === 'admin') {
      onLogin();
    } else {
      alert('Identifiants incorrects');
    }
  };

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  return (
    <div className="login-container">
      <div className="login-content">
        <img src={logo} alt="Logo" width={'40%'} />
        <h1>Connexion</h1>
        <div className="input-container">
          <Input
            prefix={<UserOutlined />}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>


        <div className="input-container">
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Mot de passe"
            width={'250px'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Se connecter</button>

        <h3>Connexion avec :</h3>
      <div className="social-icons">
        <FacebookOutlined className="facebook-icon" />
        <GoogleOutlined className="google-icon" />
      </div>
    

        
      </div>
    </div>
  );
  
};

export default Login;
