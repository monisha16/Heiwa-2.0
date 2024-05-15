import React, { useRef } from 'react';
import HeiwaIcon from 'components/Custom/HeiwaIcon';
import { twMerge } from 'tailwind-merge';
import { useHover } from '@uidotdev/usehooks';

const HeiwaSoundCard = ({
  audio,
  icon,
  name,
  onCardClick = () => {},
  activeAudios = [],
}) => {
  const [ref, hovering] = useHover();
  let audioPlayer = document.getElementById(name);
  const isPlaying = !audioPlayer?.paused;

  const progressBar = useRef();
  const MAX = 20;

  const handleVolume = (e) => {
    const { value } = e.target;
    const volume = Number(value) / MAX;
    progressBar.current.volume = volume;
  };

  return (
    <div className='flex h-[160px] w-[160px] relative items-center rounded-lg justify-center hover:shadow-md'>
      <div
        className={twMerge(
          'bg-gray-50 absolute rounded-lg p-2 hover:shadow-md flex items-center justify-center h-[160px] w-[160px]',
          activeAudios.includes(name) &&
            'bg-gradient-to-tr from-green-400 to-yellow-400 via-purple-600 via-cyan-400 to-green-500 animate-pulse'
        )}
      />
      <div
        ref={ref}
        className='py-3 hover:cursor-pointer h-[140px] absolute w-[140px] flex flex-col justify-between items-center rounded-md bg-white'
      >
        <div
          className='flex flex-col h-full w-full items-center justify-evenly'
          onClick={() => onCardClick(name)}
        >
          <span className='capitalize'>{name}</span>
          <HeiwaIcon src={icon} alt={name} className='p-2 pb-0' />
          <audio
            src={audio}
            id={name}
            type='audio/mp3'
            preload='none'
            loop
            ref={progressBar}
          ></audio>
        </div>

        <input
          className={twMerge(
            'opacity-0',
            isPlaying && hovering && 'opacity-100'
          )}
          type='range'
          min={0}
          max={MAX}
          onChange={(e) => handleVolume(e)}
        />
      </div>
    </div>
  );
};

export default HeiwaSoundCard;
