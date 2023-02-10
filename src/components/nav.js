import React from 'react';
import { useRecoilState } from 'recoil';
import { pageState } from '../atoms.js';

const NavButton = ({children,className,...rest}) => {
    return (
        <button
          type="button"
          className={`text-white hover:bg-gray-600 rounded h-fit  p-2 mx-auto group relative flex ${className}`}
          {...rest}
        >
          {/* <p className={'z-50 inline-block absolute py-2  top-0 left-10 px-3 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm tooltip dark:bg-gray-600 group-hover:block'}>{children}</p> */}
        </button>
    )
  }

const Nav = () => {
    const [page, setPage] = useRecoilState(pageState);
    return (
        <nav>
            <NavButton
            className={('dashboard' === page) && ' bg-gray-600 dark:bg-gray-900 '}
            onClick={() => setPage('dashboard')}
            >dashboard</NavButton>

            <NavButton
            className={('location' === page) && ' bg-gray-600 dark:bg-gray-900 '}
            onClick={() => setPage('location')}
            >location</NavButton>
        </nav>
    );
};

export default Nav;