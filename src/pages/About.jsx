import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaMapMarkerAlt, FaCalendarCheck, FaBriefcase, FaFileDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  const infoItems = [
    { label: 'Name', value: personalInfo.details.name, icon: <FaUser className="text-primary w-5 h-5" /> },
    { label: 'Degree', value: personalInfo.details.degree, icon: <FaGraduationCap className="text-primary w-5 h-5" /> },
    { label: 'Location', value: personalInfo.details.location, icon: <FaMapMarkerAlt className="text-primary w-5 h-5" /> },
    { label: 'Availability', value: personalInfo.details.availability, icon: <FaCalendarCheck className="text-primary w-5 h-5" /> },
    { label: 'Role', value: personalInfo.details.role, icon: <FaBriefcase className="text-primary w-5 h-5" /> },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Background glow overlay */}
      <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] bg-primary/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display mb-4 uppercase"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        {/* Section Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

          {/* Left Column Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 flex flex-col justify-center space-y-6"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-2">
              <div className="w-24 h-24 rounded-2xl border border-border-custom bg-bg-card p-1 shadow-md overflow-hidden flex-shrink-0 group hover:border-border-custom-hover transition-colors duration-300">
                <img
                  src={personalInfo.profileImage}
                  alt="Sujith"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-text-primary font-display text-left">
                A passionate developer exploring the frontiers of AI
              </h3>
            </div>

            <p className="text-text-secondary text-left leading-relaxed text-base sm:text-lg">
              As an AI & Data Science student, I am passionate about Full Stack Development, Artificial Intelligence, and Game Development. I enjoy building scalable web applications, exploring intelligent systems, and designing engaging digital experiences. With a mindset focused on continuous learning and innovation, I strive to create technology that is both useful and impactful while growing into a skilled software engineer.
            </p>

            <div className="pt-2 text-left">
              <a
                href={personalInfo.resumePdf}
                download="Sujith_Singh_SM_Resume.pdf"
                className="px-6 py-3.5 rounded-xl bg-primary text-text-primary font-semibold hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer w-fit"
              >
                <FaFileDownload />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right Column details card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 flex items-center"
          >
            <div className="w-full rounded-2xl border border-border-custom bg-bg-card p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:border-border-custom-hover transition-colors duration-300">
              {/* Glass subtle card gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

              <h4 className="text-lg font-bold font-display text-text-primary mb-6 pb-2 border-b border-border-custom/50 flex items-center gap-2">
                <span>Personal Info Card</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              </h4>

              <div className="space-y-6">
                {infoItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-primary-glow border border-primary/10 flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs text-text-secondary/50 uppercase tracking-wider block font-semibold">
                        {item.label}
                      </span>
                      <span className="text-sm sm:text-base font-medium text-text-primary">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
