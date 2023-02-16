import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
// import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';

const main_container = createRoot(document.getElementById('root'));
main_container.render(
  <React.StrictMode>
    {/* <RecoilRoot> */}
    <div className='bg-background-color min-h-screen'>
        <App />
    </div>
    {/* </RecoilRoot> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
