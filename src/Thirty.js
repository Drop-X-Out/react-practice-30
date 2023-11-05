import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'

export default function Thirty() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        {/* <Route></Route> */}
      </Routes>
    </div>
    </BrowserRouter>
  )
}
