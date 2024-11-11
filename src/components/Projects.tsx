import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: 'Tulip Pharma Application',
    period: 'Jan 2024 – Present',
    company: 'TCS',
    description: 'Led the configuration of advanced manufacturing workflows utilizing Tulip, achieving significant improvements in processing time and efficiency.',
    achievements: [
      'Streamlined integration processes across five different software applications',
      'Reduced processing time by 20% for production orders',
      'Reduced application downtime by 60% through proactive issue identification',
      'Automated repetitive tasks, resulting in 30% reduction in manual effort'
    ],
    link: '#tulip-pharma'
  },
  {
    title: 'NYSDOL UI Implementation',
    period: 'Aug 2022 – Dec 2023',
    company: 'TCS',
    description: 'Played a crucial role in modernizing the NYSDOL portal, leading to significant improvements in system performance and efficiency.',
    achievements: [
      'Improved system performance by 40%',
      'Led module team to achieve project goals ahead of schedule',
      'Reduced application downtime by 25%',
      'Earned multiple awards for exceptional contributions'
    ],
    link: '#nysdol-ui'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-lg shadow-md p-8 cursor-pointer"
              >
                <a href={project.link} className="block">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 mb-4">
                    {project.company} | {project.period}
                  </p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;