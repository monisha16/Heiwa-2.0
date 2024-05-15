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
    const navToPath = navToConst[nav];
    navigate(`/${navToPath}`);
  };

  return (
    <div className='flex items-center m-4'>
      <HeiwaIcon icon={heiwaLogo} height={50} width={40} className='mr-4' />
      <div className='flex flex-1 gap-8 justify-center text-base'>
        {Object.keys(navToConst).map((navKey) => {
          return (
            <div
              key={navKey}
              onClick={() => changeNavTo(navKey)}
              className={twMerge(
                'hover:cursor-pointer hover:text-teal-500 capitalize',
                navTo === navKey && 'text-teal-500 border-b-2 border-b-teal-500'
              )}
            >
              {navKey}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
