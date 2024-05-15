import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useHover } from '@uidotdev/usehooks';

const HeiwaColorCard = (props) => {
  const { color, data } = props;
  const [ref, hovering] = useHover();

  return (
    <div
      ref={ref}
      className='flex flex-col bg-gray-50 rounded w-[250px] h-[300px] shadow hover:shadow-md hover:cursor-pointer p-4'
    >
      <div
        className={twMerge(
          `bg-${color}-400 min-h-[200px] w-full rounded shadow-md`,
          color === 'white' && 'bg-white',
          hovering && `animate-${color}-card-gradient`
        )}
      />
      <span className='text-sm mt-2'>{data.title}</span>
    </div>
  );
};

export default HeiwaColorCard;
