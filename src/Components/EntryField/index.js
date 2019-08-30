import React from 'react';

import './entryfield.css';

const EntryField = ({handleChange, entry}) => {
  return (
    <div className="entryfield">
      <textarea 
        name="newNote"
        onChange={ handleChange }
      >{entry}</textarea>
    </div>
  )
}

export default EntryField;