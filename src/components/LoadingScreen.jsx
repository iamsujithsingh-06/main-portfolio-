import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 1.8 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 bg-bg-dark z-[9999] flex flex-col items-center justify-center theme-transition-all"
        >
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary-glow)_0%,transparent_60%)] pointer-events-none"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4 relative z-10"
          >
            {/* Logo */}
            <div className="text-4xl font-bold font-display tracking-wider text-text-primary flex items-center gap-2">
              <span className="text-primary font-bold">{'<'}</span>
              <span>Sujith</span>
              <span className="text-primary font-bold">{'/>'}</span>
            </div>

            {/* Subtext */}
            <span className="text-xs tracking-[0.2em] text-text-secondary uppercase mt-1">
              AI & Data Science Student
            </span>

            {/* Custom loader bar */}
            <div className="w-48 h-[2px] bg-border-custom rounded-full overflow-hidden relative mt-4">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                className="absolute inset-0 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
