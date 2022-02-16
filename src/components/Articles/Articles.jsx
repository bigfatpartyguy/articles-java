import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {getToken, clearToken} from '../../services/storage';
import Article from './Article';
import Button from '../Button';
import styles from './Articles.module.scss';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const token = getToken();
    fetch('/articles-api/categories', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(res => console.log(res));
    fetch('/articles-api/articles?page=1&limit=10', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          clearToken();
          window.location.assign('/');
        }
        console.log(response);
        return response.json();
      })
      .then(result => {
        setArticles(result.content);
      });
  }, []);
  return (
    <div className={styles.articles}>
      {articles.length
        ? articles.map(article => {
            return (
              <Article
                key={article.id}
                title={article.title}
                text={article.text}
              />
            );
          })
        : null}
      <Link to="/articles/create" className={styles['create-article']}>
        <Button text="New article" btnRole="primary" />
      </Link>
    </div>
  );
};

export default Articles;
