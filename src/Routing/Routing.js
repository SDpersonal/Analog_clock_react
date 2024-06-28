import React from 'react'
import {Route, Routes , BrowserRouter as Router } from 'react-router-dom'
import Clock from '../components/Clock'
import PNF from '../pnf/Pnf'

const Routing = () => {
  return (
    <Router>
      <Routes>
      <Route path='*' element={<PNF/>}></Route>
        <Route path='/' Component={Clock}></Route>
      </Routes>
    </Router>
  )
}

export default Routing
