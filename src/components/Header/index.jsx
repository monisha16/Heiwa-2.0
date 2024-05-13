import React, { useState } from 'react';

import heiwaLogo from '../../assets/icons/heiwa.svg';
import HeiwaIcon from '../Custom/HeiwaIcon';

import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const navToConst = {
  home: '',
  color: 'color',
  sound: 'sound',
};

const Header = () => {
  const navigate = useNavigate();
  const [navTo, setNavTo] = useState('');

  const changeNavTo = (nav) => {
    setNavTo(nav);
    navigate(`/${nav}`);
  };

  return (
    <div className='flex items-center m-4'>
      <HeiwaIcon icon={heiwaLogo} height={50} width={40} className='mr-4' />
      <div className='flex flex-1 gap-8 justify-center text-base'>
        <span
          onClick={() => changeNavTo(navToConst.home)}
          className={twMerge(
            'hover:text-base hover:cursor-pointer',
            navTo === navToConst.home && 'text-teal-500'
          )}
        >
          Home
        </span>
        <span
          onClick={() => changeNavTo(navToConst.color)}
          className={twMerge(
            'hover:text-base hover:cursor-pointer',
            navTo === navToConst.color && 'text-teal-500'
          )}
        >
          Color
        </span>
        <span
          onClick={() => changeNavTo(navToConst.sound)}
          className={twMerge(
            'hover:text-base hover:cursor-pointer',
            navTo === navToConst.sound && 'text-teal-500'
          )}
        >
          Sound
        </span>
      </div>
    </div>
  );
};

export default Header;
