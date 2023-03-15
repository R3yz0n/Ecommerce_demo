import { useCallback, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Cart from './components/cart/Cart'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/header/Header'
import Home from './components/home/Home'

const App = () => {
  console.disableYellowBox = true
  const { pathname } = useLocation()
  const [nav, setNav] = useState(false)
  const toggleMenu = useCallback(() => setNav(!nav), [nav])





  return (
    <>
      {(pathname === '/dashboard') ? null : <Header toggleMenu={toggleMenu} nav={nav} />}
      <Routes>

        <Route path='/' element={<Home nav={nav} />} />
        <Route path='/cart' element={<Cart />} />


        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

    </>


  )
}

export default App