import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiC, SiCplusplus, 
  SiHtml5, SiCss, SiReact, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiMysql, SiMongodb, SiPandas, SiNumpy, 
  SiScikitlearn, SiUnity, SiUnrealengine 
} from 'react-icons/si';
import { FaJava, FaChartLine } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import { GiBrain } from 'react-icons/gi';
import { skillsData } from '../data/portfolioData';

// Map icon strings to actual React Icons
const iconMap = {
  SiPython: <SiPython className="w-7 h-7 transition-colors duration-300" />,
  FaJava: <FaJava className="w-7 h-7 transition-colors duration-300" />,
  SiC: <SiC className="w-7 h-7 transition-colors duration-300" />,
  SiCplusplus: <SiCplusplus className="w-7 h-7 transition-colors duration-300" />,
  SiJavascript: <SiJavascript className="w-7 h-7 transition-colors duration-300" />,
  SiCsharp: <TbBrandCSharp className="w-7 h-7 transition-colors duration-300" />,
  SiHtml5: <SiHtml5 className="w-7 h-7 transition-colors duration-300" />,
  SiCss3: <SiCss className="w-7 h-7 transition-colors duration-300" />,
  SiReact: <SiReact className="w-7 h-7 transition-colors duration-300" />,
  SiTailwindcss: <SiTailwindcss className="w-7 h-7 transition-colors duration-300" />,
  SiNodedotjs: <SiNodedotjs className="w-7 h-7 transition-colors duration-300" />,
  SiExpress: <SiExpress className="w-7 h-7 transition-colors duration-300" />,
  SiMysql: <SiMysql className="w-7 h-7 transition-colors duration-300" />,
  SiMongodb: <SiMongodb className="w-7 h-7 transition-colors duration-300" />,
  GiBrain: <GiBrain className="w-7 h-7 transition-colors duration-300" />,
  SiPandas: <SiPandas className="w-7 h-7 transition-colors duration-300" />,
  SiNumpy: <SiNumpy className="w-7 h-7 transition-colors duration-300" />,
  SiPlotly: <FaChartLine className="w-7 h-7 transition-colors duration-300" />, // Represents Matplotlib
  SiScikitlearn: <SiScikitlearn className="w-7 h-7 transition-colors duration-300" />,
  SiUnity: <SiUnity className="w-7 h-7 transition-colors duration-300" />,
  SiUnrealengine: <SiUnrealengine className="w-7 h-7 transition-colors duration-300" />,
};

export const Skills = () => {
  // Animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden theme-transition-all">
      {/* Background Soft Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-primary-glow px-3 py-1 rounded-full border border-primary/20 mb-3 inline-block">
            Expertise
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display mb-3 uppercase"
          >
            SKILLS
          </motion.h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto uppercase tracking-wider font-semibold mb-6">
            TECHNOLOGIES I WORK WITH
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillsData.map((categoryData, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="rounded-2xl border border-border-custom bg-bg-card p-6 shadow-lg relative overflow-hidden group hover:border-border-custom-hover transition-colors duration-300"
            >
              {/* Glass background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
              
              <h3 className="text-lg font-bold font-display text-text-primary mb-6 border-b border-border-custom pb-3 flex justify-between items-center">
                <span>{categoryData.category}</span>
                <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300" />
              </h3>

              {/* Skills cards grid in category */}
              <div className="grid grid-cols-2 gap-4">
                {categoryData.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl border border-border-custom/50 bg-bg-card-hover/40 hover:bg-bg-card-hover hover:border-border-custom-hover transition-all duration-300 group/skill cursor-default"
                  >
                    <div className={`${skill.color} mb-3 group-hover/skill:scale-110 transition-transform duration-300`}>
                      {iconMap[skill.icon]}
                    </div>
                    <span className="text-xs font-semibold text-text-secondary group-hover/skill:text-text-primary transition-colors duration-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
