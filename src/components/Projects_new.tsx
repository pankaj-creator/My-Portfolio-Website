import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Building2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: 'GeM 2.0 – Government e-Marketplace',
    period: 'Dec 2024 – Present',
    company: 'TCS',
    role: 'Senior UI Developer',
    techStack: ['React.js', 'Redux Toolkit', 'GitLab', 'Jenkins', 'CI/CD'],
    description: 'Leading UI development for India's national procurement platform serving millions of users.',
    keyImpacts: [
      'Built real-time notification system for government procurement',
      'Implemented CI/CD pipelines reducing deployment time by 50%',
      'Achieved 99.9% uptime with robust error handling'
    ],
    metrics: '10M+ users • ₹5L+ Cr transactions',
    status: 'Production'
  },
  {
    title: 'Tulip Manufacturing Platform',
    period: 'Jan 2024 – Nov 2024',
    company: 'TCS',
    role: 'Full Stack Developer',
    techStack: ['Tulip', 'Python', 'API Integration', 'Automation'],
    description: 'Digitized pharmaceutical manufacturing workflows with custom automation solutions.',
    keyImpacts: [
      'Reduced production processing time by 20%',
      'Automated 70% of manual tasks with Python scripts',
      'Integrated 5+ manufacturing systems seamlessly'
    ],
    metrics: '30% less downtime • 5 systems integrated',
    status: 'Completed'
  },
  {
    title: 'NY State Department of Labor Portal',
    period: 'Aug 2022 – Dec 2023',
    company: 'TCS',
    role: 'Frontend Lead',
    techStack: ['Angular', 'Spring Boot', 'GCP', 'IBM DB2'],
    description: 'Led modernization of state government portal improving accessibility and performance.',
    keyImpacts: [
      'Boosted frontend performance by 40%',
      'Led UI module team of 10 developers',
      'Delivered releases 15% ahead of schedule'
    ],
    metrics: '2x On-the-Spot Awards • 40% performance gain',
    status: 'Completed'
  },
  {
    title: 'Virtual Lab Development',
    period: 'July 2020 – Sept 2020',
    company: 'IIT Kanpur',
    role: 'React Developer',
    techStack: ['React.js', 'GitHub Pages', 'Interactive UI'],
    description: 'Built online laboratory experiments during COVID-19 for remote engineering education.',
    keyImpacts: [
      'Supported 10,000+ students during pandemic',
      'Developed 3 interactive queue algorithm labs',
      'Deployed using GitHub Pages for scalability'
    ],
    metrics: '10K+ students • Gold Certificate',
    status: 'Live'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            High-impact projects showcasing full-stack development, team leadership, and measurable business results
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Building2 size={14} className="mr-1" />
                        <span className="font-medium">{project.company}</span>
                        <span className="mx-2">•</span>
                        <span>{project.role}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={14} className="mr-1" />
                        {project.period}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Production' ? 'bg-green-100 text-green-800' :
                      project.status === 'Live' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-semibold text-blue-900">
                      📊 Impact: {project.metrics}
                    </p>
                  </div>

                  {/* Key Impacts */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.keyImpacts.map((impact, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Interested in seeing more projects or discussing potential opportunities?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Let's Connect
              <ExternalLink size={16} className="ml-2" />
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
