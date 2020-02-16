import React from 'react';
import PropTypes from 'prop-types';
import './Articles.scss';

const Articles = ({ loading, articles = [] }) => (
  <div className="article-container">
    {loading ? (
      <h3 className="article-empty">Loading Articles...</h3>
    ) : (
      <ul className="article-list">
        {articles.length > 0 ? (
          articles.map(item => (
            <li key={item.title} className="article-list-item">
              <h2 className="title">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </h2>
              <h3 className="author">{item.author}</h3>
              <p className="content">{item.content}</p>
            </li>
          ))
        ) : (
          <h3 className="article-empty">Empty List</h3>
        )}
      </ul>
    )}
  </div>
);

Articles.propTypes = {
  loading: PropTypes.bool,
  articles: PropTypes.arrayOf({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string
  }).isRequired
};

Articles.defaultProps = {
  loading: false
};

export default Articles;
