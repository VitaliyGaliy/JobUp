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

export const setServiceType = (name, index) => (dispatch) => {
  dispatch({ type: 'SET_SERVICE_TYPE', payload:{name,index}})
}

export const setServiceTask = (deskription) => (dispatch) => {
  dispatch({ type: 'SET_SERVICE_TYPE_TASK', payload:deskription})
}

export const createTask = (sentence) => (dispatch) => {
  dispatch({ type: 'CREATE_TASK', payload:sentence})
}

export const editTask = (e) => (dispatch, getState) => {
  return dispatch({ type: consts.EDIT_TASK, payload: e})
}

export const actions = {
  fetchAddress,
  newTask,
  setServiceType,
  setServiceTask,
  createTask
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

  FETCH_ADDRESS_REQUEST: (state) => ({ ...state, isLoading: true }),
  FETCH_ADDRESS_SUCCESS: (state, action) => {

    const result = { ...state, isFetching: false }
    if (action.payload) {
      result.address = action.payload.results[0].formatted_address
    }

    return result
  },
  FETCH_ADDRESS_FAILURE: (state) => ({ ...state, isLoading: false }),
  NEW_TASK: (state, action) => {
    const result = { ...state, openSideBar: true }
    return result
  },
  SET_SERVICE_TYPE_TASK: (state, action) => {
    const result = { ...state, description: action.payload }
    return result
  },
  SET_SERVICE_TYPE: (state, action) => {
    const result = { ...state, servise: action.payload }
    return result
  },

  CREATE_TASK: (state, action) => {
    return{ ...state, tasks:[...state.tasks, {tasksText:action.payload}]}
  },

  EDIT_TASK: (state, action) => {
    console.log('action.payload', action.payload);
    return{ ...state, tasks:[...state.tasks, {tasksText:action.payload}]}
  },

}

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  address: '',
  servise:{},
  tasks:[]
}

export default function itemReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
