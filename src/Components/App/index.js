import React from 'react';
import './App.css';

import LandingPage from '../Landing';
import HomePage from '../Home';

function App() {
  return (
    <div className="App">
      <header className="App-header nav_container">
      {/* navbar */}
      </header>
      <div className="main_container">
        <LandingPage />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
