import { useRecoilValue, useRecoilState } from "recoil"
import React from 'react';
import { optionsState } from '../atoms';

// TODO: fix select menu so that it automatically is the size(# of options) of how many zipcodes are in the yelp data 

export const SelectMenu = () => { 
    return (
            <select className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
    );
 }

 // TODO: figure out how to give a button states, need forward and back pages
export const Button = ({children,className,...rest} ) => {
    return (
      <button className={'bg-button-color hover:bg-header-color text-white font-bold py-2 px-4 rounded ${className}'}
      {...rest}
      >
        {children}
      </button>
      
    );
}

// TODO: figure out how to make these selectable, with states and with the ability to choose more that one
export const OptionCard = ({option,className,...rest}) => {
  return (
      <>
          <div 
              className="group rounded dark:bg-gray-800 bg-gray-300 p-2 w-4/5 md:w-2/5 hover:scale-105 transform mx-auto my-2 flex cursor-pointer transition-all min-w-[300px]"
              //{...rest}
          >
              {/* <img 
                  src={(skill.img_src ? skill.img_src : "https://via.placeholder.com/50x50")} 
                  className="shrink-0 w-10 transform group-hover:scale-110"
              /> */}
              <div className="ml-2">
                  <p className="dark:text-gray-300 text-xl group-hover:text-blue-400 transform transition-all">{option}</p>
                  {/* <p className="dark:text-gray-300 group-hover:font-bold transition-all"></p> */}
              </div>
          </div>
      </>
  )
}
