import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import LoginPage from '../components/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      {localStorage.getItem('test') ? <h1>Hello</h1> : <LoginPage />}
    </BrowserRouter>
  );
};

export default App;
