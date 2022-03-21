import React from 'react';

export const Article = ({
  article: {
    data: { permalink, title },
  },
}) => {
  return (
    <article>
      <a
        href={`https://reddit.com${permalink}`}
        target='_blank'
        rel='noreferrer'
      >
        <h3>{title}</h3>
      </a>
    </article>
  );
};
