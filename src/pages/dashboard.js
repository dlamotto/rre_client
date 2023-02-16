//////////////MAIN PAGE/////////////////////
// this is the welcoming page
// next button will lead to the location page

import React from 'react';
import { OptionCard, Button } from "../components/customlibrary";

// TODO: for the following pages (so far), make a template so that you can save space: distance, price, service, time_of_food & genre

const Dashboard = () => {
  return (
    <>
    <div className="fixed -top-52 left-0 h-screen w-screen flex items-center justify-center">
      <h1 className="text-header-color text-3xl font-bold"> Please select how far you would like to travel. You can select more than one option.</h1>
    </div>

    <div className="fixed -top-12 left-0 h-screen w-screen flex items-center justify-center flex-col">
      <OptionCard option={'$'} />
      <OptionCard option={'$$'} />
      <OptionCard option={'$$$'} />
      <OptionCard option={'$$$$'} />
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

export default Dashboard;