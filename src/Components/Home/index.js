import React from 'react';
import QuoteElement from '../QuoteElement';
import EntryField from '../EntryField';

import './home.css';

const HomePage= (props) => {

  return (
    <div className="homepage_container">
      <div className="homepage_display" >Display</div>
      <div className="list_container">
        {!props.loading ?
          (
          <>
            <QuoteElement elements={ props.elements }/>
            <EntryField />
          </>
          )
          : ( <h4 className="loading">Loading...</h4>)
        }
        
      </div>
    </div>
  )
}

export default HomePage;