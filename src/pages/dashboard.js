import React from 'react';
import { BackButton, NextButton, Menu } from "../components/customlibrary";

const Dashboard = () => {
  return (
    <>
    <div className="fixed -top-52 left-0 h-screen w-screen flex items-center justify-center">
      <h1 className="text-header-color text-3xl font-bold"> Please select how far you would like to travel. You can select more than one option.</h1>
    </div>

    <div className="fixed -top-12 left-0 h-screen w-screen flex items-center justify-center flex-col">
      <Menu />
    </div>

    <div className="fixed top-32 left-0 h-screen w-screen flex items-center justify-center">
      <BackButton />
      
      <NextButton />
    </div>

    </>
  );
};

export default Dashboard;