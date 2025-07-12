import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const awards = [
  {
    title: 'Gold Developer Certificate',
    organization: 'IIT Kanpur',
    year: '2020',
    description: 'Outstanding contribution to virtual lab development during COVID-19.'
  },
  {
    title: 'On-the-Spot Awards (2x)',
    organization: 'TCS',
    year: '2023',
    description: 'Exceptional performance and leadership in NYSDOL project.'
  },
  {
    title: 'Best Team Performance',
    organization: 'TCS',
    year: '2024',
    description: 'Outstanding collaboration and project delivery excellence.'
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
                <h3 className="text-lg font-semibold text-center text-gray-900 mb-1">
                  {award.title}
                </h3>
                <p className="text-blue-600 text-center font-medium mb-1">
                  {award.organization} • {award.year}
                </p>
                <p className="text-gray-600 text-center text-sm">{award.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;