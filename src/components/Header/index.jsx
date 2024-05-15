import React, { useState } from 'react';

import heiwaLogo from '../../assets/icons/heiwa.svg';
import HeiwaIcon from '../Custom/HeiwaIcon';

import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import AboutMe from '../AboutMe';

const navToConst = {
  home: '',
  color: 'color',
  sound: 'sound',
};

const Header = () => {
  const navigate = useNavigate();
  const [navTo, setNavTo] = useState('home');

  const changeNavTo = (nav) => {
    setNavTo(nav);
    const navToPath = navToConst[nav];
    navigate(`/${navToPath}`);
  };

  return (
    <div className='flex items-center justify-between m-4'>
      <HeiwaIcon icon={heiwaLogo} height={50} width={40} className='mr-4' />
      <div className='flex flex-1 gap-8 mt-2 ml-4'>
        {Object.keys(navToConst).map((navKey) => {
          return (
            <div
              key={navKey}
              onClick={() => changeNavTo(navKey)}
              className={twMerge(
                "relative text-xl capitalize w-fit block after:block hover:cursor-pointer hover:text-teal-500 after:content-[''] after:absolute after:h-[3px] after:bg-teal-500 after:w-full after:scale-x-0 after:transition after:duration-300 after:origin-center",
                navTo !== navKey && 'after:hover:scale-x-100',
                navTo === navKey &&
                  'after:h-[3px] text-teal-500 border-b-[3px] border-b-teal-500'
              )}
            >
              {navKey}
            </div>
          );
        })}
      </div>
      <AboutMe />
    </div>
  );
};

export default Header;
