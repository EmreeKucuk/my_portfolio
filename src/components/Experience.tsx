import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
  
    {
      title: 'Information Technology Intern',
      company: 'Quick Sigorta General Directorate',
      location: 'Ataşehir, Istanbul',
      period: 'July 2024 - September 2024',
      description: [
        'Researched RAID 60, learning about its configuration, data redundancy, and fault tolerance.',
        'Fixed authorization errors and adjusted database records for access cards. Managed data in Excel.',
        'Worked on correcting errors of SFS system, debugged database errors.'
      ],
      technologies: ['SQL', 'Git']
    },

    {
      title: 'Software Development Intern',
      company: 'Agito',
      location: 'Sarıyer, Istanbul',
      period: 'June 2025 - August 2025',
      description: [
        'Developed the Holiday API project using Spring Boot, React, Tailwind, Oracle, and Docker.',
        'Implemented a natural language understanding layer to process user holiday queries with AI.',
        'Participated in full-stack development and integration of frontend-backend systems.'
      ],
      technologies: ['SQL', 'Git', 'Spring Boot', 'React', 'Tailwind CSS', 'Docker']
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My journey through internships and personal projects has equipped me with hands-on experience in a
            pplying machine learning techniques to real-world challenges — from developing recommendation systems to 
            building computer vision solutions for accessibility.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-teal-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center text-purple-400 mb-1">
                          <Building className="w-4 h-4 mr-2" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mb-1">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <Award className="w-6 h-6 text-yellow-500" />
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;