import React, { useEffect, useState } from 'react'
import { Paper, TextField, Button } from '@material-ui/core'

import styles from '../Styles/Pages'

const AddCard = () => {
  const [name, setName] = useState('')
  const [card, setCard] = useState('')
  const handleSubmit = () => {
    const data = {
      name: name,
      cardID: card,
      added: (new Date()).toLocaleString('en-US')
    }
    console.log(data)
    fetch('http://localhost:4000/api/addCard', {
      body: JSON.stringify(data),
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => console.log(res)).catch(err => console.error(err))
  }

  const classes = styles()

  return(
    <Paper className={classes.container}>
      <TextField id='name' label='Name' onChange={e => setName(e.target.value)}/>
      <br />
      <TextField id='card' label='Card ID' onChange={e => setCard(e.target.value)}/>
      <br />
      <Button variant='contained' color='primary' onClick={handleSubmit}>Submit</Button>
    </Paper>
  )
}

export default AddCard