import styled from "styled-components";

const GameWrapper = styled.div`
  background-color: #fff;
  width: 500px;
  height: 300px;
`;

function GameContainer() {
  return <GameWrapper>Game goes here</GameWrapper>;
}

export default GameContainer;
