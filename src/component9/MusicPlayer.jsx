import React, { useRef } from 'react';

import {AiFillPlayCircle, AiFillPauseCircle} from 'react-icons/ai'
; 
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"
const MusicPlayer = ({ currentSong }) => {

  const audioRef = useRef(null);

 
  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };



  return (
    <div className='musicbox'>
      <h2 className='Nowplaying'>Now Playing</h2>
      {currentSong ? (
        <>
          <p className='artist'>{currentSong.title} - {currentSong.artist}</p>
          <audio ref={audioRef} src={currentSong.src} controls />
          <div className='icons'>
  
          
        <BiSkipPrevious/>
          <AiFillPlayCircle onClick={handlePlay}/>
          <AiFillPauseCircle onClick={handlePause}/>
          <BiSkipNext className='next'/>
        </div>
        </>
      ) : (
        <p>Select a song to play</p>
      )}
    </div>
  );
};

export default MusicPlayer;
