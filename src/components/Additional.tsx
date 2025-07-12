import React from 'react';
import { Book, FileText, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Additional = () => {
  return (
    <section id="additional" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Professional Credentials
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <FileText className="mr-2 text-blue-600" />
                Certifications
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700 text-sm">Azure Fundamentals (AZ-900)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700 text-sm">AWS Cloud Practitioner</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-gray-700 text-sm">CNSS Network Security</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Book className="mr-2 text-green-600" />
                Research Papers
              </h3>
              <ul className="space-y-3">
                <li>
                  <div className="text-gray-700 text-sm font-medium">Association Rule Mining</div>
                  <div className="text-gray-500 text-xs">Using FP-Growth & ANN Techniques</div>
                </li>
                <li>
                  <div className="text-gray-700 text-sm font-medium">Comparative Study</div>
                  <div className="text-gray-500 text-xs">Association Rule Mining Preliminaries</div>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Globe className="mr-2 text-purple-600" />
                Languages
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm">English</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Fluent</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm">Hindi</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Native</span>
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