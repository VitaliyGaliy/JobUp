import React, { PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import LoadingBar from 'react-redux-loading-bar'
import AppBar from 'material-ui/AppBar'

import LoginButton from  '../LoginButton'
import LoggedMenu from  '../LoggedMenu'

import { Navigation } from './Navigation'
import classes from './Header.scss'

const propTypes = {
  logged: PropTypes.bool.isRequired,
}

export const Header = (props) => (
  <div>
    <LoadingBar className={classes.loadingbar} maxProgress={100}/>
    <AppBar
      title='Daxx Online'
      iconElementRight={props.logged ? <LoggedMenu /> : <LoginButton />}
    />
    {/*  <Navigation /> */}
  </div>
)

Header.propTypes = propTypes
export default Header
