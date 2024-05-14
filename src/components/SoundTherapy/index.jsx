import React, { useState } from 'react';
import HeiwaCard from 'components/Custom/HeiwaCard';
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
    <div className='px-12 flex items-center justify-center h-[80vh]'>
      <div className='w-[80%] flex flex-wrap gap-4 items-center justify-center'>
        {audioMap.map((item) => {
          return (
            <HeiwaCard
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
