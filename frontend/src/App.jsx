import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
