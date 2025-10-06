import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";

import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects"; 
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router basename="/portfolio2">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  )
}

export default App
