import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Articles from '../articles/Articles';
import './App.scss';

export default () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [errorMsg, setErrorMsg] = useState();

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

  console.log(loading, articles, errorMsg);

  return (
    <div className="app">
      <h1>React News Reader</h1>
      <Articles articles={articles} />
    </div>
  );
};
