import React, {useState} from 'react';

import './list.css';

const Quote = ({element, removeNote}) => {
  const [showButtons, setShowButtons] = useState("none");
  
  const toggleButtons = () => {
    setShowButtons(showButtons === "none" ? "" : "none")
  }

  return (
    <>
      <h4>{ element.author }</h4>
      <p
        onClick={() => toggleButtons()}
      >{ element.text }</p>
      <button 
        style={{display: showButtons}}
        className="remove-button"
        onClick={() => removeNote(element.uid)}
      >remove
      </button>
    </>
  )
}

const QuoteElement = ({elements, removeNote}) => {
  

  return (
    <ul>
      { elements.map(element => (
        <li 
          key={element.uid} 
          className="q_list_element"
        >
          <Quote 
            element={element} 
            removeNote={removeNote}
          />
        </li>
        ))}
    </ul>
  )
}
export default QuoteElement