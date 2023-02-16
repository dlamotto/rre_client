import React from 'react';
import { SelectMenu, NextButton, BackButton } from "../components/customlibrary";


const Location = () => {
  return (
    <>
    <div className="fixed bottom-12 left-0 h-screen w-screen flex items-center justify-center">
      <h1 className="text-header-color text-xl font-bold"> Please select how far you would like to travel. You can select more than one option.</h1>
    </div>
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
      {/* <BackButton />  */}
      <SelectMenu />
      <NextButton />
    </div>
    </>
  );
};

export default Location;