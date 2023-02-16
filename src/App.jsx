import React from 'react';
// import ReactDOM from 'react-dom/client';
//import './index.css';
import ContentRouter from "./components/content_router";
import Dashboard from './pages/dashboard';

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

export const App = () => {
  return (
    <div >
      <h1> hi </h1>
      <Dashboard />
      {/* <ContentRouter /> */}
    </div>
    
  );
}

