import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import styles from '../Styles/TitleBar'

const TitleBar = props => {
  const classes = styles()
  return(
    <AppBar className={classes.titleBar}>
      <Toolbar>
        <Typography>
          {props.currentPage}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TitleBar