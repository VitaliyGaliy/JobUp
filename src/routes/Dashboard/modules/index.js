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

export const fetchTasks = () => (dispatch) => {
  dispatch({
    [CALL_API]: {
      types: ['FETCH_TASKS_REQUEST', 'FETCH_TASKS_SUCCESS', 'FETCH_TASKS_FAILURE'],
      endpoint: 'http://localhost:8000/api/tasks',
      method: 'get',
      headers: {"Content-Type": "application/json"}
    },
  })
}

export const newTask = () => (dispatch) => {
  dispatch({ type: 'NEW_TASK'})
}

export const createTask = (task) => (dispatch, getState) => {
  dispatch({
    [CALL_API]: {
      types: ['FETCH_TASK_REQUEST', 'FETCH_TASK_SUCCESS', 'FETCH_TASK_FAILURE'],
      endpoint: 'http://localhost:8000/api/tasks',
      method: 'post',
      body: JSON.stringify({task}),
      headers: {"Content-Type": "application/json"}
    },
  }).then(dispatch({ type: 'CREATE_TASK', payload:task}))
}

export const editTask = (e) => (dispatch, getState) => {
  return dispatch({ type: 'EDIT_TASK', payload: e})
}

export const saveChanges = (t) => (dispatch, getState) => {
  console.log('saveChanges', t);
  dispatch({
    [CALL_API]: {
      types: ['FETCH_EDIT_TASK_REQUEST', 'FETCH_EDIT_TASK_SUCCESS', 'FETCH_EDIT_TASK_FAILURE'],
      endpoint: `http://localhost:8000/api/tasks/${t._id}`,
      method: 'put',
      body: JSON.stringify({t}),
      headers: {"Content-Type": "application/json"}
    },
  }).then(dispatch({ type: 'SAVE_CHANGES', payload: t}))
}

export const deleteTask = (e) => (dispatch, getState) => {
  return dispatch({ type: 'DELETE_TASK', payload: e})
}

export const actions = {
  fetchAddress,
  fetchTasks,
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

  FETCH_ADDRESS_REQUEST: (state) => ({ ...state, isFetching: true }),
  FETCH_ADDRESS_SUCCESS: (state, action) => {
    const result = { ...state, isFetching: false }
    if (action.payload) {
      result.addressObj = {address: action.payload.results[0].formatted_address,
                           location: action.payload.results[0].geometry.location}
    }
    return result
  },
  FETCH_ADDRESS_FAILURE: (state) => ({ ...state, isFetching: false }),

  NEW_TASK: (state, action) => {
    const result = { ...state, openSideBar: true }
    return result
  },

  FETCH_TASKS_REQUEST: (state) => ({ ...state, isFetching: true }),
  FETCH_TASKS_SUCCESS: (state, action) => {
    const result = { ...state, isFetching: false }
    console.log('action.payload', action.payload);
    if (action.payload) {
      result.tasks = action.payload.tasks;
    }
    return result
  },
  FETCH_TASKS_FAILURE: (state) => ({ ...state, isFetching: false }),



  CREATE_TASK: (state, action) => {
    return{ ...state, tasks:[...state.tasks, {task:action.payload}]}
  },

  EDIT_TASK: (state, action) => {
    const {description, index, name, sentence, addressObj, _id} = action.payload;
    return{ ...state, editTaskData: {description, index, name, sentence, addressObj, _id},
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
