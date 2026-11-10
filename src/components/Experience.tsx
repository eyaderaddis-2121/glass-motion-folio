import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Terminal, Trophy } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineering Student',
    company: 'University Program',
    period: '2022 - Present',
    icon: <Briefcase className="text-blue-600" />,
    description: 'Mastering core principles of software development, algorithms, and system design.',
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub Community',
    period: '2023 - Present',
    icon: <Code className="text-teal-500" />,
    description: 'Contributing to various open-source projects, improving code quality and adding new features.',
  },
  {
    role: 'Academic Projects',
    company: 'Individual & Group',
    period: '2022 - 2024',
    icon: <Terminal className="text-indigo-600" />,
    description: 'Developed multiple full-stack applications as part of the academic curriculum.',
  },
  {
    role: 'Hackathon Participant',
    company: 'Various Events',
    period: '2023 - 2024',
    icon: <Trophy className="text-emerald-500" />,
    description: 'Collaborated in high-pressure environments to build innovative solutions in short timeframes.',
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold mb-4 tracking-wider uppercase text-sm">Journey</h2>
          <h3 className="text-4xl font-bold text-slate-900">Experience</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                {exp.icon}
              </div>
              <div>
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
                  {exp.period}
                </span>
                <h4 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h4>
                <p className="text-slate-500 font-medium mb-3">{exp.company}</p>
                <p className="text-slate-600 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
