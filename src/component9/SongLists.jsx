
import React from 'react';

const SongList = ({ songs, onSelectSong }) => {
  return (
    
    <div className='music-container'>
      
   <div>
        {songs.map((song) => 
        (
            <>
          <div key={song.id} onClick={() => onSelectSong(song)} className="music-lists">
           <div className='musictitle'>{song.title}</div>
      <div>{song.artist}</div>
     <button className='musicbtn'>x</button>
    
 
          </div>
          <div className="divider"></div>
          </>
          
        ))}
    </div>
    </div>
  
  );
};

export default SongList;
