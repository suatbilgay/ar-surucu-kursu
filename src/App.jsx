import "./App.css";
import Header from "./components/common/Header/Header";
import HeroSection from "./components/common/HeroSection/HeroSection";
import Footer from "./components/common/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-driving-secondary">
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
