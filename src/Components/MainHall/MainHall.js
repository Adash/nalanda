import React from 'react'
import './MainHall.css'
import styled from 'styled-components'

const TILOPA01 = {
  text: `If you are beyond all grasping at an object and at a subject,
  that is the monarch of all views.
  If there is no distraction,
  it is the monarch of all meditations.
  If there is no effort,
  it is the monarch among all conducts.
  When there is no hope and no fear,
  that is the final result,
  and the fruition has been attained or revealed. `,
  author: `Tilopa`,
}

const TRUNGPA01 = {
  text: `So let the phenomena play. Let the phenomena make fools of themselves by themselves. This is the approach.`,
  author: `Chogyam Trungpa`,
}

const TILOPA02 = {
  text: `Meditation is one of the rare occasions when we’re not doing anything. Otherwise, we’re always doing something, we’re always thinking something, we’re always occupied. We get lost in millions of obsessions and fixations. But by meditating – by not doing anything – all these fixations are revealed and our obsessions will naturally undo themselves like a snake uncoiling itself.`,
  author: `Tilopa`,
}

const NORBU01 = {
  text: `Enlightenment, or Nirvana, is nothing other than the state beyond all obstacles, in the same way that from the peak of a very high mountain one always sees the sun. Nirvana is not a paradise or some special place of happiness, but is in fact the condition beyond all dualistic concepts, including those of happiness and suffering. When all our obstacles have been overcome, and we find ourselves in a state of total presence, the wisdom of enlightenment manifests spontaneously without limits, just like the infinite rays of the sun. The clouds have dissolved, and the sun is finally free to shine once again.`,
  author: `Namhkai Norbu Rinpoche`,
}

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
        {/* <Card text={TILOPA01.text} author={TILOPA01.author} />
        <Card text={TRUNGPA01.text} author={TRUNGPA01.author} />
        <Card text={TILOPA02.text} author={TILOPA02.author} />
        <Card text={NORBU01.text} author={NORBU01.author} /> */}
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
