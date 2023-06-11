import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Event from './Pages/Event';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
