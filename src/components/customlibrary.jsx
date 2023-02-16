import { useRecoilValue, useRecoilState } from "recoil"
import React from 'react';
import { optionsState } from '../atoms';


export const SelectMenu = () => { 
    return (
            <select className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
    );
  }

export const NextButton = ( ) => {
    return (
            <button className='bg-button-color hover:bg-header-color text-white font-bold py-2 px-4 rounded'>
            Next
            </button>
    );
}

export const BackButton = ( ) => {
    return (
            <button className='bg-button-color hover:bg-header-color text-white font-bold py-2 px-4 mx-4 rounded'>
            Back
            </button>
    );
}

export const Select = ( { id, label, ...props } ) => {
    const [selected, setSelected] = useRecoilState(props.state);
    return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        className="form-switch"
        checked={selected}
        onChange={() => setSelected(!selected)}
      />
      <label htmlFor={id} className="ml-2">
        {label}
      </label>
    </div>
    );
}

export const Menu = () => {
    const options = useRecoilValue(optionsState);
  
    return (
      <div className="py-2">
        {options.map((option) => (
          <Select
            key={option.id}
            id={option.id}
            label={option.label}
            state={option}
          />
        ))}
      </div>
    );
  };