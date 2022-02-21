import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import * as request from '../../services/requests';
import {ARTICLES} from '../../services/requests/urls';
import ThemeContext from '../../contexts/ThemeContext';
import Article from './Article';
import Button from '../Button';
import styles from './Articles.module.scss';

const Articles = () => {
  const {colorMode} = useContext(ThemeContext);
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
        <Button btnRole={colorMode === 'dark' ? 'primary--dark' : 'primary'}>
          New Article
        </Button>
      </Link>
    </div>
  );
};

export default Articles;
