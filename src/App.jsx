import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import { Box } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'

function App() {
  return (
    <Router>
      <Navbar />
      <Box >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Box>
      </Router>
  )
}

export default App
