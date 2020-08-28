import React from 'react'
import './MainHall.css'
import styled from 'styled-components'

const StyledApp = styled.div`
  /* position: fixed; */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`
const StyledNavbar = styled.header`
  z-index: 100;
  width: 100vw;
  flex: 0 0 13vh;
  background: linear-gradient(90deg, #68b0ab 0%, #8fc0a9 100%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
  /* padding-bottom: 10px; */
`

const StyledContentScreen = styled.div`
  flex: 1 1 auto;
  background: linear-gradient(180deg, #eaeee5 100%, #faf3dd 100%);
`

const ContentScrollContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 87%;
  overflow-y: scroll;
`

const FlatButtonsWrapper = styled.div`
  height: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledFilterLabel = styled.span`
  position: relative;
  width: 74px;
  height: 13px;
  font-family: Arimo;
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 10px;
  text-align: center;
  color: #dfe9dd;
`

const StyledClearLabel = styled.span`
  position: relative;
  width: 74px;
  height: 13px;
  font-family: Arimo;
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 10px;
  text-align: center;
  color: #dfe9dd;
`

const FilterOptionContainer = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const StyledFilterOption = styled.div`
  width: 87px;
  height: 36px;
  /* padding: 4px; */
  background: #68b0ab;
  border: 1px solid #c5ceb9;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
`

const StyledFilterType = styled.span`
  font-family: Arimo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #dfe9dd;
  float: left;
`

const StyledFilterSelection = styled.span`
  font-family: Arimo;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #dfe9dd;
`

const StyledCard = styled.div`
  max-width: 350px;
  max-height: 254px;
  background: linear-gradient(180deg, #ffffff 0%, #fcf9ed 100%);
  box-shadow: 3px 6px 4px 1px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card_text {
    font-family: Calligraffitti;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 17px;
    color: #696d7d;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 30px;
  }

  .card_buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const StyledButton = styled.button`
  border: none;
  width: 75px;
  height: 19px;
  background: #8fc0a9;
  border-radius: 3px;
  font-family: Arimo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;

  color: #eaeee5;
`

const FilterOption = ({ type, selection }) => (
  <StyledFilterOption>
    <StyledFilterType>{type}</StyledFilterType>
    <StyledFilterSelection>{selection}</StyledFilterSelection>
  </StyledFilterOption>
)

const Navbar = () => (
  <StyledNavbar>
    <FlatButtonsWrapper>
      <StyledFilterLabel>version: 0.01</StyledFilterLabel>
      <StyledFilterLabel>FilterBy</StyledFilterLabel>
      <StyledClearLabel>Clear all</StyledClearLabel>
    </FlatButtonsWrapper>
    <FilterOptionContainer>
      <FilterOption type="Quote type" selection="All" />
      <FilterOption type="School" selection="Vajrayana" />
      <FilterOption type="Period" selection="All" />
      <FilterOption type="Region" selection="All" />
    </FilterOptionContainer>
  </StyledNavbar>
)

const Card = ({ text, author, elements }) => {
  return (
    <StyledCard>
      <div className="card_text">
        <span>{text}</span>
        <span>{author}</span>
      </div>
      <div className="card_buttons">
        <StyledButton>Favourite</StyledButton>
        <StyledButton>Save</StyledButton>
      </div>
    </StyledCard>
  )
}

const ContentScreen = ({ elements }) => {
  return (
    <StyledContentScreen>
      <ContentScrollContainer>
        {elements.map((element, index) => (
          <Card key={index} text={element.text} author={element.author} />
        ))}
      </ContentScrollContainer>
    </StyledContentScreen>
  )
}

function MainHall({ elements }) {
  return (
    <StyledApp>
      <Navbar />
      <ContentScreen elements={elements} />
    </StyledApp>
  )
}

// const StyledTest = styled.div`
//   height: 1800px;
//   width: 100vw;
//   background: linear-gradient(180deg, #eaeee5 100%, #faf3dd 100%);
//   padding-top: env(safe-area-inset-top);
// `;

// const NotchTest = () => (
//   <StyledTest>
//     <div>
//       <span style={{ fontSize: '18px', color: 'pink' }}>NotchTestScreen</span>
//     </div>
//   </StyledTest>
// );

export default MainHall
