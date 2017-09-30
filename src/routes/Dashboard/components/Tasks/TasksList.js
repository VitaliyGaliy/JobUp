import React from 'react'
import Helmet from 'react-helmet'
import Task from './Task.js'
import AddTask from './AddTask.js'

export const TasksList = (props) => {
  console.log('props', props);
  return(
    <div className='tasksListWrapper'>
      <AddTask newTask={props.newTask}/>
      {
        props.tasks.map((t, index) => <Task {...t} editTask={props.editTask}
                                                   deleteTask={props.deleteTask}
                                                   key={index}/>)
      }
    </div>
  )
}

export default TasksList
