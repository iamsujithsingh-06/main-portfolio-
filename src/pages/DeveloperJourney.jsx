import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLeetcode, SiCodechef } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';

const journeyCards = [
  {
    icon: <SiGithub className="w-8 h-8" />,
    title: 'GitHub',
    description:
      'Explore my repositories, full-stack applications, AI projects, and open-source development journey.',
    stat: { value: '20+', label: 'Repositories' },
    highlights: [
      'Full Stack Development',
      'MERN Projects',
      'AI Projects',
      'Open Source',
    ],
    href: 'https://github.com/iamsujithsingh-06',
  },
  {
    icon: <SiLeetcode className="w-8 h-8" />,
    title: 'LeetCode',
    description:
      'Consistently solving Data Structures & Algorithms problems to improve analytical thinking and coding skills.',
    stat: { value: '85+', label: 'Problems Solved' },
    highlights: [
      '80+ Problems Solved',
      'Java',
      'Data Structures & Algorithms',
      'Problem Solving',
    ],
    href: 'https://leetcode.com/u/sujithsinghsm/',
  },
  {
    icon: <SiCodechef className="w-8 h-8" />,
    title: 'CodeChef',
    description:
      'Building strong competitive programming skills through continuous coding challenges and algorithm practice.',
    stat: { value: '100+', label: 'Problems Solved' },
    highlights: [
      '100+ Problems Solved',
      'Competitive Programming',
      'Algorithms',
      'Logical Thinking',
    ],
    href: 'https://www.codechef.com/users/sujith_06',
  },
];

export const DeveloperJourney = () => {
  return (
    <section
      id="journey"
      className="py-12 sm:py-16 lg:py-24 relative overflow-hidden theme-transition-all"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-primary-glow px-3 py-1 rounded-full border border-primary/20 mb-3 inline-block">
            Journey
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display mb-3 uppercase"
          >
            DEVELOPER JOURNEY
          </motion.h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto mb-6">
            Explore my journey as a software developer through competitive
            programming, open-source contributions, and real-world project
            development.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {journeyCards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-border-custom bg-bg-card shadow-lg flex flex-col overflow-hidden hover:border-border-custom-hover hover:shadow-xl transition-all duration-300 cursor-pointer relative focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              {/* Glass background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />

              {/* Shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

              <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-bg-card-hover border border-border-custom/50 flex items-center justify-center mb-5 group-hover:bg-primary-glow group-hover:border-primary/30 transition-all duration-300">
                  <div className="text-text-secondary group-hover:text-primary transition-colors duration-300">
                    {card.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-display text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-grow">
                  {card.description}
                </p>

                {/* Stat Highlight */}
                <div className="flex items-baseline gap-2 mb-4 pl-1">
                  <span className="relative text-2xl sm:text-3xl font-extrabold text-primary">
                    <span className="relative z-10">{card.stat.value}</span>
                    <span className="absolute inset-0 blur-sm bg-primary/20 rounded-full -z-0" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-text-secondary">
                    {card.stat.label}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-6">
                  {card.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-center gap-2.5 text-sm text-text-secondary"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* View Profile Button */}
                <div className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-border-custom bg-bg-card-hover hover:bg-primary-glow hover:border-border-custom-hover text-sm font-semibold text-text-primary hover:text-primary transition-all duration-300 mt-auto">
                  <FaExternalLinkAlt className="text-xs" />
                  View Profile
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperJourney;
