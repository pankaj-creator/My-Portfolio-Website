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
                Full Stack Developer with 3+ years at Tata Consultancy Services, specializing in 
                end-to-end application development with expertise in AI integration, Cloud technologies, 
                and DevOps practices. Currently leading high-impact projects including India's national 
                procurement platform (GeM 2.0) and developing innovative AI-powered productivity solutions.
              </p>
              <p className="text-gray-600 mb-4">
                Passionate about leveraging cutting-edge technologies including AI/ML, cloud platforms, 
                and DevOps methodologies to build scalable, intelligent solutions. Strong interest in 
                DevOps automation, cloud architecture, and artificial intelligence applications.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Strengths</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Full-Stack Development</li>
                  <li>• AI/ML Integration</li>
                  <li>• Cloud Architecture & DevOps</li>
                  <li>• Team Leadership & Mentoring</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Impact Delivered</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• AI-powered productivity platforms</li>
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