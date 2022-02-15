import React, {useState, useEffect} from 'react';
import {getToken} from '../../services/storage';
import Article from './Article';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const token = getToken();
    fetch('/articles-api/articles?page=1&limit=10', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(result => {
        setArticles(result.content);
      });
  }, []);
  return (
    <div>
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
    </div>
  );
};

export default Articles;
