import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignupPage from './components/LoginSignUp/SignupPage';
import LandingPage from './components/LandingPage/LandingPage';
function App() {
  return (
    <Router>
    <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="/login-signup" element={<SignupPage />} /> 
    </Routes>
  </Router>
  );
}

export default App;
