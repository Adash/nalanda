import React from 'react';
import QuoteElement from '../QuoteElement';
import EntryField from '../EntryField';

import './home.css';

const HomePage= (props) => {

  return (
    <div className="homepage_container">
      <h4>Home Page</h4>
      <div className="list_container">
        <QuoteElement elements={ props.elements }/>
        <EntryField />
      </div>
    </div>
  )
}

export default HomePage;