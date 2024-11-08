
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import {BrowserRouter,Route,Routes} from "react-router-dom"
import ShoeSec from './shoeSec.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element ={<App/>} />
  <Route path='/ShoeSec' element ={<ShoeSec/>} />
  <Route path='/BuySec' element ={<buySec/>} />
  
  </Routes>
  </BrowserRouter>
)
