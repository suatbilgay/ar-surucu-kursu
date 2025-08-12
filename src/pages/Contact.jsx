import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const onSubmit = (data) => {
    // Form submission logic would go here
    console.log('Form data:', data);
    setFormSubmitted(true);
    reset();
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Adresimiz",
      details: [
        "Hamidiye Mah. Kalealtı Cad.",
        "Ar İş Merkezi Kat: 2",
        "AKSARAY"
      ],
      color: "from-red-600 to-red-500"
    },
    {
      icon: "📞",
      title: "Telefon",
      details: [
        "0532 669 44 68",
        "0382 212 27 47",
        "0541 474 44 68 (Suat BALGAY)"
      ],
      color: "from-blue-600 to-blue-500"
    },
    {
      icon: "⏰",
      title: "Çalışma Saatleri",
      details: [
        "Pazartesi - Cuma: 08:00 - 18:00",
        "Cumartesi: 08:00 - 15:00",
        "Pazar: Kapalı"
      ],
      color: "from-green-600 to-green-500"
    },
    {
      icon: "📧",
      title: "E-posta",
      details: [
        "info@arsurucukursu.com",
        "suatbilgay@arsurucukursu.com"
      ],
      color: "from-purple-600 to-purple-500"
    }
  ];

  const officeFeatures = [
    {
      icon: "🅿️",
      title: "Ücretsiz Otopark",
      desc: "Müşterilerimiz için ücretsiz otopark imkanı"
    },
    {
      icon: "♿",
      title: "Engelsiz Erişim",
      desc: "Engelli vatandaşlarımız için uygun erişim"
    },
    {
      icon: "☕",
      title: "Bekleme Salonu",
      desc: "Konforlu bekleme alanı ve ikram servisi"
    },
    {
      icon: "📚",
      title: "Eğitim Salonu",
      desc: "Modern teknolojik donanımlı eğitim sınıfları"
    }
  ];

  const quickActions = [
    {
      title: "WhatsApp ile İletişim",
      desc: "Anında mesajlaşma ve hızlı yanıt",
      icon: "💬",
      link: "https://wa.me/905414744468",
      color: "from-[#25D366] to-[#1ebe57]"
    },
    {
      title: "Konumunu Göster",
      desc: "Google Maps ile yol tarifi al",
      icon: "🗺️",
      link: "https://maps.google.com/?q=AR+Sürücü+Kursu+Aksaray",
      color: "from-red-600 to-red-500"
    },
    {
      title: "Telefon Ara",
      desc: "Doğrudan arama yaparak bilgi al",
      icon: "📞",
      link: "tel:05326694468",
      color: "from-blue-600 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-driving-secondary">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-green-600/10" />
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
              <span className="text-gradient bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                İLETİŞİM
              </span>
            </h1>
            <div className="w-40 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 mx-auto rounded-full" />
            <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto">
              Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <motion.a
                key={index}
                href={action.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {action.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {action.title}
                </h3>
                <p className="text-gray-300 text-sm">{action.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              İletişim <span className="text-blue-500">Bilgilerimiz</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="glass-effect rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-300 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-green-900/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <div className="glass-effect rounded-3xl p-8 border border-white/10">
                <h3 className="text-3xl font-black text-white mb-8 text-center">
                  Bize <span className="text-blue-500">Ulaşın</span>
                </h3>

                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl">✓</span>
                    </div>
                    <h4 className="text-2xl font-bold text-green-400 mb-4">Mesajınız Gönderildi!</h4>
                    <p className="text-gray-300">En kısa sürede size dönüş yapacağız.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <input
                          {...register("name", { required: "Ad soyad gerekli" })}
                          placeholder="Ad Soyad"
                          className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <input
                          {...register("phone", { required: "Telefon numarası gerekli" })}
                          placeholder="Telefon"
                          className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <input
                        {...register("email", { 
                          required: "E-posta gerekli",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Geçersiz e-posta adresi"
                          }
                        })}
                        placeholder="E-posta"
                        className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <select
                        {...register("subject", { required: "Konu seçimi gerekli" })}
                        className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      >
                        <option value="" className="bg-gray-800">Konu Seçin</option>
                        <option value="B-sinifi" className="bg-gray-800">B Sınıfı Ehliyet</option>
                        <option value="A1-sinifi" className="bg-gray-800">A1 Sınıfı Motosiklet</option>
                        <option value="A2-sinifi" className="bg-gray-800">A2 Sınıfı Motosiklet</option>
                        <option value="A-sinifi" className="bg-gray-800">A Sınıfı Motosiklet</option>
                        <option value="fiyat-bilgisi" className="bg-gray-800">Fiyat Bilgisi</option>
                        <option value="diger" className="bg-gray-800">Diğer</option>
                      </select>
                      {errors.subject && (
                        <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <textarea
                        {...register("message", { required: "Mesaj gerekli" })}
                        placeholder="Mesajınız"
                        rows={5}
                        className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
                    >
                      Mesaj Gönder
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map & Office Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="glass-effect rounded-3xl overflow-hidden border border-white/10">
                <div className="h-80 bg-gradient-to-br from-blue-600/30 to-green-600/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h4 className="text-2xl font-bold mb-2">Google Maps</h4>
                    <p className="text-gray-300 mb-4">Konumumuzu görüntüleyin</p>
                    <a
                      href="https://maps.google.com/?q=AR+Sürücü+Kursu+Aksaray"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold transition-colors duration-300"
                    >
                      <span>📍</span>
                      <span>Haritada Göster</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Features */}
              <div className="glass-effect rounded-3xl p-8 border border-white/10">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">Ofis İmkanlarımız</h4>
                <div className="grid grid-cols-2 gap-4">
                  {officeFeatures.map((feature, index) => (
                    <div key={index} className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                      <div className="text-3xl mb-2">{feature.icon}</div>
                      <h5 className="text-white font-semibold text-sm mb-1">{feature.title}</h5>
                      <p className="text-gray-300 text-xs">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Contact */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Hala Sorularınız mı <span className="text-blue-500">Var?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Aklınızdaki tüm sorular için bizimle iletişime geçmekten çekinmeyin
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="https://wa.me/905414744468"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-6 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-2xl font-bold text-lg transition-colors duration-300 hover:scale-105"
                >
                  <span className="text-3xl">💬</span>
                  <div className="text-left">
                    <div>WhatsApp ile Sor</div>
                    <div className="text-sm opacity-90">Anında yanıt alın</div>
                  </div>
                </a>
                
                <a
                  href="tel:05326694468"
                  className="flex items-center justify-center space-x-3 p-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-colors duration-300 hover:scale-105"
                >
                  <span className="text-3xl">📞</span>
                  <div className="text-left">
                    <div>Telefon ile Ara</div>
                    <div className="text-sm opacity-90">Doğrudan konuşun</div>
                  </div>
                </a>
              </div>
            </motion.div>
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
