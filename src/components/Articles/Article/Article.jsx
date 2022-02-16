import React from 'react';

const Article = ({title, text}) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

export default Article;