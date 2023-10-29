import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RatingStars from './RatingStars';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RatingStars numStars={10}/>
    {/* <App /> */}
  </React.StrictMode>
);
