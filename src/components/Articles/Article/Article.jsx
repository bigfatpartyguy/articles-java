import React, {useEffect} from 'react';
import styles from './Article.module.scss';
import {get} from '../../../services/requests';

const Article = ({id, title, text}) => {
  return (
    <section className={styles.article}>
      <h2>{title}</h2>
      <p>{text.slice(0, 200) + '...'}</p>
    </section>
  );
};

export default Article;
