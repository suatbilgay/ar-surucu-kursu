import { useState } from "react";
import "./App.css";
import Header from "./components/common/Header/Header";
import egeafoto from "./assets/egea.jpeg";
import kartvizitVideo from "./assets/Kartvizit.mp4";
import hornet from "./assets/Hornet.jpg";
// Yeni fotoğraflar ekledikçe buraya import edin
// import digerFoto from "./assets/diger.jpeg";

function App() {
  // Fotoğraf dizisi
  const photos = [egeafoto, hornet /*, digerFoto, ...*/];
  const [current, setCurrent] = useState(0);

  const nextPhoto = () => setCurrent((prev) => (prev + 1) % photos.length);
  const prevPhoto = () =>
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <div className="flex justify-center mt-8">
          <video
            src={kartvizitVideo}
            autoPlay
            loop={false}
            muted
            onEnded={(e) => e.target.pause()} // Bittiğinde durur
            style={{ width: "400px", borderRadius: "8px" }}
          />
        </div>
        <div className="flex items-center mt-12 ml-24">
          <button
            onClick={prevPhoto}
            className="mr-4 px-2 py-1 bg-gray-300 rounded"
          >
            &lt;
          </button>
          <img className="size-1/4" src={photos[current]} alt="Arabalar" />
          <button
            onClick={nextPhoto}
            className="ml-4 px-2 py-1 bg-gray-300 rounded"
          >
            &gt;
          </button>
        </div>
        <div
          className="uppercase fixed top-24 left-6 z-50 bg-white/90 px-8 py-4 rounded-xl shadow-4xl border-l-8 border-red-700 backdrop-blur-sm"
          style={{ maxWidth: "720px" }}
        >
          <p className="font-bold text-lg text-gray-800 italic leading-snug">
            <span className="text-red-700 decoration-[0.50rem]">
              Aksaray'da ilk açılan
            </span>{" "}
            ve çizgisini değiştirmeden,
            <span className="text-red-700">38 yıldır</span> yoluna devam eden
            tek kurum.
          </p>
        </div>
        <div
          className="uppercase fixed top-48 left-6 z-50 bg-white/90 px-8 py-4 rounded-xl shadow-4xl border-l-8 border-red-700 backdrop-blur-sm"
          style={{ maxWidth: "720px" }}
        >
          <p className="font-bold text-lg text-gray-800 italic leading-snug">
            🚗 Sürüşte Güven, Eğitimde Kalite! Bay & bayan uzman eğitmenler, son
            model manuel ve otomatik araçlar!<br /> 🏍️ A1 – A2 – A sınıfı motorlarla
            motosiklet eğitimi de bizde! Hayalinizdeki ehliyete güvenle ulaşın!
          </p>
        </div>
        
      </main>

      <footer className="text-center mt-12 text-gray-500">
        <p>&copy; 2024 AR Sürücü Kursu. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;
