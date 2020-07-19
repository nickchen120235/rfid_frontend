import React from 'react'
import { Container } from '@material-ui/core'

import styles from '../Styles/Pages'

const CardInfo = () => {
  const classes = styles()
  return(
    <Container className={classes.container}>
      <h1>card_info</h1>
    </Container>
  )
}

export default CardInfo