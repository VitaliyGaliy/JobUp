import React from 'react'
import Helmet from 'react-helmet'

export const Task = (props) => (
  <div className='task'>
    <p>Date</p>
    <p>{props.tasksText}</p>
    <div className='btnWrapper'>
      <div className='Btn' style={{color:'white'}} ><p>EDIT</p></div>
      <div className='Btn' style={{backgroundColor:'white',
                                   color:'#4582ec'}} ><p>DELETE</p></div>
    </div>
  </div>
)

export default Task
