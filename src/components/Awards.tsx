import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const awards = [
  {
    title: 'Golden Developer Certificate',
    organization: 'IIT Kanpur/AKTU Lucknow',
    description: 'Awarded for outstanding contributions to virtual lab development project.'
  },
  {
    title: 'On The Spot Award',
    organization: 'TCS',
    description: 'Received twice for exceptional performance and contributions.'
  },
  {
    title: 'Best Team Award',
    organization: 'TCS',
    description: 'Recognized for outstanding team collaboration and project success.'
  }
];

const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Awards & Recognition
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Trophy className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-blue-600 text-center mb-2">{award.organization}</p>
                <p className="text-gray-600 text-center">{award.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;