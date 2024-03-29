import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { appRoutes } from './routes';
import { appStore, AppStoreContext } from './stores';
import { LayoutContainer } from './containers/LayoutContainer';

function App() {
  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: '#63b8ff',
        main: '#0989e3',
        dark: '#005db0',
        contrastText: '#000',
      },
      secondary: {
        main: '#4db6ac',
        light: '#82e9de',
        dark: '#00867d',
        contrastText: '#000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppStoreContext.Provider value={appStore}>
        <Router>
          <LayoutContainer>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </LayoutContainer>
        </Router>
      </AppStoreContext.Provider>
    </ThemeProvider>
  );
}

export default App;
