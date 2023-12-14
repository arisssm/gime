import { Routes, Route  } from "react-router-dom"
import Home from './pages/Home'
import News from './pages/News'
import About from "./pages/About"


function App() {
  return (
    <>
      <Routes>
        <Route path='/home' Component={Home}/>
        <Route path='/news' Component={News}/>
        <Route path='/about' Component={About}/>
      </Routes>
    </>
  )
}

export default App
