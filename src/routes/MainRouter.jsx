import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Articles from '../components/Articles';
import CreateArticle from '../components/CreateArticle';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/articles/create" exact element={<CreateArticle />} />
      <Route path="/articles" exact element={<Articles />} />
      <Route path="*" element={<Navigate to="/articles" />} />
    </Routes>
  );
};

export default MainRouter;
