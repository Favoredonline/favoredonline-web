import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import About from './Pages/About'
import About from './Pages/Events'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-[#1a1a1a] min-h-screen'>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/event' element={<Events />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App
