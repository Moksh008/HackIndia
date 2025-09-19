import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo image */}
        <img src="/logo1.png" alt="Logo" className="w-10 h-10 object-contain" />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-indigo-600">
            Home
          </a>
          <a href="/marketplace" className="hover:text-indigo-600">
            MarketPlace
          </a>
          <a href="/mint" className="hover:text-indigo-600">
            Mint
          </a>
          <a href="/analyze" className="hover:text-indigo-600">
            Analyze
          </a>
          <a href="/dashboard" className="hover:text-indigo-600">
            Dashboard
          </a>
        </div>

        {/* Login Button (always visible) */}
        <button className="hidden md:block ml-6 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Login
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-700 font-medium">
          <a href="/" className="block hover:text-indigo-600">
            Home
          </a>
          <a href="/marketplace" className="block hover:text-indigo-600">
            Marketplace
          </a>
          <a href="/mint" className="block hover:text-indigo-600">
            Mint
          </a>
          <a href="/analyze" className="block hover:text-indigo-600">
            Analyze
          </a>

          <a href="/dashboard" className="block hover:text-indigo-600">
            Dashboard
          </a>
          <button className="w-full px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
