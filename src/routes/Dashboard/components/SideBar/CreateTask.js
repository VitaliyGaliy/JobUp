import React from 'react'
import Helmet from 'react-helmet'

import {data} from './data.js'

export const СreateTask = (props) => {
  const address = props.address;
  const name = props.servise.name !== undefined ? props.servise.name : '';
  const description = props.description !== undefined ? props.description : '';
  const sentence = `I need a ${name} to ${description}`;
  return(
    <div>
      <div className='createTask' >
        <p>NEW TASK</p>
        <p>{sentence}</p>
        <p>{`My address is: ${address}`}</p>
        <div className='Btn' style={{color:'white'}}
                             onClick={() => props.createTask(sentence)}>
          <p>CREATE TASK</p>
        </div>
      </div>
      <div>
        <p>LOCATION</p>
        <p>{`My address is: ${address}`}</p>
      </div>
      <div>
        <p>SERVICE TYPE</p>
        <div className='serviceTypeWrapper'>
          {
            data.map((d, index) => (
              <div className='serviceTypeItem' key={index} onClick={() => props.setServiceType(d.name, index)}>
                <img src={d.path}/>
                <p>{d.name}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <p>PLUNBER TASKS</p>
        <div className='tasksDetail'>
          {
            data[0].tasks.map((t, index) => (
              <p key={index} onClick={() => props.setServiceTask(t)}>
                {t}
              </p>
            ))
          }
        </div>
      </div>
      <div>
        <p>TASKS DESKRIPTION</p>
        <p>My daughters teddy bear sank in the toilet</p>
      </div>
    </div>
  )
}

export default СreateTask
