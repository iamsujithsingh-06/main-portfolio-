import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaCertificate, FaClock } from 'react-icons/fa';
import { certificationsData } from '../data/portfolioData';

// Helper: Determine if a string is a real, reachable URL (not a placeholder)
const isRealUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (trimmed === '' || trimmed === '#') return false;
  if (/example\.com|placeholder|certificate\.example/i.test(trimmed)) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

// Subtle color tint per certificate for the gradient overlay
const certAccentMap = {
  1: 'from-blue-600/20 via-cyan-600/10 to-transparent',
  2: 'from-orange-600/20 via-amber-600/10 to-transparent',
  3: 'from-emerald-600/20 via-green-600/10 to-transparent',
  4: 'from-violet-600/20 via-purple-600/10 to-transparent',
};

const CertificationCard = ({ cert, index }) => {
  const [imgError, setImgError] = React.useState(false);
  const accent = certAccentMap[cert.id] || 'from-primary/15 via-primary/5 to-transparent';
  const hasLink = isRealUrl(cert.link);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-border-custom bg-bg-card flex flex-col justify-between hover:border-border-custom-hover transition-all duration-300 relative overflow-hidden"
    >
      {/* Visual Header Image Container (Zoom on Hover) */}
      <div className="relative h-44 border-b border-border-custom/50 bg-bg-card flex items-center justify-center overflow-hidden">
        {/* Grid Lines Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0b1329_1px,transparent_1px),linear-gradient(to_bottom,#0b1329_1px,transparent_1px)] bg-[size:16px_16px] opacity-30" />

        {/* Certification specific gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${accent} opacity-90`} />

        {!imgError ? (
          <img
            src={`/certificates/${cert.id}.jpg`}
            onError={() => setImgError(true)}
            alt={cert.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Professional "Certificate Coming Soon" Card */
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-bg-dark/30 via-transparent to-bg-dark/50 pointer-events-none" />
            <div className="relative flex flex-col items-center gap-3 transform group-hover:scale-105 transition-transform duration-500 ease-out">
              <div className="relative p-4 rounded-2xl bg-bg-card/70 border border-border-custom backdrop-blur-sm shadow-inner">
                <FaCertificate className="w-10 h-10 text-primary opacity-80" />
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-pulse" />
              </div>
              <span className="text-[10px] tracking-widest font-semibold uppercase text-text-secondary/50 font-mono">
                {cert.organization}
              </span>
              <div className="flex items-center gap-1.5 text-[10px] tracking-wider font-semibold uppercase text-primary bg-primary-glow border border-primary/20 px-2.5 py-1 rounded-full">
                <FaClock className="text-[9px]" />
                Certificate Coming Soon
              </div>
            </div>
          </div>
        )}

        {/* Hover visual shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col justify-between flex-grow text-left">
        <div>
          <div className="flex items-start gap-2 mb-1">
            <FaAward className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
            <h3 className="text-base font-bold font-display text-text-primary line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {cert.name}
            </h3>
          </div>

          <p className="text-xs text-text-secondary font-medium mb-0.5 pl-6">
            {cert.organization}
          </p>

          <p className="text-[10px] text-text-secondary/50 font-semibold mb-4 pl-6">
            Issued: {cert.date}
          </p>
        </div>

        {/* View Link Button */}
        {hasLink ? (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-border-custom bg-bg-card-hover hover:bg-primary text-xs font-semibold text-text-primary hover:text-text-primary group-hover:border-primary-hover hover:border-primary transition-all duration-300 cursor-pointer mt-auto"
          >
            <span>View Certificate</span>
            <FaExternalLinkAlt className="text-[9px]" />
          </a>
        ) : (
          <span
            aria-disabled="true"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-border-custom/50 bg-bg-card-hover/50 text-xs font-semibold text-text-secondary/60 cursor-not-allowed select-none mt-auto"
          >
            <FaClock className="text-[9px]" />
            <span>Certificate Coming Soon</span>
          </span>
        )}
      </div>
    </motion.div>
  );
};

export const Certifications = () => {
  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden theme-transition-all">
      {/* Background Soft Glow */}
      <div className="absolute top-[40%] left-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16">
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
            CERTIFICATIONS
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
