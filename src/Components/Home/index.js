import React, { useState } from 'react'
import QuoteElement from '../QuoteElement'
import EntryField from '../EntryField'

import './home.css'

const HomePage = props => {
  const [entry, setEntry] = useState('')
  const [entryTitle, setEntryTitle] = useState('')

  function handleEntryChange(e) {
    setEntry(e.target.value)
  }

  function handleTitleChange(e) {
    setEntryTitle(e.target.value)
  }

  return (
    <div className="homepage_container">
      <div className="display_container">
        <div className="display">
          <div>Display</div>
        </div>
        <div className="entryfield_container">
          <EntryField
            entry={entry}
            entryTitle={entryTitle}
            handleEntryChange={handleEntryChange}
            handleTitleChange={handleTitleChange}
          />
          <button
            onClick={() => props.saveNote(entry, entryTitle)}
            className="save-button"
          >
            save
          </button>
        </div>
      </div>
      <div className="entry_container">
        {!props.loading ? (
          <>
            <QuoteElement
              elements={props.elements}
              removeNote={props.removeNote}
            />
          </>
        ) : (
          <h4 className="loading">Loading...</h4>
        )}
      </div>
    </div>
  )
}

export default HomePage
