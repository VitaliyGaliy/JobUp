import { push } from 'react-router-redux'
import { CALL_API } from 'redux-api-middleware'

// import config from '../../../../config'
// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

export const fetchAddress = (lat, lng, key) => (dispatch, getState) => {

  dispatch({
    [CALL_API]: {
      types: ['FETCH_ADDRESS_REQUEST', 'FETCH_ADDRESS_SUCCESS', 'FETCH_ADDRESS_FAILURE'],
      endpoint: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`,
      method: 'get',
    },
  })
}

export const newTask = () => (dispatch) => {
  dispatch({ type: 'NEW_TASK'})
}



export const createTask = (sentence) => (dispatch) => {
  dispatch({ type: 'CREATE_TASK', payload:sentence})
}

export const editTask = (e) => (dispatch, getState) => {
  return dispatch({ type: 'EDIT_TASK', payload: e})
}

export const saveChanges = (e) => (dispatch, getState) => {
  return dispatch({ type: 'SAVE_CHANGES', payload: e})
}

export const deleteTask = (e) => (dispatch, getState) => {
  return dispatch({ type: 'DELETE_TASK', payload: e})
}

export const actions = {
  fetchAddress,
  newTask,
  editTask,
  createTask,
  saveChanges,
  deleteTask
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

  FETCH_ADDRESS_REQUEST: (state) => ({ ...state, isLoading: true }),
  FETCH_ADDRESS_SUCCESS: (state, action) => {

    const result = { ...state, isFetching: false }

    if (action.payload) {
      result.addressObj = {address: action.payload.results[0].formatted_address,
                           location: action.payload.results[0].geometry.location}
    }
    return result
  },
  FETCH_ADDRESS_FAILURE: (state) => ({ ...state, isLoading: false }),
  NEW_TASK: (state, action) => {
    const result = { ...state, openSideBar: true }
    return result
  },

  CREATE_TASK: (state, action) => {
    return{ ...state, tasks:[...state.tasks, {task:action.payload}]}
  },

  EDIT_TASK: (state, action) => {
    console.log('action.payload', action.payload);

    const {description, index, name, sentence, addressObj} = action.payload;
    return{ ...state, editTaskData: {description, index, name, sentence, addressObj},
                      addressObj:addressObj,
                      isEditing:true}
  },
  SAVE_CHANGES: (state, action) => {

    const result = { ...state, isEditing:false }
    const newTasks = state.tasks.map(t => {
        if(t.task.index === action.payload.index) {
          return {task: action.payload}
        }else{
          return t
        }
    })
    result.tasks = newTasks;
    result.editTaskData = newTasks;
    return result
  },

  DELETE_TASK: (state, action) => {
    debugger
    const tasks = state.tasks.filter(t => t.task.index !== action.payload.index)
    return {...state, tasks, editTaskData:{}, addressObj:{address:''}}
  },
}


// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  addressObj: {},
  servise:{},
  tasks:[],
  editTaskData:{},
  isEditing:false
}

export default function itemReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
