import React from 'react'
import Helmet from 'react-helmet'
const uuidV1 = require('uuid/v1');


export const CreateAndEditeTask = (props) => {
  const {name, index, description, addressObj} = props;
  const sentence = name ? `I need a ${name} to ${description}` : '';
  const isEditing = props.isEditing ? props.isEditing : false;
  return(
    <div className='createTask' >
      <p>NEW TASK</p>
      <p>{sentence}</p>
      <p>{`My address is: ${addressObj.address}`}</p>
      {
        isEditing ?
        <div className='Btn' style={{color:'white'}}
                             onClick={() => props.saveChanges({sentence, name, index, description, addressObj})}>
          <p>SAVE CHANGES</p>
        </div>
        :
        <div className='Btn' style={{color:'white'}}
                             onClick={() => props.createTask({sentence, name, index:uuidV1(), description, addressObj})}>
          <p>CREATE TASK</p>
        </div>
      }
    </div>
  )
}

export default CreateAndEditeTask
