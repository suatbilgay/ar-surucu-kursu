import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timelineData = [
    { year: "1987", title: "Kuruluş Yılı", desc: "Aksaray'da ilk sürücü kursu olarak hizmet vermeye başladık" },
    { year: "1995", title: "Modernizasyon", desc: "Araç parkurumuzu yeniled ve teknolojiye ayak uydurduk" },
    { year: "2005", title: "Motosiklet Eğitimi", desc: "A sınıfı motosiklet eğitimlerini müfredatımıza ekledik" },
    { year: "2015", title: "Otomatik Vites", desc: "Otomatik vites araçlarla eğitim vermeye başladık" },
    { year: "2024", title: "38. Yılımız", desc: "38 yıldır kesintisiz hizmet veren köklü kurumuz" }
  ];

  const achievements = [
    { icon: "🏆", number: "10000+", text: "Başarılı Mezun" },
    { icon: "🚗", number: "15+", text: "Eğitim Aracı" },
    { icon: "👨‍🏫", number: "8+", text: "Uzman Eğitmen" },
    { icon: "⭐", number: "98%", text: "Başarı Oranı" }
  ];

  const certifications = [
    "MEB Onaylı Kurum",
    "ISO Kalite Belgesi", 
    "Mesleki Yeterlilik Kurumu",
    "Sürücü Kursu İşletme Belgesi"
  ];

  return (
    <div className="min-h-screen bg-driving-secondary">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                KURUMSAL
              </span>
              <span className="ml-2 sm:ml-3 md:ml-4 text-white block sm:inline">HİKAYEMİZ</span>
            </h1>
            <div className="w-24 sm:w-32 md:w-40 h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16"
          >
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8">1987'den Bu Güne</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6 md:mb-8">
                Aksaray'da ilk açılan ve çizgisini değiştirmeden <span className="text-red-400 font-bold">38 yıldır</span> yoluna devam eden tek kurum. 
                Sürücülük eğitiminde güvenin adresi, kalitenin garantisi.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Misyonumuz</h3>
                  <p className="text-sm sm:text-base text-gray-300">Güvenli sürücüler yetiştirmek</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Vizyonumuz</h3>
                  <p className="text-sm sm:text-base text-gray-300">Sektörde öncü olmak</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💪</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Değerlerimiz</h3>
                  <p className="text-sm sm:text-base text-gray-300">Kalite, güven, deneyim</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Başarı <span className="text-red-500">Tarihçemiz</span>
            </h2>
            <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 sm:w-1 bg-gradient-to-b from-red-600 to-red-400 rounded-full" />
            
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                className={`relative flex items-center mb-8 sm:mb-12 md:mb-16 ${index % 2 === 0 ? 'justify-start' : 'sm:justify-end'}`}
              >
                <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'pl-8 sm:pl-0 sm:text-right sm:pr-12' : 'pl-8 sm:text-left sm:pl-12'}`}>
                  <div className="glass-effect p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-red-500 mb-2">{item.year}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300">{item.desc}</p>
                  </div>
                </div>
                
                <div className="absolute left-2 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full border-2 sm:border-4 border-white shadow-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-red-900/20 to-red-800/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Başarı <span className="text-red-500">Rakamlarımız</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="glass-effect p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-red-500/50 transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 group-hover:scale-125 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-red-500 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-white font-semibold text-sm sm:text-base md:text-lg">
                    {achievement.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Sertifikalarımız ve <span className="text-red-500">Belgelerimiz</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1, duration: 0.6 }}
                className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-red-400 transition-colors duration-300">
                  {cert}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
