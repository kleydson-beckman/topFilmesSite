import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import Screen from './pages/Screen/Screen'
import Infos from './pages/Infos/infos'

import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path='/' element={<Screen />} />
        <Route path='/infos/:id' element={<Infos/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
