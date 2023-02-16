// this page will have a select menu where users can pick their zipcode.
// the back button will lead to the dashboard and the next button will lead to the distance page

import React from 'react';
import { SelectMenu, Button } from "../components/customlibrary";


const Location = () => {
  return (
    <>
    <div className="fixed bottom-12 left-0 h-screen w-screen flex items-center justify-center">
      <h1 className="text-header-color text-xl font-bold"> Please select your zipcode...</h1>
    </div>
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
      <Button className='mx-4'> Back </Button>
      <SelectMenu />
      <Button> Next </Button>
    </div>
    </>
  );
};

export default Location;