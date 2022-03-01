import React from 'react';
import {getToken} from '../services/storage';
import MainLayout from '../components/MainLayout';
import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';

const AppRouter = ({signin}) => {
  return (
    <MainLayout>
      {!getToken() ? <AuthRouter signin={signin} /> : <MainRouter />}
    </MainLayout>
  );
};

export default AppRouter;
