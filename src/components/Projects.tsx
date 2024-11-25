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
      'Streamlined integration processes across five disparate software applications.',
      'Reduced production order processing time by 20%.',
      'Decreased application downtime by 30% through proactive issue resolution.',
      'Automated repetitive tasks, leading to a 70% reduction in manual effort.',
      'Successfully integrated multiple APIs to deliver seamless user experiences and meet business requirements.',
    ],
    link: '#tulip-pharma'
  },
  {
    title: 'NYSDOL UI Implementation',
    period: 'Aug 2022 – Dec 2023',
    company: 'TCS',
    description: 'Played a crucial role in modernizing the NYSDOL portal, leading to significant improvements in system performance and efficiency.',
    achievements: [
      'Spearheaded the modernization of the NYSDOL portal, resulting in significant performance and efficiency gains.',
      'Led a dedicated module team to successfully complete project milestones ahead of schedule.',
      'Reduced application downtime, ensuring seamless user experience.',
      'Demonstrated expertise in Angular, Google Cloud Platform, and Spring Boot to develop robust and scalable solutions.',
      'Successfully integrated multiple APIs and microservices to create a seamless user experience.',
    ],
    link: '#nysdol-ui'
  },
  {
    title: 'Virtual Lab Development',
    period: 'July 2020 - Sept 2020',
    company: 'IIT Kanpur & Ministry of Education',
    description: 'Created a robust virtual lab platform to enable remote access to laboratory experiments for students nationwide.',
    achievements: [
      'Successfully developed and deployed four virtual labs for engineering students.',
      'Lab platform was adopted by 10+ universities across India, during Covid19 Pandemic',
      'Lab contiinueLab continues to benefit engineering students across the nation.',
      'Received the prestigious Gold Developer Certificate',
    ],
    link: '#virtual-lab'
  },
  {
    title: 'Experimental Project on DAE Algorithm',
    period: 'Aug 2021 - Apr 2022',
    company: 'Dr. APJ Abdul Kalam University, Lucknow',
    description: 'Design and Implement an algorithm for association rule mining, using concept of DAE (Denoising AutoEncoders) algorithm',
    achievements: [
      'Successfully implemented an ANN-based approach for association rule mining.',
      'Developed a denoising algorithm to improve computational efficiency.',
      'Leveraged Python, TensorFlow, Keras, and advanced data mining algorithms to implement this algorithm.',
      'Contributed to in data mining research, through this experimental project',
    ],
    link: '#DEAM-Algorithm'
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