import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {getToken} from '../services/storage';
import AppRouter from '../routes/AppRouter';
import LoginPage from '../components/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
