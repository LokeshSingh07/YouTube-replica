import React from 'react'
import Button from '../common/Button'


const buttonList = ["All", "Gaming", "songs", "Live", "Soccer", "Cricket", "cooking", "Valentine", "Motivation", "music", "Web" ]

const ButtonList = () => {
  return (
    <div className='w-full flex items-center'>
      
      {
        buttonList.map((index,element)=>{
          return <Button key={index} name={buttonList[element]}/>
        })
      }

    </div>
  )
}

export default ButtonList;