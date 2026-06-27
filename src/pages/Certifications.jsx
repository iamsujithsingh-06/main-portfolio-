import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaTimes, FaEye } from 'react-icons/fa';
import { certificationsData } from '../data/portfolioData';

const categoryAccentMap = {
  Programming: 'from-blue-600/20 via-cyan-600/10 to-transparent',
  Hackathon: 'from-violet-600/20 via-purple-600/10 to-transparent',
};

const categoryBadgeMap = {
  Programming: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Hackathon: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
};

const CertModal = ({ image, title, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-bg-card border border-border-custom flex items-center justify-center text-text-primary hover:text-primary hover:border-border-custom-hover transition-all duration-300 cursor-pointer"
        >
          <FaTimes className="w-4 h-4" />
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

const CertificationCard = ({ cert, index, onView }) => {
  const [imgError, setImgError] = useState(false);
  const accent = categoryAccentMap[cert.category] || 'from-primary/15 via-primary/5 to-transparent';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-border-custom bg-bg-card flex flex-col hover:border-border-custom-hover transition-all duration-300 relative overflow-hidden shadow-lg"
    >
      {/* Certificate Preview Image */}
      <div className="relative h-48 border-b border-border-custom/50 bg-bg-card flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0b1329_1px,transparent_1px),linear-gradient(to_bottom,#0b1329_1px,transparent_1px)] bg-[size:16px_16px] opacity-30" />
        <div className={`absolute inset-0 bg-gradient-to-t ${accent} opacity-90`} />

        {!imgError ? (
          <img
            src={cert.image}
            alt={cert.title}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center gap-2">
            <FaAward className="w-12 h-12 text-primary/60" />
            <span className="text-xs text-text-secondary/50 font-semibold">Preview Unavailable</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
      </div>

      {/* Card Details */}
      <div className="p-5 flex flex-col flex-grow text-left">
        <div className="flex items-start gap-2 mb-1">
          <FaAward className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
          <h3 className="text-base font-bold font-display text-text-primary line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {cert.title}
          </h3>
        </div>

        <p className="text-xs text-text-secondary font-medium mb-2 pl-6">
          {cert.issuer}
        </p>

        <div className="flex items-center gap-3 pl-6 mb-4">
          <span className="text-[10px] text-text-secondary/50 font-semibold">
            {cert.year}
          </span>
        </div>

        {/* Category Badge */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border ${categoryBadgeMap[cert.category] || 'bg-primary/10 text-primary border-primary/20'}`}
          >
            {cert.category}
          </span>
        </div>

        {/* View Certificate Button */}
        <button
          onClick={() => onView(cert)}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-border-custom bg-bg-card-hover hover:bg-primary hover:border-primary text-xs font-semibold text-text-primary hover:text-white transition-all duration-300 cursor-pointer mt-auto"
        >
          <FaEye className="text-xs" />
          View Certificate
        </button>
      </div>
    </motion.div>
  );
};

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleView = useCallback((cert) => setSelectedCert(cert), []);
  const handleClose = useCallback(() => setSelectedCert(null), []);

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden theme-transition-all">
      <div className="absolute top-[40%] left-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[250px] h-[250px] bg-accent/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-primary-glow px-3 py-1 rounded-full border border-primary/20 mb-3 inline-block">
            Achievements
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display mb-3 uppercase"
          >
            Certifications & Achievements
          </motion.h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-2xl mx-auto mb-4">
            A collection of certifications and hackathon achievements that showcase my programming knowledge, continuous learning journey, and passion for innovation.
          </p>
          <span className="text-xs font-semibold text-primary bg-primary-glow px-3 py-1 rounded-full border border-primary/20 inline-block mb-4">
            {certificationsData.length} Certifications & Achievements
          </span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {certificationsData.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} onView={handleView} />
          ))}
        </div>
      </div>

      {/* Certificate Modal Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <CertModal
            image={selectedCert.image}
            title={selectedCert.title}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
