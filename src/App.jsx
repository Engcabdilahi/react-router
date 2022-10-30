import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Data from './components/data/Data'
import Cloud from './components/cloud/Cloud'
import Footer from './components/footer/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
    
   

        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Courses" element={<Data />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
  
      </Router>
    </div>
  );
}

export default App