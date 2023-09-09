import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { HiVideoCamera } from 'react-icons/hi';
import { BiHistory } from "react-icons/bi";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { MdLibraryAddCheck } from 'react-icons/md';



const Sidebar = () => {
  const {isMenuOpen} = useSelector((state)=> state.app);

  if(!isMenuOpen){
    return null;
  }

  return (
    <div className='p-5 shadow-lg w-[210px]'>
      <ul className='text-lg font-semibold '>
        <li>
          <Link to="/" className='flex items-center gap-2 rounded-lg hover:text-red-500 hover:bg-gray-100 p-2'>
            <AiFillHome size={24}/>
            <span>Home</span>
          </Link>
        </li>
        <li className='flex items-center gap-2 p-2'>
          <HiVideoCamera size={24}/>
          <span>Shorts</span>
        </li>        
        <li className='flex items-center gap-2 p-2'>
          <MdLibraryAddCheck size={24}/>
          <span>Library</span>
        </li>
        <li className='flex items-center gap-2 p-2'>
          <BiHistory size={24}/>
          <span>Histroy</span>
        </li>
      </ul>

      <h1 className='font-bold text-lg pt-5'>Subscription</h1>
      <ul>
        <li className='flex items-center p-1'>Sports</li>
        <li className='flex items-center p-1'>Music</li>
        <li className='flex items-center p-1'>Gaming</li>
      </ul>

      <h1 className='font-bold text-lg pt-5'>Watch later</h1>
      <ul>
        <li className='flex items-center p-1'>Music</li>
        <li className='flex items-center p-1'>Sports</li>
        <li className='flex items-center p-1'>Gaming</li>
        <li className='flex items-center p-1'>Movies</li>
      </ul>

    </div>
  )
}

export default Sidebar