import React from 'react';
import { useRecoilState } from 'recoil';
import { pageState } from '../atoms';
import Dashboard from '../pages/dashboard';
import Nav from './nav'
import Location from '../pages/location';

const routes ={
    'dashboard':Dashboard,
    'location':Location
}

const ContentRouter = () => {
    //const [page, setPage] = useRecoilState(pageState);
    //const CurrentPage = routes[page] 

    return (
        
        <div className="container mx-auto px-4">
            <h1> hi</h1>
            <Nav />
            {/* <CurrentPage /> */}
        </div>
    );
  };

export default ContentRouter;