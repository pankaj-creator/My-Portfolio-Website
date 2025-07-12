import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Summary</h3>
              <p className="text-gray-600 mb-4">
                Senior Full Stack Developer with 3+ years at Tata Consultancy Services, 
                specializing in React.js, Angular, and cloud technologies. Led high-impact 
                projects including India's national procurement platform (GeM 2.0) and 
                manufacturing automation systems.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Strengths</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Frontend Performance Optimization</li>
                  <li>• Team Leadership & Mentoring</li>
                  <li>• CI/CD Pipeline Implementation</li>
                  <li>• Cross-functional Collaboration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Impact Delivered</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 40% performance improvements</li>
                  <li>• 30% reduction in downtime</li>
                  <li>• 70% automation of manual tasks</li>
                  <li>• Led teams of 10+ developers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;