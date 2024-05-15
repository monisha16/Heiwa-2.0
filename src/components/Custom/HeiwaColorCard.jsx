import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useHover } from '@uidotdev/usehooks';

const HeiwaColorCard = (props) => {
  const { color, data } = props;
  const [ref, hovering] = useHover();
  const [showColorInfo, setShowColorInfo] = useState(false);

  return (
    <div
      onClick={() => {
        setShowColorInfo(!showColorInfo);
      }}
      ref={ref}
      className='flex flex-col bg-gray-50 rounded w-[250px] h-[300px] shadow hover:shadow-md hover:cursor-pointer p-4 rotate-x-180'
    >
      {showColorInfo ? (
        <div className='flex h-full flex-col justify-between'>
          <span
            className={twMerge(
              `text-white text-sm bg-${color}-400 h-[200px] w-full p-4 rounded-lg`,
              color === 'white' && 'bg-white text-black'
            )}
          >
            {data.subtitle}
          </span>
          <div className='flex w-full justify-end'>&larr; </div>
        </div>
      ) : (
        <>
          <div
            className={twMerge(
              `bg-${color}-400 min-h-[200px] w-full rounded shadow-md`,
              color === 'white' && 'bg-white',
              hovering && `animate-${color}-card-gradient`
            )}
          />
          <span className='text-sm mt-2'>{data.title}</span>
          <div className='w-full flex justify-end'>&rarr; </div>
        </>
      )}
    </div>
  );
};

export default HeiwaColorCard;
