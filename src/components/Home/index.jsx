import React from 'react';
import HeiwaIcon from 'components/Custom/HeiwaIcon';
import Heiwa from 'assets/images/heiwa.svg';

const Home = () => {
  return (
    <div className='flex h-[90vh] gap-8 items-center justify-center'>
      <div>
        <div class='bg-gradient-to-r from-teal-500 to-base via-blue-600 via-indigo-700 to-purple-800 bg-clip-text text-transparent animate-gradient mb-4 text-5xl font-bold'>
          Heiwa
        </div>
        <p>Tune into your body and experience true peace.</p>
      </div>
      <HeiwaIcon src={Heiwa} alt='Meditation SVG' className='h-80' />
    </div>
  );
};

export default Home;
