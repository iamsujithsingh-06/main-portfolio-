import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaGamepad, FaHospitalAlt, FaTrafficLight, FaImage, FaClock } from 'react-icons/fa';
import { BsRobot, BsCart4 } from 'react-icons/bs';
import { MdTrendingUp } from 'react-icons/md';
import { SiUnrealengine } from 'react-icons/si';
import { projectsData } from '../data/portfolioData';

// Helper: Determine if a string is a real, reachable URL (not a placeholder)
const isRealUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (trimmed === '' || trimmed === '#') return false;
  // Treat obvious placeholders as invalid
  if (/example\.com|placeholder|demo\.example/i.test(trimmed)) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

// Map project ID to a unique gradient design and decorative icon
const projectVisualMap = {
  1: {
    gradient: 'from-blue-600/30 via-indigo-600/10 to-transparent',
    icon: <BsRobot className="w-16 h-16 text-blue-400 opacity-60" />,
    label: 'AI Chatbot'
  },
  2: {
    gradient: 'from-purple-600/30 via-pink-600/10 to-transparent',
    icon: <BsCart4 className="w-16 h-16 text-purple-400 opacity-60" />,
    label: 'E-Commerce'
  },
  3: {
    gradient: 'from-violet-600/30 via-purple-600/10 to-transparent',
    icon: <MdTrendingUp className="w-16 h-16 text-violet-400 opacity-60" />,
    label: 'Data Science'
  },
  4: {
    gradient: 'from-green-600/30 via-emerald-600/10 to-transparent',
    icon: <FaGamepad className="w-16 h-16 text-green-400 opacity-60" />,
    label: 'Unity Engine'
  },
  5: {
    gradient: 'from-orange-600/30 via-amber-600/10 to-transparent',
    icon: <SiUnrealengine className="w-16 h-16 text-orange-400 opacity-60" />,
    label: 'Unreal Engine'
  },
  6: {
    gradient: 'from-red-600/30 via-rose-600/10 to-transparent',
    icon: <FaTrafficLight className="w-16 h-16 text-red-400 opacity-60" />,
    label: 'Computer Vision'
  },
  7: {
    gradient: 'from-cyan-600/30 via-teal-600/10 to-transparent',
    icon: <FaHospitalAlt className="w-16 h-16 text-cyan-400 opacity-60" />,
    label: 'Hospital System'
  }
};

const ProjectCard = ({ project, index }) => {
  const visual = projectVisualMap[project.id] || projectVisualMap[1];
  const [imgError, setImgError] = React.useState(false);

  // Build the candidate image URL — supports names with or without extension
  const candidateSrc = project.image.includes('.')
    ? `/projects/${project.image}`
    : `/projects/${project.image}.jpg`;

  // Live demo availability
  const hasLiveDemo = isRealUrl(project.demo);
  // Code (github) availability
  const hasCode = isRealUrl(project.github);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group rounded-2xl border border-border-custom bg-bg-card shadow-lg flex flex-col justify-between overflow-hidden hover:border-border-custom-hover transition-all duration-300"
    >
      {/* Visual Header Image Container (Zoom on Hover) */}
      <div className="relative h-48 border-b border-border-custom/50 bg-bg-card flex items-center justify-center overflow-hidden">
        {/* Grid Lines Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0b1329_1px,transparent_1px),linear-gradient(to_bottom,#0b1329_1px,transparent_1px)] bg-[size:16px_16px] opacity-30" />

        {/* Project specific gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${visual.gradient} opacity-80`} />

        {!imgError ? (
          <div className="relative w-full h-full">
            <img
              src={candidateSrc}
              onError={() => setImgError(true)}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[10px] tracking-wider font-semibold uppercase text-primary bg-primary-glow border border-primary/20 px-2.5 py-1 rounded-full backdrop-blur-sm shadow-lg">
              <FaImage className="text-[9px]" />
              Application Preview
            </div>
          </div>
        ) : (
          /* Professional Placeholder Card with "Project Preview Coming Soon" */
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-bg-dark/40 via-transparent to-bg-dark/60 pointer-events-none" />
            <div className="relative flex flex-col items-center gap-3 transform group-hover:scale-105 transition-transform duration-500 ease-out">
              <div className="p-3 rounded-2xl bg-bg-card/70 border border-border-custom backdrop-blur-sm">
                {visual.icon}
              </div>
              <span className="text-[10px] tracking-widest font-semibold uppercase text-text-secondary/50 font-mono">
                {visual.label}
              </span>
              <div className="flex items-center gap-1.5 text-[10px] tracking-wider font-semibold uppercase text-primary bg-primary-glow border border-primary/20 px-2.5 py-1 rounded-full">
                <FaImage className="text-[9px]" />
                Project Preview Coming Soon
              </div>
            </div>
          </div>
        )}

        {/* Hover visual shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
      </div>

      {/* Project Details */}
      <div className="p-6 flex flex-col flex-grow text-left">
        <h3 className="text-xl font-bold font-display text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
          {project.name}
        </h3>

        <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIdx) => (
            <span
              key={tagIdx}
              className="text-xs bg-bg-card-hover text-text-secondary border border-border-custom/40 px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 pt-4 border-t border-border-custom/30 mt-auto">
          {hasCode ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-border-custom bg-bg-card-hover hover:bg-primary-glow hover:border-border-custom-hover text-sm font-semibold text-text-primary hover:text-primary transition-all duration-300 cursor-pointer"
            >
              <FaGithub className="text-sm" />
              Code
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-border-custom/50 bg-bg-card-hover/50 text-sm font-semibold text-text-secondary/50 cursor-not-allowed select-none"
            >
              <FaGithub className="text-sm" />
              Code
            </span>
          )}

          {hasLiveDemo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-primary hover:bg-primary-hover text-sm font-semibold text-text-primary transition-all duration-300 cursor-pointer"
            >
              <FaExternalLinkAlt className="text-xs" />
              Live Demo
            </a>
          ) : (
            <span
              aria-disabled="true"
              title="Live demo coming soon"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-bg-card-hover/50 border border-border-custom/50 text-sm font-semibold text-text-secondary/60 cursor-not-allowed select-none"
            >
              <FaClock className="text-xs" />
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden theme-transition-all">
      {/* Background Soft Glow */}
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-primary-glow px-3 py-1 rounded-full border border-primary/20 mb-3 inline-block">
            My Work
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display mb-3 uppercase"
          >
            FEATURED PROJECTS
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
