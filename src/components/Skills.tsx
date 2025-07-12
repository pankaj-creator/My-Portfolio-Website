import React from 'react';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Angular', 'Redux Toolkit', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    color: 'blue'
  },
  {
    title: 'Backend & Database',
    skills: ['Java', 'Spring Boot', 'Python', 'Node.js', 'SQL', 'MongoDB', 'PostgreSQL', 'IBM DB2'],
    color: 'green'
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'GCP', 'Azure', 'CI/CD', 'Jenkins', 'Docker', 'GitLab', 'SonarQube'],
    color: 'purple'
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git/GitHub', 'Tulip Platform', 'API Integration', 'TensorFlow', 'Fortify', 'RTK Query'],
    color: 'orange'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <div className={`w-3 h-3 rounded-full mr-3 ${
                  category.color === 'blue' ? 'bg-blue-500' :
                  category.color === 'green' ? 'bg-green-500' :
                  category.color === 'purple' ? 'bg-purple-500' :
                  'bg-orange-500'
                }`}></div>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      category.color === 'blue' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' :
                      category.color === 'green' ? 'bg-green-100 text-green-800 hover:bg-green-200' :
                      category.color === 'purple' ? 'bg-purple-100 text-purple-800 hover:bg-purple-200' :
                      'bg-orange-100 text-orange-800 hover:bg-orange-200'
                    }`}
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