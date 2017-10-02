export const createRoutes = (store) => ({
  path: '/',

  getChildRoutes(partialNextState, callback) {
    require.ensure([], (require) => {
      callback(null, [
        require('./Dashboard').default(store),
        require('./Help').default(store),
        require('./Counter').default(store),
      ])
    })
  },

  getComponent(nextState, callback) {
    require.ensure([], (require) => {
      const inCoreLayout = require('../layouts/CoreLayout').default

      callback(null, inCoreLayout)
    })
  },

  getIndexRoute(partialNextState, callback) {
    require.ensure([], (require) => {
      callback(null, require('./Home').default )
    })
  },

  indexRoute: {
    onEnter: (nextState, replace) => replace('/dashboard'),
  },


})

export default createRoutes
