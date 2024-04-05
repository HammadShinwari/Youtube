import React, { useState } from 'react';

// import css file
import './Home.css';

// import components file
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed'

function Home({sidebar}) {

  // jab hm kisi category par click kare ge tho ye state use hoga
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>  
      <div className={`container ${sidebar ? "" : 'large-container'}`}>
        <Feed category={category}/>
      </div>
    </>
  )
}

export default Home;

// time
// 1:37:00