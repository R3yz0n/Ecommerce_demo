import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Cart from './components/cart/Cart'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/header/Header'
import Home from './components/home/Home'

const App = () => {
  console.disableYellowBox = true
  return (
    <>
      <Header />
      <Routes>

        <Route path='/cart' element={<Cart />} />
        <Route path='/' element={<Home />} />


        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

    </>

  )
}

export default App