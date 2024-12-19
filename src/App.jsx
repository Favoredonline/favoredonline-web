import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Events from './Pages/Events';
import Summit from './Pages/Summit'; // Import Summit correctly
import Conference from './Pages/Conference'; // Import Conference correctly
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} /> {/* Events page */}
          <Route path="/summit" element={<Summit />} /> {/* Summit page */}
          <Route path="/conference" element={<Conference />} /> {/* Conference page */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
