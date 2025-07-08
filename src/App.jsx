import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0f1729] text-white">
      <Router>
        <Header />
        <main className="flex justify-center px-4">
          <div className="w-full max-w-[1440px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  )
}
