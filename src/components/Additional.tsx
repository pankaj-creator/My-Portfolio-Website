import React, { useState } from 'react';
import { Book, FileText, Globe, Trophy, Award, Eye, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import ModalView from './ModalView';

const awards = [
  {
    title: 'Gold Developer Certificate',
    organization: 'IIT Kanpur',
    year: '2020',
    description: 'Outstanding contribution to virtual lab development during COVID-19.',
    type: 'award',
    certificate: {
      type: 'image' as const,
      url: '/certificates/GOLD_DEVELOPER_CERTIFICATE_eB3.png',
      downloadUrl: '/certificates/GOLD_DEVELOPER_CERTIFICATE_eB3.png'
    }
  },
  {
    title: 'On-the-Spot Awards in Bayer Project',
    organization: 'TCS',
    year: '2023',
    description: 'Exceptional performance and leadership in Bayer project.',
    type: 'award',
    certificate: {
      type: 'pdf' as const,
      url: '/certificates/On_The_Spot_Award_Bayer.pdf',
      downloadUrl: '/certificates/On_The_Spot_Award_Bayer.pdf'
    }
  },
  {
    title: 'On-the-Spot Awards in NYSDOL Project',
    organization: 'TCS',
    year: '2023',
    description: 'Exceptional performance and leadership in NYSDOL project.',
    type: 'award',
    certificate: {
      type: 'pdf' as const,
      url: '/certificates/On_The_Spot_Award_NYSDOL.pdf',
      downloadUrl: '/certificates/On_The_Spot_Award_NYSDOL.pdf'
    }
  },
  {
    title: 'Association Rule Mining using FP-Growth and ANN Techniques',
    organization: 'IJRASET',
    year: '2022',
    description: 'Published research on innovative Neural Network approach for accelerated Association Rule Mining.',
    type: 'research',
    link: 'https://www.ijraset.com/research-paper/association-rule-mining-using-fp-growth',
    authors: 'Pankaj Kumar Gond, Aditya Shukla, Satish Sahani, Neha Gond, Dr. Harvendra Kumar'
  },
  {
    title: 'Advanced Techniques in Association Rule Mining',
    organization: 'River Publishers',
    year: '2022',
    description: 'Book chapter on cutting-edge methodologies in data mining and neural networks.',
    type: 'research',
    link: 'https://www.riverpublishers.com/pdf/ebook/chapter/RP_9788770227667C9.pdf',
    authors: 'Pankaj Kumar Gond, Research Team'
  }
];

const certifications = [
  {
    name: 'Azure Fundamentals (AZ-900)',
    status: 'verified',
    color: 'blue'
  },
  {
    name: 'AWS Cloud Practitioner',
    status: 'verified',
    color: 'green'
  },
  {
    name: 'CNSS Network Security',
    status: 'verified',
    color: 'purple'
  }
];

const researchPapers = [
  {
    title: 'Association Rule Mining',
    subtitle: 'Using FP-Growth & ANN Techniques',
    link: 'https://www.ijraset.com/research-paper/association-rule-mining-using-fp-growth'
  },
  {
    title: 'Comparative Study',
    subtitle: 'Association Rule Mining Preliminaries',
    link: 'https://www.riverpublishers.com/pdf/ebook/chapter/RP_9788770227667C9.pdf'
  }
];

const Additional = () => {
  const [modalContent, setModalContent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content: any) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  return (
    <section id="additional" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Awards & Recognition Section */}
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
            Awards & Research Publications
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            Recognition for technical excellence, leadership, and research contributions in AI and software development
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
          {awards.map((award, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-2 sm:p-3 rounded-full ${
                    award.type === 'research' ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    {award.type === 'research' ? (
                      <FileText className={`w-6 h-6 sm:w-8 sm:h-8 ${
                        award.type === 'research' ? 'text-green-600' : 'text-blue-600'
                      }`} />
                    ) : (
                      <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                    )}
                  </div>
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold text-center text-gray-900 mb-2 leading-tight">
                  {award.title}
                </h3>
                
                <p className={`text-center font-medium mb-1 text-sm sm:text-base ${
                  award.type === 'research' ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {award.organization} • {award.year}
                </p>
                
                {award.authors && (
                  <p className="text-center text-xs text-gray-500 mb-2 italic">
                    {award.authors}
                  </p>
                )}
                
                <p className="text-gray-600 text-center text-xs sm:text-sm mb-3 leading-relaxed">
                  {award.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  {award.certificate && (
                    <motion.button
                      onClick={() => openModal(award.certificate)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center justify-center px-3 py-2 rounded-md text-xs font-medium text-white transition-colors ${
                        award.type === 'research' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      <Eye size={12} className="mr-1" />
                      View Certificate
                    </motion.button>
                  )}
                  
                  {award.link && (
                    <motion.a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center justify-center px-3 py-2 rounded-md text-xs font-medium text-white transition-colors ${
                        award.type === 'research' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      <FileText size={12} className="mr-1" />
                      {award.type === 'research' ? 'Read Paper' : 'View Details'}
                      <ExternalLink size={10} className="ml-1" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Professional Credentials Section */}
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Professional Credentials
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
                <FileText className="mr-2 text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
                Certifications
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className={`w-2 h-2 bg-${cert.color}-500 rounded-full mr-3 flex-shrink-0`}></span>
                    <span className="text-gray-700 text-xs sm:text-sm">{cert.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
                <Book className="mr-2 text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
                Research Papers
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {researchPapers.map((paper, idx) => (
                  <li key={idx}>
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:bg-white/50 p-2 rounded transition-colors"
                    >
                      <div className="text-gray-700 text-xs sm:text-sm font-medium">{paper.title}</div>
                      <div className="text-gray-500 text-xs">{paper.subtitle}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
                <Globe className="mr-2 text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
                Languages
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-gray-700 text-xs sm:text-sm">English</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Fluent</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700 text-xs sm:text-sm">Hindi</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Native</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Modal for viewing certificates */}
        <ModalView
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Certificate View"
          content={modalContent}
        />
      </div>
    </section>
  );
};

export default Additional;