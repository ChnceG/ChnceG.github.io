import Navbar from "./components/Navbar"
import SocialIcons from "./components/SocialIcons"
import Email from "./components/Email"
import Footer from "./components/Footer"
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"

export default function App() {
  return (
    <Router>
      <Navbar />
      <SocialIcons className="m-3" />
      <div className="h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Email email="cbgrandy@gmail.com" />
      <Footer />
    </Router>
  )
}
