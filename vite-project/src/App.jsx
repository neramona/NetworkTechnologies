import React from 'react'
import { BrowserRouter,Routes, Route,} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Blog from './pages/Blog'

function App() {
  return (
    <>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
