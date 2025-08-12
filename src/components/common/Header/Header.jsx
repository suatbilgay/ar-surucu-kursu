import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const menu = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Kurumsal', path: '/kurumsal' },
  { name: 'Araçlarımız', path: '/araclarimiz' },
  { name: 'Eğitmenlerimiz', path: '/egitmenlerimiz' },
  { name: 'Kurslar', path: '/kurslar' },
  { name: 'İletişim', path: '/iletisim' }
];

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="w-full border-b border-driving-secondary/20 bg-driving-text shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 h-16">
        {/* Sol: Logo ve menü */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-driving-text text-2xl font-bold mr-2" aria-label="AR Sürücü Kursu">
            <img src="/images/logo/ar-surucu-kursu.jpeg" alt="AR Sürücü Kursu Logo" className="h-10 w-auto inline-block align-middle rounded-lg" />
          </Link>
          <ul className="hidden md:flex gap-6 text-sm text-driving-secondary font-medium">
            {menu.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className={`hover:text-driving-primary transition-colors duration-300 relative group ${
                    location.pathname === item.path ? 'text-driving-primary' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-driving-primary transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-driving-secondary hover:text-driving-primary transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Sağ: İletişim butonları */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/905414744468"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            aria-label="WhatsApp ile iletişim"
          >
            <img src="/images/icons/social/whatsapp2.svg" alt="WhatsApp" className="w-5 h-5" />
            <span className="hidden sm:inline font-medium">WhatsApp</span>
          </a>
          <a
            href="https://maps.google.com/?q=AR+Sürücü+Kursu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-driving-primary hover:bg-red-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            aria-label="Konum"
          >
            <img src="/images/icons/social/location.svg" alt="Konum" className="w-5 h-5" />
            <span className="hidden sm:inline font-medium">Konum</span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-driving-text border-t border-driving-secondary/20">
          <div className="px-4 py-2 space-y-1">
            {menu.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-driving-primary bg-driving-secondary/10'
                    : 'text-driving-secondary hover:text-driving-primary hover:bg-driving-secondary/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Contact Buttons */}
            <div className="pt-3 mt-3 border-t border-driving-secondary/20 space-y-2">
              <a
                href="https://wa.me/905414744468"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-[#25D366] hover:bg-[#1ebe57] text-white transition-colors duration-300"
              >
                <img src="/images/icons/social/whatsapp2.svg" alt="WhatsApp" className="w-4 h-4" />
                <span className="font-medium">WhatsApp</span>
              </a>
              <a
                href="https://maps.google.com/?q=AR+Sürücü+Kursu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-driving-primary hover:bg-red-700 text-white transition-colors duration-300"
              >
                <img src="/images/icons/social/location.svg" alt="Konum" className="w-4 h-4" />
                <span className="font-medium">Konum</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
