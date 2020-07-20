import React from 'react'
import { Drawer, List, ListItem, ListItemText, Toolbar, } from '@material-ui/core'
import { Link } from 'react-router-dom'

import styles from '../Styles/Components'

const SideMenu = props => {
  const classes = styles()
  
  return(
    <Drawer variant='permanent' anchor='left' className={classes.drawer}>
      <List>
        <Toolbar />
        {['add_card', 'card_info', 'card_record'].map(text => (
          <ListItem key={text} button onClick={() => props.onClick(text)} selected={props.selected === text} component={Link} to={`/${text}`}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default SideMenu