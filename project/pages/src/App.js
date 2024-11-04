import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Registration/Registration';
import Authorization from './Authorization/Authorization';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authorization" element={<Authorization />} />
        
      </Routes>
    </Router>
  );
};

export default App;
