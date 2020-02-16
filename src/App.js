import React from 'react';
import styled, { keyframes } from 'styled-components';

import logo from './logo.svg';
import { colors, breakpoints } from './styles/theme';

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppContainer = styled.div`
  text-align: center;
`;

const AppLogo = styled.img `
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
      animation: ${appLogoSpin} infinite 20s linear;
  }
`;

const AppHeader = styled.header`
  background-color: ${colors.main};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  @media screen and (${breakpoints.mobileOnly}) {
    background-color: green;
  }
`;

const AppLink = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
