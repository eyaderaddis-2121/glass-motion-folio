import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/3d7a5e73-4790-4f22-b7c7-9a260298f847/profile-photo-18e683cb-1783622983265.webp"
                alt="Eyader Addis Belete"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-600 font-semibold mb-4 tracking-wider uppercase text-sm">About Me</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              Passionate about building software that makes an impact
            </h3>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                I am a dedicated Software Engineering student with a deep-rooted passion for technology and innovation. My journey in software development is driven by a desire to create solutions that solve real-world problems and improve lives.
              </p>
              <p>
                I specialize in full-stack development, with a particular interest in AI-powered applications and scalable cloud architecture. My approach combines technical rigor with a user-centric design philosophy, ensuring that every project I undertake is both functional and intuitive.
              </p>
              <p>
                Continuous learning is at the heart of my professional growth. I thrive in collaborative environments, valuing teamwork and effective communication as essential components of successful project delivery. Whether it's participating in hackathons or contributing to open-source projects, I am always seeking new challenges to expand my skill set.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-3xl font-bold text-blue-600">3+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide mt-1">Years Learning</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-3xl font-bold text-teal-500">20+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide mt-1">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
