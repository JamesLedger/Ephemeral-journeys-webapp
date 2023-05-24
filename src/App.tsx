import React from 'react';
import styled from 'styled-components';

function App() {

  const PageWrapper = styled.div`
  background-color: #c1ae9f;
  width: 100vw;
  height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
 `

  const TitleWrapper = styled.div`
    margin: 20px;
    justify-content: center;
    align-items: center;
    font-size: 50px;`

  const GameWrapper = styled.div`
    height: 300px;
    width: 500px;
    margin-top: 100px;
    background-color: white;
  `

  return (
    <PageWrapper>
      <TitleWrapper>
      Ephemeral Journeys
      </TitleWrapper>
      <GameWrapper/>
    </PageWrapper>
  )
}

export default App