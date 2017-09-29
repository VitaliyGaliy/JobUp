import React from 'react'
import Helmet from 'react-helmet'
import Map from './Map.js'
import TasksList from './Tasks/TasksList.js'
import SideBar from './SideBar/SideBar.js'

export const Dashboard = (props) => {
  return(
    <div >
      <Helmet title='Dashboard' />
      <h4>Dashboard</h4>
      <div >
        <TasksList {...props} />
        <SideBar {...props} />
      </div>
      <Map {...props}/>
    </div>
  )
}

export default Dashboard
