import React from 'react';

import './list.css';

const QuoteElement = ({elements}) => {

  return (
    <ul>
      { elements.map(element => (
        <li 
          key={element.uid} 
          className="q_list_element"
        >
          <h4>{ element.author }</h4>
          <p>{ element.text }</p>
          {/* <button className="remove-button">remove</button> */}
        </li>
        ))}
    </ul>
  )
}
export default QuoteElement