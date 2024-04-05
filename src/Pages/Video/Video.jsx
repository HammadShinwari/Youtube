import React from 'react';

// import css file 
import './Video.css';

// import components files
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';

function Video() {
  return (
    <div className='play-container'>
        <PlayVideo />
        <Recommended />
    </div>
  )
}

export default Video;