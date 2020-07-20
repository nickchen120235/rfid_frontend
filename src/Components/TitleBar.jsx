import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import styles from '../Styles/Components'

const TitleBar = props => {
  const classes = styles()
  return(
    <AppBar className={classes.title} elevation={0}>
      <Toolbar>
        <Typography>
          {props.currentPage}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TitleBar