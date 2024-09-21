import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Partners from './routes/Partners'
import About from './routes/About'
import ScrollToTop from './components/ScrollToTop'
import Donate from './routes/Donate'

function App() {
  return (
    <>

      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/partners' element={<Partners/>} />
          <Route path='/donation' element={<Donate/>} />
        </Routes>
      </Router>
      <div className="copyright">&copy; 2024 Torch. All rights reserved</div>
    </>
  )
}

export default App
