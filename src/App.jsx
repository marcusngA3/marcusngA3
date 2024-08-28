import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Where from './pages/Where';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Faq from './pages/Faq';
import Footer from './components/Footer';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
    <div className="page-container">
      <div id="content-wrap"> 
        <Router>
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/where" element={<Where />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>

        </Router>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
    </>
  );
};

export default App;
