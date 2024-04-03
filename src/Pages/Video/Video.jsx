import React from 'react';

// import css file 
import './Video.css';

// import components files
import PlayVideo from '../../Components/PlayVideo/PlayVideo';

function Video() {
  return (
    <div className='play-container'>
        <PlayVideo />
    </div>
  )
}

export default Video;