import { useState } from 'react'
import './App.css'
import Header from './components/common/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <main className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Hoş Geldiniz!
            </h2>
            <p className="text-gray-600 mb-4">
              Bu uygulama, sürücü adaylarına artırılmış gerçeklik teknolojisi 
              kullanarak interaktif sürüş eğitimi sunmayı amaçlamaktadır.
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                onClick={() => setCount((count) => count + 1)}
              >
                Tıklama sayısı: {count}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                🚗 Sürüş Simülasyonu
              </h3>
              <p className="text-gray-600">
                Gerçekçi sürüş koşullarında pratik yapın ve deneyim kazanın.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                📚 İnteraktif Dersler
              </h3>
              <p className="text-gray-600">
                Trafik kuralları ve güvenli sürüş tekniklerini öğrenin.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                🎯 Sınav Hazırlığı
              </h3>
              <p className="text-gray-600">
                Ehliyet sınavına hazırlanın ve test edin.
              </p>
            </div>
          </div>
        </main>

        <footer className="text-center mt-12 text-gray-500">
          <p>&copy; 2024 AR Sürücü Kursu. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </div>
  )
}

export default App 