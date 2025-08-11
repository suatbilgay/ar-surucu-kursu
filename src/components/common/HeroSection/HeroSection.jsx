import { useState, useEffect, useRef } from "react";
import egeafoto from "../../../assets/egea.jpeg";
import hornet from "../../../assets/Hornet.jpg";
import otomobiller from "../../../assets/otomobiller.jpg";
import otomobillerVeMotorsikletler from "../../../assets/otomobiller-ve-motorsikletler.jpg";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [currentKartvizit, setCurrentKartvizit] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  
  // Gerçek fotoğraflar - Assets klasöründen
  const photos = [
    egeafoto,           // Egea araç
    hornet,             // Hornet motosiklet
    otomobiller,        // Otomobiller
    otomobillerVeMotorsikletler  // Otomobiller ve motosikletler
  ];
  
  // Kartvizit resimleri - Gerçek dosyalar
  const kartvizitImages = [
    "/images/kart-ön-yüzü.jpg",
    "/images/kart-arka-yüzü.jpg",
  ];

  // Mouse takip efekti
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const nextPhoto = () => setCurrent((prev) => (prev + 1) % photos.length);
  const prevPhoto = () => setCurrent((prev) => (prev - 1 + photos.length) % photos.length);

  // Auto-change effects
  useEffect(() => {
    const kartvizitInterval = setInterval(() => {
      setCurrentKartvizit((prev) => (prev + 1) % kartvizitImages.length);
    }, 4000);

    const photoInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 6000);

    return () => {
      clearInterval(kartvizitInterval);
      clearInterval(photoInterval);
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ParticleSystem = () => {
    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-red-400/30 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
    );
  };

  const InteractiveCard = ({ children, className = "", delay = 0 }) => (
    <div
      className={`group relative overflow-hidden ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-red-500/40 group-hover:from-red-600/10 group-hover:to-red-400/5" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="relative z-10 p-8">
        {children}
      </div>
    </div>
  );

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-1deg); }
        }
        @keyframes slideInUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeInScale {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(239, 68, 68, 0.3); }
          50% { box-shadow: 0 0 50px rgba(239, 68, 68, 0.6), 0 0 80px rgba(239, 68, 68, 0.2); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes pulse3d {
          0%, 100% { transform: scale(1) rotateX(0deg); }
          50% { transform: scale(1.05) rotateX(5deg); }
        }
        @keyframes morphing {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        
        .animate-slideInUp { animation: slideInUp 1s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 1s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 1s ease-out forwards; }
        .animate-fadeInScale { animation: fadeInScale 0.8s ease-out forwards; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-shimmer { 
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .animate-pulse3d { animation: pulse3d 4s ease-in-out infinite; }
        .animate-morphing { animation: morphing 8s ease-in-out infinite; }
        
        .glass-effect {
          background: rgba(15, 15, 15, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #ef4444, #dc2626, #b91c1c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
      `}</style>

      <section 
        ref={heroRef}
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Animated mesh gradient */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)`,
              transition: 'background 0.3s ease',
            }}
          />
          
          {/* Particle system */}
          <ParticleSystem />
          
          {/* Morphing shapes */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-red-600/20 to-red-400/20 animate-morphing blur-xl" />
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-l from-red-500/15 to-red-600/15 animate-morphing blur-2xl" style={{ animationDelay: '4s' }} />
          
          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(239, 68, 68, 0.5) 1px, transparent 1px),
                linear-gradient(0deg, rgba(239, 68, 68, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16">
          {/* Hero Title */}
          <div className={`text-center mb-20 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
            <div className="relative inline-block mb-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black relative z-10">
                <span className="text-gradient animate-pulse3d inline-block drop-shadow-2xl">
                  AR
                </span>
                <span className="ml-6 text-white drop-shadow-2xl animate-shimmer">
                  SÜRÜCÜ KURSU
                </span>
              </h1>
              <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black text-red-600/20 blur-sm transform translate-x-2 translate-y-2">
                AR SÜRÜCÜ KURSU
              </div>
            </div>
            
            <div className="relative max-w-6xl mx-auto glass-effect rounded-3xl p-10 hover-lift animate-glow">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-red-500/20 to-red-600/10 rounded-3xl animate-shimmer" />
              <p className="relative text-xl md:text-3xl lg:text-4xl text-gray-100 leading-relaxed font-light">
                1987'den bu güne, Aksaray'da ilk açılan ve çizgisini değiştirmeden 
                <span className="text-gradient font-bold mx-3 animate-pulse">38 yıldır</span> 
                yoluna devam eden tek kurum
              </p>
            </div>
          </div>

          {/* Modern Kartvizit Showcase */}
          <div className={`mb-24 ${isVisible ? 'animate-fadeInScale' : 'opacity-0'}`} style={{animationDelay: '600ms'}}>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Kurumsal 
                <span className="text-gradient ml-4">Kimliğimiz</span>
              </h2>
              <div className="w-40 h-1.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-8 rounded-full" />
              <p className="text-gray-300 text-2xl font-light">Profesyonel tasarımımızla tanışın</p>
            </div>
            
            <div className="relative max-w-7xl mx-auto">
              <div className="relative h-[500px] lg:h-[600px] glass-effect rounded-3xl border-2 border-red-500/30 hover-lift animate-glow overflow-hidden group">
                 
                {/* Kartvizit Images */}
                {kartvizitImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentKartvizit 
                        ? 'opacity-100 scale-100 rotate-0' 
                        : 'opacity-0 scale-95 rotate-1'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`AR Sürücü Kursu Kartvizit ${index + 1}`}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 p-8"
                      style={{
                        objectPosition: 'center center',
                        maxWidth: '100%',
                        maxHeight: '100%'
                      }}
                      onError={(e) => {
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 flex items-center justify-center backdrop-blur-xl rounded-3xl border border-red-500/30">
                            <div class="text-center p-12">
                              <div class="w-32 h-32 bg-gradient-to-br from-red-600/40 to-red-500/40 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-lg animate-pulse3d">
                                <svg class="w-16 h-16 text-red-300" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                                </svg>
                              </div>
                              <h3 class="text-white text-3xl font-black mb-4 text-gradient">AR Sürücü Kursu</h3>
                              <p class="text-gray-300 text-xl">Profesyonel Kartvizit Tasarımı</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                ))}
                
                {/* Enhanced Navigation */}
                <button
                  onClick={() => setCurrentKartvizit((prev) => (prev - 1 + kartvizitImages.length) % kartvizitImages.length)}
                  className="absolute left-8 top-1/2 transform -translate-y-1/2 p-6 bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-xl rounded-full border border-red-400/50 hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-125 shadow-2xl group"
                >
                  <svg className="w-8 h-8 text-white group-hover:text-white transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={() => setCurrentKartvizit((prev) => (prev + 1) % kartvizitImages.length)}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 p-6 bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-xl rounded-full border border-red-400/50 hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-125 shadow-2xl group"
                >
                  <svg className="w-8 h-8 text-white group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Modern Indicators */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  {kartvizitImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentKartvizit(index)}
                      className={`transition-all duration-500 ${
                        index === currentKartvizit
                          ? 'w-16 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full scale-125 shadow-lg animate-pulse'
                          : 'w-4 h-4 bg-gray-500/60 rounded-full hover:bg-red-500/80 hover:scale-125'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Progress Ring */}
                <div className="absolute top-8 right-8 w-16 h-16">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-700"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-red-500"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray={`${((currentKartvizit + 1) / kartvizitImages.length) * 100}, 100`}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{currentKartvizit + 1}/{kartvizitImages.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            {/* Documents Card */}
            <InteractiveCard 
              className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}
              delay={1200}
            >
              <h3 className="text-4xl md:text-5xl font-black text-white mb-12 text-center group-hover:text-gradient transition-all duration-300">
                GEREKLİ EVRAKLAR
              </h3>
              
              <div className="space-y-6">
                {[
                  { text: "2 Adet Biyometrik Foto", icon: "📷", color: "from-blue-600 to-blue-500" },
                  { text: "Diploma", icon: "🎓", color: "from-green-600 to-green-500" },
                  { text: "Savcılık Belgesi (Sabıka Kaydı)", icon: "📋", color: "from-purple-600 to-purple-500" },
                  { text: "Sağlık Raporu", icon: "🏥", color: "from-red-600 to-red-500" },
                  { text: "Kimlik Fotokopisi", icon: "🆔", color: "from-yellow-600 to-yellow-500" },
                  { text: "e-devlet şifresi", icon: "🔐", color: "from-indigo-600 to-indigo-500" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-6 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-4xl transform group-hover:scale-125 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.color} text-white rounded-xl flex items-center justify-center text-lg font-black shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                      {index + 1}
                    </div>
                    <span className="text-gray-100 font-semibold text-lg group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </InteractiveCard>

            {/* Features Card */}
            <InteractiveCard 
              className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}
              delay={1500}
            >
              <h3 className="text-4xl md:text-5xl font-black text-white mb-12 text-center group-hover:text-gradient transition-all duration-300">
                Neden AR Sürücü Kursu?
              </h3>
              
              <div className="space-y-8">
                {[
                  { 
                    title: "Son Model Araçlar", 
                    desc: "Manuel ve otomatik vites seçenekleri ile modern eğitim", 
                    icon: "🚗", 
                    gradient: "from-red-600 to-red-400",
                    bgGradient: "from-red-600/20 to-red-400/20"
                  },
                  { 
                    title: "Uzman Eğitmenler", 
                    desc: "Bay & bayan deneyimli, sabırlı öğretmenler", 
                    icon: "👨‍🏫", 
                    gradient: "from-blue-600 to-blue-400",
                    bgGradient: "from-blue-600/20 to-blue-400/20"
                  },
                  { 
                    title: "38 Yıllık Deneyim", 
                    desc: "Aksaray'da güvenin adresi, köklü kurum", 
                    icon: "🏆", 
                    gradient: "from-yellow-600 to-yellow-400",
                    bgGradient: "from-yellow-600/20 to-yellow-400/20"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className={`relative p-8 bg-gradient-to-br ${feature.bgGradient} backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 group hover:scale-105 hover:shadow-2xl overflow-hidden`}
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center space-x-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-black text-2xl mb-3 group-hover:text-gradient transition-all duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </InteractiveCard>
          </div>

          {/* Enhanced Vehicle Gallery */}
          <div className={`text-center mb-20 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} style={{animationDelay: '1800ms'}}>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Eğitim <span className="text-gradient">Araçlarımız</span>
            </h2>
            <div className="w-40 h-1.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-16 rounded-full" />
            
            <div className="flex items-center justify-center space-x-12 lg:space-x-16">
              <button
                onClick={prevPhoto}
                className="p-6 bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-xl hover:from-red-700 hover:to-red-800 text-white rounded-full transition-all duration-300 hover:scale-125 border border-red-400/50 shadow-2xl group"
              >
                <svg className="w-10 h-10 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-red-600/30 to-red-400/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
                <div className="relative glass-effect rounded-3xl p-4 border-2 border-red-500/30 hover:border-red-400/50 transition-all duration-500">
                  <div className="relative w-96 lg:w-[28rem] h-64 lg:h-72 overflow-hidden rounded-2xl">
                    <img 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                      src={photos[current]} 
                      alt="AR Sürücü Kursu Eğitim Araçları"
                      style={{
                        objectPosition: 'center center',
                        width: '100%',
                        height: '100%'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
              
              <button
                onClick={nextPhoto}
                className="p-6 bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-xl hover:from-red-700 hover:to-red-800 text-white rounded-full transition-all duration-300 hover:scale-125 border border-red-400/50 shadow-2xl group"
              >
                <svg className="w-10 h-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Photo indicators */}
            <div className="flex justify-center space-x-3 mt-12">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all duration-300 ${
                    index === current
                      ? 'w-12 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full'
                      : 'w-3 h-3 bg-gray-500/60 rounded-full hover:bg-red-500/80'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Cards - İyileştirilmiş Kontrast */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`} style={{animationDelay: '2.1s'}}>
              <div className="gradient-card rounded-3xl p-8 border-2 border-red-600/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group hover:border-red-500/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-red-300 transition-colors duration-300 relative z-10">
                  🚗 Sürüşte Güven, Eğitimde Kalite!
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-100 transition-colors duration-300 relative z-10">
                  Bay & bayan uzman eğitmenler, son model manuel ve otomatik araçlar ile 
                  güvenli sürüş eğitimi veriyoruz.
                </p>
              </div>
            </div>
            
            <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`} style={{animationDelay: '2.4s'}}>
              <div className="gradient-card rounded-3xl p-8 border-2 border-red-600/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group hover:border-red-500/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-red-300 transition-colors duration-300 relative z-10">
                  🏍️ Motosiklet Eğitimi
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-100 transition-colors duration-300 relative z-10">
                  A1 – A2 – A sınıfı motorlarla motosiklet eğitimi de bizde! 
                  Hayalinizdeki ehliyete güvenle ulaşın!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}