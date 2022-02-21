import React, {useState, useEffect, createContext} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {getToken, clearToken, saveToken} from '../services/storage';
import ThemeContext from '../contexts/ThemeContext';
import AppRouter from '../routes/AppRouter';
import * as request from '../services/requests';
import {SIGNIN} from '../services/requests/urls';

const App = () => {
  const [colorMode, setColorMode] = useDarkMode();
  const signin = data => {
    request.post(SIGNIN, data).then(result => {
      console.log(result);
      saveToken(result.token);
      window.location.assign('/');
    });
  };
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{colorMode, setColorMode}}>
        <AppRouter signin={signin} />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

function useDarkMode() {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const [mode, setMode] = useState(
    () =>
      window.localStorage.getItem('colorMode') ||
      (window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light')
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => setMode(mediaQuery.matches ? 'dark' : 'light');
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('colorMode', mode);
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  return [mode, setMode];
}

export default App;
