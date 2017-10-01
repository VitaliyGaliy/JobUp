import React, {Component} from 'react'
import Helmet from 'react-helmet'
import CreateAndEditeTask from './CreateAndEditeTask'

import {data} from './data.js'

class СreateTask extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      _id:'',
      index:null,
      arrIndex:null,
      description:'',
      addressObj:{address:''}
    }
  }

  componentWillMount() {
    this.props.fetchTasks()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isEditing){
      const {name, index, description, sentence, addressObj, _id} = nextProps.editTaskData;
      this.setState({name, index, description, sentence, addressObj:nextProps.addressObj, _id})
    }else if(nextProps.addressObj.address){
      this.setState({addressObj:nextProps.addressObj})
    }
  }

  setServiceType(name, arrIndex){
    this.setState({name, arrIndex})
  }

  setDescription(description){
    this.setState({description})
  }

  render(){
    const {name, index, description, addressObj} = this.state;
    return(
      <div>
        <CreateAndEditeTask
          isEditing={this.props.isEditing}
          createTask={this.props.createTask}
          saveChanges={this.props.saveChanges}
          {...this.state}
        />
        <div>
          <p>LOCATION</p>
        <p>{`My address is: ${addressObj.address}`}</p>
        </div>
        <div>
          <p>SERVICE TYPE</p>
          <div className='serviceTypeWrapper'>
            {
              data.map((d, index) => (
                <div className='serviceTypeItem' key={index} onClick={() => this.setServiceType(d.name, index)}>
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
                <p key={index} onClick={() => this.setDescription(t)}>
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
}

export default СreateTask
