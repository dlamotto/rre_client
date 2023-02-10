import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import ContentRouter from "./components/content_router";

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

export const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-200 dark:bg-gray-700">
      <h1> hi </h1>
      <ContentRouter />
    </div>
    
  );
}

