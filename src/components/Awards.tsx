import { Trophy, FileText, ExternalLink, Eye, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
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
      url: '/certificates/GOLD_DEVELOPER_CERTIFICATE_eB3.png', // Add your certificate image
      downloadUrl: '/certificates/GOLD_DEVELOPER_CERTIFICATE_eB3.png'
    }
  },
  {
    title: 'On-the-Spot Awards in Bayer Project',
    organization: 'TCS',
    year: '2023',
    description: 'Exceptional performance and leadership in NYSDOL project.',
    type: 'award',
    certificate: {
      type: 'pdf' as const,
      url: '/certificates/On_The_Spot_Award_Bayer.pdf', // Add your certificate PDF
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
      url: '/certificates/On_The_Spot_Award_NYSDOL.pdf', // Add your certificate PDF
      downloadUrl: '/certificates/On_The_Spot_Award_NYSDOL.pdf'
    }
  },

  // {
  //   title: 'Best Team Performance',
  //   organization: 'TCS',
  //   year: '2024',
  //   description: 'Outstanding collaboration and project delivery excellence.',
  //   type: 'award',
  //   certificate: {
  //     type: 'pdf' as const,
  //     url: '/certificates/Best_Team_Performance.pdf', // Add your certificate PDF
  //     downloadUrl: '/certificates/Best_Team_Performance.pdf'
  //   }
  // },
  {
    title: 'AWS Cloud Practitioner',
    organization: 'Amazon Web Services',
    year: '2023',
    description: 'Foundational understanding of AWS Cloud concepts, services, and terminology.',
    type: 'certification',
    // certificate: {
    //   type: 'pdf' as const,
    //   url: '/certificates/aws-cloud-practitioner.pdf', // Add your certificate PDF
    //   downloadUrl: '/certificates/aws-cloud-practitioner.pdf'
    // },
    link: 'https://www.credly.com/badges/your-aws-badge' // Add your actual badge link
  },
  {
    title: 'Azure AZ-900 Fundamentals',
    organization: 'Microsoft',
    year: '2023',
    description: 'Demonstrates foundational knowledge of cloud services and how they are provided with Microsoft Azure.',
    type: 'certification',
    // certificate: {
    //   type: 'pdf' as const,
    //   url: '/certificates/azure-az900.pdf', // Add your certificate PDF
    //   downloadUrl: '/certificates/azure-az900.pdf'
    // },
    link: 'https://www.credly.com/badges/your-azure-badge' // Add your actual badge link
  },
  {
    title: 'Association Rule Mining using FP-Growth and ANN Techniques',
    organization: 'IJRASET',
    year: '2022',
    description: 'Published research on innovative Neural Network approach for accelerated Association Rule Mining.',
    type: 'research',
    link: 'https://www.ijraset.com/research-paper/association-rule-mining-using-fp-growth',
    authors: 'Pankaj Kumar Gond, Aditya Shukla, Satish Sahani, Neha Gond, Dr. Harvendra Kumar',
    // certificate: {
    //   type: 'pdf' as const,
    //   url: 'https://www.ijraset.com/research-paper/association-rule-mining-using-fp-growth',
    //   downloadUrl: '/certificates/ijraset-paper.pdf' // Add downloaded PDF if available
    // }
  },
  {
    title: 'Advanced Techniques in Association Rule Mining',
    organization: 'River Publishers',
    year: '2022',
    description: 'Book chapter on cutting-edge methodologies in data mining and neural networks.',
    type: 'research',
    link: 'https://www.riverpublishers.com/pdf/ebook/chapter/RP_9788770227667C9.pdf',
    authors: 'Pankaj Kumar Gond, Research Team',
    // certificate: {
    //   type: 'pdf' as const,
    //   url: 'https://www.riverpublishers.com/pdf/ebook/chapter/RP_9788770227667C9.pdf',
    //   downloadUrl: 'https://www.riverpublishers.com/pdf/ebook/chapter/RP_9788770227667C9.pdf'
    // }
  }
];

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewClick = (award: any) => {
    setSelectedAward(award);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAward(null);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'research':
        return <FileText className="w-8 h-8 text-green-600" />;
      case 'certification':
        return <Award className="w-8 h-8 text-purple-600" />;
      default:
        return <Trophy className="w-8 h-8 text-blue-600" />;
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case 'research':
        return 'bg-green-100';
      case 'certification':
        return 'bg-purple-100';
      default:
        return 'bg-blue-100';
    }
  };

  const getButtonColor = (type: string) => {
    switch (type) {
      case 'research':
        return 'bg-green-600 hover:bg-green-700';
      case 'certification':
        return 'bg-purple-600 hover:bg-purple-700';
      default:
        return 'bg-blue-600 hover:bg-blue-700';
    }
  };

  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Awards, Research, Certifications & Publications
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Recognition for technical excellence, professional certifications, and research contributions in AI and software development
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-full ${getIconBg(award.type)}`}>
                    {getIcon(award.type)}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-900 mb-2 leading-tight">
                  {award.title}
                </h3>
                <p className={`text-center font-medium mb-1 ${
                  award.type === 'research' ? 'text-green-600' : 
                  award.type === 'certification' ? 'text-purple-600' : 'text-blue-600'
                }`}>
                  {award.organization} • {award.year}
                </p>
                {award.authors && (
                  <p className="text-center text-xs text-gray-500 mb-2 italic">
                    {award.authors}
                  </p>
                )}
                <p className="text-gray-600 text-center text-sm mb-4 flex-grow">{award.description}</p>
                
                <div className="space-y-2 mt-auto">
                  {/* View Certificate/Document Button */}
                  {award.certificate && (
                    <motion.button
                      onClick={() => handleViewClick(award)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium text-white transition-colors ${getButtonColor(award.type)}`}
                    >
                      <Eye size={16} className="mr-2" />
                      View {award.type === 'research' ? 'Paper' : award.type === 'certification' ? 'Certificate' : 'Award'}
                    </motion.button>
                  )}
                  
                  {/* External Link Button */}
                  {award.link && (
                    <motion.a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium text-white transition-colors ${
                        award.certificate ? 'bg-gray-600 hover:bg-gray-700' : getButtonColor(award.type)
                      }`}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      {award.type === 'research' ? 'Read Paper' : 'View Badge'}
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Modal View */}
        {selectedAward && (
          <ModalView
            isOpen={isModalOpen}
            onClose={closeModal}
            title={selectedAward.title}
            content={selectedAward.certificate}
            details={{
              organization: selectedAward.organization,
              year: selectedAward.year,
              authors: selectedAward.authors,
              description: selectedAward.description
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Awards;