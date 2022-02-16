import React from 'react';
import styles from './Article.module.scss';

const Article = ({title, text}) => {
  return (
    <section className={styles.article}>
      <h2>{title}</h2>
      <p>{text.slice(0, 200) + '...'}</p>
    </section>
  );
};

export default Article;
