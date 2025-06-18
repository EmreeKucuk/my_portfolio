import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center space-x-2 text-gray-400 mb-4">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            </motion.div>
            <span>and</span>
            <Code className="w-4 h-4 text-blue-500" />
            <span>fueled by</span>
            <Coffee className="w-4 h-4 text-yellow-600" />
          </div>
          
          <p className="text-gray-500 text-sm">
            © 2024 ML Portfolio. All rights reserved.
          </p>
          
          <div className="mt-4 text-xs text-gray-600">
            <p>Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;