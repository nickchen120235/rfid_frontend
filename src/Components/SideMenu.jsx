import React from 'react'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'

import styles from '../Styles/SideMenu'

const SideMenu = props => {
  const classes = styles()
  
  return(
    <Drawer variant='permanent' anchor='left' className={classes.drawer}>
      <List>
        {['card_info', 'card_record'].map(text => (
          <Link key={text} to={`/${text}`}>
          <ListItem button onClick={() => props.onClick(text)}>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  )
}

export default SideMenu