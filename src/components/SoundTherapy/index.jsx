import React, { useState } from 'react';
import HeiwaSoundCard from 'src/components/Custom/HeiwaSoundCard';
import { audioMap } from 'constants/sound';

const SoundTherapy = () => {
  const [activeAudios, setActiveAudios] = useState([]);

  const onCardClick = (name) => {
    let audioPlayer = document.getElementById(name);

    if (!audioPlayer.paused) {
      audioPlayer.pause();
      setActiveAudios(activeAudios.filter((audio) => audio !== name));
      return;
    }

    audioPlayer.play();
    setActiveAudios([...activeAudios, name]);
  };

  return (
    <div className='px-12 flex flex-col items-center justify-center'>
      <div className='mb-8 mt-[150px] flex flex-col items-center jsutify-center'>
        <span className='text-xl '>Unwind with Ambient Sounds</span>
        <span className='text-teal-400 text-xs italic'>
          click the sound cards to layer them
        </span>
      </div>
      <div className='w-[80%] flex flex-wrap gap-4 items-center justify-center'>
        {audioMap.map((item) => {
          return (
            <HeiwaSoundCard
              key={item.name}
              audio={item.sound}
              icon={item.image}
              name={item.name}
              onCardClick={onCardClick}
              activeAudios={activeAudios}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SoundTherapy;
