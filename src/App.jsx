import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './layout/Footer'
import Nav from './layout/Nav'
import Homepage from './Pages/Homepage'

function App() {

  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
