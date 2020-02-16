import React from 'react';
import PropTypes from 'prop-types';
import './Articles.scss';

const Articles = ({ articles }) => (
  <div className="articles">
    <ul className="article-list">
      {articles.map(item => (
        <li key={item.title} className="article-list-item">
          <h2 className="title">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </h2>
          <h3 className="author">{item.author}</h3>
          <p className="content">{item.content}</p>
        </li>
      ))}
    </ul>
  </div>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string
  })
};

Articles.defaultProps = {
  articles: []
};

export default Articles;
