import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Toolbar } from '@material-ui/core'

import TitleBar from './Components/TitleBar'
import SideMenu from './Components/SideMenu'

import CardInfo from './Pages/card_info'
import CardRecord from './Pages/card_record'
import AddCard from './Pages/add_card'

const App = () => {

  const [currentPage, changeCurrentPage] = useState('card_info')

  return(
    <BrowserRouter>
      <TitleBar currentPage={currentPage}/>
      <SideMenu onClick={changeCurrentPage} selected={currentPage}/>

      <Toolbar />

      <Switch>
        <Route path='/card_info'><CardInfo /></Route>
        <Route path='/card_record'><CardRecord /></Route>
        <Route path='/add_card'><AddCard /></Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App