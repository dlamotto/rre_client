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
    const [page, setPage] = useRecoilState(pageState);
    const CurrentPage = routes[page] 

    return (
        <div>
            <h1> hi</h1>
            <Nav />
            <div>
                <CurrentPage />
            </div>
        </div>
    );
  };

export default ContentRouter;