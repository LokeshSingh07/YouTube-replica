import React from 'react';
import Logo from "../../assets/download.png"
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import {toggleDarkMode, toggleMenu} from "../../utilis/appSlice";
import { Link } from 'react-router-dom';



const Header = () => {
  const dispatch = useDispatch();
  const {isDarkMode} = useSelector((state)=> state.app);

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }

  const darkModeHandler = ()=>{
    dispatch(toggleDarkMode());
  }


  return (
    <div className={`flex justify-between items-center shadow-lg py-2 px-6`}>
        <div className='flex items-center gap-5'>
            <HiMenuAlt1 
              onClick={()=> toggleMenuHandler()}
              className='cursor-pointer'
              size={24}
            />

            <a href="/">
              <img 
                alt='youtube logo'
                src={Logo}
                className='w-[120px] cursor-pointer'
              />
            </a>
        </div>

        <div className='flex items-center'>
          <input  type='text' placeholder='search' className='w-[30rem] border-[1px] border-gray-300 rounded-l-full py-2 px-4 shadow-gray-200 shadow-[2px_2px_20px] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1'/>
          <button className='border-[1px] bg-gray-200 border-gray-300 rounded-r-full py-2 px-4 shadow-gray-200 shadow-[2px_2px_20px]'>
            <AiOutlineSearch size={24}/>
          </button>
        </div>

        <div className='flex items-center gap-2'>
          <div
            onClick={()=> darkModeHandler()} 
            className='cursor-pointer'
          >
            {
              isDarkMode ? <BsFillSunFill size={24}/> : <MdDarkMode size={24}/>
            }
          </div>
          <div className='w-10 h-10 flex justify-center items-center rounded-full bg-slate-200'>
            <AiOutlineUser size={24}/>
          </div>
        </div>


    </div>
  )
}

export default Header