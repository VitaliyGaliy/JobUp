import React, { PropTypes } from 'react'
import LoadingBar from 'react-redux-loading-bar'

import { Navigation } from './Navigation'
import classes from './Header.scss'

const propTypes = {
  logged: PropTypes.bool.isRequired,
}

export const Header = () => (
  <div>
    <LoadingBar className={classes.loadingbar} maxProgress={100}/>
    <Navigation />
  </div>
)

Header.propTypes = propTypes
export default Header
