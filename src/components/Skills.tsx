import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Terminal, Wrench } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Code2 className="text-blue-600" />,
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Backend',
    icon: <Server className="text-teal-500" />,
    items: ['Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    icon: <Database className="text-indigo-600" />,
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Programming',
    icon: <Terminal className="text-emerald-500" />,
    items: ['Python', 'Java', 'C++'],
  },
  {
    category: 'Tools',
    icon: <Wrench className="text-slate-600" />,
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman'],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold mb-4 tracking-wider uppercase text-sm">Skills & Expertise</h2>
          <h3 className="text-4xl font-bold text-slate-900">Technical Toolkit</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-50 rounded-2xl">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900">{skill.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-slate-50 text-slate-700 rounded-full text-sm font-medium border border-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
