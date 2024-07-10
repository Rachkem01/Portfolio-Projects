
import SongList from './SongLists';
import MusicPlayer from './MusicPlayer';
import React,{useState} from 'react';

function Music (){

    
    

   const [currentSong, setCurrentSong] = useState(null);

   const handleSelectSong = (song) => {
     setCurrentSong(song);
   };

    


  const [songs] = useState(
    [
        {
          id: 1,
          title:"Broken Vessel",
          artist:"Hillsong",
         src: "./songs/BrokenVesels.mp3"
        },
        {
            id:2,
            title:"One Step Away",
            artist: "Casting Crown",
            src:"https://www.ceenaija.com/casting-crowns-one-step-away/"
        },
        {
            id:3,
            title: "Worthy is The Lamb",
            artist:"Nathaniel Bassey",
            src: "https://www.ceenaija.com/nathaniel-bassey-worthy-is-the-lamb-hallelujah-challenge-praise-medley-2/"
        },
        {
            id:4,
            title:"Worthy of my Praise",
            artist: "Dunsin Oyekan",
            src: "https://www.ceenaija.com/dunsin-oyekan-worthy-of-my-praise-mp3-lyrics/"
        },
        {
            id: 5,
            title:"You are the Living God",
            artist:"Ada Eze",
            src: "https://www.ceenaija.com/download-prospa-ochimana-ekwueme-you-are-the-living-god-o-eze-no-one-like-you/"
        },
        {
            id: 6,
            title:"Miracle no dey tire Jesus",
            artist:"Moses Bliss",
            src: "https://www.ceenaija.com/moses-bliss-miracle-no-dey-tire-jesus-mp3-lyrics/"
        },
        
        {
            id: 7,
            title:"Bowl of Fire",
            artist:"Lawrence Oyor",
            src: "https://www.ceenaija.com/lawrence-oyor-bowl-of-fire/"
        },
        
        {
            id: 8,
            title:"City of God",
            artist:"Dunsin Oyekan",
            src: "https://www.ceenaija.com/dunsin-oyekan-city-of-god-mp3-lyrics/"
        },
        
        {
            id: 9,
            title:"What a Beautiful Name",
            artist:"Hillsong",
            src: "https://www.boomplay.com/songs/11592519?from=artists"
        },
        
        {
            id: 10,
            title:"Thrive",
            artist:"Casting Crown",
            src: "https://www.ceenaija.com/casting-crowns-thrive/"
        }
        
        
        
    
    
    ]
  )
  
  
 

    return (
        <section className='Music'>
<div className='music-container'>
<h3 className='music-title'>Music Refreshes</h3>
<div className='image-iconbox'>
<img src="https://images.pexels.com/photos/3756948/pexels-photo-3756948.jpeg?auto=compress&cs=tinysrgb&w=600" style={{width:'50%', height:'250px'}} className='music-image' alt='woman'/>
<MusicPlayer currentSong={currentSong} className= 'musicbox' />
</div>
<div className="music-lists">
<SongList songs={songs} onSelectSong={handleSelectSong} />

</div>
</div>
        </section>
    )
}
export default Music

// <section className="Music">
  
//   <div className="music-container">
//   <h3 className="music-title">Music Refreshes</h3>
//   <div className='image-iconbox'>
//   <img src="https://images.pexels.com/photos/3756948/pexels-photo-3756948.jpeg?auto=compress&cs=tinysrgb&w=600" style={{width:'50%', height:'150px'}} className='music-image'/>
//   <div className='Icons'>
     
//   <BiSkipPrevious   />
//   <AiFillPlayCircle  className='play-btn' 
   
//   />
//   <AiFillPauseCircle  />
//   <BiSkipNext />
//   </div>
//   </div>
//   {
//       musics.map((music)=>{
//           return(
//               <>        
//               <div id={music.id}  key={music.id} className="music-lists" onClick={handleSelectSong}>
             
//       <div className='musictitle'>{music.title}</div>
//       <div>{music.artist}</div>
//     <button className='musicbtn'>x</button>
//           </div>
//           <div className="divider"></div>
//           </>
  
//           )
//       })
//   }
  
//   </div>
//           </section>