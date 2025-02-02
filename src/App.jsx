import Navbar from './Components/Navbar'
import { Route , Routes } from 'react-router'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Herosection from './Components/Herosection'
import About from './Pages/About'

function App() {


  return (
    <div>
    <div className="bg-slate-300">
    <Navbar />

    </div>
    
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/cart" element={<Cart></Cart>}/>
      <Route path="/about" element={<About></About>}/>

    </Routes>
  </div>
  )
}

export default App
