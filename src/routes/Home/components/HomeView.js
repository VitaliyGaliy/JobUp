import React from 'react'
import { Link } from 'react-router'

import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <div className='container-fluid text-center'>
      <div className={classes.mainContainer}>
        <h1>JobUp</h1>
      </div>
    </div>
  </div>
)

export default HomeView
