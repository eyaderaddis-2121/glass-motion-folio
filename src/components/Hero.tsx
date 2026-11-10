import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/3d7a5e73-4790-4f22-b7c7-9a260298f847/hero-bg-30d0a651-1783622981570.webp"
          alt="Software Engineering Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Hi, I'm <span className="gradient-text">Eyader Addis Belete</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 font-medium mb-4">
            Software Engineering Student | Full Stack Developer | AI Enthusiast
          </p>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg mb-10 leading-relaxed">
            I enjoy designing and developing modern web applications, backend systems, cloud solutions, and AI-powered software that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg shadow-blue-200 flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              Download CV <Download size={18} />
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold shadow-sm flex items-center gap-2 hover:bg-slate-50 transition-colors"
            >
              Contact Me <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-slate-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
