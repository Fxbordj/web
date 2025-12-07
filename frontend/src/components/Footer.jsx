import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Phone, Mail, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A1A2F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Droplet className="h-8 w-8 text-[#1FA2FF]" fill="#1FA2FF" />
              <span className="text-xl font-bold">SANIPRO</span>
            </div>
            <p className="text-gray-400 text-sm">
              La propreté, c'est notre priorité. Services de nettoyage professionnel à Montréal et environs.
            </p>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#1FA2FF] transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#1FA2FF] transition-colors text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#1FA2FF] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-400 hover:text-[#1FA2FF] transition-colors text-sm">
                  Soumission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#1FA2FF] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Nettoyage résidentiel</li>
              <li>Nettoyage commercial</li>
              <li>Deep cleaning</li>
              <li>Après construction</li>
              <li>Nettoyage Airbnb</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contactez-nous</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#1FA2FF] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Montréal et environs, QC</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#1FA2FF] flex-shrink-0" />
                <a href="tel:+15146547510" className="text-gray-400 hover:text-[#1FA2FF] transition-colors text-sm">
                  (514) 654-7510
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#1FA2FF] flex-shrink-0" />
                <a href="mailto:leservices.sanipro@gmail.com" className="text-gray-400 hover:text-[#1FA2FF] transition-colors text-sm">
                  leservices.sanipro@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-[#1FA2FF] flex-shrink-0" />
                <a
                  href="https://instagram.com/services.sanipro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1FA2FF] transition-colors text-sm"
                >
                  @services.sanipro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SANIPRO. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;