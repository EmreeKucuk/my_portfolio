import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Machine Learning Intern',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: 'Jun 2024 - Aug 2024',
      description: [
        'Developed and deployed ML models for predictive analytics, improving accuracy by 25%',
        'Implemented computer vision algorithms for automated quality control systems',
        'Collaborated with cross-functional teams to integrate ML solutions into production'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'AWS', 'Docker']
    },
    {
      title: 'Data Science Intern',
      company: 'Analytics Solutions Ltd.',
      location: 'New York, NY',
      period: 'Jan 2024 - May 2024',
      description: [
        'Built ETL pipelines for processing large-scale datasets using Apache Spark',
        'Created interactive dashboards and visualization tools for business intelligence',
        'Conducted statistical analysis to identify key business insights and trends'
      ],
      technologies: ['Python', 'Pandas', 'Spark', 'Tableau', 'SQL', 'Git']
    },
    {
      title: 'Research Assistant',
      company: 'University AI Lab',
      location: 'Campus',
      period: 'Sep 2023 - Dec 2023',
      description: [
        'Assisted in research on deep learning applications in natural language processing',
        'Implemented and optimized transformer models for text classification tasks',
        'Co-authored research paper on attention mechanisms in neural networks'
      ],
      technologies: ['PyTorch', 'Transformers', 'CUDA', 'Jupyter', 'LaTeX']
    }
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
            My journey through various internships and research positions has provided me with
            hands-on experience in applying ML techniques to solve real-world problems.
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