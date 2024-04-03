import React from 'react';

// import css file
import './Home.css';

// import components file
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed'

function Home({sidebar}) {
  return (
    <>
      <Sidebar sidebar={sidebar}/>  
      <div className={`container ${sidebar ? "" : 'large-container'}`}>
        <Feed />
      </div>
    </>
  )
}

export default Home;