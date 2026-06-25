import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { useTypewriter } from '../hooks/useTypewriter';

export const Home = () => {
  const typedText = useTypewriter(personalInfo.roles, 75, 45, 1800);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 relative overflow-hidden"
    >
      {/* Background Glows & Particles (Purely automated, no mouse dependencies) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-primary/15 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-accent/10 rounded-full filter blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />

        {/* Soft slow drifting stars/particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary rounded-full"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 5 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center relative z-10">

        {/* Left Side Hero Details */}
        <div className="w-full flex flex-col justify-center text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-primary bg-primary-glow px-3 py-1.5 rounded-full border border-primary/20 inline-block mb-4">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-text-primary tracking-tight font-display mb-3 leading-tight"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sujith</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-text-secondary mb-5"
          >
            AI & Data Science Student
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex w-max max-w-full items-center rounded-full bg-primary/10 border border-primary/20 px-2.5 py-1.5 mb-6 shadow-sm shadow-primary/10"
          >
            <span className="whitespace-nowrap text-[0.68rem] sm:text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-primary text-center">
              STUDENT • DEVELOPER • INNOVATOR
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed max-w-xl mb-6 sm:mb-8 lg:mb-10"
          >
            Transforming ideas into real-world solutions through AI, software development, and continuous learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-row flex-wrap gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-primary text-text-primary font-semibold hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center sm:justify-start gap-2 group cursor-pointer text-sm sm:text-base whitespace-nowrap"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-xs sm:text-sm" />
            </a>

            <a
              href={personalInfo.resumePdf}
              download="Sujith_Singh_SM_Resume.pdf"
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border-custom bg-bg-card hover:bg-primary-glow text-text-primary hover:text-primary font-semibold hover:border-border-custom-hover hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base whitespace-nowrap"
            >
              <FaDownload className="text-sm" />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="w-full flex justify-center md:justify-end order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[480px] relative z-10 flex items-center justify-center"
          >
            {/* Soft glow layers behind the image */}
            <div className="absolute -inset-6 rounded-[3rem] bg-primary/10 blur-2xl opacity-70 pointer-events-none" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 blur-xl pointer-events-none" />

            <img
              src={personalInfo.profileImage}
              alt="Sujith"
              loading="eager"
              className="w-full h-auto max-h-[750px] object-contain relative z-10 animate-float"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Home;
