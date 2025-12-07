import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Droplet, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Droplet className="h-10 w-10 text-[#1FA2FF] group-hover:scale-110 transition-transform duration-300" fill="#1FA2FF" />
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="absolute top-3 right-2 w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#0A1A2F] tracking-tight">SANIPRO</span>
              <p className="text-xs text-gray-500 -mt-1">La propreté, c'est notre priorité</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-[#1FA2FF] bg-blue-50'
                    : 'text-gray-600 hover:text-[#0A1A2F] hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/quote">
              <Button className="bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE] hover:from-[#1890E6] hover:to-[#45A0EB] text-white shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 font-semibold">
                Soumission gratuite
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-[#1FA2FF] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-[#1FA2FF] bg-blue-50'
                      : 'text-gray-600 hover:text-[#0A1A2F] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/quote" onClick={() => setMobileMenuOpen(false)} className="pt-2">
                <Button className="w-full bg-gradient-to-r from-[#1FA2FF] to-[#4FACFE] hover:from-[#1890E6] hover:to-[#45A0EB] text-white">
                  Soumission gratuite
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;