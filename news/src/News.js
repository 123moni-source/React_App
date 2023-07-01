// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

// const News = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
//         );
//         setArticles(response.data.articles);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest News</h1>
//       {articles.map((article, index) => (
//         <div key={index}>
//           <h2>{article.title}</h2>
//           <p>{article.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default News;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css';

const apiKey = '9392a58170b74bfe830d345700688cc4'; // Replace with your actual API key

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=tesla&from=2023-06-01&sortBy=publishedAt&apiKey=API_KEY`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="news-container">
      <h1 className="news-title">Latest News</h1>
      {articles.map((article, index) => (
        <div key={index} className="article">
          <img className="article-image" src={article.urlToImage} alt={article.title} />
          <div className="article-content">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-description">{article.description}</p>
            <a className="article-link" href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
