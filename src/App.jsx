import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import ScrollToTopButton from "./components/common/ScrollToTopButton";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles";
import Instructors from "./pages/Instructors";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-driving-secondary">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kurumsal" element={<About />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/araclarimiz" element={<Vehicles />} />
            <Route path="/egitmenlerimiz" element={<Instructors />} />
            <Route path="/suruculerimiz" element={<Instructors />} />
            <Route path="/kurslar" element={<Courses />} />
            <Route path="/fiyatlar" element={<Courses />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/destek" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
