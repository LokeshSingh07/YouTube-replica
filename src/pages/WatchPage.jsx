import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utilis/appSlice';
import { useSearchParams } from 'react-router-dom';





const WatchPage = () => {
    const dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();
    // setSearchParams(searchParams.get("v"));

    useEffect(()=>{
        dispatch(closeMenu())
    },[]);


    return (
    <div className='px-5 py-2'>
        <iframe 
            width="800" 
            height="450" 
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            autoPlay={true}
        ></iframe>

        
        
    </div>
  )
}

export default WatchPage