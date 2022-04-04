import React from 'react';
import {useParams} from 'react-router-dom';
import styles from './ArticlePage.module.scss';

const ArticlePage = () => {
  const {id} = useParams();
  return <h1>Ok seems its working {id}</h1>;
};

export default ArticlePage;
