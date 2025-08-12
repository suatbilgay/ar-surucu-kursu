import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import egeafoto from "../assets/egea.jpeg";
import hornet from "../assets/Hornet.jpg";
import otomobiller from "../assets/otomobiller.jpg";
import otomobillerVeMotorsikletler from "../assets/otomobiller-ve-motorsikletler.jpg";

export default function Vehicles() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('otomobil');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const vehicles = {
    otomobil: [
      {
        id: 1,
        name: "Fiat Egea",
        type: "Manuel Vites",
        image: egeafoto,
        features: ["ABS Fren", "ESP", "Klima", "Servo Direksiyon", "Airbag"],
        specs: {
          motor: "1.3 MultiJet",
          yakıt: "Dizel",
          vites: "Manuel 5 İleri",
          güvenlik: "5 Yıldız"
        }
      },
      {
        id: 2,
        name: "Modern Otomobil",
        type: "Otomatik Vites",
        image: otomobiller,
        features: ["Otomatik Şanzıman", "Park Sensörü", "Geri Görüş Kamerası", "Cruise Control"],
        specs: {
          motor: "1.5 TSI",
          yakıt: "Benzin",
          vites: "Otomatik CVT",
          güvenlik: "5 Yıldız"
        }
      }
    ],
    motosiklet: [
      {
        id: 3,
        name: "Honda CB650F",
        type: "A2 Sınıfı",
        image: hornet,
        features: ["ABS", "LED Farlar", "Dijital Gösterge", "Çok Diskli Debriyaj"],
        specs: {
          motor: "650cc 4 Silindir",
          güç: "95 HP",
          ağırlık: "208 kg",
          sınıf: "A2"
        }
      },
      {
        id: 4,
        name: "Karma Eğitim",
        type: "A1-A2-A Sınıfları",
        image: otomobillerVeMotorsikletler,
        features: ["Başlangıç Seviyesi", "İleri Seviye", "Trafik Eğitimi", "Pist Eğitimi"],
        specs: {
          sınıf: "Tüm Kategoriler",
          eğitim: "Teorik + Pratik",
          süre: "Özel Program",
          sertifika: "MEB Onaylı"
        }
      }
    ]
  };

  const categories = [
    { id: 'otomobil', name: 'Otomobiller', icon: '🚗', color: 'from-red-600 to-red-500' },
    { id: 'motosiklet', name: 'Motosikletler', icon: '🏍️', color: 'from-blue-600 to-blue-500' }
  ];

  return (
    <div className="min-h-screen bg-driving-secondary">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-blue-600/10" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                ARAÇLARIMIZ
              </span>
            </h1>
            <div className="w-24 sm:w-32 md:w-40 h-1 sm:h-1.5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 mx-auto rounded-full" />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mt-4 sm:mt-6 md:mt-8 max-w-3xl mx-auto">
              Son model, güvenli ve teknolojik araçlarımızla kaliteli sürücülük eğitimi alın
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-6 sm:py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-16">
            <div className="glass-effect rounded-full p-1 sm:p-2 border border-white/10">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mx-1 sm:mx-2 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="mr-3">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {vehicles[selectedCategory].map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="glass-effect rounded-3xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                onClick={() => setSelectedVehicle(vehicle)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-red-600/90 backdrop-blur-lg text-white rounded-full font-bold text-sm">
                      {vehicle.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-black text-white mb-2">{vehicle.name}</h3>
                    <p className="text-gray-300">{vehicle.type}</p>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="text-xl font-bold text-white mb-4">Özellikler</h4>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {vehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-bold hover:scale-105 transition-transform duration-300">
                      Detay Gör
                    </button>
                    <div className="text-gray-400 text-sm">
                      Eğitim için uygun
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Features Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-blue-900/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Neden Bizim <span className="text-red-500">Araçlarımız?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Güvenlik Öncelikli",
                desc: "Tüm araçlarımızda ABS, ESP, airbag gibi güvenlik sistemleri standart",
                color: "from-green-600 to-green-500"
              },
              {
                icon: "🔧",
                title: "Düzenli Bakım",
                desc: "Araçlarımız düzenli servis bakımlarından geçirilir ve kontrol edilir",
                color: "from-blue-600 to-blue-500"
              },
              {
                icon: "📱",
                title: "Modern Teknoloji",
                desc: "Son teknoloji donanımlarla donatılmış, öğrenmesi kolay araçlar",
                color: "from-purple-600 to-purple-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                className="glass-effect p-8 rounded-3xl border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Modal */}
      {selectedVehicle && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVehicle(null)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="glass-effect rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-black text-white mb-2">{selectedVehicle.name}</h3>
                  <p className="text-red-400 font-semibold">{selectedVehicle.type}</p>
                </div>
                <button 
                  onClick={() => setSelectedVehicle(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedVehicle.image} 
                    alt={selectedVehicle.name}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Teknik Özellikler</h4>
                  <div className="space-y-3 mb-6">
                    {Object.entries(selectedVehicle.specs).map(([key, value], i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-gray-400 capitalize">{key}</span>
                        <span className="text-white font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xl font-bold text-white mb-4">Özellikler</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedVehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <style jsx>{`
        .glass-effect {
          background: rgba(15, 15, 15, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}
