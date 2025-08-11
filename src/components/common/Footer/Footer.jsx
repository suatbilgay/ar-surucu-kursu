export default function Footer() {
  return (
    <footer className="bg-driving-accent text-driving-text">
      <div className="container mx-auto px-4 py-16">
        {/* Ana footer içeriği */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Sol - Logo ve açıklama */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/logo/ar-surucu-kursu.jpeg" 
                alt="AR Sürücü Kursu Logo" 
                className="h-12 w-auto rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-driving-text">AR SÜRÜCÜ KURSU</h3>
                <p className="text-driving-text/70 text-sm">1987'den bu güne</p>
              </div>
            </div>
            <p className="text-driving-text/80 leading-relaxed">
              Aksaray'da ilk açılan ve çizgisini değiştirmeden 38 yıldır yoluna devam eden 
              tek kurum. Sürüşte güven, eğitimde kalite!
            </p>
          </div>

          {/* Orta - Gerekli evraklar */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-driving-primary">
              SÜRÜCÜ BELGESİ İÇİN GEREKLİ EVRAKLAR
            </h4>
            <div className="space-y-3">
              {[
                "2 Adet Biyometrik Foto",
                "Diploma",
                "Savcılık Belgesi (Sabıka Kaydı)",
                "Sağlık Raporu",
                "Kimlik Fotokopisi",
                "e-devlet şifresi"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-driving-primary rounded-full"></span>
                  <span className="text-driving-text/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ - İletişim bilgileri */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-driving-primary">İLETİŞİM BİLGİLERİ</h4>
            
            {/* Adres */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-driving-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-driving-text" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-driving-text/80 text-sm">
                  <p className="font-medium">Hamidiye Mah. Kalealtı Cad.</p>
                  <p>Ar İş Merkezi Kat: 2</p>
                  <p>AKSARAY</p>
                </div>
              </div>

              {/* Telefon numaraları */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-driving-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-driving-text" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="text-driving-text/80 text-sm">
                    <p>0532 669 44 68</p>
                    <p>0382 212 27 47</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-driving-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-driving-text" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="text-driving-text/80 text-sm">
                    <p className="font-medium">Suat BİLGAY</p>
                    <p>0541 474 44 68</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt çizgi */}
        <div className="border-t border-driving-secondary/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-driving-text/60 text-sm">
              &copy; 2024 AR Sürücü Kursu. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://wa.me/905414744468" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-driving-text/60 hover:text-driving-primary transition-colors duration-300"
              >
                WhatsApp
              </a>
              <a 
                href="https://maps.google.com/?q=AR+Sürücü+Kursu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-driving-text/60 hover:text-driving-primary transition-colors duration-300"
              >
                Konum
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
