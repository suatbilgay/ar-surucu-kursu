import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Courses() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('B');
  const [showPaymentPlan, setShowPaymentPlan] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const courses = {
    'B': {
      title: 'B Sınıfı Ehliyet',
      icon: '🚗',
      description: 'Otomobil sürücü belgesi eğitimi',
      duration: '4-6 hafta',
      price: 4500,
      installments: 3,
      features: [
        '40 Saat Teorik Eğitim',
        '12 Saat Pratik Sürüş',
        'Manuel ve Otomatik Seçenekleri',
        'Trafik Kuralları Eğitimi',
        'İlk Yardım Dersleri',
        'Motor Bilgisi',
        'Sınav Hazırlık'
      ],
      includes: [
        'Eğitim Materyalleri',
        'Sınav Ücreti Dahil',
        'Sertifika',
        'Ücretsiz Kurs Tekrarı (Başarısızlık Durumunda)',
        'WhatsApp Destek Grubu'
      ],
      gradient: 'from-red-600 to-red-500'
    },
    'A1': {
      title: 'A1 Sınıfı Motosiklet',
      icon: '🏍️',
      description: '125cc motor eğitimi (16+ yaş)',
      duration: '3-4 hafta',
      price: 3200,
      installments: 2,
      features: [
        '20 Saat Teorik Eğitim',
        '8 Saat Pratik Sürüş',
        '125cc Motosiklet Eğitimi',
        'Güvenlik Eğitimi',
        'Koruyucu Ekipman Kullanımı',
        'Denge ve Kontrol',
        'Trafik Kuralları (Motor)'
      ],
      includes: [
        'Kask ve Koruyucu Ekipmanlar',
        'Eğitim Materyalleri',
        'Sınav Ücreti',
        'Güvenlik Sertifikası',
        'Temel Bakım Eğitimi'
      ],
      gradient: 'from-blue-600 to-blue-500'
    },
    'A2': {
      title: 'A2 Sınıfı Motosiklet',
      icon: '🏍️',
      description: '400cc motor eğitimi (18+ yaş)',
      duration: '4-5 hafta',
      price: 3800,
      installments: 3,
      features: [
        '24 Saat Teorik Eğitim',
        '10 Saat Pratik Sürüş',
        '400cc Motosiklet Eğitimi',
        'İleri Güvenlik Teknikleri',
        'Yol Durumu Değerlendirme',
        'Acil Fren Teknikleri',
        'Grup Sürüşü Kuralları'
      ],
      includes: [
        'Profesyonel Ekipmanlar',
        'Eğitim Materyalleri',
        'Sınav Ücreti',
        'İleri Sürüş Sertifikası',
        'Acil Durum Eğitimi'
      ],
      gradient: 'from-purple-600 to-purple-500'
    },
    'A': {
      title: 'A Sınıfı Motosiklet',
      icon: '🏍️',
      description: 'Sınırsız motor eğitimi (24+ yaş)',
      duration: '5-6 hafta',
      price: 4200,
      installments: 3,
      features: [
        '30 Saat Teorik Eğitim',
        '12 Saat Pratik Sürüş',
        'Büyük Hacimli Motosiklet',
        'Uzun Yol Sürüşü',
        'Hız ve Güvenlik Dengesi',
        'Teknik Bilgiler',
        'Profesyonel Sürücülük'
      ],
      includes: [
        'Tam Donanım Ekipmanlar',
        'Kapsamlı Eğitim Materyali',
        'Sınav Ücretleri',
        'Profesyonel Sürücü Sertifikası',
        'Yaşam Boyu Danışmanlık'
      ],
      gradient: 'from-green-600 to-green-500'
    }
  };

  const campaigns = [
    {
      title: 'Erken Kayıt Kampanyası',
      discount: 15,
      description: 'Ay başında kayıt olun %15 indirim kazanın',
      endDate: '2024-12-31',
      color: 'from-yellow-600 to-yellow-500'
    },
    {
      title: 'Öğrenci İndirimi',
      discount: 20,
      description: 'Öğrenci belgesi ile %20 indirim fırsatı',
      endDate: '2024-12-31',
      color: 'from-green-600 to-green-500'
    },
    {
      title: 'Arkadaş Getir Kampanyası',
      discount: 10,
      description: 'Arkadaşınızla beraber kayıt olun, ikisi de %10 indirim',
      endDate: '2024-12-31',
      color: 'from-purple-600 to-purple-500'
    }
  ];

  const paymentOptions = [
    {
      type: 'Peşin Ödeme',
      discount: 5,
      description: '%5 peşin ödeme indirimi',
      icon: '💰'
    },
    {
      type: 'Taksitli Ödeme',
      discount: 0,
      description: '3 aya kadar vade imkanı',
      icon: '📅'
    },
    {
      type: 'Kredi Kartı',
      discount: 0,
      description: 'Tüm kredi kartları kabul edilir',
      icon: '💳'
    }
  ];

  const currentCourse = courses[selectedCourse];
  const discountedPrice = currentCourse.price * 0.95; // %5 peşin indirimi

  return (
    <div className="min-h-screen bg-driving-secondary">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-transparent to-yellow-600/10" />
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
              <span className="text-gradient bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
                KURSLAR
              </span>
              <span className="ml-4 text-white">&</span>
              <span className="ml-4 text-gradient bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                FİYATLAR
              </span>
            </h1>
            <div className="w-40 h-1.5 bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 mx-auto rounded-full" />
            <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto">
              İhtiyacınıza uygun kurs seçeneğini keşfedin ve hayalinizdeki ehliyete sahip olun
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Selection */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-16">
            <div className="glass-effect rounded-2xl p-2 border border-white/10 flex flex-wrap gap-2">
              {Object.entries(courses).map(([key, course]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCourse(key)}
                  className={`px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-2 ${
                    selectedCourse === key
                      ? `bg-gradient-to-r ${course.gradient} text-white shadow-2xl scale-105`
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-2xl">{course.icon}</span>
                  <span>{key} Sınıfı</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Course Details */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            key={selectedCourse}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="glass-effect rounded-3xl p-8 lg:p-12 border border-white/10">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Course Info */}
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${currentCourse.gradient} rounded-2xl flex items-center justify-center text-3xl`}>
                      {currentCourse.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-white">{currentCourse.title}</h2>
                      <p className="text-gray-300">{currentCourse.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-xl text-center">
                      <div className="text-2xl font-black text-white">{currentCourse.duration}</div>
                      <div className="text-gray-300 text-sm">Eğitim Süresi</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl text-center">
                      <div className="text-2xl font-black text-green-400">₺{currentCourse.price}</div>
                      <div className="text-gray-300 text-sm">Kurs Ücreti</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Eğitim İçeriği</h3>
                  <div className="space-y-3 mb-8">
                    {currentCourse.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${currentCourse.gradient} rounded-full`} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Kurs Kapsamında</h3>
                  <div className="space-y-3">
                    {currentCourse.includes.map((item, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="text-green-400">✓</div>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Payment */}
                <div className="space-y-6">
                  <div className={`bg-gradient-to-r ${currentCourse.gradient} p-1 rounded-3xl`}>
                    <div className="bg-gray-900 p-8 rounded-3xl">
                      <h3 className="text-2xl font-black text-white mb-6 text-center">Fiyat Detayları</h3>
                      
                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                          <span className="text-gray-300">Kurs Ücreti</span>
                          <span className="text-white font-bold">₺{currentCourse.price}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                          <span className="text-green-400">Peşin İndirimi (%5)</span>
                          <span className="text-green-400 font-bold">-₺{currentCourse.price - discountedPrice}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 text-xl font-black">
                          <span className="text-white">Peşin Ödeme</span>
                          <span className="text-green-400">₺{discountedPrice}</span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-8">
                        <h4 className="text-lg font-bold text-white">Taksit Seçenekleri</h4>
                        <div className="bg-white/5 p-4 rounded-xl">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">{currentCourse.installments} Taksit</span>
                            <span className="text-white font-bold">₺{Math.ceil(currentCourse.price / currentCourse.installments)} x {currentCourse.installments}</span>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={() => setShowPaymentPlan(currentCourse)}
                        className={`w-full py-4 bg-gradient-to-r ${currentCourse.gradient} text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl`}
                      >
                        Hemen Başvur
                      </button>
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="glass-effect p-6 rounded-2xl border border-white/10">
                    <h4 className="text-lg font-bold text-white mb-4">Ödeme Seçenekleri</h4>
                    <div className="space-y-3">
                      {paymentOptions.map((option, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{option.icon}</span>
                            <div>
                              <div className="text-white font-semibold">{option.type}</div>
                              <div className="text-gray-400 text-sm">{option.description}</div>
                            </div>
                          </div>
                          {option.discount > 0 && (
                            <span className="px-2 py-1 bg-green-600 text-white text-sm rounded-full">
                              %{option.discount} İndirim
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-900/20 to-green-900/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Aktif <span className="text-yellow-500">Kampanyalarımız</span>
            </h2>
            <p className="text-xl text-gray-300">Fırsatları kaçırmayın, hemen başvurun!</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="glass-effect rounded-3xl p-8 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${campaign.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  🎉
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {campaign.title}
                </h3>
                <div className="text-4xl font-black text-yellow-400 mb-4">
                  %{campaign.discount} İNDİRİM
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {campaign.description}
                </p>
                <div className="text-sm text-gray-400">
                  Son tarih: {new Date(campaign.endDate).toLocaleDateString('tr-TR')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Sık Sorulan <span className="text-red-500">Sorular</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "Kurs süresi ne kadar?",
                a: "B sınıfı ehliyet kursu ortalama 4-6 hafta, motosiklet kursları 3-6 hafta arasında değişmektedir."
              },
              {
                q: "Yaş sınırı var mı?",
                a: "B sınıfı için 18, A1 için 16, A2 için 18, A sınıfı için 24 yaş alt sınırı vardır."
              },
              {
                q: "Başarısız olursam ne olur?",
                a: "Başarısız olmanız durumunda ücretsiz olarak kursu tekrar edebilirsiniz."
              },
              {
                q: "Ödeme seçenekleri neler?",
                a: "Peşin ödeme, 3 taksit, kredi kartı ve kapıda ödeme seçenekleri mevcuttur."
              },
              {
                q: "Eğitim araçları nasıl?",
                a: "Son model, güvenli ve teknolojik araçlarımızla eğitim verilmektedir."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                className="glass-effect rounded-2xl border border-white/10 overflow-hidden"
              >
                <details className="group">
                  <summary className="p-6 cursor-pointer hover:bg-white/5 transition-colors duration-300">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                        {faq.q}
                      </h3>
                      <div className="text-red-400 group-open:rotate-180 transition-transform duration-300">
                        ▼
                      </div>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Plan Modal */}
      {showPaymentPlan && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowPaymentPlan(null)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="glass-effect rounded-3xl max-w-2xl w-full border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Başvuru Formu</h3>
                  <p className="text-gray-400">{showPaymentPlan.title}</p>
                </div>
                <button 
                  onClick={() => setShowPaymentPlan(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="text-center py-8">
                <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">📞</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Başvuru İçin İletişime Geçin</h4>
                <p className="text-gray-300 mb-8">
                  Kurs kaydınız için aşağıdaki iletişim bilgilerini kullanarak bizimle iletişime geçebilirsiniz.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <a 
                    href="https://wa.me/905414744468"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 p-4 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-xl font-bold transition-colors duration-300"
                  >
                    <span>📱</span>
                    <span>WhatsApp</span>
                  </a>
                  <a 
                    href="tel:05414744468"
                    className="flex items-center justify-center space-x-3 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors duration-300"
                  >
                    <span>📞</span>
                    <span>Telefon</span>
                  </a>
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
