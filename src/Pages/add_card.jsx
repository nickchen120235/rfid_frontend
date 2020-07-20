import React from 'react'
import { Container } from '@material-ui/core'

import styles from '../Styles/Pages'

const AddCard = () => {
  const classes = styles()
  return(
    <Container className={classes.container}>
      <h1>add_card</h1>
    </Container>
  )
}

export default AddCard