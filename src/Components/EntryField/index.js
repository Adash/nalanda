import React, { useState } from 'react';

import './entryfield.css';

const EntryField = ({handleChange, entry}) => {
  return (
    <div className="entryfield">
      <input 
        type="text"
        value={ entry }
        onChange={ handleChange }
        placeholder="Enter note"
      />
    </div>
  )
}

export default EntryField;