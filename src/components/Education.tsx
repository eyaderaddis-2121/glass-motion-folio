import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 bg-blue-50 rounded-2xl">
                <GraduationCap className="text-blue-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Education</h3>
            </div>
            
            <div className="relative pl-8 border-l-2 border-slate-100 space-y-12">
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
                <span className="text-sm font-semibold text-blue-600 mb-1 block">2022 - Present</span>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Bachelor of Science in Software Engineering</h4>
                <p className="text-slate-600 leading-relaxed">
                  Focusing on software architecture, data structures, algorithms, and advanced web technologies. Participating in various technical clubs and research projects.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certificates */}
          <motion.div
            id="certificates"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 bg-teal-50 rounded-2xl">
                <Award className="text-teal-500" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Certificates</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Web Development', issuer: 'Full Stack Mastery' },
                { title: 'Python Programming', issuer: 'Data Science Academy' },
                { title: 'JavaScript', issuer: 'Advanced JS Institute' },
                { title: 'Cloud Computing', issuer: 'Cloud Infrastructure' }
              ].map((cert, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors group">
                  <h4 className="font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">{cert.title}</h4>
                  <p className="text-slate-500 text-sm">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
