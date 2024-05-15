import React, { useState } from 'react';
import githubLogo from 'assets/icons/github.svg';
import linkedinLogo from 'assets/icons/linkedin.svg';
import developerIcon from 'assets/icons/developer.svg';
import { twMerge } from 'tailwind-merge';
import HeiwaIcon from '../Custom/HeiwaIcon';

const AboutMe = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          setShowModal(true);
        }}
        className={twMerge(
          'relative hover:cursor-pointer hover:text-teal-500 hover:border rounded-[50%] flex items-center justify-center w-[40px] h-[40px]',
          showModal && 'text-teal-400'
        )}
      >
        <HeiwaIcon src={developerIcon} small alt='thank you note' />
      </div>

      {showModal && (
        <div className='absolute h-60 w-60 right-0 px-4 m-4 z-50 bg-white border-2 rounded-lg'>
          <span
            onClick={() => {
              setShowModal(false);
            }}
            className='w-full flex pt-2 justify-end hover:text-teal-400 hover:cursor-pointer'
          >
            x
          </span>
          <span className='text-sm'>
            Hello 👋 <br />
            Hope this tiny project helped you fully immerse and enhance your
            focus into your work. <br />
            Regard, <br />
            Monisha Tarkar
          </span>
          <div className='flex w-full items-center justify-end'>
            <a
              id='github-link'
              href='https://github.com/monisha16'
              target='_blank'
              rel='noreferrer'
            >
              <HeiwaIcon src={githubLogo} alt='github' extraSmall />
            </a>
            |
            <a
              id='linkedin-link'
              href='https://www.linkedin.com/in/monisha-tarkar/'
              target='_blank'
              rel='noreferrer'
            >
              <HeiwaIcon src={linkedinLogo} alt='linkedIn' extraSmall />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
