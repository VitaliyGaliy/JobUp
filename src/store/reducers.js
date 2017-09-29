import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import { initialState as HomeInitialState } from '../routes/Home/modules/Home'
import { initialState as DashboardInitialState } from '../routes/Dashboard/modules'

// Fix: "React-Redux: Combining reducers: Unexpected Keys"
// http://stackoverflow.com/a/33678198/789076

console.log('DashboardInitialState', DashboardInitialState);
const initialReducers = {
  counter: (state = 0) => state, // default value should be imported from the module/reducer
  home: (state = HomeInitialState) => state,
  dashboard: (state = DashboardInitialState) => state,
}

export const makeRootReducer = (asyncReducers) => combineReducers({
  // Add sync reducers here
  router,
  // app reducers
  loadingBar: loadingBarReducer,
  ...initialReducers,
  ...asyncReducers,
})

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
