import React from 'react'
import Helmet from 'react-helmet'

export const Task = (props) => {
  // const {sentence, name, description, addressObj, addressObj:{address, location}} = props.task

  return(
    <div className='task'>
      <p>Date</p>
      <p>{props.task.sentence}</p>
      <div className='btnWrapper'>
        <div className='Btn' style={{color:'white'}}
          onClick={() => props.editTask({...props.task, _id:props._id})}
          >
          <p>EDIT</p>
        </div>
        <div className='Btn' style={{backgroundColor:'white',
                                     color:'#4582ec'}}
            onClick={() => props.deleteTask({...props.task})}
          >
          <p>DELETE</p>
        </div>
      </div>
    </div>
  )
}

export default Task
