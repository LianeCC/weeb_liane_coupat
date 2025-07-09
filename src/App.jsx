import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Header from "./components/Header"
import HeaderContact from "./components/HeaderContact"
import Footer from "./components/Footer"

function AppLayout() {
  const location = useLocation()
  const isContactPage = location.pathname === "/contact"

  return (
    <div className="min-h-screen w-full bg-[#0f1729] text-white">
      {isContactPage ? <HeaderContact /> : <Header />}

      <main className="flex justify-center">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}
