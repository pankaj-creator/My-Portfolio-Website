import React from 'react';

const experiences = [
  {
    company: 'Tata Consultancy Services',
    role: 'System Engineer',
    period: 'July 2022 - Present',
    location: 'Mumbai, India',
    highlights: [
      '🏆 Led GeM 2.0 notification module serving 10M+ users',
      '📈 Improved application performance by 40% across multiple projects',
      '👥 Managed teams of 10+ developers, delivering 15% ahead of schedule',
      '🔧 Reduced manual effort by 70% through Python automation scripts',
      '⚡ Implemented CI/CD pipelines cutting deployment time by 50%'
    ],
    technologies: ['React.js', 'Angular', 'Java', 'Spring Boot', 'Python', 'GCP', 'AWS']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Professional Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transition-transform hover:scale-[1.01]"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg mb-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-500">
                    {exp.period} • {exp.location}
                  </p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  3+ Years
                </span>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-700 leading-relaxed">{highlight}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;