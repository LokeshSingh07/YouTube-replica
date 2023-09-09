import React from 'react';



const VideoCard = ({info}) => {
    
    console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;


  return (
    <div className='w-80 h-full rounded-lg shadow-lg p-2 cursor-pointer'>
        <img 
            src={thumbnails.high.url}
            alt='thumbnail' 
            className='w-full rounded-lg'
        />

        <ul>
            <li className='font-semibold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>

    </div>
  )
}

export default VideoCard