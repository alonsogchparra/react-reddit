import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Article } from './components/Article';

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('react');

  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get(
          `https://www.reddit.com/r/${subreddit}.json`
        );
        const { data } = response;
        console.log('DATA', data);
        setArticles(data?.data?.children);
      } catch (error) {
        console.log('Error->data', error);
      }
    })();
  }, [subreddit]);

  return (
    <div className='App'>
      <header className='App-header'>
        <input
          type='text'
          className='input'
          value={subreddit}
          onChange={(e) => setSubreddit(e.target.value)}
        />
      </header>
      <div className='articles'>
        {articles !== null
          ? articles.map((article, index) => (
              <Article key={index} article={article} />
            ))
          : ''}
      </div>
    </div>
  );
}

export default App;
