import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import * as request from '../../services/requests';
import {ARTICLES} from '../../services/requests/urls';
import Article from './Article';
import Button from '../Button';
import styles from './Articles.module.scss';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    request.get(`${ARTICLES}?page=1&limit=10`).then(result => {
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
