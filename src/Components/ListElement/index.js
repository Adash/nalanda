import React from 'react';

import './list.css';

const ListElement = ({elements}) => {

  return (
    <ul>
      { elements.map(element => (
        <li 
          key={element.uid} 
          className="q_list_element"
          >{ element.name }</li>
        ))}
    </ul>
  )
}
export default ListElement