import React, { useState } from 'react'

import './quoteElement.css'

const Quote = ({ element, remover }) => {
  const [showButtons, setShowButtons] = useState('none')
  const toggleButtons = () => {
    setShowButtons(showButtons === 'none' ? '' : 'none')
  }
  return (
    <div onClick={() => toggleButtons()}>
      <h4>{element.author}</h4>
      <p className="quote">{element.text}</p>
      <button
        style={{ display: showButtons }}
        className="remove-button"
        onClick={() => remover(element.uid)}
      >
        remove
      </button>
    </div>
  )
}

const QuotesList = ({ elements, remover }) => {
  const renderQuotes = (element, index, remover) => (
    <div key={element.uid} className="q_list_element">
      {index !== 0 ? <br /> : null}
      <Quote element={element} remover={remover} />
    </div>
  )
  return (
    <div className="quote-list-area">
      {elements.map((element, index) => renderQuotes(element, index, remover))}
    </div>
  )
}
export default QuotesList
