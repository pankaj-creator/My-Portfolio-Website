import React from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript', 'C++']
  },
  {
    title: 'Web Development',
    skills: ['Angular', 'React.js', 'HTML', 'CSS']
  },
  {
    title: 'Database Management',
    skills: ['SQL', 'MySQL', 'MongoDB', 'IBM DB2', 'PostgreSQL']
  },
  {
    title: 'Cloud Technologies',
    skills: ['GCP', 'AWS', 'Microsoft Azure']
  },
  {
    title: 'CI/CD & DevOps',
    skills: ['CI/CD Pipelines', 'Git/GitHub', 'Version Control', 'Cloud DevOps']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;