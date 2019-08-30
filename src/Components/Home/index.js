import React, {useState} from 'react';
import QuoteElement from '../QuoteElement';
import EntryField from '../EntryField';

import './home.css';

const HomePage= (props) => {
  const [ entry, setEntry ] = useState('');

  function handleChange(e) {
    setEntry( e.target.value )
  }

  return (
    <div className="homepage_container">
      <div className="homepage_display" >Display</div>
      <div className="list_container">
        {!props.loading ?
          (
          <>
            <QuoteElement 
              elements={ props.elements }
              removeNote={ props.removeNote}
            />
            <EntryField 
              entry={entry}
              handleChange={handleChange}
            />
            <button 
              onClick={() => props.saveNote(entry) }
              className="save-button"
              >save</button>
          </>
          )
          : ( <h4 className="loading">Loading...</h4>)
        }
        
      </div>
    </div>
  )
}

export default HomePage;