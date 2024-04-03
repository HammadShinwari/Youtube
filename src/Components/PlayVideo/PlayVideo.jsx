import React from 'react';

// import css file
import './PlayVideo.css';

// import images
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';

function PlayVideo() {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Best Youtube Channel for learn web development</h3>
        <div className="play-video-info">
            <p>1525 Views &bull; 2 days</p>
            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />2</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />

        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Shinwari Dev</p>
                <span>100k Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>

        <div className="video-discription">
            <p>Channel that makes learning easy</p>
        </div>

    </div>
  )
}

export default PlayVideo;