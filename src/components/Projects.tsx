import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Employee Management System',
    description: 'A comprehensive platform for managing employee records, payroll, and performance tracking with secure authentication.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3d7a5e73-4790-4f22-b7c7-9a260298f847/project-employee-mgmt-fcee0bbb-1783622981130.webp',
    tech: ['React', 'Node.js', 'MySQL', 'Express'],
    github: 'https://github.com/eyaderaddisbelete',
    demo: '#',
  },
  {
    title: 'AI Chatbot',
    description: 'An intelligent chatbot assistant powered by OpenAI API, capable of natural language processing and task automation.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3d7a5e73-4790-4f22-b7c7-9a260298f847/project-ai-chatbot-e9f8b9a2-1783622981263.webp',
    tech: ['Python', 'LangChain', 'OpenAI', 'React'],
    github: 'https://github.com/eyaderaddisbelete',
    demo: '#',
  },
  {
    title: 'Hospital Management System',
    description: 'Digital health solution for managing patient appointments, medical records, and hospital resources efficiently.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3d7a5e73-4790-4f22-b7c7-9a260298f847/project-hospital-mgmt-3bcddd19-1783622980615.webp',
    tech: ['React', 'MongoDB', 'Node.js', 'Tailwind'],
    github: 'https://github.com/eyaderaddisbelete',
    demo: '#',
  },
  {
    title: 'E-Commerce Website',
    description: 'Modern online storefront with product catalog, shopping cart, and secure checkout integration.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3d7a5e73-4790-4f22-b7c7-9a260298f847/project-ecommerce-df39b256-1783622981428.webp',
    tech: ['React', 'Firebase', 'Stripe', 'Framer Motion'],
    github: 'https://github.com/eyaderaddisbelete',
    demo: '#',
  },
  {
    title: 'Student Portal',
    description: 'Centralized platform for students to access grades, schedules, and course materials with real-time updates.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3d7a5e73-4790-4f22-b7c7-9a260298f847/project-student-portal-f8d80a12-1783622980820.webp',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
    github: 'https://github.com/eyaderaddisbelete',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects, skills, and professional background with a focus on modern UX/UI.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3d7a5e73-4790-4f22-b7c7-9a260298f847/project-portfolio-b856c624-1783622981240.webp',
    tech: ['React 19', 'Tailwind v4', 'Framer Motion'],
    github: 'https://github.com/eyaderaddisbelete',
    demo: '#',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold mb-4 tracking-wider uppercase text-sm">Portfolio</h2>
          <h3 className="text-4xl font-bold text-slate-900">Featured Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4 w-full">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/20 backdrop-blur-md text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-white/30 transition-colors border border-white/30"
                    >
                      <Github size={18} /> Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} /> Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h4>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
