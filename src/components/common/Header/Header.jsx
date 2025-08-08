import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const menu = [
  'Ana Sayfa', 'Kurumsal', 'Destek', 'İletişim', 'Hakkımızda','Araçlarımız', 'Sürücülerimiz'
];

export default function Header() {
  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 h-14">
        {/* Sol: Apple logosu */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-black text-2xl font-bold mr-2" aria-label="AR Sürücü Kursu">
            <img src="/images/logo/ar-surucu-kursu.jpeg" alt="AR Sürücü Kursu Logo" className="h-8 w-auto inline-block align-middle" />
          </a>
          <ul className="hidden md:flex gap-5 text-sm text-gray-700 font-normal">
            {menu.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-black transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Sağ: Wp sohbet ve Konum */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/905414744468"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white transition-colors"
            aria-label="WhatsApp ile iletişim"
          >
            <img src="/images/icons/social/whatsapp2.svg" alt="WhatsApp" className="w-5 h-5" />
            <span className="hidden sm:inline font-medium">WhatsApp</span>
          </a>
          <a
            href="https://maps.google.com/?q=AR+Sürücü+Kursu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 rounded-full bg-[#F87171] hover:bg-[#ef4444] text-white transition-colors"
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
