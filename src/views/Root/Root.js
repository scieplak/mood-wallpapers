import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';

function App() {
  return (
    <MainTemplate>
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>HELLO!</ThemeProvider>
      </>
    </MainTemplate>
  );
}

export default App;
