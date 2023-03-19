import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import { Box } from '@chakra-ui/react'
function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ paddingTop: '30px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>
      </Router>
  );
}

export default App
