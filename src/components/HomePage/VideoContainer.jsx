import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../../utilis/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';





const VideoContainer = () => {
  const [videos, setVideos]  =useState([]);

  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const result = await data.json();
    // console.log("result: ", result.items);
    setVideos(result.items);
  }

  return (
    <div className=''>
      <div className='flex flex-wrap justify-center'>
        {
          videos.map((video)=>(
            <Link to={'/watch?v=' + video.id }>
              <VideoCard key={video.id} info={video}/>
            </Link>
          ))
        }

      </div>


    </div>
  )
}

export default VideoContainer