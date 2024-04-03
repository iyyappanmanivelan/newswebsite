import React from 'react'
import Home from './Pages/Home'
import{BrowserRouter , Routes , Route } from 'react-router-dom'
import Contact from './Pages/Contact'
import Signin from './Pages/signin'
function App() {

  const name="sandy"
  return (
  
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
    
  
  )
}

export default App
