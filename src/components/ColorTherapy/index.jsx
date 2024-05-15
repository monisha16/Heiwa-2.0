import React from 'react';
import HeiwaColorCard from '../Custom/HeiwaColorCard';
import { colors } from 'src/constants/color';

const ColorTherapy = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='mb-8 mt-[50px] w-full flex flex-col items-center jsutify-center'>
        <span className='text-md'>
          Use the power of color in our everyday lives to support our mental,
          emotional, and physical wellbeing
        </span>
      </div>
      <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-auto px-12 w-full justify-items-center'>
        {Object.entries(colors).map((color) => {
          return <HeiwaColorCard color={color[0]} data={color[1]} />;
        })}
      </div>
    </div>
  );
};

export default ColorTherapy;
