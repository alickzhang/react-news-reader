import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Articles from '../articles/Articles';
import Input from '../input/Input';
import { filter } from '../../shared/utils';
import './App.scss';

export default () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const url = process.env.REACT_APP_API;
      const params = { country: 'au' };
      try {
        const res = await axios.get(url, { params });
        setArticles(res.data.articles);
      } catch (err) {
        setErrorMsg(err.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const onFilterTextChange = e => {
    const query = e.target.value.replace(/\W|_/g, '[$&]');
    setFilterText(query);
  };

  const filteredArticles = filter(articles, filterText, ['title']);

  return (
    <div className="app-container">
      <div className="app">
        <h1 className="app-title">React News Reader</h1>
        {errorMsg ? (
          <div className="app-error">{errorMsg}</div>
        ) : (
          <>
            <Input placeholder="Filter articles by headlines" onChagne={onFilterTextChange} />
            <Articles loading={loading} articles={filteredArticles} />
          </>
        )}
      </div>
    </div>
  );
};
