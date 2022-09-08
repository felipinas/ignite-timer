import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { CyclesContextProvider } from './contexts/CycleContext';

import { Router } from './Router';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
