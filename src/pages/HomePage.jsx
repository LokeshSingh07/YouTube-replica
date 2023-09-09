import React from 'react';
import Sidebar from '../components/common/Sidebar';
import { Outlet } from 'react-router-dom';




const HomePage = () => {
  return (
    <div className='flex gap-5'>

        <div className=''>
          <Sidebar/>
        </div>
        
        <Outlet/>



    </div>
  )
}

export default HomePage;