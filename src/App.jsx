import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './layout/Footer'
import Nav from './layout/Nav'
import Homepage from './Pages/Homepage'
import AboutUs from './Pages/AboutUs'
import FAQs from './Pages/FAQs'
import Features from './Pages/Features'
import ScrollToTop from './layout/ScrollToTop'

function App() {

  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/faqs' element={<FAQs />}/>
        <Route path='/features' element={<Features />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
