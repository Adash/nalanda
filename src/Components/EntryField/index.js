import React, { useState } from 'react';

import './entryfield.css';

const EntryField = () => {
  const [ entry, setEntry ] = useState('');

  function handleChange(e) {
    setEntry( e.target.value )
  }

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