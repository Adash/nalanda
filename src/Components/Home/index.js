import React, { useState } from 'react'
import QuotesList from '../QuotesList'
import EntryField from '../EntryField'
import styled from 'styled-components'

const StyledEditWrapper = styled.div`
  z-index: 100;
  width: 100vw;
  flex: 0 0 13vh;
  padding: 35px 5px 15px 5px;
  background: linear-gradient(90deg, #68b0ab 0%, #8fc0a9 100%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
  @media only screen and (min-width: 961px) {
    justify-content: flex-start;
    flex: 0 0 25%;
  }
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 961px) {
    flex-direction: row;
    height: 100%;
    /* width: 1000px; */
    justify-content: space-between;
  }
`
const EntryContainer = styled.div`
  width: 100%;
  flex: 8;
`

const SaveButton = styled.button`
  background-color: rgba(0, 136, 169, 1);
  border: none;
  border-radius: 50px;
`
const LoadingSpinner = styled.h4`
  color: #265b6d;
`

const HomePage = (props) => {
  const [entry, setEntry] = useState('')
  const [entryTitle, setEntryTitle] = useState('')

  function handleEntryChange(e) {
    setEntry(e.target.value)
  }

  function handleTitleChange(e) {
    setEntryTitle(e.target.value)
  }

  return (
    <PageContainer>
      <StyledEditWrapper>
        <div className="entryfield_container">
          <EntryField
            entry={entry}
            entryTitle={entryTitle}
            handleEntryChange={handleEntryChange}
            handleTitleChange={handleTitleChange}
          />
          <SaveButton onClick={() => props.saveNote(entry, entryTitle)}>
            save
          </SaveButton>
        </div>
      </StyledEditWrapper>
      <EntryContainer>
        {!props.loading ? (
          <>
            <QuotesList elements={props.elements} remover={props.remover} />
          </>
        ) : (
          <LoadingSpinner className="loading">Loading...</LoadingSpinner>
        )}
      </EntryContainer>
    </PageContainer>
  )
}

export default HomePage
