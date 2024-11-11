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
            <p className="text-gray-600 mb-6">
              I'm a dedicated Full Stack Developer with a passion for creating high-performance,
              user-friendly web applications. Currently working at Tata Consultancy Services
              as a System Engineer, I bring extensive experience in both front-end and back-end
              development.
            </p>
            <p className="text-gray-600 mb-6">
              With expertise in technologies like Angular, React, Java, and Cloud platforms
              (AWS, GCP, Azure), I focus on delivering scalable solutions that drive business
              growth and enhance user experiences.
            </p>
            <p className="text-gray-600">
              I'm committed to continuous learning and staying current with the latest industry
              trends and technologies to deliver innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;