import styled from "styled-components";
import { Unity, useUnityContext } from "react-unity-webgl";


const GameWrapper = styled.div`
  background-color: red;
  width: 960px;
  height: 600px;
`;

const UnityCanvas = styled(Unity)`
  width: 100%; /* Adjust the width as needed */
  height: 100%; /* Adjust the height as needed */
`;

function GameContainer() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "build/EphemeralJourneys.loader.js",
    dataUrl: "build/webgl.data",
    frameworkUrl: "build/build.framework.js",
    codeUrl: "build/build.wasm",
  });

  return <GameWrapper>
    <UnityCanvas unityProvider={unityProvider} />
  </GameWrapper>;
}

export default GameContainer;
