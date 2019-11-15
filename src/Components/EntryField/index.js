import React from 'react'

import './entryfield.css'

const EntryField = ({
  handleEntryChange,
  handleTitleChange,
  entry,
  entryTitle
}) => {
  return (
    <div className="entryfield-wrapper">
      <div className="entryfield-title">
        <input
          type="text"
          name="newNoteTitle"
          className="entryTitle"
          onChange={handleTitleChange}
          value={entryTitle}
        />
      </div>
      <div className="entryfield">
        <textarea
          name="newNote"
          className="newEntry"
          onChange={handleEntryChange}
          value={entry}
        />
      </div>
    </div>
  )
}

export default EntryField
