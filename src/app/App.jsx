import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {getToken, clearToken, saveToken} from '../services/storage';
import ColorModeButton from '../components/Button/ColorModeButton';
import AppRouter from '../routes/AppRouter';
import * as request from '../services/requests';
import {SIGNIN} from '../services/requests/urls';

const App = () => {
  const signin = data => {
    request.post(SIGNIN, data).then(result => {
      console.log(result);
      saveToken(result.token);
      window.location.assign('/');
    });
  };
  return (
    <BrowserRouter>
      <ColorModeButton />
      <AppRouter signin={signin} />
    </BrowserRouter>
  );
};

export default App;
