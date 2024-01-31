import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
