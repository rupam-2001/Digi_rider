import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignupPage from './components/LoginSignUp/SignupPage';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './components/LoginSignUp/LoginPage';
function App() {
  return (
    <Router>
    <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="/login-signup" element={<SignupPage />} /> 
       <Route path="/Login" element={<LoginPage/>}/>
    </Routes>
  </Router>
  );
}

export default App;
