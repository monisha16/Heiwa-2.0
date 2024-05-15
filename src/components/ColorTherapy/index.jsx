import React from 'react';
import HeiwaColorCard from '../Custom/HeiwaColorCard';
import { colors } from 'src/constants/color';

const ColorTherapy = () => {
  return (
    <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-auto px-12 w-full justify-center'>
      {Object.entries(colors).map((color) => {
        return <HeiwaColorCard color={color[0]} data={color[1]} />;
      })}
    </div>
  );
};

export default ColorTherapy;
