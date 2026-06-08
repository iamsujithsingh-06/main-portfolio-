import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-bg-dark border-t border-border-custom py-8 sm:py-10 lg:py-12 theme-transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center text-center md:text-left">
        
        {/* Info Column */}
        <div>
          <h3 className="text-xl font-bold font-display text-text-primary mb-2">Sujith</h3>
          <p className="text-sm text-text-secondary">{personalInfo.title}</p>
          <p className="text-xs text-text-secondary/60 mt-1">Building intelligent applications and modern web experiences.</p>
        </div>

        {/* Navigation Column */}
        <div className="flex flex-col items-center justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            <li>
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, 'home')}
                className="text-sm text-text-secondary hover:text-primary transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, 'about')}
                className="text-sm text-text-secondary hover:text-primary transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleLinkClick(e, 'skills')}
                className="text-sm text-text-secondary hover:text-primary transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleLinkClick(e, 'projects')}
                className="text-sm text-text-secondary hover:text-primary transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                onClick={(e) => handleLinkClick(e, 'certifications')}
                className="text-sm text-text-secondary hover:text-primary transition-colors duration-300"
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="text-sm text-text-secondary hover:text-primary transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Link Icons */}
        <div className="flex flex-col items-center md:items-end justify-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-full border border-border-custom bg-bg-card hover:bg-primary-glow text-text-secondary hover:text-primary transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-full border border-border-custom bg-bg-card hover:bg-primary-glow text-text-secondary hover:text-primary transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2 rounded-full border border-border-custom bg-bg-card hover:bg-primary-glow text-text-secondary hover:text-primary transition-all duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              aria-label="Email Sujith"
              className="p-2 rounded-full border border-border-custom bg-bg-card hover:bg-primary-glow text-text-secondary hover:text-primary transition-all duration-300"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-text-secondary/50">
            &copy; {new Date().getFullYear()} Sujith. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
