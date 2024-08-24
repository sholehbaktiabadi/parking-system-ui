import { BrowserRouter as R, Routes, Route } from 'react-router-dom' 
import Layout from './layout/layout'
import React from 'react'
import Home from './page/home'

function App() {

  return (
    <R>
      <Routes>
        <Route path='/' element={ <Layout props={<Home />}/> } />
      </Routes>
    </R>
  )
}

export default App