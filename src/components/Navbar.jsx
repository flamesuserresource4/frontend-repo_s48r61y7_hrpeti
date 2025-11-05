import { Rocket, Phone, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-white shadow-md">
              <Rocket size={18} />
            </div>
            <span className="text-xl font-semibold tracking-tight">Zelphic</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#services" className="hover:text-gray-900 transition">Services</a>
            <a href="#process" className="hover:text-gray-900 transition">Process</a>
            <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+10000000000"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <Phone size={16} /> Call us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-black/90 transition"
            >
              <Mail size={16} /> Get leads
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
