import React from 'react';
import {getToken} from '../services/storage';
import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';

const AppRouter = ({signin}) => {
  if (!getToken()) {
    return <AuthRouter signin={signin} />;
  }
  return <MainRouter />;
};

export default AppRouter;
