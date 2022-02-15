import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {getToken, clearToken, saveToken} from '../services/storage';
import AppRouter from '../routes/AppRouter';

const App = () => {
  const signin = data => {
    const token = getToken();
    const headers = token
      ? {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`,
        }
      : {
          'content-type': 'application/json',
        };
    fetch('users-api/auth/signin', {
      method: 'POST',
      headers,
      body: data,
    })
      .then(response => {
        if (response.status === 401) {
          console.log('clearing token');
          clearToken();
          window.location.assign('/');
        } else {
          return response.json();
        }
      })
      .then(result => {
        console.log(result);
        saveToken(result.token);
        window.location.assign('/');
      });
  };
  return (
    <BrowserRouter>
      <AppRouter signin={signin} />
    </BrowserRouter>
  );
};

export default App;
