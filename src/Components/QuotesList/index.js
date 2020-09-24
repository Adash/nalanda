import React, { useState } from 'react'
import styled from 'styled-components'

const QuoteListArea = styled.div`
  height: 85vh;
  overflow: auto;
  flex: 1 1 auto;
  width: 100%;
  padding: 5%;
  background: linear-gradient(180deg, #eaeee5 100%, #faf3dd 100%);

  @media only screen and (min-width: 961px) {
    height: 100%;
  }
`

const ButtonRemove = styled.button`
  background-color: rgb(156, 8, 8);
  border: none;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  padding: 6px 9px 6px 9px;

  :hover {
    background-color: rgb(100, 8, 8);
  }

  @media only screen and (min-width: 961px) {
    cursor: pointer;
  }
`

const QuoteText = styled.p`
  text-align: left;
`

const Quote = ({ element, remover }) => {
  const [showButtons, setShowButtons] = useState('none')
  const toggleButtons = () => {
    setShowButtons(showButtons === 'none' ? '' : 'none')
  }
  return (
    <div onClick={() => toggleButtons()}>
      <h4>{element.author}</h4>
      <QuoteText>{element.text}</QuoteText>
      <ButtonRemove
        style={{ display: showButtons }}
        onClick={() => remover(element.uid)}
      >
        remove
      </ButtonRemove>
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
    <QuoteListArea>
      {elements.map((element, index) => renderQuotes(element, index, remover))}
    </QuoteListArea>
  )
}
export default QuotesList
