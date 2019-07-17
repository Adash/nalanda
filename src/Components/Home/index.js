import React from 'react';
import ListElement from '../ListElement';
import EntryField from '../EntryField';

import './home.css';

const HomePage= (props) => {

  return (
    <div className="homepage_container">
      <h4>Home Page</h4>
      <div className="list_container">
        <ListElement elements={ props.elements }/>
        <EntryField />
      </div>
    </div>
  )
}

export default HomePage;