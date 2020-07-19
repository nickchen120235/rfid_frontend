import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import TitleBar from './Components/TitleBar'
import SideMenu from './Components/SideMenu'

const App = () => {

  const [currentPage, changeCurrentPage] = useState('card_info')

  return(
    <BrowserRouter>
      <TitleBar currentPage={currentPage}/>
      <SideMenu onClick={changeCurrentPage}/>
    </BrowserRouter>
  )
}
export default App