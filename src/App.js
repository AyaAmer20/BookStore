import React from 'react'
import {Container} from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Store from './Components/Store/Store'
import Navbar from './Components/Navbar/Navbar';
import Add from './Components/Add/Add'
import ShoppingCartContextProvider from './Context/ShoppingCart/ShoppingCartContext';
const App = () => {
  return (
    <>
    <ShoppingCartContextProvider>
    <Navbar/>
    <Container className='mb-4'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Store' element={<Store/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Add' element={<Add/>}/>
      </Routes>
    </Container>
     </ShoppingCartContextProvider>
    </>

  )
}

export default App
