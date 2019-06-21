import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from '../Navbar';
import LandingPage from '../Landing';
import HomePage from '../Home';

import * as ROUTES from '../../Constants/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main_container">
          <LandingPage />
          <HomePage />
        </div>
      </Router>
    </div>
  );
}

export default App;
