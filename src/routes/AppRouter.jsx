import React from 'react';
import {getToken} from '../services/storage';
import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';

const AppRouter = () => {
  if (!getToken()) {
    return <AuthRouter />;
  }
  return <MainRouter />;
};

export default AppRouter;
