// this page is the page where the user can pick how far they would like to travel
// back button goes to location
// next button goes to price range

import React from 'react';
import { OptionCard, Button } from "../components/customlibrary";


const Distance = () => {
  return (
    <>
    <div className="fixed -top-52 left-0 h-screen w-screen flex items-center justify-center">
      <h1 className="text-header-color text-3xl font-bold"> Please select how far you would like to travel. You can select more than one option.</h1>
    </div>

    <div className="fixed -top-12 left-0 h-screen w-screen flex items-center justify-center flex-col">
      <OptionCard option={'<1 mile'} />
      <OptionCard option={'5 miles'} />
      <OptionCard option={'10 miles'} />
      <OptionCard option={'25 miles'} />
      {/* <Menu options={[{ id: 1, label: 'Option 1' }, { id: 2, label: 'Option 2' }, { id: 3, label: 'Option 3' }]} /> */}
      {/* <Menu /> */}
    </div>

    <div className="fixed top-32 left-0 h-screen w-screen flex items-center justify-center">
      <Button className='mx-4'> Back </Button>
      <Button> Next </Button>
    </div>

    </>
  );
};

export default Distance;