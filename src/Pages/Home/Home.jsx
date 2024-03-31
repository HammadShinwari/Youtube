import React from 'react';

// import css file
import './Home.css';

// import components file
import Sidebar from '../../Components/Sidebar/Sidebar';

function Home({sidebar}) {
  return (
    <>
      <Sidebar sidebar={sidebar}/>  
    </>
  )
}

export default Home;