import React from 'react';
import HeiwaIcon from 'components/Custom/HeiwaIcon';
import Heiwa from 'assets/images/heiwaDoodle.svg';

const Home = () => {
  return (
    <div className='flex flex-col h-[90vh] items-center justify-center'>
      <HeiwaIcon src={Heiwa} alt='Meditation SVG' height={250} width={250} />
      <div className='gradient-animation'>Heiwa</div>
      <p>Tune into your body and experience true peace</p>
    </div>
  );
};

export default Home;
