import React from 'react';
import { Book, FileText, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Additional = () => {
  return (
    <section id="additional" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Additional Information
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Book className="mr-2 text-blue-600" />
                Research Papers
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    Association Rule Mining using FP-Growth and An Innovative Artificial Neural Network Techniques
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    A Comparative Study of Association Rule Mining and its Preliminaries
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="mr-2 text-blue-600" />
                Certifications
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gray-700">• Azure Fundamentals (AZ 900)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• AWS Cloud Practitioner</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• CNSS Certified Network Security Specialist</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Globe className="mr-2 text-blue-600" />
                Languages
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gray-700">• English: Fluent (Speaking and Writing)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• Hindi: Fluent (Speaking and Writing)</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Additional;