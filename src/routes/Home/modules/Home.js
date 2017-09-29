// ------------------------------------
// Constants
// ------------------------------------
export const HELP_HOME = 'HELP_HOME'

// ------------------------------------
// Actions
// ------------------------------------
export function home(value = 1) {
  return {
    type: HELP_HOME,
    payload: value,
  }
}

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk!

 NOTE: This is solely for demonstration purposes. In a real application,
 you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
 reducer take care of this logic.  */

export const homeAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(home(getState().counter))
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  home,
  homeAsync,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [HELP_HOME]: (state, action) => state + action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = { logged: false }
export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
