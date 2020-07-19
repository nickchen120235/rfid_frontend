import React from 'react'
import { Container } from '@material-ui/core'

import styles from '../Styles/Pages'

const CardRecord = () => {
  const classes = styles()
  return(
    <Container className={classes.container}>
      <h1>card_record</h1>
    </Container>
  )
}

export default CardRecord