import { Routes, Route } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Jobs from "./pages/Jobs"
import Pricing from "./pages/Pricing"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Footer from "./pages/Footer"
export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Main content takes remaining space */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
