import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const menu = [
  'Ana Sayfa', 'Kurumsal', 'Destek', 'İletişim', 'Hakkımızda','Araçlarımız', 'Sürücülerimiz'
];

export default function Header() {
  return (
    <header className="w-full border-b border-driving-secondary/20 bg-driving-text shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 h-16">
        {/* Sol: Logo ve menü */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-driving-text text-2xl font-bold mr-2" aria-label="AR Sürücü Kursu">
            <img src="/images/logo/ar-surucu-kursu.jpeg" alt="AR Sürücü Kursu Logo" className="h-10 w-auto inline-block align-middle rounded-lg" />
          </a>
          <ul className="hidden md:flex gap-6 text-sm text-driving-secondary font-medium">
            {menu.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-driving-primary transition-colors duration-300 relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-driving-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Sağ: İletişim butonları */}
        <div className="flex items-center gap-4">
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
    </header>
  );
}
