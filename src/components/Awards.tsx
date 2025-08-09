import { Trophy, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const awards = [
  {
    title: 'Gold Developer Certificate',
    organization: 'IIT Kanpur',
    year: '2020',
    description: 'Outstanding contribution to virtual lab development during COVID-19.',
    type: 'award'
  },
  {
    title: 'On-the-Spot Awards (2x)',
    organization: 'TCS',
    year: '2023',
    description: 'Exceptional performance and leadership in NYSDOL project.',
    type: 'award'
  },
  {
    title: 'Best Team Performance',
    organization: 'TCS',
    year: '2024',
    description: 'Outstanding collaboration and project delivery excellence.',
    type: 'award'
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

const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Awards & Research Publications
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Recognition for technical excellence, leadership, and research contributions in AI and software development
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    award.type === 'research' ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    {award.type === 'research' ? (
                      <FileText className={`w-8 h-8 ${
                        award.type === 'research' ? 'text-green-600' : 'text-blue-600'
                      }`} />
                    ) : (
                      <Trophy className="w-8 h-8 text-blue-600" />
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-900 mb-2 leading-tight">
                  {award.title}
                </h3>
                <p className={`text-center font-medium mb-1 ${
                  award.type === 'research' ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {award.organization} • {award.year}
                </p>
                {award.authors && (
                  <p className="text-center text-xs text-gray-500 mb-2 italic">
                    {award.authors}
                  </p>
                )}
                <p className="text-gray-600 text-center text-sm mb-3">{award.description}</p>
                
                {award.link && (
                  <div className="text-center">
                    <motion.a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white transition-colors ${
                        award.type === 'research' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      <FileText size={16} className="mr-2" />
                      Read Paper
                      <ExternalLink size={14} className="ml-2" />
                    </motion.a>
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;