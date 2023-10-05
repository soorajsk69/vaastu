import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <Aboutus/>
    <Services/>
    </>
  )
}

export default App
