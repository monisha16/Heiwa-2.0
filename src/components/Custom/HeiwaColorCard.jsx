import React from 'react';
import { twMerge } from 'tailwind-merge';

const HeiwaColorCard = (props) => {
  const { color, data } = props;
  return (
    <div className='flex flex-col bg-gray-50 rounded w-[250px] h-[300px] items-center hover:shadow-md hover:cursor-pointer justify-center p-4'>
      <div
        className={twMerge(
          `bg-${color}-400 h-full w-full `,
          color === 'white' && 'bg-white'
        )}
      />
      <span>{data.title}</span>
    </div>
  );
};

export default HeiwaColorCard;
