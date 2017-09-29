import React from 'react'
import Helmet from 'react-helmet'
import СreateTask from './CreateTask'

export const SideBar = (props) => {
  const openSideBar = props.openSideBar ? {right:'0'} : null;
  return(
    <div className='sideBar' style={openSideBar}>
      <СreateTask {...props}/>
    </div>
  )
}

export default SideBar
