import React from 'react'
import Helmet from 'react-helmet'

export const AddTask = (props) => (
  <div className='newTask' onClick={() => props.newTask()}>
    <p style={{color:'#4582ec'}}>+ NEW TASK</p>
  </div>
)

export default AddTask
