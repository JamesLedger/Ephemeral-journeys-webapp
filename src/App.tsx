import styled from "styled-components";
import TitleHeader from "./UI/Header";
import GameContainer from "./UI/GameContainer";
import Footer from "./UI/Footer";

function App() {
  const PageWrapper = styled.div`
  background-color: #c1ae9f;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  height: 100vh;
  width: 100wh;
  `;

  return (
    <PageWrapper>
      <TitleHeader />
      <GameContainer />
      <Footer />
    </PageWrapper>
  );
}

export default App;
