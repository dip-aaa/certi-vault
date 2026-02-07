'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  onUploadClick: () => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'vault', label: 'Vault' },
  { id: 'portfolio', label: 'Portfolio' },
];

export default function Navbar({ onUploadClick }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true');
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const dashboard = document.getElementById('dashboard');
      const vault = document.getElementById('vault');
      const portfolio = document.getElementById('portfolio');
      if (portfolio && scrollY + 100 >= portfolio.offsetTop) {
        setActiveSection('portfolio');
      } else if (vault && scrollY + 100 >= vault.offsetTop) {
        setActiveSection('vault');
      } else {
        setActiveSection('dashboard');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('profile');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => onNavigate('dashboard')}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary-400 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5.5C3 4.67157 3.67157 4 4.5 4H13.5C14.3284 4 15 4.67157 15 5.5V6.5C15 6.77614 14.7761 7 14.5 7H3.5C3.22386 7 3 6.77614 3 6.5V5.5Z" fill="white"/>
                  <path d="M3 9.5C3 9.22386 3.22386 9 3.5 9H14.5C14.7761 9 15 9.22386 15 9.5V12.5C15 13.3284 14.3284 14 13.5 14H4.5C3.67157 14 3 13.3284 3 12.5V9.5Z" fill="white"/>
                </svg>
              </div>
              <span className="font-serif text-xl text-slate-900">CertiVault</span>
            </button>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-sm font-semibold transition-colors"
                >
                  <span className={activeSection === item.id ? 'text-primary-600 font-semibold' : 'text-slate-600 hover:text-slate-900 font-semibold'}>
                    {item.label}
                  </span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onUploadClick}
              className="px-5 py-2 bg-primary-400 text-white text-sm font-semibold rounded-xl hover:bg-primary-500 transition-colors"
            >
              Upload
            </motion.button>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-primary-600 font-semibold rounded-xl bg-transparent hover:text-primary-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-slate-200">
        <div className="flex gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex-1 relative px-4 py-3 text-xs font-semibold transition-colors"
            >
              <span className={activeSection === item.id ? 'text-primary-600 font-semibold' : 'text-slate-600 font-semibold'}>
                {item.label}
              </span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="mobile-navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
