import React from 'react'
import Sidebaritems from './Sidebaritems'
import Items from '../Data/Data.json'
import Avatar1 from './Avatar1'
import Profile from './Profile'


function Sidebar() {
  return (
    <div className='sidebar'>
      <div>
      <Profile />
      </div>
      {/* <Avatar1 /> */}
      <div className='sidebar2'>
        {Items.map((item, index)=> <Sidebaritems key={index} item={item}
        style={{}} />)}
        </div>
    </div>
    
  )
}

export default Sidebar
