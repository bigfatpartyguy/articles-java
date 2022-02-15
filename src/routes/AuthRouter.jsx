import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import LoginPage from '../components/LoginPage';

const AuthRouter = () => (
  <Routes>
    <Route path="/signin" exact element={<LoginPage />} />
    <Route path="*" element={<Navigate to="/signin" />} />
  </Routes>
);

export default AuthRouter;
