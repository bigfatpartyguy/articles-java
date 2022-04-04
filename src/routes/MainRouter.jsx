import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Articles from '../components/Articles';
import ArticlePage from '../components/Articles/ArticlePage/ArticlePage';
import CreateArticle from '../components/CreateArticle';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/articles/create" exact element={<CreateArticle />} />
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<ArticlePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/articles" />} />
    </Routes>
  );
};

export default MainRouter;
