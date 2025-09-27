import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home_page from "./views/Home_page";
import Services from "./views/Services";
import About from "./views/About";
import Contact from "./views/Contact";
import Book from "./views/Book";   // ✅ Import Book page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />   {/* ✅ Book Route */}
      </Routes>
    </Router>
  );
}

export default App;
