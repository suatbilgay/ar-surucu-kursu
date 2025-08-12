import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Instructors() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const instructors = [
    {
      id: 1,
      name: "Ahmet KAYA",
      title: "Baş Eğitmen",
      gender: "bay",
      experience: 15,
      specialties: ["B Sınıfı Otomobil", "Otomatik Vites", "Teorik Eğitim"],
      description: "15 yıllık deneyimi ile binlerce öğrenciye başarılı bir şekilde ehliyet aldırmıştır.",
      achievements: ["5000+ Başarılı Öğrenci", "Sıfır Kaza Rekoru", "Mükemmellik Ödülü"],
      image: "/images/instructors/ahmet-kaya.jpg", // Placeholder
      rating: 4.9,
      languages: ["Türkçe", "Kürtçe"]
    },
    {
      id: 2,
      name: "Fatma ÖZKAN",
      title: "Bayan Eğitmen",
      gender: "bayan",
      experience: 12,
      specialties: ["B Sınıfı Otomobil", "Bayan Öğrenci Uzmanı", "Sabırlı Eğitim"],
      description: "Özellikle bayan öğrencilerin tercih ettiği, sabırlı ve anlayışlı eğitim yaklaşımı ile tanınır.",
      achievements: ["3500+ Başarılı Öğrenci", "Bayan Eğitmen Ödülü", "Müşteri Memnuniyeti 1."],
      image: "/images/instructors/fatma-ozkan.jpg", // Placeholder
      rating: 4.8,
      languages: ["Türkçe"]
    },
    {
      id: 3,
      name: "Mehmet YILMAZ",
      title: "Motosiklet Eğitmeni",
      gender: "bay",
      experience: 10,
      specialties: ["A1 Sınıfı", "A2 Sınıfı", "A Sınıfı", "Motosiklet Güvenliği"],
      description: "Motosiklet eğitimi konusunda uzman, güvenli sürüş tekniklerini öğretmede başarılıdır.",
      achievements: ["2000+ Başarılı Motosikletçi", "Güvenlik Uzmanı", "İleri Sürüş Teknikleri"],
      image: "/images/instructors/mehmet-yilmaz.jpg", // Placeholder
      rating: 4.7,
      languages: ["Türkçe", "İngilizce"]
    },
    {
      id: 4,
      name: "Ayşe KILIÇ",
      title: "Teorik Eğitim Uzmanı",
      gender: "bayan",
      experience: 8,
      specialties: ["Trafik Kuralları", "İlk Yardım", "Motor Bilgisi", "Sınav Hazırlık"],
      description: "Teorik derslerde anlaşılır anlatımı ve sınav başarı oranının yüksekliği ile öne çıkar.",
      achievements: ["4000+ Teorik Sınav Başarısı", "En İyi Anlatım Ödülü", "Pedagoji Uzmanı"],
      image: "/images/instructors/ayse-kilic.jpg", // Placeholder
      rating: 4.9,
      languages: ["Türkçe"]
    },
    {
      id: 5,
      name: "Mustafa ARSLAN",
      title: "Deneyimli Eğitmen",
      gender: "bay",
      experience: 20,
      specialties: ["Manuel Vites", "Zor Koşullar", "Park Eğitimi", "Şehir İçi Sürüş"],
      description: "20 yıllık tecrübesi ile her seviyeden öğrenciye başarılı eğitim vermektedir.",
      achievements: ["8000+ Başarılı Öğrenci", "Emektar Eğitmen", "Ustasından Öğrenin Ödülü"],
      image: "/images/instructors/mustafa-arslan.jpg", // Placeholder
      rating: 4.8,
      languages: ["Türkçe", "Arapça"]
    },
    {
      id: 6,
      name: "Zeynep DOĞAN",
      title: "Genç Eğitmen",
      gender: "bayan",
      experience: 5,
      specialties: ["Genç Sürücüler", "Teknoloji Destekli Eğitim", "Modern Yaklaşım"],
      description: "Genç yaşına rağmen modern eğitim teknikleri ve teknoloji kullanımı ile öne çıkar.",
      achievements: ["1500+ Başarılı Öğrenci", "Yenilikçi Eğitim Ödülü", "Genç Yetenekler"],
      image: "/images/instructors/zeynep-dogan.jpg", // Placeholder
      rating: 4.6,
      languages: ["Türkçe", "İngilizce"]
    }
  ];

  const stats = [
    { icon: "👨‍🏫", number: "8+", text: "Uzman Eğitmen" },
    { icon: "⭐", number: "4.8", text: "Ortalama Puan" },
    { icon: "🎓", number: "20000+", text: "Başarılı Öğrenci" },
    { icon: "🏆", number: "15+", text: "Başarı Ödülü" }
  ];

  return (
    <div className="min-h-screen bg-driving-secondary">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                EĞİTMENLERİMİZ
              </span>
            </h1>
            <div className="w-24 sm:w-32 md:w-40 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mt-4 sm:mt-6 md:mt-8 max-w-3xl mx-auto">
              Alanında uzman, deneyimli ve sabırlı eğitmenlerimizle güvenli sürücülük öğrenin
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="glass-effect p-6 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-black text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-white font-semibold">{stat.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="glass-effect rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                onClick={() => setSelectedInstructor(instructor)}
              >
                {/* Profile Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {instructor.gender === 'bay' ? '👨‍🏫' : '👩‍🏫'}
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-yellow-500/90 backdrop-blur-lg px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-white">⭐ {instructor.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      instructor.gender === 'bay' 
                        ? 'bg-blue-600/90 text-white' 
                        : 'bg-pink-600/90 text-white'
                    }`}>
                      {instructor.gender === 'bay' ? 'Bay Eğitmen' : 'Bayan Eğitmen'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black text-white mb-1">{instructor.name}</h3>
                  <p className="text-blue-400 font-semibold mb-3">{instructor.title}</p>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{instructor.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-400">
                      <span className="font-semibold">{instructor.experience} yıl</span> deneyim
                    </div>
                    <div className="flex space-x-1">
                      {instructor.languages.map((lang, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-400">Uzmanlık Alanları:</div>
                    <div className="flex flex-wrap gap-1">
                      {instructor.specialties.slice(0, 2).map((specialty, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">
                          {specialty}
                        </span>
                      ))}
                      {instructor.specialties.length > 2 && (
                        <span className="px-2 py-1 bg-gray-600/20 text-gray-300 text-xs rounded-full">
                          +{instructor.specialties.length - 2} diğer
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:scale-105 transition-transform duration-300">
                    Detay Gör
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Instructors */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Neden Bizim <span className="text-blue-500">Eğitmenlerimiz?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Sertifikalı Eğitmenler",
                desc: "Tüm eğitmenlerimiz MEB onaylı sertifikalara sahip, sürekli eğitim almaktadır",
                color: "from-blue-600 to-blue-500"
              },
              {
                icon: "❤️",
                title: "Sabırlı ve Anlayışlı",
                desc: "Her öğrencinin öğrenme hızını dikkate alan sabırlı eğitim yaklaşımı",
                color: "from-purple-600 to-purple-500"
              },
              {
                icon: "🏆",
                title: "Deneyimli ve Başarılı",
                desc: "Yılların getirdiği tecrübe ile binlerce öğrenciye başarıyla ehliyet aldırdık",
                color: "from-pink-600 to-pink-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                className="glass-effect p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
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

      {/* Instructor Detail Modal */}
      {selectedInstructor && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedInstructor(null)}
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
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-3xl">
                    {selectedInstructor.gender === 'bay' ? '👨‍🏫' : '👩‍🏫'}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-1">{selectedInstructor.name}</h3>
                    <p className="text-blue-400 font-semibold">{selectedInstructor.title}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-yellow-400">⭐ {selectedInstructor.rating}</span>
                      <span className="text-gray-400">{selectedInstructor.experience} yıl deneyim</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedInstructor(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Hakkında</h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedInstructor.description}</p>
                  
                  <h4 className="text-xl font-bold text-white mb-4">Diller</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedInstructor.languages.map((lang, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Uzmanlık Alanları</h4>
                  <div className="space-y-2 mb-6">
                    {selectedInstructor.specialties.map((specialty, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-gray-300">{specialty}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xl font-bold text-white mb-4">Başarıları</h4>
                  <div className="space-y-2">
                    {selectedInstructor.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="text-yellow-400">🏆</div>
                        <span className="text-gray-300">{achievement}</span>
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
