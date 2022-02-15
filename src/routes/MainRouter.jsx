import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import Articles from '../components/Articles';

const CreateArticle = () => {
  return <h1>TODO</h1>;
};

const MainRouter = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/articles/create" exact element={<CreateArticle />} />
        <Route path="/articles" exact element={<Articles />} />
        <Route path="*" element={<Navigate to="/articles" />} />
      </Routes>
    </MainLayout>
  );
};

export default MainRouter;
