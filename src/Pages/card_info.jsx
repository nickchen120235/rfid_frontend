import React, { useState, useEffect } from 'react'
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core'

import styles from '../Styles/Pages'

const CardInfo = () => {
  const [tableContent, setTableContent] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/api/getAll', {
      mode: 'cors'
    })
      .then(res => res.json()).then(data => setTableContent(data))
  })

  const classes = styles()
  return(
    <Paper className={classes.container}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Card ID</TableCell>
              <TableCell>Added Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableContent.map(row => 
              <TableRow key={row.cardID}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.cardID}</TableCell>
                <TableCell>{row.added}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default CardInfo