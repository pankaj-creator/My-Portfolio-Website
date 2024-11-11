import React from 'react';

const experiences = [
  {
    company: 'Tata Consultancy Services',
    role: 'System Engineer',
    period: 'July 2022 - Present',
    achievements: [
      'Developed full-stack web applications using Angular, Java, SQL, and Spring Boot',
      'Led development of a Tulip application, improving efficiency by 40%',
      'Managed complex database operations across 10+ modules',
      'Implemented Git version control, reducing code conflicts by 40%',
      'Led a module team of 10 developers, delivering projects 10% ahead of schedule'
    ]
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
              className="bg-white rounded-lg shadow-md p-8 transition-transform hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {exp.role}
              </h3>
              <p className="text-gray-600 mb-4">
                {exp.company} | {exp.period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;