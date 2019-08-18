import React from 'react';
import QuoteElement from '../QuoteElement';
import EntryField from '../EntryField';

import './home.css';

const HomePage= (props) => {

  return (
    <div className="homepage_container">
      <div className="homepage_display" >Display</div>
      <div className="list_container">
        <QuoteElement elements={ props.elements }/>
        <EntryField />
      </div>
    </div>
  )
}

export default HomePage;