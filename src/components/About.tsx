import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Database, TrendingUp, BookOpen, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Machine Learning', icon: Brain, color: 'purple' },
    { name: 'Deep Learning', icon: TrendingUp, color: 'blue' },
    { name: 'Python', icon: Code2, color: 'teal' },
    { name: 'Data Science', icon: Database, color: 'green' },
  ];

  const achievements = [
    { icon: BookOpen, title: 'Computer Science Student', description: 'Pursuing degree with focus on AI/ML' },
    { icon: Trophy, title: 'Multiple Internships', description: 'Hands-on experience in industry projects' },
    { icon: Brain, title: 'Research Focus', description: 'Active in ML research and publications' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Science student specializing in Machine Learning and Deep Learning.
            Through internships and personal projects, I've developed expertise in creating intelligent
            solutions that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Core Expertise</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r from-${skill.color}-500/20 to-${skill.color}-600/20 mb-4 w-fit`}>
                    <skill.icon className={`w-6 h-6 text-${skill.color}-400`} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="flex items-start space-x-4 p-6 bg-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                    <achievement.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bio Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 p-8 rounded-2xl backdrop-blur-sm border border-gray-600/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            My journey in artificial intelligence began during my undergraduate studies, where I discovered
            the transformative power of machine learning. Through various internships, I've had the opportunity
            to work on cutting-edge projects involving neural networks, computer vision, and natural language
            processing. I'm constantly exploring new technologies and methodologies to push the boundaries
            of what's possible with AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;