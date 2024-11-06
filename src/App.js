import React, { useState } from 'react';
import Login from './Components/Login';
import MainLayout from './Components/MainLayout';




function App() {
  
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
      setIsLoggedIn(true); // Marquer l'utilisateur comme connecté
    };
  
    // Si l'utilisateur est connecté, afficher MainLayout, sinon afficher Login
    return isLoggedIn ? <MainLayout /> : <Login onLogin={handleLogin} />;
  };


export default App;
