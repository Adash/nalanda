import React from 'react';

import './entryfield.css';

const EntryField = ({handleChange, entry}) => {
  return (
    <div className="entryfield">
      <textarea 
        name="newNote"
        onChange={ handleChange }
        value={entry}
      />
    </div>
  )
}

export default EntryField;