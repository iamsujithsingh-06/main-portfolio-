import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { name: 'Home', targetId: 'home' },
  { name: 'About Me', targetId: 'about' },
  { name: 'Skills', targetId: 'skills' },
  { name: 'Projects', targetId: 'projects' },
  { name: 'Certifications', targetId: 'certifications' },
  { name: 'Contact', targetId: 'contact' },
];

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track active section for highlights
  const activeSection = useScrollSpy(
    navLinks.map((link) => link.targetId),
    { rootMargin: '-25% 0px -55% 0px' }
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 theme-transition-all ${
        scrolled
          ? isDark
            ? 'bg-bg-dark/80 backdrop-blur-md border-b border-border-custom shadow-lg'
            : 'bg-white/80 backdrop-blur-md border-b border-border-custom shadow-md'
          : isDark
            ? 'bg-transparent border-b border-transparent'
            : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="text-2xl font-bold tracking-tight text-text-primary flex items-center gap-2 group font-display"
        >
          <span className="text-primary group-hover:scale-110 transition-transform duration-300">{'<'}</span>
          <span>Sujith</span>
          <span className="text-primary group-hover:scale-110 transition-transform duration-300">{'/>'}</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.targetId;
              return (
                <li key={link.targetId} className="relative">
                  <a
                    href={`#${link.targetId}`}
                    onClick={(e) => handleLinkClick(e, link.targetId)}
                    className={`text-sm font-medium transition-colors duration-300 py-2 block ${
                      isActive ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.name}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Theme Switcher Toggle (Dark / Light) */}
          <button
            onClick={toggleTheme}
            id="theme-toggle"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="relative p-2.5 rounded-full border border-border-custom hover:border-border-custom-hover bg-bg-card text-text-primary hover:text-primary transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDark ? 'sun' : 'moon'}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="flex items-center justify-center"
              >
                {isDark ? (
                  <FiSun className="w-5 h-5 text-primary" />
                ) : (
                  <FiMoon className="w-5 h-5 text-primary" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile Navbar Controllers */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Theme Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            id="theme-toggle-mobile"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="p-2 rounded-full border border-border-custom bg-bg-card text-text-primary hover:text-primary transition-all duration-300"
          >
            {isDark ? (
              <FiSun className="w-5 h-5 text-primary" />
            ) : (
              <FiMoon className="w-5 h-5 text-primary" />
            )}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-full border border-border-custom bg-bg-card text-text-primary hover:text-primary transition-all duration-300"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`md:hidden border-b border-border-custom backdrop-blur-lg overflow-hidden absolute w-full top-20 left-0 theme-transition-all ${
              isDark ? 'bg-bg-dark/95' : 'bg-white/95 shadow-xl'
            }`}
          >
            <ul className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.targetId;
                return (
                  <li key={link.targetId}>
                    <a
                      href={`#${link.targetId}`}
                      onClick={(e) => handleLinkClick(e, link.targetId)}
                      className={`text-base font-semibold py-2.5 px-4 rounded-lg block transition-colors duration-300 ${
                        isActive
                          ? 'bg-primary-glow text-primary border-l-4 border-primary'
                          : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
